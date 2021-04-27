<?php

namespace App\Http\Controllers;

use App\Enums\AccountDocumentType;
use App\Http\Requests\StoreAccountRequest;
use App\Http\Requests\UpdateAccountRequest;
use App\Http\Resources\AccountCollection;
use App\Http\Resources\AccountResource;
use App\Http\Resources\TransactionCollection;
use App\Models\Account;
use App\Models\AccountDocument;
use App\Models\Branch;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class AccountController extends Controller
{
    public function all()
    {
        return new AccountCollection(Account::all());
    }
    public function index()
    {
        $query = Account::query();
        $query->with('branch');
        $search = \request('query');

        if ($search)
            $query->where('account_number', 'like', "%$search%");
        return new AccountCollection($query->paginate(\request('perPage')));
    }
    public function store(StoreAccountRequest $request)
    {
        $account = null;
        DB::transaction(function () use($request, &$account){
            $branch = Branch::findByUUIDOrFail($request->branch_id);

            $account = Account::create([
                'account_number' => Account::generateAccountNumber(),
                'type' => $request->type,
                'branch_id' => $branch->id,
                'full_name' => $request->full_name,
                'full_address' => $request->full_address,
                'email' => $request->email,
                'cell' => $request->cell,
                'balance' => $request->balance,
            ]);
            if (isset($request->document['passport']))
            {
                AccountDocument::create([
                    'account_id' => $account->id,
                    'type' => AccountDocumentType::PASSPORT,
                    'filename' => store_base64($request->document['passport'], storage_path('app/public'))
                ]);
            }
            if (isset($request->document['utility_document']))
            {
                AccountDocument::create([
                    'account_id' => $account->id,
                    'type' => AccountDocumentType::UTILITY_DOCUMENT,
                    'filename' => store_base64($request->document['utility_document'], storage_path('app/public'))
                ]);
            }
            if (isset($request->document['driver_license']))
            {
                AccountDocument::create([
                    'account_id' => $account->id,
                    'type' => AccountDocumentType::DRIVER_LICENCE,
                    'filename' => store_base64($request->document['driver_license'], storage_path('app/public'))
                ]);
            }

        });

        return new AccountResource($account);
    }
    public function show($id)
    {
        return new AccountResource(Account::findByUUIDOrFail($id));
    }
    public function update(UpdateAccountRequest $request, $id)
    {
        $account = Account::findByUUIDOrFail($id);
        $branch = Branch::findByUUIDOrFail($request->branch_id);

        $account->update([
            'type' => $request->type,
            'branch_id' => $branch->id,
            'full_name' => $request->full_name,
            'full_address' => $request->full_address,
            'email' => $request->email,
            'cell' => $request->cell,
        ]);

        return new AccountResource($account);
    }

    public function transactions($id)
    {
        $transactions = Transaction::whereHas('account', function ($q) use($id){
            $q->where('uuid', $id);
        })
        ->paginate(\request('perPage'));
        return new TransactionCollection($transactions);
    }

}

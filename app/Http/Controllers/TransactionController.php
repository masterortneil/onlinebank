<?php

namespace App\Http\Controllers;

use App\Enums\TransactionType;
use App\Http\Requests\StoreTransactionRequest;
use App\Models\Account;
use App\Models\Transaction;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\DB;

class TransactionController extends Controller
{
    public function store(StoreTransactionRequest $request)
    {
       DB::transaction(function () use($request){

           $source = Account::findByUUIDOrFail($request->source_account_id);
           $destination = Account::findByUUIDOrFail($request->destination_account_id);

           $source->update([
               'balance' => $source->balance - $request->amount
           ]);

           Transaction::create([
               'account_id' => $source->id,
               'type' => TransactionType::DEBIT,
               'notes' => $request->source_reference,
               'amount' => $request->amount,
               'related_account_id' => $destination->id,
               'balance' => $source->balance
           ]);

           $destination->update([
               'balance' => $destination->balance + $request->amount
           ]);
           Transaction::create([
               'account_id' => $destination->id,
               'type' => TransactionType::CREDIT,
               'notes' => $request->destination_reference,
               'amount' => $request->amount,
               'related_account_id' => $source->id,
               'balance' => $destination->balance
           ]);

       });


    }
}

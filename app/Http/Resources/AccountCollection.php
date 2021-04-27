<?php

namespace App\Http\Resources;

use App\Enums\AccountType;
use Illuminate\Http\Resources\Json\ResourceCollection;

class AccountCollection extends ResourceCollection
{
    /**
     * Transform the resource collection into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'data' =>  $this->getData()
        ];
    }
    private function getData()
    {
        $data = [];
        foreach ($this->collection as $item) {
            $data[] = [
                'id' => $item->uuid,
                'account_number' => $item->account_number,
                'type' => AccountType::getKey($item->type),
                'status' => $item->is_active ? 'Open' : 'Close',
                'full_name' => $item->full_name,
                'balance' => $item->balance,
            ];
        }

        return $data;
    }
}

<?php

namespace App\Http\Resources;

use App\Enums\TransactionType;
use Illuminate\Http\Resources\Json\ResourceCollection;

class TransactionCollection extends ResourceCollection
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
                'type' => TransactionType::getKey($item->type),
                'notes' => $item->notes,
                'amount' => $item->amount,
                'balance' => $item->balance,
                'created_at' => $item->created_at->format('d/m/Y'),
            ];
        }

        return $data;
    }
}

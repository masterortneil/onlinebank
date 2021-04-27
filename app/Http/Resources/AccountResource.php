<?php

namespace App\Http\Resources;

use Illuminate\Http\Resources\Json\JsonResource;

class AccountResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return array
     */
    public function toArray($request)
    {
        return [
            'id' => $this->uuid,
            'account_number' => $this->account_number,
            'type' => $this->type,
            'branch_id' => $this->branch->uuid,
            'full_name' => $this->full_name,
            'full_address' => $this->full_address,
            'email' => $this->email,
            'cell' => $this->cell,
            'balance' => $this->balance,
        ];
    }
}

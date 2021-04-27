<?php

namespace App\Http\Requests;

use App\Rules\CheckAmount;
use Illuminate\Foundation\Http\FormRequest;

class StoreTransactionRequest extends FormRequest
{
    /**
     * Determine if the user is authorized to make this request.
     *
     * @return bool
     */
    public function authorize()
    {
        return true;
    }

    /**
     * Get the validation rules that apply to the request.
     *
     * @return array
     */
    public function rules()
    {
        return [
            'source_account_id' => 'required|not_in:'. $this->destination_account_id,
            'destination_account_id' => 'required|not_in:'. $this->source_account_id,
            'amount' => ['required', new CheckAmount($this->source_account_id)],

        ];
    }
}

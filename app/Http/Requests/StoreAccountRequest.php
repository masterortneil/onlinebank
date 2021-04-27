<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class StoreAccountRequest extends FormRequest
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

            'type' => 'required',
            'branch_id' => 'required',
            'full_name' => ['required',  Rule::unique('accounts')->where(function ($query) {
                return $query->where('full_address', $this->full_address);
            })],
            'full_address' => ['required',  Rule::unique('accounts')->where(function ($query) {
                return $query->where('full_name', $this->full_name);
            })],
            'email' => 'required|email|unique:accounts',
            'cell' => 'required',
            'balance' => 'required|numeric',
//            'document.passport' => 'required',
//            'document.utility_document' => 'required',
//            'document.driver_license' => 'required',
        ];
    }
}

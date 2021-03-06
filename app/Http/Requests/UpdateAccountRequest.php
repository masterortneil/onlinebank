<?php

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Validation\Rule;

class UpdateAccountRequest extends FormRequest
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
        logger($this->id);
        return [

            'type' => 'required',
            'branch_id' => 'required',
            'full_name' => ['required',  Rule::unique('accounts')->where(function ($query) {
                return $query->where('full_address', $this->full_address);
            })->ignore($this->id, 'uuid')],
            'full_address' => ['required',  Rule::unique('accounts')->where(function ($query) {
                return $query->where('full_name', $this->full_name);
            })->ignore($this->id, 'uuid')],
            'email' => 'required|email',
            'cell' => 'required',

        ];
    }
}

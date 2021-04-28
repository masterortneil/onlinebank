<?php

namespace App\Rules;

use App\Models\Account;
use Illuminate\Contracts\Validation\Rule;

class CheckAmount implements Rule
{
    /**
     * Create a new rule instance.
     *
     * @return void
     */
    private $accountId;
    public function __construct($accountId)
    {
        $this->accountId = $accountId;
    }

    /**
     * Determine if the validation rule passes.
     *
     * @param  string  $attribute
     * @param  mixed  $value
     * @return bool
     */
    public function passes($attribute, $value)
    {
        $account = Account::findByUUIDOrFail($this->accountId);
        return $account->balance >= $value;
    }

    /**
     * Get the validation error message.
     *
     * @return string
     */
    public function message()
    {
        return 'Source account has insufficient balance';
    }
}

<?php

namespace App\Enums;

use BenSampo\Enum\Enum;


final class TransactionType extends Enum
{
    const DEBIT = 1;
    const CREDIT = 2;
}

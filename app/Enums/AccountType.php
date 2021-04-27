<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class AccountType extends Enum
{
    const PERSONAL = 1;
    const COMPANY = 2;
    const OTHER = 3;
}

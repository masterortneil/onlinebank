<?php

namespace App\Enums;

use BenSampo\Enum\Enum;

final class AccountDocumentType extends Enum
{
    const PASSPORT =   1;
    const UTILITY_DOCUMENT = 2;
    const DRIVER_LICENCE = 3;
}

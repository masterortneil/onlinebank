<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Transaction extends Model
{
    use HasFactory, SoftDeletes;
    use UUID;

    protected $perPage = 10;
    protected $guarded = ['id', 'uuid'];

    public function account()
    {
        return $this->belongsTo(Account::class);
    }
}

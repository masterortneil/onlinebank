<?php

namespace App\Models;

use App\Traits\UUID;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Account extends Model
{
    use HasFactory, SoftDeletes;
    use UUID;

    protected $perPage = 10;
    protected $guarded = ['id', 'uuid'];


    public function branch()
    {
        return $this->belongsTo(Branch::class);
    }
    public function documents()
    {
        return $this->hasMany(AccountDocument::class);
    }
    public static function generateAccountNumber()
    {
        $number = str_replace('-', '', now()->toDateString());
        $maxId = self::max('id');
        $maxId++;
        return $number.$maxId;

    }
}

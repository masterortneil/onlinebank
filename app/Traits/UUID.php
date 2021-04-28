<?php
/**
 * Created by PhpStorm.
 * User: Raheel Sarfraz
 * Date: 1/23/2021
 * Time: 10:17 PM
 */

namespace App\Traits;


use Illuminate\Support\Str;

trait UUID
{
    public static function boot()
    {
        parent::boot();
        self::creating(function ($model) {
            $model->uuid = str_replace('-', '', (string) Str::uuid());
        });
    }
    public function scopeWhereUUID($query, $uuid)
    {
        return $query->where('uuid', $uuid);
    }
    public static function findByUUID($uuid, array $columns = ['*'])
    {
        return static::whereUUID($uuid)->first($columns);
    }
    public static function findByUUIDOrFail($uuid, array $columns = ['*'])
    {
        return static::whereUUID($uuid)->firstOrFail($columns);
    }
}
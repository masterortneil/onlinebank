<?php

namespace Database\Seeders;

use App\Models\Branch;
use Illuminate\Database\Seeder;

class BranchSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        for ($i = 1; $i <= 10 ; $i++)
        {
            Branch::create([
                'name' => "Branch $i",
                'code' => "0$i"
            ]);
        }

    }
}

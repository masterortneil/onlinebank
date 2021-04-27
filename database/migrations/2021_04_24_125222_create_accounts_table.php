<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('accounts', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');

            $table->foreignId('branch_id')->constrained()->onDelete('cascade');
            $table->string('account_number');
            $table->unsignedSmallInteger('type')->default(1);
            $table->string('full_name');
            $table->string('email');
            $table->string('cell');
            $table->string('full_address');
            $table->integer('sort_code')->nullable();
            $table->boolean('is_active')->default(true);
            $table->decimal('balance')->default(0);

            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('accounts');
    }
}

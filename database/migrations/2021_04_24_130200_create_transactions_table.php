<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateTransactionsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('transactions', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');

            $table->foreignId('account_id')->constrained()->onDelete('cascade');
            $table->foreignId('related_account_id')->nullable()->constrained('accounts')->onDelete('cascade');
            $table->unsignedSmallInteger('type');
            $table->decimal('amount');
            $table->decimal('balance');
            $table->mediumText('notes')->nullable();

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
        Schema::dropIfExists('transactions');
    }
}

<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateAccountDocumentsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('account_documents', function (Blueprint $table) {
            $table->id();
            $table->uuid('uuid');

            $table->foreignId('account_id')->constrained()->onDelete('cascade');
            $table->unsignedSmallInteger('type')->default(1);
            $table->string('filename');

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
        Schema::dropIfExists('account_documents');
    }
}

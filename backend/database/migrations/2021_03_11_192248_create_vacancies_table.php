<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateVacanciesTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('vacancy_locations', function (Blueprint $table) {
            $table->id();

            $table->unsignedInteger('priority');
            $table->string('name');
            $table->string('url_alias');

            $table->softDeletes();
        });

        Schema::create('vacancies', function (Blueprint $table) {
            $table->id();

            $table->unsignedInteger('priority');
            $table->string('title');
            $table->string('url_alias');
            $table->text('excerpt')->nullable();
            $table->text('introduction')->nullable();
            $table->text('body')->nullable();
            $table->string('type')->nullable();
            $table->string('level')->nullable();
            $table->text('technologies')->nullable();
            $table->text('duties')->nullable();
            $table->text('requirements')->nullable();
            $table->text('conditions')->nullable();
            $table->unsignedBigInteger('location_id');
            $table->unsignedBigInteger('image_id')->nullable();

            $table->string('page_title')->nullable();
            $table->text('page_description')->nullable();
            $table->unsignedBigInteger('open_graph_image_id')->nullable();

            $table->softDeletes();

            $table->foreign('location_id')->references('id')->on('vacancy_locations');
            $table->foreign('image_id')->references('id')->on('files');
            $table->foreign('open_graph_image_id')->references('id')->on('files');
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('vacancy_locations');
        Schema::dropIfExists('vacancies');
    }
}

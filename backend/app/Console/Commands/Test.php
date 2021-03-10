<?php

namespace App\Console\Commands;

use OZiTAG\Tager\Backend\Cron\Console\CronCommand;

class Test extends CronCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'tager:test {param=value}';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Test Tager Cron';

    /**
     * Execute the console command.
     *
     * @return mixed
     */
    public function handle()
    {
        $value = $this->argument('param');

        $this->log('Command Start');
        $this->log('Param = ' . $value);

        sleep(1);

        $this->log('Command End');
    }
}

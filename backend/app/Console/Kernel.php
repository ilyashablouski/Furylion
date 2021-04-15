<?php

namespace App\Console;

use Illuminate\Console\Scheduling\Schedule;
use OZiTAG\Tager\Backend\Core\Console\Kernel as ConsoleKernel;
use App\Console\Commands\GetInstagramPreviews;

class Kernel extends ConsoleKernel
{
    /**
     * The Artisan commands provided by your application.
     *
     * @var array
     */
    protected $commands = [
        GetInstagramPreviews::class
    ];

    /**
     * Define the application's command schedule.
     *
     * @param \Illuminate\Console\Scheduling\Schedule $schedule
     * @return void
     */
    protected function schedule(Schedule $schedule)
    {
        $schedule->command('cron:get-instagram-previews')->hourly();
    }
}

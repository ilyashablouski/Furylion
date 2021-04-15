<?php

namespace App\Console\Commands;

use App\Console\Operations\SetInstagramPreviewsOperation;
use App\Console\Utils\Downloader;
use Carbon\Carbon;
use OZiTAG\Tager\Backend\Cron\Console\CronCommand;

class GetInstagramPreviews extends CronCommand
{
    /**
     * The name and signature of the console command.
     *
     * @var string
     */
    protected $signature = 'cron:get-instagram-previews';

    /**
     * The console command description.
     *
     * @var string
     */
    protected $description = 'Get Instagram Previews';

    /**
     * Execute the console command.
     */
    public function handle()
    {
        $this->log('Started updating Instagram previews');

        $downloader = new Downloader();

        $tokenFile = json_decode(file_get_contents('storage/instagram-token.txt'));

        if (!isset($tokenFile->date) || !isset($tokenFile->token)) {
            $this->log('Token file is damaged');
            return 1;
        }

        $tokenDate = Carbon::parse($tokenFile->date);
        $now = Carbon::now();

        $diffDays = $tokenDate->diffInDays($now);

        if ($diffDays > 50) {
            $this->log('Token is deprecated! Updating...');

            $url = "https://graph.instagram.com/refresh_access_token?grant_type=ig_refresh_token&access_token=" . $tokenFile->token;
            $response = $downloader->request($url);
            $data = json_decode($response);

            file_put_contents('storage/instagram-token.txt', json_encode([
                'date' => $now->toDateString(),
                'token' => $data->access_token
            ]));

            $this->log('Token updated');
        }

        $this->log('Downloading instagram data');
        $url = "https://graph.instagram.com/me/media?fields=media_type,media_url,thumbnail_url,permalink&limit=6&access_token=" . $tokenFile->token;
        $response = $downloader->request($url);
        $data = json_decode($response);
        $this->log('Instagram data downloaded');

        $model = $this->runJob(SetInstagramPreviewsOperation::class, ['data' => $data->data]);

        if ($model) {
            $this->log('Instagram data successfully updated!');
            return 0;
        } else {
            $this->log('Error while updating the model');
            return 1;
        }
    }
}

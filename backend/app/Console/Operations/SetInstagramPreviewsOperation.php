<?php

namespace App\Console\Operations;

use App\Enums\SettingKey;
use Ozerich\FileStorage\Storage;
use OZiTAG\Tager\Backend\Core\Jobs\Operation;
use OZiTAG\Tager\Backend\Settings\Repositories\SettingsRepository;

class SetInstagramPreviewsOperation extends Operation
{
    protected $data;

    public function __construct($data)
    {
        $this->data = $data;
    }

    public function handle(SettingsRepository $settingsRepository)
    {
        $model = $settingsRepository->findOneByKey(SettingKey::Instagram);

        $settingsValue = json_decode($model->value);

        $result = [];
        foreach ($this->data as $item) {
            $imageUuid = null;
            $imageKey = 'thumbnail_url';
            if (!isset($item->$imageKey)) {
                $imageKey = 'media_url';
            }

            $allowDownloadImage = true;
            if ($settingsValue) {
                foreach ($settingsValue as $preview) {
                    if ($preview[2]->value === $item->permalink) {
                        $allowDownloadImage = false;
                        $imageUuid = $preview[1]->value;
                    }
                }
            }

            if ($allowDownloadImage) {
                $storage = new Storage();
                $image = $storage->createFromUrl($item->$imageKey);
                $imageUuid = $image->uuid;
            }

            $result[] = [
                [
                    'name' => 'type',
                    'value' => $item->media_type
                ],
                [
                    'name' => 'preview',
                    'value' => $imageUuid
                ],
                [
                    'name' => 'url',
                    'value' => $item->permalink
                ],
            ];
        }

        $model->value = $result;
        return $model->save();
    }
}

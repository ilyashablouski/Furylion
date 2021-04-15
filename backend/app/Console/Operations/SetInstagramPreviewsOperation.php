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
        $result = [];
        foreach ($this->data as $item) {
            $imageKey = 'thumbnail_url';
            if (!isset($item->$imageKey)) {
                $imageKey = 'media_url';
            }

            $storage = new Storage();
            $image = $storage->createFromUrl($item->$imageKey);

            $result[] = [
                [
                    'name' => 'type',
                    'value' => $item->media_type
                ],
                [
                    'name' => 'preview',
                    'value' => $image->uuid
                ],
                [
                    'name' => 'url',
                    'value' => $item->permalink
                ],
            ];
        }

        $model = $settingsRepository->findOneByKey(SettingKey::Instagram);
        $model->value = $result;
        return $model->save();
    }
}

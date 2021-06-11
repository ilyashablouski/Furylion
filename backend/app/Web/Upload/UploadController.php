<?php

namespace App\Web\Upload;

use App\Enums\FileScenario;
use OZiTAG\Tager\Backend\Core\Controllers\Controller;
use OZiTAG\Tager\Backend\Files\Features\UploadFileFeature;

class UploadController extends Controller
{
    public function feedback()
    {
        return $this->serve(UploadFileFeature::class, [
            'supportFile' => true,
            'supportUrl' => false,
            'scenario' => FileScenario::Feedback,
        ]);
    }

    public function cv()
    {
        return $this->serve(UploadFileFeature::class, [
            'supportFile' => true,
            'supportUrl' => false,
            'scenario' => FileScenario::Cv,
        ]);
    }
}

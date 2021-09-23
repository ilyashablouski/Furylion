<?php

namespace App\Web\Leads\Subscription;

use App\Enums\EmailTemplate;
use Ozerich\FileStorage\Repositories\FileRepository;
use OZiTAG\Tager\Backend\Core\Features\Feature;
use OZiTAG\Tager\Backend\Core\Resources\FailureResource;
use OZiTAG\Tager\Backend\Core\Resources\SuccessResource;
use OZiTAG\Tager\Backend\Mail\Exceptions\TagerMailInvalidMessageException;
use OZiTAG\Tager\Backend\Mail\TagerMail;
use OZiTAG\Tager\Backend\Mail\Utils\TagerMailAttachments;

class SubscriptionFeature extends Feature
{
    public function handle(SubscriptionRequest $request, FileRepository $fileRepository, TagerMail $tagerMail)
    {
        try {
            $tagerMail->sendMailUsingTemplate(EmailTemplate::Subscription, [
                'email' => $request->email
            ]);
            return new SuccessResource();
        } catch (TagerMailInvalidMessageException $exception) {
            return new FailureResource($exception);
        }
    }
}

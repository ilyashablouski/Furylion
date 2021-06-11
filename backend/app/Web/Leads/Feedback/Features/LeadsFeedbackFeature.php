<?php

namespace App\Web\Leads\Feedback\Features;

use App\Enums\EmailTemplate;
use App\Web\Leads\Feedback\Requests\LeadsFeedbackRequest;
use Ozerich\FileStorage\Repositories\FileRepository;
use OZiTAG\Tager\Backend\Core\Features\Feature;
use OZiTAG\Tager\Backend\Core\Resources\FailureResource;
use OZiTAG\Tager\Backend\Core\Resources\SuccessResource;
use OZiTAG\Tager\Backend\Mail\Exceptions\TagerMailInvalidMessageException;
use OZiTAG\Tager\Backend\Mail\TagerMail;
use OZiTAG\Tager\Backend\Mail\Utils\TagerMailAttachments;

class LeadsFeedbackFeature extends Feature
{
    public function handle(LeadsFeedbackRequest $request, FileRepository $fileRepository, TagerMail $tagerMail)
    {
        $attachments = new TagerMailAttachments();
        if ($request->file) {
            $file = $fileRepository->find($request->file);
            $attachments->addFile($file);
        }

        $template = EmailTemplate::Feedback;
        $templateData = [
            'name' => $request->name,
            'company' => $request->company,
            'email' => $request->email,
            'message' => $request->message,
        ];

        try {
            $tagerMail->sendMailUsingTemplate($template, $templateData, null, $attachments);
            return new SuccessResource();
        } catch (TagerMailInvalidMessageException $exception) {
            return new FailureResource($exception);
        }
    }
}

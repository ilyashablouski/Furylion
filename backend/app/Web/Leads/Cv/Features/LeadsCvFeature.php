<?php


namespace App\Web\Leads\Cv\Features;


use App\Enums\EmailTemplate;
use App\Web\Leads\Cv\Requests\LeadsCvRequest;
use Ozerich\FileStorage\Repositories\FileRepository;
use OZiTAG\Tager\Backend\Core\Resources\FailureResource;
use OZiTAG\Tager\Backend\Core\Resources\SuccessResource;
use OZiTAG\Tager\Backend\Mail\Exceptions\TagerMailInvalidMessageException;
use OZiTAG\Tager\Backend\Mail\TagerMail;
use OZiTAG\Tager\Backend\Mail\Utils\TagerMailAttachments;

class LeadsCvFeature
{
    public function handle(LeadsCvRequest $request, FileRepository $fileRepository, TagerMail $tagerMail)
    {
        $attachments = new TagerMailAttachments();
        if ($request->file) {
            $file = $fileRepository->find($request->file);
            $attachments->addFile($file);
        }

        $template = EmailTemplate::Cv;
        $templateData = [
            'name' => $request->name,
            'phone' => $request->phone,
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

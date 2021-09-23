<?php


namespace App\Web\Leads\Course;

use App\Enums\EmailTemplate;
use Ozerich\FileStorage\Repositories\FileRepository;
use OZiTAG\Tager\Backend\Core\Resources\FailureResource;
use OZiTAG\Tager\Backend\Core\Resources\SuccessResource;
use OZiTAG\Tager\Backend\Mail\Exceptions\TagerMailInvalidMessageException;
use OZiTAG\Tager\Backend\Mail\TagerMail;
use OZiTAG\Tager\Backend\Mail\Utils\TagerMailAttachments;
use OZiTAG\Tager\Backend\Pages\Models\TagerPage;
use OZiTAG\Tager\Backend\Pages\Repositories\PagesRepository;

class CourseFeature
{
    public function handle(CourseRequest $request, FileRepository $fileRepository, PagesRepository $pagesRepository, TagerMail $tagerMail)
    {
        $attachments = new TagerMailAttachments();
        if ($request->file) {
            $file = $fileRepository->find($request->file);
            $attachments->addFile($file);
        }

        $templateData = [
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'message' => $request->message,
        ];


        /** @var TagerPage $page */
        $page = $pagesRepository->find($request->courseId);
        if ($page) {
            $templateData = array_merge($templateData, [
                'course' => $page->title,
            ]);
        }

        try {
            $tagerMail->sendMailUsingTemplate(EmailTemplate::Course, $templateData, null, $attachments);
            return new SuccessResource();
        } catch (TagerMailInvalidMessageException $exception) {
            return new FailureResource($exception);
        }
    }
}

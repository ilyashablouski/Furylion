<?php


namespace App\Web\Leads\Cv\Features;


use App\Enums\EmailTemplate;
use App\Models\Vacancy;
use App\Repositories\VacancyRepository;
use App\Web\Leads\Cv\Requests\CourseRequest;
use Illuminate\Http\Resources\Json\JsonResource;
use Ozerich\FileStorage\Repositories\FileRepository;
use OZiTAG\Tager\Backend\Core\Resources\FailureResource;
use OZiTAG\Tager\Backend\Core\Resources\SuccessResource;
use OZiTAG\Tager\Backend\Mail\Exceptions\TagerMailInvalidMessageException;
use OZiTAG\Tager\Backend\Mail\TagerMail;
use OZiTAG\Tager\Backend\Mail\Utils\TagerMailAttachments;

class LeadsCvFeature
{
    public function handle(CourseRequest $request, FileRepository $fileRepository, VacancyRepository $vacancyRepository, TagerMail $tagerMail): JsonResource
    {
        $attachments = new TagerMailAttachments();
        if ($request->file) {
            $file = $fileRepository->find($request->file);
            $attachments->addFile($file);
        }

        $template = EmailTemplate::CvWithoutVacancy;
        $templateData = [
            'name' => $request->name,
            'phone' => $request->phone,
            'email' => $request->email,
            'message' => $request->message,
        ];

        if ($request->vacancyId) {
            /** @var Vacancy $vacancy */
            $vacancy = $vacancyRepository->find($request->vacancyId);

            if ($vacancy) {
                $template = EmailTemplate::Cv;
                $templateData = array_merge($templateData, [
                    'vacancyName' => $vacancy->title,
                    'vacancyUrl' => $vacancy->full_url,
                ]);
            }
        }

        try {
            $tagerMail->sendMailUsingTemplate($template, $templateData, null, $attachments);
            return new SuccessResource();
        } catch (TagerMailInvalidMessageException $exception) {
            return new FailureResource($exception);
        }
    }
}

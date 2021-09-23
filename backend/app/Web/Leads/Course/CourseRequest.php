<?php

namespace App\Web\Leads\Course;

use Ozerich\FileStorage\Models\File;
use Ozerich\FileStorage\Rules\FileRule;
use OZiTAG\Tager\Backend\Core\Http\FormRequest;

/**
 * Class LeadsCvRequest
 * @package App\Web\Leads\Cv\Requests
 *
 * @property string $name
 * @property string $phone
 * @property string $email
 * @property string $message
 * @property File $file
 * @property int $courseId
 */
class CourseRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|string|email',
            'message' => 'required|string',
            'file' => ['nullable', new FileRule()],
            'courseId' => 'nullable|integer',
        ];
    }
}

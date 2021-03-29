<?php

namespace App\Web\Leads\Feedback\Requests;

use Ozerich\FileStorage\Models\File;
use Ozerich\FileStorage\Rules\FileRule;
use OZiTAG\Tager\Backend\Core\Http\FormRequest;

/**
 * Class LeadsFeedbackRequest
 * @package App\Web\Leads\Feedback\Requests
 *
 * @property string $name
 * @property string $company
 * @property string $email
 * @property string $message
 * @property File $file
 */
class LeadsFeedbackRequest extends FormRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string',
            'company' => 'required|string',
            'email' => 'required|string|email',
            'message' => 'required|string',
            'file' => ['nullable', new FileRule()],
        ];
    }
}

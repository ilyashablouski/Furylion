<?php

namespace App\Web\Leads\Cv\Requests;

use Ozerich\FileStorage\Models\File;
use Ozerich\FileStorage\Rules\FileRule;

/**
 * Class LeadsCvRequest
 * @package App\Web\Leads\Cv\Requests
 *
 * @property string $name
 * @property string $phone
 * @property string $email
 * @property string $message
 * @property File $file
 */
class LeadsCvRequest
{
    public function rules()
    {
        return [
            'name' => 'required|string',
            'phone' => 'required|string',
            'email' => 'required|string|email',
            'message' => 'required|string',
            'file' => ['nullable', new FileRule()],
        ];
    }
}

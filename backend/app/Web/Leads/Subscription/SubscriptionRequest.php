<?php

namespace App\Web\Leads\Subscription;

use OZiTAG\Tager\Backend\Core\Http\FormRequest;

/**
 * Class SubscriptionRequest
 * @package App\Web\Leads\Subscription\Requests
 *
 * @property string $email
 */
class SubscriptionRequest extends FormRequest
{
    public function rules()
    {
        return [
            'email' => 'required|string|email',
        ];
    }
}

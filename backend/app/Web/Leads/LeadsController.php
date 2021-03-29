<?php

namespace App\Web\Leads;

use App\Web\Leads\Feedback\Features\LeadsFeedbackFeature;
use OZiTAG\Tager\Backend\Core\Controllers\Controller;

class LeadsController extends Controller
{
    public function feedback()
    {
        return $this->serve(LeadsFeedbackFeature::class);
    }
}

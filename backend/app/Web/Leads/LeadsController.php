<?php

namespace App\Web\Leads;

use App\Web\Leads\Course\CourseFeature;
use App\Web\Leads\Cv\Features\LeadsCvFeature;
use App\Web\Leads\Feedback\Features\LeadsFeedbackFeature;
use App\Web\Leads\Subscription\SubscriptionFeature;
use OZiTAG\Tager\Backend\Core\Controllers\Controller;

class LeadsController extends Controller
{
    public function feedback()
    {
        return $this->serve(LeadsFeedbackFeature::class);
    }

    public function cv()
    {
        return $this->serve(LeadsCvFeature::class);
    }

    public function subscription()
    {
        return $this->serve(SubscriptionFeature::class);
    }

    public function course()
    {
        return $this->serve(CourseFeature::class);
    }
}

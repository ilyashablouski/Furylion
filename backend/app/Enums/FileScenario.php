<?php

namespace App\Enums;

use OZiTAG\Tager\Backend\Core\Enums\Enum;

final class FileScenario extends Enum
{
    const OpenGraph = 'open-graph';
    const Content = 'content';

    const Feedback = 'Feedback';
    const Cv = 'Cv';

    const VacancyImage = 'vacancy-image';
    const HeadImage = 'head-image';
    const Instagram = 'instagram';

    const HomeHeroImage = 'home-hero-image';
    const HomeHeroImageMobile = 'home-hero-image-mobile';
    const HomeWorksItems = 'home-work-items';
    const HomeServicesItems = 'home-service-items';
    const HomeTechnologiesGallery = 'home-technologies-gallery';
    const HomeTechnologiesImage = 'home-technologies-image';
    const HomeTechnologiesImageMobile = 'home-technologies-image-mobile';
    const HomeTeamImage = 'home-team-image';

    const ServicesArtImages = 'services-art-images';
    const ServicesProductionMedia = 'services-production-media';
    const ServicesPorting = 'services-porting';
    const ServicesDevelopment = 'services-development';
    const ServicesDevelopmentLogos = 'services-development-logos';
    const ServicesCoDevelopmentLogos = 'services-co-development-logos';
    const ServicesAds = 'services-ads';
    const PlayableAdsHead = 'playable-ads-head';
    const PlayableGame = 'playable-game';
    const ServicesFullStackDevelopment = 'services-fullstack-development';
    const PlayableDoYoWantCard = 'playable-card';
    const FeedbackPhoto = 'feedback-photo';
}

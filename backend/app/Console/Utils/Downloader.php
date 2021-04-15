<?php

namespace App\Console\Utils;

class Downloader
{
    /** @var Downloader|null $instance */
    private static ?Downloader $instance;

    /**
     * @return Downloader
     */
    public static function getInstance(): Downloader
    {
        if (self::$instance === null) {
            self::$instance = new self();
        }
        return self::$instance;
    }

    /**
     * @param string $url
     * @return string|null
     */
    public function request(string $url): ?string
    {
        return $this->getRequest($url);
    }

    /**
     * @param string $url
     * @return string|null
     */
    private function getRequest(string $url): ?string
    {
        $ch = curl_init($url);
        $useragent = 'Mozilla/5.0 (Windows NT 6.1; WOW64; rv:10.0.2) Gecko/20100101 Firefox/10.0.2';
        curl_setopt($ch, CURLOPT_USERAGENT, $useragent);
        curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);
        curl_setopt($ch, CURLOPT_FOLLOWLOCATION, true);
        curl_setopt($ch, CURLOPT_AUTOREFERER, true);
        curl_setopt($ch, CURLOPT_SSL_VERIFYHOST, false);
        curl_setopt($ch, CURLOPT_SSL_VERIFYPEER, false);
        $data = curl_exec($ch);
        curl_close($ch);
        return !$data ? null : $data;
    }
}

#!/usr/bin/env bash

cd /var/www/app/

chmod 777 -R storage

COMPOSER_MEMORY_LIMIT=-1 composer i --ignore-platform-reqs

rm -rf bootstrap/cache/*
php artisan optimize:clear

php artisan migrate --force
php artisan tager:mail-flush
php artisan tager:settings-flush
php artisan tager:menus-flush
php artisan tager:http-cache-clear

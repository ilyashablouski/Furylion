#!/bin/bash
set -e

cd /srv/furylion.dev.ozitag.com

git fetch --all
git reset --hard origin/develop
git clean -f -d

sudo cp .env.development .env
sudo cp web/env/.env.development web/.env
sudo cp admin/env/.env.development admin/.env
sudo cp backend/.env.development backend/.env

sudo cp scripts/nginx-develop.conf /etc/nginx/sites-available/furylion.dev.ozitag.com

COMPOSE_HTTP_TIMEOUT=200 sudo docker-compose -f docker-compose.dev.yml --project-name furylion build --pull

touch .maintenance
COMPOSE_HTTP_TIMEOUT=200 sudo docker-compose -f docker-compose.dev.yml --project-name furylion up -d --force-recreate
rm .maintenance

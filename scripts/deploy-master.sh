#!/bin/bash
set -e

cd /srv/furylion.net

#chown ozitag:ozitag -R .

git fetch --all
git reset --hard origin/master
git clean -f -d

sudo cp .env.production .env
sudo cp web/env/.env.production web/.env
sudo cp admin/env/.env.production admin/.env
sudo cp backend/.env.production backend/.env

COMPOSE_HTTP_TIMEOUT=200 sudo docker-compose -f docker-compose.yml --project-name furylion build --pull

touch .maintenance
COMPOSE_HTTP_TIMEOUT=200 sudo docker-compose -f docker-compose.yml --project-name furylion up -d --force-recreate
rm -f .maintenance

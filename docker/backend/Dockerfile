# Reference: https://dockerfile.readthedocs.io/en/latest/content/DockerImages/dockerfiles/php-nginx.html
FROM webdevops/php-nginx:8.0-alpine as dev

WORKDIR /var/www/app

COPY /docker/backend/bootstrap.sh /opt/docker/provision/entrypoint.d/bootstrap.sh
COPY /docker/backend/supervisor/queue.conf /opt/docker/etc/supervisor.d/queue.conf
COPY /docker/backend/nginx/10-location-root.conf /opt/docker/etc/nginx/vhost.common.d/10-location-root.conf
COPY /docker/backend/cron/crontab /opt/docker/etc/cron/crontab

FROM webdevops/php-nginx:8.0-alpine as production

RUN docker-service-enable cron
RUN /usr/bin/crontab /opt/docker/etc/cron/crontab

WORKDIR /var/www/app

COPY /backend/composer.json composer.json
COPY /backend/composer.lock composer.lock

RUN composer i  --ignore-platform-reqs

COPY /backend .

COPY /docker/backend/bootstrap.production.sh /opt/docker/provision/entrypoint.d/bootstrap.sh
COPY /docker/backend/supervisor/queue.conf /opt/docker/etc/supervisor.d/queue.conf
COPY /docker/backend/nginx/10-location-root.conf /opt/docker/etc/nginx/vhost.common.d/10-location-root.conf
COPY /docker/backend/cron/crontab /opt/docker/etc/cron/crontab

RUN docker-service-enable cron
RUN /usr/bin/crontab /opt/docker/etc/cron/crontab
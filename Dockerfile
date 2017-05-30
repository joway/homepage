FROM nginx

COPY ./.deploy/nginx.conf /etc/nginx/conf.d/default.conf
COPY . /usr/share/nginx/html

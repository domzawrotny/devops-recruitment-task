FROM nginx
COPY ./nginx/nginx.conf /etc/nginx/conf.d/default.conf

CMD sed "s|BACKEND_SERVER|${NEST_APP_URL}|g" /etc/nginx/conf.d/default.conf
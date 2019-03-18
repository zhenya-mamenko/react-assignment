FROM alpine
RUN apk add darkhttpd
COPY ./build/ /var/www/localhost/htdocs
EXPOSE 80
CMD ["darkhttpd", "/var/www/localhost/htdocs"]

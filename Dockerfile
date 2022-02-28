FROM steebchen/nginx-spa:stable

COPY dist/spa-back-test /app

EXPOSE 80

CMD ["nginx"]

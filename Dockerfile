FROM ubuntu:18.04
ENV TZ='Asia/Tokyo'
RUN apt-get update && \
    apt-get upgrade -y && \
    apt-get install -y curl
RUN curl -sL https://deb.nodesource.com/setup_10.x | bash - && apt-get install -y nodejs

WORKDIR /home/app

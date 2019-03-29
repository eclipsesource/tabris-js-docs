FROM ruby:2.5-alpine

RUN apk update; apk add make gcc g++ musl-dev

# throw errors if Gemfile has been modified since Gemfile.lock
#RUN bundle config --global frozen 1

WORKDIR /usr/src/app
COPY . .

WORKDIR /usr/src/app/docs
RUN bundle update

CMD ["/usr/local/bin/bundle", "exec", "jekyll", "serve", "--incremental", "--host", "0.0.0.0"]
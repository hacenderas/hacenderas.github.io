FROM jekyll/jekyll:3.8

COPY Gemfile .
COPY jekyll-theme-clean-blog.gemspec .
#COPY jekyll-theme-clean-blog.gemspec .

#RUN bundle install --quiet --clean
RUN gem cleanup && gem install bundler -v 2.0.2
RUN bundle install
CMD ["jekyll","serve","--drafts"]

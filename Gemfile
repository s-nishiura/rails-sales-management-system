# frozen_string_literal: true

source "https://rubygems.org"

gem "rails", "~> 8.0.2"
gem "propshaft"
gem "sqlite3", ">= 2.1"
gem "puma", ">= 5.0"
gem "jsbundling-rails"
gem "turbo-rails"
gem "stimulus-rails"
gem "cssbundling-rails"
gem "jbuilder"
gem "tzinfo-data", platforms: [:windows, :jruby]
gem "solid_cache"
gem "solid_queue"
gem "solid_cable"
gem "bootsnap", require: false
gem "kamal", require: false
gem "thruster", require: false
gem "rails-i18n", "~> 8.0.0"
gem "rack-contrib"

group :development, :test do
  gem "debug", platforms: [:mri, :windows], require: "debug/prelude"
  gem "brakeman", require: false
  gem "rubocop-shopify", require: false
  gem "rubocop-capybara", require: false
  gem "rubocop-erb", require: false
  gem "rubocop-factory_bot", require: false
  gem "rubocop-performance", require: false
  gem "rubocop-rails", require: false
  gem "rubocop-rspec", require: false
  gem "rubocop-rspec_rails", require: false
  gem "erb_lint", require: false
  gem "rspec-rails", "~> 8.0.0"
  gem "factory_bot_rails"
  gem "faker"
  gem "bullet"
  gem "i18n-tasks", "~> 1.0.15"
end

group :development do
  gem "web-console"
  gem "lefthook", require: false
  gem "htmlbeautifier", require: false
  gem "bundler-audit", require: false
  gem "better_errors"
  gem "binding_of_caller"
end

group :test do
  gem "capybara"
  gem "selenium-webdriver"
  gem "simplecov", require: false
end

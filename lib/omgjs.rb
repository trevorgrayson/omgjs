Dir["tasks/**/*.rake"].each { |ext| load ext } if defined?(Rake)

require 'omgjs/engine'
require 'omgjs/acts_as_javascript'
require 'omgjs/builder'

ActionDispatch::Callbacks.to_prepare do
  Omgjs::Builder.build('app/models')
end if Rails && Rails.env.development?

module Omgjs
end

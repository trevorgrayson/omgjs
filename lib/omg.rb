Dir["tasks/**/*.rake"].each { |ext| load ext } if defined?(Rake)

require 'omg/engine'
require 'omg/acts_as_javascript'
require 'omg/builder'

ActionDispatch::Callbacks.to_prepare do
  Rails.logger.warn "OMG, updating!"
  Omg::Builder.build('app/models')
end if Rails && Rails.env.development?

module Omg
end

Dir["tasks/**/*.rake"].each { |ext| load ext } if defined?(Rake)

if Rails.env.development?
  ActiveSupport::Dependencies.autoload_paths << %W(#{Rails.root}/lib/auto_reload) 
end

require 'omg/engine'
require 'omg/acts_as_javascript'
require 'omg/builder'

module Omg
end

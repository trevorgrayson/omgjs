Dir["tasks/**/*.rake"].each { |ext| load ext } if defined?(Rake)

config.autoload_paths += %W(#{config.root}/lib/auto_reload) 

require 'omg/engine'
require 'omg/acts_as_javascript'
require 'omg/builder'

module Omg
end

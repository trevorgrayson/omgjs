$:.push File.expand_path("../lib", __FILE__)

# Maintain your gem's version:
require "omg/version"

# Describe your gem and declare its dependencies:
Gem::Specification.new do |s|
  s.name        = "omg"
  s.version     = Omg::VERSION
  s.authors     = ["trevor grayson"]
  s.email       = ["trevor@trevorgrayson.com"]
  s.homepage    = "http://trevorgrayson.com"
  s.summary     = "Rails models in your Javascript"
  s.description = "A rails plugin which will automatically build your ActiveResource Models into Javascript models"

  s.files = Dir["{app,config,db,lib}/**/*"] + ["MIT-LICENSE", "Rakefile", "README.rdoc"]
  s.test_files = Dir["test/**/*"]

  s.add_dependency "rails", "~> 3.2.12"
  s.add_dependency "opal"

  s.add_development_dependency "sqlite3"
end

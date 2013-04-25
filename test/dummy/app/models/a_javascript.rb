class AJavascript < ActiveRecord::Base
  acts_as_javascript

  attr_accessible :title
end

require 'test_helper'

class ActsAsJavascript < Test::Unit::TestCase
  def test_models_should_act_as_javascript
    assert AJavascript.acts_as_javascript?
  end

  def test_some_models_shouldnt_act_as_javascript
    assert !AModel.acts_as_javascript?
  end
end

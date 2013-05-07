require 'test_helper'

class OmgjsTest < ActiveSupport::TestCase
  test "Omgjs::Builder builds" do
    Omgjs::Builder.build("models")
  end
end

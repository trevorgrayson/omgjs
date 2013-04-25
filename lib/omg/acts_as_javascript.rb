module Omg
  module ActsAsJavascript
    extend ActiveSupport::Concern

    included do
    end

    module ClassMethods
      def acts_as_javascript(options = {})
        class << self
          def acts_as_javascript?
            true
          end
        end
      end

      def acts_as_javascript?
        false
      end
    end

  end
end

ActiveRecord::Base.send :include, Omg::ActsAsJavascript

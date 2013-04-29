require 'rubygems'
require 'opal'

module Omg
  class Builder
    #OPAL_RESOUCES = [ "#{File.dirname(__FILE__)}/../../vendor/javascript/active_model.js" ]

    class << self
      def build(dir)
        js_file = File.open("#{Rails.root}/app/assets/javascripts/omg.js",'w')

        #build OMG resources
        #OPAL_RESOUCES.each do |file|
        #  js_file.write( File.read(file) )
        #end

        #read and build models
        model_files = Dir.glob("#{dir}/*")
        model_files.each do |file|
          js_file.write( file_to_js(file) )
        end

        js_file.close
      end 

      def file_to_js(file)
        puts "parsing #{file}"
        src = File.read(file)
        js = Opal.parse src
      end
    end
  end
end

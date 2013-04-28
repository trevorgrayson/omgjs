 desc "Build javascript models"
 task :omg do
   OMGBuilder.build("#{RAILS_ROOT}/app/models")
 end

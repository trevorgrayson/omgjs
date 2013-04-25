module OmgAssets
  class Engine < ::Rails::Engine
    initializer "omg.load_static_assets" do |app|
      app.middleware.use ::ActionDispatch::Static, "#{root}/vendor"
    end
  end
end

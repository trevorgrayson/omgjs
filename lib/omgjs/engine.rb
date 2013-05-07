module OmgjsAssets
  class Engine < ::Rails::Engine
    initializer "omgjs.load_static_assets" do |app|
      app.middleware.use ::ActionDispatch::Static, "#{root}/vendor"
    end
  end
end

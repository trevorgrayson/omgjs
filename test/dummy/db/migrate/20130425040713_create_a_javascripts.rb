class CreateAJavascripts < ActiveRecord::Migration
  def change
    create_table :a_javascripts do |t|
      t.string :title

      t.timestamps
    end
  end
end

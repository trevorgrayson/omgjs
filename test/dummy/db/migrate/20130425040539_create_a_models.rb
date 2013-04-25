class CreateAModels < ActiveRecord::Migration
  def change
    create_table :a_models do |t|
      t.string :title

      t.timestamps
    end
  end
end

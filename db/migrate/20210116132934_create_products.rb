class CreateProducts < ActiveRecord::Migration[5.2]
  def change
    create_table :products do |t|
      t.string :title
      t.string :description
      t.string :country
      t.string :city
      t.string :type_art
      t.string :category
      t.string :style
      t.string :condition
      t.string :image_url
      t.integer :price
      t.integer :profit_sharing
      t.integer :year
      t.integer :height
      t.integer :length
      t.integer :width
      t.boolean :signature

      t.belongs_to :user, index: true, foreign_key: true

      t.timestamps
    end
  end
end

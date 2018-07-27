class CreateReviews < ActiveRecord::Migration[5.2]
  def change
    create_table :reviews do |t|
      t.belongs_to :user
      t.belongs_to :venue
      t.text :body, null: false
      t.integer :rating, null: false

      t.timestamps null: false
    end
  end
end

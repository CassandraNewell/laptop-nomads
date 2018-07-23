class CreateVenues < ActiveRecord::Migration[5.2]
  def change
    create_table :venues do |t|
      t.string :name, null: false
      t.string :address, null: false
      t.string :description
      t.string :open_time
      t.string :close_time
      t.string :venue_url
      t.string :photo_url, null: false
      
      t.timestamps null: false
    end
  end
end

class CreateReviewVotes < ActiveRecord::Migration[5.2]
  def change
    create_table :review_votes do |t|
      t.belongs_to :user, null: false
      t.belongs_to :review, null: false
      t.integer :vote, null: false

      t.timestamps null: false
    end
  end
end

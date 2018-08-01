class Review < ApplicationRecord
  belongs_to :user
  belongs_to :venue
  has_many :review_votes

  validates :body, presence: true
  validates :rating, numericality: { less_than_or_equal_to: 5, greater_than_or_equal_to: 1, only_integer: true }

  # def total_upvotes
  #
  # end
  # def total_downvotes
  #
  # end
end

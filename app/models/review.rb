class Review < ApplicationRecord
  belongs_to :user
  belongs_to :venue

  validates :body, presence: true
  validates :rating, numericality: { less_than_or_equal_to: 5, greater_than_or_equal_to: 1, only_integer: true }
end

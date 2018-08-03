class ReviewVote < ApplicationRecord
  belongs_to :user
  belongs_to :review

  enum vote: {upvote: 1, downvote: -1, neutral: 0}
  validates :vote, :user, :review, presence: true
end

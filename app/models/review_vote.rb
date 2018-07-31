class ReviewVote < ApplicationRecord
  belongs_to :user
  belongs_to :review

  enum vote: {upvote: 1, downvote: -1, neutral: 0}
  validates :vote, :user_id, :review_id, presence: true
end

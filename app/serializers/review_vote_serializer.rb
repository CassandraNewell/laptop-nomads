class ReviewVoteSerializer < ActiveModel::Serializer
  attributes :vote, :user_id, :id
  belongs_to :user
  belongs_to :review
end

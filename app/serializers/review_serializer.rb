class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :rating, :fullname, :upvotes_count, :downvotes_count, :user_vote
  has_many :review_votes

  def fullname
    "#{object.user.first_name} #{object.user.last_name}"
  end

  def upvotes_count
    count = 0
    object.review_votes.each do |review_vote|
      count += 1 if review_vote.upvote?
    end
    count
  end

  def downvotes_count
    count = 0
    object.review_votes.each do |review_vote|
      count += 1 if review_vote.downvote?
    end
    count
  end

  def user_vote
    if object.review_votes.length > 0 && scope
      object.review_votes.find_by(user: scope).vote
    end
  end
end

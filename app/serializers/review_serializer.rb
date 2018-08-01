class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :rating, :fullname
  has_many :review_votes

  def fullname
    "#{object.user.first_name} #{object.user.last_name}"
  end
end

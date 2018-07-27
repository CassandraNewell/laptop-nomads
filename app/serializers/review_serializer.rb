class ReviewSerializer < ActiveModel::Serializer
  attributes :id, :body, :rating, :fullname
  belongs_to :venue

  def fullname
    "#{object.user.first_name} #{object.user.last_name}"
  end
end

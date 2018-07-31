FactoryBot.define do
  factory :review_vote do
    vote Random.new.rand(-1..1)
    user
    review
  end
end

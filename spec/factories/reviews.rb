FactoryBot.define do
  factory :review do
    body Faker::DumbAndDumber.quote
    rating Random.new.rand(1..5)
    user
    venue
  end
end

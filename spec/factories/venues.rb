FactoryBot.define do
  factory :venue do
    name Faker::Company.name
    address Faker::Address.full_address
    photo_url "https://www.awesomeinventions.com/wp-content/uploads/2013/12/unicorn-horn-for-cats.jpg"
  end
end

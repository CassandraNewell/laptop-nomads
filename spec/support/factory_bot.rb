require 'factory_bot'

FactoryBot.define do
  factory :user do
    sequence(:email) {|n| "user#{n}@example.com" }
    password 'password'
    password_confirmation 'password'
  end

  factory :venue do
    name Faker::Company.name
    address Faker::Address.full_address
    photo_url "https://www.awesomeinventions.com/wp-content/uploads/2013/12/unicorn-horn-for-cats.jpg"
  end
end

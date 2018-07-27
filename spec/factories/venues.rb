FactoryBot.define do
  factory :venue do
    name Faker::Company.name
    address Faker::Address.full_address
    description Faker::BojackHorseman.tongue_twister
    open_time "9am"
    close_time "9pm"
    venue_url "https://www.google.com"
    photo_url "https://www.awesomeinventions.com/wp-content/uploads/2013/12/unicorn-horn-for-cats.jpg"
  end
end

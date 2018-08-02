FactoryBot.define do
  factory :venue do
    name Faker::Company.name
    address Faker::Address.full_address
    description Faker::BojackHorseman.tongue_twister
    open_time "9am"
    close_time "9pm"
    venue_url "https://www.google.com"
    photo_url { Rack::Test::UploadedFile.new(Rails.root.join('spec/support/images/unicorn-cake.jpg'), 'image/jpeg') }
  end
end

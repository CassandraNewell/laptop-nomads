require 'faker'

Venue.create(
  name: "Forge",
  address: "Somerville Ave",
  description: "A place with ice cream",
  open_time: "7 AM",
  close_time: "8 PM",
  venue_url: "http://www.forgebakingco.com",
  photo_url: Rack::Test::UploadedFile.new(Rails.root.join('spec/support/images/unicorn-cake.jpg'), 'image/jpeg')
)

Venue.create(
  name: "Three Little Figs",
  address: "Highland Ave",
  photo_url: Rack::Test::UploadedFile.new(Rails.root.join('spec/support/images/unicorn-cake.jpg'), 'image/jpeg')
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: "cassandraleenewell@gmail.com",
  password: "jjjjjj"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: "erin@gmail.com",
  password: "jjjjjj"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: "sophie@gmail.com",
  password: "jjjjjj"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: "dave@gmail.com",
  password: "jjjjjj"
)

Review.create!(
  body: Faker::TwinPeaks.quote,
  rating: 3,
  venue: Venue.first,
  user: User.first
)

Review.create!(
  body: Faker::TwinPeaks.quote,
  rating: 3,
  venue: Venue.first,
  user: User.second
)

Review.create!(
  body: Faker::TwinPeaks.quote,
  rating: 3,
  venue: Venue.second,
  user: User.first
)

Review.create!(
  body: Faker::TwinPeaks.quote,
  rating: 3,
  venue: Venue.second,
  user: User.second
)

Review.create!(
  body: Faker::TwinPeaks.quote,
  rating: 3,
  venue: Venue.second,
  user: User.second
)

require 'faker'

# Create venues
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

Venue.create(
  name: "Blue Shirt Cafe",
  address: "Davis Square",
  photo_url: "https://i.pinimg.com/564x/64/0f/6c/640f6cb231e3f2ee0a4ff70f87eb5e72.jpg"
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

# Create reviews

Review.create!(
  body: Faker::TwinPeaks.quote,
  rating: Random.new.rand(1..5),
  venue: Venue.first,
  user: User.first
)

Review.create!(
  body: Faker::TwinPeaks.quote,
  rating: Random.new.rand(1..5),
  venue: Venue.first,
  user: User.second
)

Review.create!(
  body: Faker::TwinPeaks.quote,
  rating: Random.new.rand(1..5),
  venue: Venue.first,
  user: User.third
)

Review.create!(
  body: Faker::TwinPeaks.quote,
  rating: Random.new.rand(1..5),
  venue: Venue.second,
  user: User.first
)

Review.create!(
  body: Faker::TwinPeaks.quote,
  rating: Random.new.rand(1..5),
  venue: Venue.second,
  user: User.second
)

Review.create!(
  body: Faker::TwinPeaks.quote,
  rating: Random.new.rand(1..5),
  venue: Venue.second,
  user: User.second
)

# Create review votes

## Same user has each possible vote on three reviews for same venue
ReviewVote.create!(
  vote: -1,
  review: Review.first,
  user: User.first
)

ReviewVote.create!(
  vote: 0,
  review: Review.second,
  user: User.first
)

ReviewVote.create!(
  vote: 1,
  review: Review.third,
  user: User.first
)

## Different users vote on various reviews
# ReviewVote.create!(
#   vote: Random.new.rand(-1..1),
#   review: Review.first,
#   user: User.second
# )
#
# ReviewVote.create!(
#   vote: Random.new.rand(-1..1),
#   review: Review.second,
#   user: User.first
# )
#
# ReviewVote.create!(
#   vote: Random.new.rand(-1..1),
#   review: Review.second,
#   user: User.second
# )

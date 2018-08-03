require 'faker'

# Create venues
Venue.create(
  name: "Forge Baking Co",
  address: "Somerville Ave",
  description: "Forge Baking Co, sister cafe of Diesel and Bloc, sells various café drinks as well as pastries and sandwiches. They have free wifi, but the wifi can get slow during peak hours (10 AM - 4 PM). Single-person and group tables available; some outdoor, table-less seating available (except in winter). Has small ice cream shoppe adjacent.",
  open_time: "7 AM, daily",
  close_time: "8 PM, daily",
  venue_url: "http://www.forgebakingco.com",
  photo_url: Rack::Test::UploadedFile.new(Rails.root.join('app/assets/images/venue/forge_baking_co.jpg'), 'image/jpeg')
)

Venue.create(
  name: "Three Little Figs",
  address: "Highland Ave",
  photo_url: Rack::Test::UploadedFile.new(Rails.root.join('app/assets/images/venue/three_little_figs.jpg'), 'image/jpeg')
)

Venue.create(
  name: "Blue Shirt Cafe",
  address: "Davis Square",
  photo_url: Rack::Test::UploadedFile.new(Rails.root.join('app/assets/images/venue/blue_shirt_cafe.jpg'), 'image/jpeg')
)

User.create!(
  first_name: "Cassandra",
  last_name: "Newell",
  email: "cassandraleenewell@gmail.com",
  password: "jjjjjj",
  role: "admin",
  profile_photo: Rack::Test::UploadedFile.new(Rails.root.join('app/assets/images/user/profile-default-photo.png'), 'image/png')
)

User.create!(
  first_name: "Erin",
  last_name: "Christensen",
  email: "sonofchristensen@gmail.com",
  password: "jjjjjj",
  role: "admin",
  profile_photo: Rack::Test::UploadedFile.new(Rails.root.join('app/assets/images/user/profile-default-photo.png'), 'image/png')
)

User.create!(
  first_name: "Sophie",
  last_name: "Cho",
  email: "miss.sophie.c@gmail.com",
  password: "jjjjjj",
  role: "admin",
  profile_photo: Rack::Test::UploadedFile.new(Rails.root.join('app/assets/images/user/profile-default-photo.png'), 'image/png')
)

User.create!(
  first_name: "Dave",
  last_name: "Atwater",
  email: "aerocricket@gmail.com",
  password: "jjjjjj",
  role: "admin",
  profile_photo: Rack::Test::UploadedFile.new(Rails.root.join('app/assets/images/user/profile-default-photo.png'), 'image/png')
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: "regularjo@regularjo.com",
  password: "jjjjjj",
  profile_photo: Rack::Test::UploadedFile.new(Rails.root.join('app/assets/images/user/profile-default-photo.png'), 'image/png')
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
ReviewVote.create!(
  vote: Random.new.rand(-1..1),
  review: Review.find(4),
  user: User.first
)

ReviewVote.create!(
  vote: Random.new.rand(-1..1),
  review: Review.find(4),
  user: User.second
)

ReviewVote.create!(
  vote: Random.new.rand(-1..1),
  review: Review.find(4),
  user: User.third
)

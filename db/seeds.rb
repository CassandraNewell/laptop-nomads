require 'faker'

Venue.create(
  name: "Forge",
  address: "Somerville Ave",
  description: "A place with ice cream",
  open_time: "7 AM",
  close_time: "8 PM",
  venue_url: "http://www.forgebakingco.com",
  photo_url: "https://cdn.workfrom.co/files/usermedia/40840-Lgp6uTkoREO2MNru2pFy-63778_1493760130913803_3139082886625872589_n.0.0.jpg"
)

Venue.create(
  name: "Three Little Figs",
  address: "Highland Ave",
  photo_url: "http://2.bp.blogspot.com/-XWKJaRCvs8Q/UClu4AK9nSI/AAAAAAAABZM/P7XyU2IKwsc/s1600/IMG_7979.jpg"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: cassandraleenewell@gmail.com,
  password: "jj"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: erin@gmail.com,
  password: "jj"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: sophie@gmail.com,
  password: "jj"
)

User.create!(
  first_name: Faker::Name.first_name,
  last_name: Faker::Name.last_name,
  email: dave@gmail.com,
  password: "jj"
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

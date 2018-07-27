require 'faker'
# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

Venue.create(
  name: "Forge",
  address: "Somerville Ave",
  description: "A place with ice cream",
  open_time: "7 AM",
  close_time: "8 PM",
  venue_url: "http://www.forgebakingco.com",
  photo_url: "https://78.media.tumblr.com/tumblr_lw1tlukZwH1r5nekno1_500.gif"
)

Venue.create(
  name: "Three Little Figs",
  address: "Highland Ave",
  photo_url: "https://pre06.deviantart.net/3389/th/pre/i/2011/187/9/8/dramatic_hover_cat_by_theprophetchuck-d3l8m55.jpg"
)

3.times do
    User.create!(
    first_name: Faker::Name.first_name,
    last_name: Faker::Name.last_name,
    email: Faker::Internet.email,
    password: "asdfasdf"
  )
end

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

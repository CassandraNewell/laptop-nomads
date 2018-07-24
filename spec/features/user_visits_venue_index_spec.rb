require 'rails_helper'

feature 'user visits venue index', %Q{
  As a user
  I want to see all venues
  So that I can find a place to work
} do
  xscenario 'visits /venues and sees list of venues' do
    venue = FactoryBot.create(:venue)
    photo = venue.photo_url
    visit '/venues'

    expect(page).to have_content(venue.name)
    expect(page).to have_css('.venue-index-pic')
  end

  xscenario 'visits root and sees list of venues' do
    venue = FactoryBot.create(:venue)

    visit '/'

    expect(page).to have_content(venue.name)
    expect(page).to have_css('.venue-index-pic')
  end
end

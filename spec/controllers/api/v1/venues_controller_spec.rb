require "rails_helper"

RSpec.describe Api::V1::VenuesController, type: :controller do
  let!(:first_venue) { FactoryBot.create(:venue) }
  let!(:second_venue) { FactoryBot.create(:venue) }

  describe "GET#index" do
    it "should return a list of all the venues" do

      get :index
      returned_json = JSON.parse(response.body)
      venues = returned_json["venues"]
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(venues.length).to eq 2
      expect(venues[0]["name"]).to eq first_venue.name
      expect(venues[0]["photo_url"]).to eq first_venue.photo_url

      expect(venues[1]["name"]).to eq second_venue.name
      expect(venues[1]["photo_url"]).to eq second_venue.photo_url
    end
  end

  describe "GET#show" do
    it "should return the information for a single venue" do

      get :show, params: {id: first_venue.id}
      returned_json = JSON.parse(response.body)
      venue = returned_json["venue"]
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(venue["name"]).to eq first_venue.name
      expect(venue["address"]).to eq first_venue.address
      expect(venue["description"]).to eq first_venue.description
      expect(venue["open_time"]).to eq first_venue.open_time
      expect(venue["close_time"]).to eq first_venue.close_time
      expect(venue["venue_url"]).to eq first_venue.venue_url
      expect(venue["photo_url"]).to eq first_venue.photo_url
    end
  end
end

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
end

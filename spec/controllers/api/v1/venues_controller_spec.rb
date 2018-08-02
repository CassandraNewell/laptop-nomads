require "rails_helper"

RSpec.describe Api::V1::VenuesController, type: :controller do
  let!(:user) { FactoryBot.create(:user) }
  let!(:admin) { FactoryBot.create(:user, role: "admin")}
  let!(:first_venue) { FactoryBot.create(:venue) }
  let!(:second_venue) { FactoryBot.create(:venue) }
  let!(:third_venue) { FactoryBot.create(:venue) }

  describe "GET#index" do
    it "should return a list of all the venues" do
      get :index
      returned_json = JSON.parse(response.body)
      venues = returned_json["venues"]

      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(venues.length).to eq 3
      expect(venues[0]["name"]).to eq first_venue.name
      expect(venues[0]["photo_url"]["url"]).to eq first_venue.photo_url.url

      expect(venues[1]["name"]).to eq second_venue.name
      expect(venues[1]["photo_url"]["url"]).to eq second_venue.photo_url.url

      expect(venues[2]["name"]).to eq third_venue.name
      expect(venues[2]["photo_url"]["url"]).to eq third_venue.photo_url.url
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
      expect(venue["photo_url"]["url"]).to eq first_venue.photo_url.url
    end
  end

  describe "POST#create" do
    it "creates a new venue" do
      sign_in user

      post_json = {
        name: first_venue.name,
        address: first_venue.address,
        photo_url: Rack::Test::UploadedFile.new(Rails.root.join('spec/support/images/unicorn-cake.jpg'), 'image/jpeg')
      }

      prev_count = Venue.count
      post(:create, params: post_json)
      expect(Venue.count).to eq(prev_count + 1)
    end

    it "fails to creates a new venue without required fields" do
      post_json = {
        venue: {
          name: first_venue.name,
          address: first_venue.address
        }
      }
      prev_count = Venue.count
      post(:create, params: post_json)
      expect(Venue.count).to eq(prev_count)
    end

    it "returns the json of the new venue" do
      sign_in user
      post_json = {
        name: second_venue.name,
        address: second_venue.address,
        photo_url: Rack::Test::UploadedFile.new(Rails.root.join('spec/support/images/unicorn-cake1.jpg'), 'image/jpeg')
      }
      post(:create, params: post_json)
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      venue = returned_json["venue"]

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(venue["name"]).to eq Venue.last.name
      expect(venue["address"]).to eq Venue.last.address

      expect(venue["photo_url"]["url"]).to eq Venue.last.photo_url.url
    end
  end

  describe "PATCH#update" do
    it "should change the information for a single venue if you are an admin" do
      sign_in admin
      patch_json = {
        id: first_venue,
        name: "edited_venue",
        address: "edited_address"
      }
      get(:update, params: patch_json)
      returned_json = JSON.parse(response.body)
      venue = returned_json["venue"]
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(venue["name"]).to eq "edited_venue"
      expect(venue["address"]).to eq "edited_address"
      expect(venue["description"]).to eq first_venue.description
      expect(venue["open_time"]).to eq first_venue.open_time
      expect(venue["close_time"]).to eq first_venue.close_time
      expect(venue["venue_url"]).to eq first_venue.venue_url
      expect(venue["photo_url"]["url"]).to eq first_venue.photo_url.url
    end
  end

  describe "DELETE#destroy" do
    it "should delete the information for a single venue if you are an admin" do
      sign_in admin

      get(:destroy, params: { id: first_venue })
      returned_json = JSON.parse(response.body)
      venues = returned_json["venues"]
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(venues.length).to eq 2
      expect(venues[0]["name"]).to eq second_venue.name
      expect(venues[0]["photo_url"]["url"]).to eq second_venue.photo_url.url
    end
  end
end

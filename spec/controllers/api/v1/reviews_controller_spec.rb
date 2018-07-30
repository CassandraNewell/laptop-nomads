require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:first_venue) { FactoryBot.create(:venue) }
  let!(:first_review) { FactoryBot.create(:review, venue: first_venue) }
  let!(:second_review) { FactoryBot.create(:review, venue: first_venue) }

  describe "GET#index" do
    it "should return a list of all the reviews" do

      get :index, params: {venue_id: 1}
      returned_json = JSON.parse(response.body)
      reviews = returned_json["reviews"]
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(reviews.length).to eq 2
      expect(reviews[0]["body"]).to eq first_review.body
      expect(reviews[0]["rating"]).to eq first_review.rating
      expect(reviews[0]["fullname"]).to eq "#{first_review.user.first_name} #{first_review.user.last_name}"

      expect(reviews[1]["body"]).to eq second_review.body
      expect(reviews[1]["rating"]).to eq second_review.rating
      expect(reviews[1]["fullname"]).to eq "#{second_review.user.first_name} #{second_review.user.last_name}"
    end
  end

  describe "POST#create" do
    it "should accept a new review and return the review and error messages" do

      get :create, params: {
        body: "hi",
        rating: 4,
        fullname: "Cassandra Newell"
      }
      returned_json = JSON.parse(response.body)
      reviews = returned_json["reviews"]
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")

      expect(reviews.length).to eq 2
      expect(reviews[0]["body"]).to eq first_review.body
      expect(reviews[0]["rating"]).to eq first_review.rating
      expect(reviews[0]["fullname"]).to eq "#{first_review.user.first_name} #{first_review.user.last_name}"
    end
  end
end

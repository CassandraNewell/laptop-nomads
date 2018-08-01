require "rails_helper"

RSpec.describe Api::V1::ReviewsController, type: :controller do
  let!(:first_venue) { FactoryBot.create(:venue) }
  let!(:first_review) { FactoryBot.create(:review, venue: first_venue) }
  let!(:second_review) { FactoryBot.create(:review, venue: first_venue) }
  let!(:first_user) { FactoryBot.create(:user) }

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
    before(:each) do
      sign_in first_user
    end

    after(:each) do
      sign_out first_user
    end

    it "creates a new review" do
      post_json = {
        body: first_review.body,
        rating: first_review.rating,
      }
      prev_count = Review.count
      post(:create, params: {venue_id: first_venue.id, review: post_json})
      expect(Review.count).to eq(prev_count + 1)
    end

    it "fails to creates a new review without body" do
      post_json = {
        rating: first_review.rating,
      }
      prev_count = Review.count
      post(:create, params: {venue_id: first_venue.id, review: post_json})
      expect(Review.count).to eq(prev_count)
    end

    it "fails to creates a new review without rating" do
      post_json = {
        body: first_review.body,
      }
      prev_count = Review.count
      post(:create, params: {venue_id: first_venue.id, review: post_json})
      expect(Review.count).to eq(prev_count)
    end

    it "returns the json of the new review" do
      post_json = {
        body: first_review.body,
        rating: first_review.rating,
      }
      post(:create, params: {venue_id: first_venue.id, review: post_json})
      returned_json = JSON.parse(response.body)
      expect(response.status).to eq 200
      expect(response.content_type).to eq("application/json")
      review = returned_json["review"]

      expect(returned_json).to be_kind_of(Hash)
      expect(returned_json).to_not be_kind_of(Array)
      expect(review["body"]).to eq first_review.body
      expect(review["rating"]).to eq first_review.rating
    end
  end
end

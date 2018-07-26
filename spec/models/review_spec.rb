require 'rails_helper'

RSpec.describe Review, type: :model do
  describe "validations" do
    let(:review) { FactoryBot.build(:review) }
    let(:review1) { FactoryBot.build(:review, body: nil) }
    let(:review2) { FactoryBot.build(:review, rating: nil) }
    let(:review3) { FactoryBot.build(:review, rating: "A") }
    let(:review4) { FactoryBot.build(:review, rating: 1) }
    let(:review5) { FactoryBot.build(:review, user: nil) }
    let(:review6) { FactoryBot.build(:review, venue: nil) }

    it "is valid with valid attributes" do
      expect(review).to be_valid
    end

    it "is not valid without a body" do
      expect(review1).to_not be_valid
    end

    it "is not valid without a rating" do
      expect(review2).to_not be_valid
    end

    it "is not valid without a numeric rating" do
      expect(review3).to_not be_valid
    end

    it "is valid with a numeric rating" do
      expect(review4).to be_valid
      expect(review4.rating).to be_kind_of(Integer)
    end

    it "is not valid without a user" do
      expect(review5).to_not be_valid
    end

    it "is not valid without a venue" do
      expect(review6).to_not be_valid
    end

  end
end

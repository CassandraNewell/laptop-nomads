require 'rails_helper'

RSpec.describe ReviewVote, type: :model do
  describe "review_vote validations" do
    let(:user) { FactoryBot.build(:user) }
    let(:venue) { FactoryBot.build(:venue) }
    let(:review) { FactoryBot.build(:review) }

    let(:review_vote) {
      FactoryBot.build(:review_vote)
    }
    let(:review_vote_no_vote) {
      FactoryBot.build(:review_vote, vote: nil)
    }
    let(:review_vote_no_user) {
      FactoryBot.build(:review_vote, user: nil)
    }
    let(:review_vote_no_review) {
      FactoryBot.build(:review_vote, review: nil)
    }

    let(:up_review_vote) {
      FactoryBot.build(:review_vote, vote: 1)
    }
    let(:down_review_vote) {
      FactoryBot.build(:review_vote, vote: -1)
    }
    let(:neutral_review_vote) {
      FactoryBot.build(:review_vote, vote: 0)
    }


    it "is not valid without a vote" do
      expect(review_vote_no_vote).to_not be_valid
    end

    it "is not valid without a user" do
      expect(review_vote_no_user).to_not be_valid
    end

    it "is not valid without a review" do
      expect(review_vote_no_review).to_not be_valid
    end

    it "is valid with a vote, review, and user" do
      expect(review_vote).to be_valid
    end

    it "is enumerated with 'upvote' for vote 1" do
      expect(up_review_vote.vote).to eq('upvote')
    end

    it "is enumerated with 'downvote' for vote -1" do
      expect(down_review_vote.vote).to eq('downvote')
    end

    it "is enumerated with 'neutral' for vote 0" do
      expect(neutral_review_vote.vote).to eq('neutral')
    end
  end
end

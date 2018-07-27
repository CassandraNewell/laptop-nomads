require 'rails_helper'

RSpec.describe Review, type: :model do
  describe "validations" do
    let(:user) { FactoryBot.build(:user) }
    let(:user1) { FactoryBot.build(:user, first_name: "") }
    let(:user2) { FactoryBot.build(:user, last_name: "") }
    let(:user3) { FactoryBot.build(:user, email: "") }
    let(:user4) { FactoryBot.build(:user, bio: "") }
    let(:user5) { FactoryBot.build(:user, profile_photo: "") }

    it "is not valid without a first name" do
      expect(user1).to_not be_valid
    end

    it "is not valid without a last name" do
      expect(user2).to_not be_valid
    end

    it "is not valid without an email" do
      expect(user3).to_not be_valid
    end

    it "is valid without a bio" do
      expect(user4).to be_valid
    end

    it "is valid without a profile photo" do
      expect(user5).to be_valid
    end

    it "is valid with valid attributes" do
      expect(user).to be_valid
    end
  end
end

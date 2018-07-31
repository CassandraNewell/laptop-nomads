require 'rails_helper'
 RSpec.describe Venue, type: :model do
  describe "validations" do
     it "is valid with all attributes" do
      venue = FactoryBot.build(:venue)
      expect(venue).to be_valid
    end
     it "is not valid without name" do
      venue = FactoryBot.build(:venue, name: nil)
      expect(venue).to_not be_valid
    end
     it "is not valid without address" do
      venue = FactoryBot.build(:venue, address: nil)
      expect(venue).to_not be_valid
    end
     it "is not valid without photo" do
      venue = FactoryBot.build(:venue, photo_url: nil)
      expect(venue).to_not be_valid
    end
     it "is valid without description" do
      venue = FactoryBot.build(:venue, description: nil)
      expect(venue).to be_valid
    end
     it "is valid without open_time" do
      venue = FactoryBot.build(:venue, open_time: nil)
      expect(venue).to be_valid
    end
     it "is valid without close_time" do
      venue = FactoryBot.build(:venue, close_time: nil)
      expect(venue).to be_valid
    end
     it "is valid without venue_url" do
      venue = FactoryBot.build(:venue, venue_url: nil)
      expect(venue).to be_valid
    end
   end
end

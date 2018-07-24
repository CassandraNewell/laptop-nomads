require 'rails_helper'

RSpec.describe Venue, type: :model do
  describe "validations" do

    it "is valid with valid attributes" do
      expect(Venue.create(name: "Erin's Coffee", address: "77 Summer St.", description: "Caffeine & Code", open_time: "0753", close_time: "2132", venue_url: "https://github.com/drsoph/laptop-nomads/blob/add-user-authentication/spec/models/user_spec.rb", photo_url: "https://i.pinimg.com/originals/77/44/72/774472468ac017140f528d0c15e6e25d.jpg")).to be_valid
    end

    it "is not valid without name" do
      expect(Venue.create(address: "77 Summer St.", description: "Caffeine & Code", open_time: "0753", close_time: "2132", venue_url: "https://github.com/drsoph/laptop-nomads/blob/add-user-authentication/spec/models/user_spec.rb", photo_url: "https://i.pinimg.com/originals/77/44/72/774472468ac017140f528d0c15e6e25d.jpg")).to_not be_valid
    end

    it "is not valid without address" do
      expect(Venue.create(name: "Erin's Coffee", description: "Caffeine & Code", open_time: "0753", close_time: "2132", venue_url: "https://github.com/drsoph/laptop-nomads/blob/add-user-authentication/spec/models/user_spec.rb", photo_url: "https://i.pinimg.com/originals/77/44/72/774472468ac017140f528d0c15e6e25d.jpg")).to_not be_valid
    end

    it "is not valid without photo" do
      expect(Venue.create(name: "Erin's Coffee", address: "77 Summer St.", description: "Caffeine & Code", open_time: "0753", close_time: "2132", venue_url: "https://github.com/drsoph/laptop-nomads/blob/add-user-authentication/spec/models/user_spec.rb")).to_not be_valid
    end

    it "is valid without description" do
      expect(Venue.create(name: "Erin's Coffee", address: "77 Summer St.", open_time: "0753", close_time: "2132", venue_url: "https://github.com/drsoph/laptop-nomads/blob/add-user-authentication/spec/models/user_spec.rb", photo_url: "https://i.pinimg.com/originals/77/44/72/774472468ac017140f528d0c15e6e25d.jpg")).to be_valid
    end

    it "is valid without open_time" do
      expect(Venue.create(name: "Erin's Coffee", address: "77 Summer St.", description: "Caffeine & Code", close_time: "2132", venue_url: "https://github.com/drsoph/laptop-nomads/blob/add-user-authentication/spec/models/user_spec.rb", photo_url: "https://i.pinimg.com/originals/77/44/72/774472468ac017140f528d0c15e6e25d.jpg")).to be_valid
    end

    it "is valid without close_time" do
      expect(Venue.create(name: "Erin's Coffee", address: "77 Summer St.", description: "Caffeine & Code", open_time: "0753", venue_url: "https://github.com/drsoph/laptop-nomads/blob/add-user-authentication/spec/models/user_spec.rb", photo_url: "https://i.pinimg.com/originals/77/44/72/774472468ac017140f528d0c15e6e25d.jpg")).to be_valid
    end

    it "is valid without venue_url" do
      expect(Venue.create(name: "Erin's Coffee", address: "77 Summer St.", description: "Caffeine & Code", open_time: "0753", close_time: "2132", photo_url: "https://i.pinimg.com/originals/77/44/72/774472468ac017140f528d0c15e6e25d.jpg")).to be_valid
    end

  end
end

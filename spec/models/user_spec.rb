require 'rails_helper'

RSpec.describe User, type: :model do
  describe "validations" do

    it "is not valid without a first name" do
      expect(User.create(last_name: "Doe", email: "jane@doe.com", bio: "Jane Doe's Bio", profile_photo: "http://janedoe.com/jane.jpg", password: "abcd1234")).to_not be_valid
    end

    it "is not valid without a last name" do
      expect(User.create(first_name: "Jane", email: "jane@doe.com", bio: "Jane Doe's Bio", profile_photo: "http://janedoe.com/jane.jpg", password: "abcd1234")).to_not be_valid
    end

    it "is not valid without an email" do
      expect(User.create(first_name: "Jane", last_name: "Doe", bio: "Jane Doe's Bio", profile_photo: "http://janedoe.com/jane.jpg", password: "abcd1234")).to_not be_valid
    end

    it "is valid without a bio" do
      expect(User.create(first_name: "Jane", last_name: "Doe", email: "jane@doe.com", profile_photo: "http://janedoe.com/jane.jpg", password: "abcd1234")).to be_valid
    end

    it "is valid without a profile photo" do
      expect(User.create(first_name: "Jane", last_name: "Doe", email: "jane@doe.com", bio: "Jane Doe's Bio", password: "abcd1234")).to be_valid
    end

    it "is valid with valid attributes" do
      expect(User.create(first_name: "Jane", last_name: "Doe", email: "jane@doe.com", bio: "Jane Doe's Bio", profile_photo: "http://janedoe.com/jane.jpg", password: "abcd1234")).to be_valid
    end
  end
end

class Venue < ApplicationRecord
  has_many :reviews

  validates :name, :address, :photo_url, presence: true
end

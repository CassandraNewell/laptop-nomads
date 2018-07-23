class Venue < ApplicationRecord
  validates :name, :address, :photo_url, presence: true

end

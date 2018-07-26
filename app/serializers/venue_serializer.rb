class VenueSerializer < ActiveModel::Serializer
  attributes :id, :name, :photo_url, :description, :open_time, :close_time, :venue_url, :address
  has_many :reviews 
end

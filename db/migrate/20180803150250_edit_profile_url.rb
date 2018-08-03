class EditProfileUrlsss < ActiveRecord::Migration[5.2]
  def change
    change_column_default :users, :profile_photo, from: "null", to: nil
  end
end

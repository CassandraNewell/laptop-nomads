require "rails_helper"

feature "profile photo" do
  scenario "user uploads a profile photo" do
    user = FactoryBot.create(:user)

    visit root_path
    click_link "Sign Up"

    fill_in 'First Name', with: user.first_name
    fill_in 'Last Name', with: user.last_name
    fill_in 'Email', with: 'email@example.com'
    fill_in 'Bio', with: user.bio
    fill_in 'Password', with: 'password'
    fill_in 'Password confirmation', with: 'password'
    attach_file :user_profile_photo, "#{Rails.root}/spec/support/images/unicorn-cake.jpg"
    click_button 'Sign up'

    expect(page).to have_content('Welcome! You have signed up successfully.')
    expect(page).to have_content('Sign Out')
    expect(page).to have_css("img[src*='unicorn-cake.jpg']")
  end
end

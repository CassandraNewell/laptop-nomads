import VenueDetailTile from '../../../app/javascript/components/VenueDetailTile';

describe('VenueDetailTile', () => {
  let name,
      address,
      description,
      open_time,
      close_time,
      venue_url,
      photo_url,
      wrapper;

  beforeEach(() => {
    let url = { url: "https://i.pinimg.com/originals/e3/4e/ce/e34ece551a9777790b186c6bfb0dfa82.jpg" }
    wrapper = mount(
      <VenueDetailTile
        name="Chadwick's"
        address="34 Park St."
        description="I am not an Elephant!"
        open_time="4 AM"
        close_time="2 PM"
        venue_url="www.internet.com"
        photo_url={url}
      />
    );
  });

  it('should show the Address', () => {
      expect(wrapper.find('p.address').text()).toEqual('Address: 34 Park St.');
    });

  it('should show the Website', () => {
      expect(wrapper.find('p.venue-url').text()).toEqual('Website');
    });

  it('should direct to the Website', () => {
      expect(wrapper.find('a').getDOMNode().getAttribute('href')).toEqual('www.internet.com');
    });

  it('should show the Description', () => {
      expect(wrapper.find('p.description').text()).toEqual('I am not an Elephant!');
    });

  it('should show the Website', () => {
      expect(wrapper.find('p.hours').text()).toEqual('Hours: 4 AM - 2 PM');
    });

  it('should show the Name', () => {
      expect(wrapper.find('h1').text()).toEqual('Chadwick\'s');
    });

  it('should display the Image', () => {
    console.log(wrapper.debug())
      expect(wrapper.find('img').getDOMNode().getAttribute('src')).toEqual('https://i.pinimg.com/originals/e3/4e/ce/e34ece551a9777790b186c6bfb0dfa82.jpg');
    });

  it('should display the Alt Text', () => {
      expect(wrapper.find('img').getDOMNode().getAttribute('alt')).toEqual('Chadwick\'s');
    });
});

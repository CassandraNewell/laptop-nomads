import ReviewTile from '../../../app/javascript/components/ReviewTile';

describe('ReviewTile', () => {
  let wrapper;

  beforeEach(() => {
    wrapper = mount(
      <ReviewTile
        key="1"
        id="1"
        fullname="Jane Doe"
        body="This place stinks."
        rating="1"
      />
    );
  });

  it('should show the reviewer\'s full name and rating', () => {
    expect(wrapper.find('h4').text()).toEqual('Jane Doe says');
  });

  it('should show the body of the review', () => {
    expect(wrapper.find('p').text()).toEqual('This place stinks.');
  });
});

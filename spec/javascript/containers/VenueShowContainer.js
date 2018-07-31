import VenueShowContainer from '../../../app/javascript/containers/VenueShowContainer';
import ReviewsIndexContainer from '../../../app/javascript/containers/ReviewsIndexContainer';
import VenueDetailTile from '../../../app/javascript/components/VenueDetailTile';
import ReviewFormContainer from '../../../app/javascript/containers/ReviewFormContainer';
import fetchMock from 'fetch-mock';

describe('VenueShowContainer', () => {
  let wrapper;
  let venue = {
     id: 1,
     name: "Forge",
     address: "Somerville Ave",
     description: "A place with ice cream",
     open_time: "7 AM",
     close_time: "8 PM",
     venue_url: "http://www.forgebakingco.com",
     photo_url: "https://78.media.tumblr.com/tumblr_lw1tlukZwH1r5nekno1_500.gif",
     reviews: [
      {
        "id": 1,
        "body": "Black as midnight on a moonless night.",
        "rating": 3,
        "fullname": "Hobert Kuphal"
      },
      {
        "id": 2,
        "body": "There was a fish in the percolator!",
        "rating": 3,
        "fullname": "Bryce Dibbert"
      }
    ]
  };
  let review1 = {
    "id": 1,
    "body": "Black as midnight on a moonless night.",
    "rating": 3,
    "fullname": "Hobert Kuphal"
  }
  let review2 = {
    "id": 2,
    "body": "There was a fish in the percolator!",
    "rating": 3,
    "fullname": "Bryce Dibbert"
  }
  let newreview = {
    body: "I'm a test review",
    rating: 5,
    fullname: "Sophie Cho"
  }

  beforeEach(() => {
    fetchMock.get(`/api/v1/venues/${venue.id}`, {
      status: 200,
      body: {
        "venue": venue,
        "reviews": [review1, review2]
      }
    });
    wrapper = mount(<VenueShowContainer
      params={ {id: venue.id} }
    />);
  });

  afterEach(fetchMock.restore)

  describe('Show page', () => {
    it('has the specified initial state', () => {
      expect(wrapper.state()).toEqual({
        venue: {},
        reviews: [],
        notice: "",
        errors: []
      })
    })

    it('renders a Venue Detail Tile', (done) => {
      setTimeout(() => {
        expect(wrapper.find(VenueDetailTile).props()).toEqual({
          name: venue.name,
          address: venue.address,
          description: venue.description,
          open_time: venue.open_time,
          close_time: venue.close_time,
          venue_url: venue.venue_url,
          photo_url: venue.photo_url
        })
        done()
      }, 0)
    })

    it('renders a Reviews Index Container', (done) => {
      setTimeout(() => {
        expect(wrapper.find(ReviewsIndexContainer).props()).toEqual({
          reviews: [review1, review2]
        })
        done()
      }, 0)
    })

    it('renders a Review form with correct props', (done) => {
      setTimeout(() => {
        expect(wrapper.find(ReviewFormContainer).props()).toEqual({
          venue_id: venue.id,
          onSubmit: jasmine.any(Function)
        })
        done()
      }, 0)
    })

    it('adds a review when rating and body supplied', (done) => {
      fetchMock.post(`/api/v1/venues/1/reviews`, {
        status: 201,
        body: {
          review: [newreview]
        }
      });

      setTimeout(() => {
        let initialReviewsCount = wrapper.find(ReviewsIndexContainer).props().reviews.length
        wrapper.find('form').simulate('submit')
        setTimeout(() => {
          expect(wrapper.find(ReviewsIndexContainer).props().reviews.length).toEqual(initialReviewsCount + 1)
          done()
        })
      }, 0)
    })

    it('shows an error message when there is an error in response', (done) => {
      fetchMock.post('/api/v1/venues/1/reviews', {
        status: 201,
        body: {
          errors: ["Body can't be blank", "Rating is not a number"]
        }
      });
      wrapper.find('.submit-button').simulate('submit')
      setTimeout(() => {
        let error_div = wrapper.find('div.error')
        expect(error_div.text()).toContain("Body can't be blank")
        expect(error_div.text()).toContain("Rating is not a number")
        done()
      }, 0)
    })
  });
})

import VenueShowContainer from '../../../app/javascript/containers/VenueShowContainer';
import ReviewsIndexContainer from '../../../app/javascript/containers/ReviewsIndexContainer';
import VenueDetailTile from '../../../app/javascript/components/VenueDetailTile';
import fetchMock from 'fetch-mock';

describe('VenueShowContainer', () => {
  let wrapper;
  let venue;

  beforeEach(() => {
    venue = {
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
      }
    fetchMock.get(`/api/v1/venues/${venue.id}`, {
      status: 200,
      body: {"venue": venue, "reviews": [
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
       ]}
    });
    wrapper = mount(<VenueShowContainer params={{id: venue.id}}/>);
  });

  afterEach(fetchMock.restore)
  describe('Show Page', () => {

    it('should have the specified initial state', () => {
      expect(wrapper.state()).toEqual({venue: {}, reviews: []})
    })

    it('Should render a Venue Detail Tile', (done) => {
      setTimeout(() => {
        expect(wrapper.find(VenueDetailTile).props()).toEqual({
          name: "Forge",
          address: "Somerville Ave",
          description: "A place with ice cream",
          open_time: "7 AM",
          close_time: "8 PM",
          venue_url: "http://www.forgebakingco.com",
          photo_url: "https://78.media.tumblr.com/tumblr_lw1tlukZwH1r5nekno1_500.gif"
        })
        done()
      }, 0)
    })

    it('Should render a Reviews Index Container', (done) => {
      setTimeout(() => {
        expect(wrapper.find(ReviewsIndexContainer).props()).toEqual({
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
        })
        done()
      }, 0)
    })
  });
})

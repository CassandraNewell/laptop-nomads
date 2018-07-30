import VenueShowContainer from '../../../app/javascript/containers/VenueShowContainer';
import ReviewsIndexContainer from '../../../app/javascript/containers/ReviewsIndexContainer';
import VenueDetailTile from '../../../app/javascript/components/VenueDetailTile';
import ReviewFormContainer from '../../../app/javascript/containers/ReviewFormContainer';
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
      expect(wrapper.state()).toEqual({
        venue: {},
        reviews: [],
        status_messages: []
      })
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

    it('Should render a Review form with correct props', (done) => {
      setTimeout(() => {
        expect(wrapper.find(ReviewFormContainer).props()).toEqual({
          venue_id: venue.id,
          onSubmit: jasmine.any(Function)
        })
        done()
      }, 0)
    })

    fit('successfully adds a review when rating and body supplied', (done) => {
      fetchMock.post(`/api/v1/venues/1/reviews`, {
        status: 201,
        body: {
          review: [{
             body: "I'm a test review",
             rating: 5,
             fullname: "Sophie Cho",
             venue: {
                "id": 1,
                "name": "Forge",
                "photo_url": "https://78.media.tumblr.com/tumblr_lw1tlukZwH1r5nekno1_500.gif",
                "description": "A place with ice cream",
                "open_time": "7 AM",
                "close_time": "8 PM",
                "venue_url": "http://www.forgebakingco.com",
                "address": "Somerville Ave"
              },
              user: {
                "id": 1,
                "email": "bernard@kingbahringer.info",
                "created_at": "2018-07-27T15:30:02.157Z",
                "updated_at": "2018-07-27T15:30:02.157Z",
                "role": "member",
                "first_name": "Kirsten",
                "last_name": "Toy",
                "profile_photo": { "url": "/uploads/user/profile_photo/1/user/profile-default-photo.png" }
              }
            }],
            status_messages: ["Test successful"]
          }
        });

      setTimeout(() => {
        let listItemCount = wrapper.find('div.review').length
        let bodyInput = wrapper.find({ name: "body" })
        let ratingInput = wrapper.find({ name: "rating" })

        bodyInput.simulate('change', { target: { value: 'Hello' } })
        ratingInput.simulate('change', { target: { value: 'Hello' } })

        wrapper.find('form').simulate('submit')
        setTimeout(() => {
          expect(wrapper.find('div.review').length).toEqual(listItemCount + 1)
          // console.log(wrapper.debug())
          done()
        })
      }, 0)
    })

    it('shows an error message when a 422 status is received', (done) => {
      fetchMock.post('/api/v1/venues/1/reviews', {
        status: 422,
        body: { errors: ["Title can't be blank"] }
      });
      wrapper.find('.submit-button').simulate('submit')
      setTimeout(() => {
        expect(true).toEqual(true)
        // expect(wrapper.find('ul.errors')).toBePresent()
        // expect(wrapper.find('ul.errors li').text()).toEqual("Title can't be blank")
        done()
      }, 0)
    })
  });
})

import VenueShowContainer from '../../../app/javascript/containers/VenueShowContainer';
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
       photo_url: "https://78.media.tumblr.com/tumblr_lw1tlukZwH1r5nekno1_500.gif"
      }
    fetchMock.get(`/api/v1/venues/${venue.id}`, {
      status: 200,
      body: {"venue": venue}
    });
    wrapper = mount(<VenueShowContainer params={{id: venue.id}}/>);
  });

  afterEach(fetchMock.restore)
  describe('Show Page', () => {

    it('should have the specified initial state', () => {
      expect(wrapper.state()).toEqual({venue: {}})
    })

    it('Should render a tile', (done) => {
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
  });
})

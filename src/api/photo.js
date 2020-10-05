import axios from 'axios';
import jsonpAdapter from 'axios-jsonp';

const FLICKER_API = 'http://api.flickr.com/services/feeds/photos_public.gne';

export const getPhotosByTags = (tags) => {
  return axios({
    url: FLICKER_API,
    params: {
      tags,
      format: 'json',
    },
    adapter: jsonpAdapter,
    callbackParamName: 'jsoncallback',
  });
};

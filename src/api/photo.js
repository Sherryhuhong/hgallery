import $ from 'jquery';

const FLICKER_API = 'http://api.flickr.com/services/feeds/photos_public.gne';

export const getPhotosByTags = (tags) => {
  const url = `${FLICKER_API}?jsoncallback=?`;
  return $.getJSON(url, {
    tags: tags,
    format: 'json',
  });
};

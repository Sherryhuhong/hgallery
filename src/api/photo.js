import $ from 'jquery';

export const getPhotosByTags = (tags) => {
  const flickerAPI =
    'http://api.flickr.com/services/feeds/photos_public.gne?jsoncallback=?';
  return $.getJSON(flickerAPI, {
    tags: tags,
    format: 'json',
  });
};

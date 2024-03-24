// File will have entries for constant being used throughout rhe app

//Image map is created because dynamic require is not supported in react native
export const IMAGES = Object.freeze({
  'poster1.jpg': require('../assets/images/poster1.jpg'),
  'poster2.jpg': require('../assets/images/poster2.jpg'),
  'poster3.jpg': require('../assets/images/poster3.jpg'),
  'poster4.jpg': require('../assets/images/poster4.jpg'),
  'poster5.jpg': require('../assets/images/poster5.jpg'),
  'poster6.jpg': require('../assets/images/poster6.jpg'),
  'poster7.jpg': require('../assets/images/poster7.jpg'),
  'poster8.jpg': require('../assets/images/poster8.jpg'),
  'poster9.jpg': require('../assets/images/poster9.jpg'),
  missing: require('../assets/images/placeholder_for_missing_posters.png'),
  back: require('../assets/images/back.png'),
  nav_bar: require('../assets/images/nav_bar.png'),
  search: require('../assets/images/search.png'),
});

//JSON map is created because dynamic require is not supported in react native
export const MOVIES_DATA = {
  1: require('../assets/apis/CONTENTLISTINGPAGE-PAGE1.json'),
  2: require('../assets/apis/CONTENTLISTINGPAGE-PAGE2.json'),
  3: require('../assets/apis/CONTENTLISTINGPAGE-PAGE3.json'),
};

export const TITLE = 'Romantic Comedy';

export const NO_DATA_FOUND = 'No movies found';

export const SEARCH = 'Search';

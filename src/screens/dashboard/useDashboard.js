//Created a custom hook to keep the logical code separated from UI rendering
import {useState} from 'react';
import {MOVIES_DATA} from '../../common/constants';

export const useDashboard = () => {
  const [moviesData, setmoviesData] = useState({
    movieList: [],
    pageNo: 1,
    total_items: 0,
  });
  const [filteredMovieList, setFilteredMovieList] = useState([]);
  const [searchEnabled, setSearchEnabled] = useState(false);
  const [searchText, setSearchText] = useState('');

  // function gets called when end of the list is reached to load more data
  const loadMoreData = () => {
    //load data only of there are more items present
    if (moviesData?.total_items > moviesData?.movieList?.length) {
      const pageNo = moviesData?.pageNo + 1;
      const content =
        MOVIES_DATA[pageNo]?.page['content-items']['content'] ?? [];
      setmoviesData({
        ...moviesData,
        pageNo,
        movieList: [...moviesData?.movieList, ...content],
      });
    }
  };

  // function gets called on start of the application to load initial data
  const loadInitialData = () => {
    const totalItems = MOVIES_DATA[1]['page']['total-content-items'];
    const contentList = MOVIES_DATA[1]['page']['content-items']['content'];
    setmoviesData({
      ...moviesData,
      movieList: contentList,
      total_items: totalItems,
    });
  };

  // function gets called when user searches for any data from movies list
  const search = (searchText = '') => {
    setSearchText(searchText);
    let filteredData = [...moviesData.movieList];
    if (searchText.length > 0) {
      filteredData = moviesData.movieList?.filter(item => {
        return item.name
          .toLowerCase()
          .includes(searchText.trim().toLowerCase());
      });
    }
    setFilteredMovieList(filteredData);
  };

  const enableSearch = enabled => {
    setSearchEnabled(enabled);
    setSearchText('');
  };

  return {
    moviesData,
    filteredMovieList,
    searchEnabled,
    searchText,
    loadInitialData,
    loadMoreData,
    search,
    enableSearch,
  };
};

import { act, renderHook } from '@testing-library/react-hooks';
import { MOVIES_DATA } from '../../../common/constants';
import { useDashboard } from '../useDashboard';

describe('useDashboard hook', () => {
  it('should initialize moviesData with initial data', () => {
    const { result } = renderHook(() => useDashboard());
    
    act(() => {
      result.current.loadInitialData();
    });

    expect(result.current.moviesData.movieList).toEqual(MOVIES_DATA[1]['page']['content-items']['content']);
    expect(result.current.moviesData.total_items).toEqual(MOVIES_DATA[1]['page']['total-content-items']);
  });

  it('should load more data when loadMoreData is called', () => {
    const { result } = renderHook(() => useDashboard());
    
    act(() => {
      result.current.loadInitialData();
      result.current.moviesData.total_items = 50;
      result.current.moviesData.pageNo = 1;
      result.current.loadMoreData();
    });

    expect(result.current.moviesData.movieList.length).toEqual(20);
  });

  it('should not load more data if total_items is less than movieList length', () => {
    const { result } = renderHook(() => useDashboard());
    
    act(() => {
      result.current.loadInitialData();
      // Simulate total_items less than movieList length
      result.current.moviesData.total_items = 1;
      result.current.loadMoreData();
    });

    expect(result.current.moviesData.movieList).toEqual(MOVIES_DATA[2]['page']['content-items']['content']);
  });

  it('should filter movie list based on search text', () => {
    const { result } = renderHook(() => useDashboard());
    
    act(() => {
      result.current.loadInitialData();
      result.current.search('XYZ');
    });

    expect(result.current.filteredMovieList).toEqual([]);
  });
});

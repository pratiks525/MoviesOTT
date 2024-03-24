//Created a custom hook to keep the logical code separated from UI rendering
import { useState } from "react";
import { MOVIES_DATA } from "../../common/constants";

export const useDashboard = () => {
    const [moviesData, setmoviesData] = useState({ movieList: [], pageNo: 1, total_items: 0 });
    const [filteredMovieList, setFilteredMovieList] = useState([]);

    const loadMoreData = () => {
        if (moviesData?.total_items > moviesData?.movieList?.length) {
            const pageNo = moviesData?.pageNo + 1;
            const content = MOVIES_DATA[pageNo]?.page['content-items']['content'] ?? [];
            setmoviesData({ ...moviesData, pageNo, movieList: [...moviesData?.movieList, ...content] })
        }
    }

    const loadInitialData = () => {
        const totalItems = MOVIES_DATA[1]['page']['total-content-items']
        const contentList = MOVIES_DATA[1]['page']['content-items']['content']
        setmoviesData({ ...moviesData, movieList: contentList, total_items: totalItems })
    }

    const search = (searchText='') => {
        let filteredData = [...moviesData.movieList];
        if(searchText.length > 0) {
            filteredData = moviesData.movieList?.filter(item => {
                return item.name.toLowerCase().includes(searchText.toLowerCase());
            });            
        } 
        setFilteredMovieList(filteredData);
    }

    return {
        moviesData,
        filteredMovieList,
        loadInitialData,
        loadMoreData,
        search
    }
}
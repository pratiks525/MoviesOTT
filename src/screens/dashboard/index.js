import React, { useEffect, useState } from "react";
import { FlatList, SafeAreaView, TextInput } from "react-native";
import { IMAGES, NO_DATA_FOUND, TITLE } from "../../common/constants";
import ImageWithHandledError from "../../components/imageWithHandledError";
import { WHITE } from "../../theme/colors";
import { EmptyText, Header, HeaderTitleContainer, HeaderTitleText, IconContainer, ImageBackgroundHeader, ImgIcon, ItemContainer, TitleText, style } from "./dashboard.style";
import { useDashboard } from "./useDashboard";

const Dashboard = () => {
    const { moviesData: { movieList }, loadInitialData, loadMoreData, search, filteredMovieList } = useDashboard();
    const [searchEnabled, setSearchEnabled] = useState(false);
    const [searchText, setSearchText] = useState('');

    useEffect(() => {
        loadInitialData();
    }, [])

    const renderListItem = ({ item }) => {
        return <ItemContainer>
            <ImageWithHandledError style={style.thumbnailImage} uri={IMAGES[item["poster-image"]]} />
            <TitleText numberOfLines={1}>{item.name}</TitleText>
        </ItemContainer>
    }

    const emptyListComponent = () => {
        return <EmptyText numberOfLines={1}>{NO_DATA_FOUND}</EmptyText>
    }

    const onChangeText = (value) => {
        setSearchText(value);
        search(value?.trim())
    }

    const onSearchClick = () => {
        setSearchEnabled(true)
        setSearchText('');
    }

    const onBackPress = () => {
        setSearchEnabled(false)
        setSearchText('')
    }

    return (
        <SafeAreaView>
            <ImageBackgroundHeader source={IMAGES.nav_bar}>
                <Header>
                    <HeaderTitleContainer>
                        <IconContainer testID="back-icon" onPress={onBackPress}>
                            <ImgIcon source={IMAGES.back} />
                        </IconContainer>
                        {searchEnabled ?
                            <TextInput placeholder="Search" testID="search-input" autoFocus style={{ color: WHITE }} value={searchText} onChangeText={onChangeText} /> :
                            <HeaderTitleText>{TITLE}</HeaderTitleText>
                        }

                    </HeaderTitleContainer>
                    {!searchEnabled &&
                        <IconContainer testID="search-icon" onPress={onSearchClick}>
                            <ImgIcon source={IMAGES.search} />
                        </IconContainer>
                    }
                </Header>
            </ImageBackgroundHeader>
            <FlatList
                testID="movie-list"
                numColumns={3}
                data={searchText?.length > 0 ? filteredMovieList : movieList}
                contentContainerStyle={style.flatlistContainer}
                onEndReachedThreshold={0.5}
                showsVerticalScrollIndicator={false}
                onEndReached={loadMoreData}
                renderItem={renderListItem}
                ListEmptyComponent={emptyListComponent}
            />
        </SafeAreaView>
    )
}

export default Dashboard;
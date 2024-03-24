import React, {useEffect, useState} from 'react';
import {FlatList, SafeAreaView, TextInput} from 'react-native';
import {IMAGES, NO_DATA_FOUND, SEARCH, TITLE} from '../../common/constants';
import ImageWithHandledError from '../../components/imageWithHandledError';
import {LIGHT_GREY, WHITE} from '../../theme/colors';
import {
  EmptyText,
  Header,
  HeaderTitleContainer,
  HeaderTitleText,
  IconContainer,
  ImageBackgroundHeader,
  ImgIcon,
  ItemContainer,
  TitleText,
  style,
} from './dashboard.style';
import {useDashboard} from './useDashboard';

const Dashboard = () => {
  const {
    moviesData: {movieList},
    filteredMovieList,
    searchEnabled,
    searchText,
    enableSearch,
    loadInitialData,
    loadMoreData,
    search,
  } = useDashboard();

  useEffect(() => {
    loadInitialData();
  }, []);

  //Render list item for every movie
  const renderListItem = ({item}) => {
    return (
      <ItemContainer>
        <ImageWithHandledError
          style={style.thumbnailImage}
          uri={IMAGES[item['poster-image']]}
        />
        <TitleText numberOfLines={1}>{item.name}</TitleText>
      </ItemContainer>
    );
  };

  //Show alt text when no data is found
  const emptyListComponent = () => {
    return <EmptyText numberOfLines={1}>{NO_DATA_FOUND}</EmptyText>;
  };

  //call if search is clicked
  const onSearchClick = () => {
    enableSearch(true);
  };

  //call if back is clicked
  const onBackPress = () => {
    enableSearch(false);
  };

  return (
    <SafeAreaView>
      <ImageBackgroundHeader source={IMAGES.nav_bar}>
        <Header>
          <HeaderTitleContainer>
            <IconContainer testID="back-icon" onPress={onBackPress}>
              <ImgIcon source={IMAGES.back} />
            </IconContainer>
            {searchEnabled ? (
              <TextInput
                placeholderTextColor={LIGHT_GREY}
                placeholder={SEARCH}
                testID="search-input"
                autoFocus
                style={{color: WHITE}}
                value={searchText}
                onChangeText={search}
              />
            ) : (
              <HeaderTitleText>{TITLE}</HeaderTitleText>
            )}
          </HeaderTitleContainer>
          {!searchEnabled && (
            <IconContainer testID="search-icon" onPress={onSearchClick}>
              <ImgIcon source={IMAGES.search} />
            </IconContainer>
          )}
        </Header>
      </ImageBackgroundHeader>
      <FlatList
        testID="movie-list"
        numColumns={3}
        keyboardShouldPersistTaps={'always'}
        data={searchText?.length > 0 ? filteredMovieList : movieList}
        contentContainerStyle={style.flatlistContainer}
        onEndReachedThreshold={0.5}
        showsVerticalScrollIndicator={false}
        onEndReached={loadMoreData}
        renderItem={renderListItem}
        ListEmptyComponent={emptyListComponent}
      />
    </SafeAreaView>
  );
};

export default Dashboard;

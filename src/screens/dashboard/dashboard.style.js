import { Dimensions, Image, ImageBackground, StyleSheet, Text, TouchableHighlight, View } from "react-native";
import styled from "styled-components";
import { WHITE } from "../../theme/colors";
import { FONT_LINE_HEIGHT_LARGE, FONT_SIZE_LARGE, HEADER_BG_HEIGHT, SMALL_ICON_SIZE, SPACING_1X, SPACING_2X, SPACING_3X } from "../../theme/dimens";
import { FONT_FAMILY_TITILLIUM_WEB_LIGHT, FONT_FAMILY_TITILLIUM_WEB_REGULAR } from "../../theme/fonts";

const {width} = Dimensions.get('window')
const thumbnailDimension = (width-56)/3; //This is calulated as per spacing between the items

export const TitleText = styled(Text)`
    font-family: ${FONT_FAMILY_TITILLIUM_WEB_LIGHT};
    color: ${WHITE};
    max-width: ${thumbnailDimension}px;
`;

export const ItemContainer = styled(View)`
    padding: ${SPACING_1X}px;
`

export const Header = styled(View)`
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`

export const HeaderTitleContainer = styled(View)`
    flex-direction: row;
`

export const ImageBackgroundHeader = styled(ImageBackground)`
    position: absolute;
    height: ${HEADER_BG_HEIGHT}px;
    left: 0;
    right: 0;
    zIndex: 9;
`

export const HeaderTitleText = styled(Text)`
    font-family: ${FONT_FAMILY_TITILLIUM_WEB_REGULAR};
    color: ${WHITE};
    font-size: ${FONT_SIZE_LARGE}px;
    line-height: ${FONT_LINE_HEIGHT_LARGE}px;
`

export const EmptyText = styled(Text)`
    font-family: ${FONT_FAMILY_TITILLIUM_WEB_REGULAR};
    color: ${WHITE};
    margin: ${SPACING_3X}px;
`

export const IconContainer = styled(TouchableHighlight)`
    padding: ${SPACING_2X}px;
`

export const ImgIcon = styled(Image)`
    height: ${SMALL_ICON_SIZE}px;
    width: ${SMALL_ICON_SIZE}px;
`

export const style = StyleSheet.create({
    thumbnailImage : {
        width: thumbnailDimension,
        height: thumbnailDimension*3/2
    },
    flatlistContainer: {
        padding: SPACING_1X,
        marginTop: 30,
        paddingBottom: 30
    }
})
import React from 'react';
import { Image, StyleSheet } from 'react-native';
import theme from '../../assets/themes';

const ListImage = ({image}) => {
    return (
        <Image
        source={image.background}
        style={styles.galleryImage}
        />
        
    );
};
const styles = StyleSheet.create({
    galleryImage:{
        height: theme.imageHeight.l,
        width: theme.imageHeight.l,
        margin: 2,
    },
})
export default ListImage;

import React from 'react';
import { View ,Text, StyleSheet, FlatList} from 'react-native';
import theme from '../../assets/themes';
import ListImage from './ListImage';


const ImageGallery = ({images}) => {
    console.log(images);
    return (
        <View style={styles.GalleryContainer}>      
            <Text style={styles.GalleryText}> Photos </Text>

            <FlatList
            data={images}
            keyExtractor={items => items.id }
            numColumns={3}
            scrollEnabled={false}
            renderItem={({item}) => <ListImage image={item}/> }
            />

        </View>
    );
};
const styles = StyleSheet.create({
    GalleryContainer:{
        alignItems: 'center',
        marginBottom: theme.spacing.m,

    },
    GalleryText:{
        ...theme.textVariants.body3,
        color:theme.colors.gray,

    },

})

export default ImageGallery;
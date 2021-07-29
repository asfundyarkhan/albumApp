import React from 'react';
import { View , Text, ScrollView, StyleSheet, StatusBar} from 'react-native';
import TitleCard from './TitleCard';
import Avatars from './Avatars';
import theme from '../../assets/themes';
import ImageGallery from './ImageGallery';
import backgroundImages from '../../assets/data/backgroundImages';

const SharedAlbum = ({route}) => {
    const {album}= route.params;
    return (
        <ScrollView>
            <TitleCard album= {album} />
            <View style={styles.avatarContainer}>
            <Avatars  avatars={album.avatars}/>
            <Text style={styles.avatarContainerText}>{`${album.avatars.length} people`}</Text>
            </View>

                <ImageGallery images = {backgroundImages} />

        </ScrollView>
    );
};
const styles=StyleSheet.create({
    avatarContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: theme.colors.gray,
        marginVertical: theme.spacing.l,
        marginHorizontal: theme.spacing.m,
        paddingHorizontal: theme.spacing.l,
        paddingVertical: theme.spacing.xs,
        borderRadius: theme.borderRadius.m,

    },
    avatarContainerText:{
        ...theme.textVariants.body1,
        color: theme.colors.white,
    },
})

export default SharedAlbum;
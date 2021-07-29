import React from 'react';
import {View , Text, ImageBackground ,StyleSheet} from 'react-native';
import theme from '../../assets/themes';

const TitleCard = ({album}) => {
    return (
        <ImageBackground
        source={ album.background }
        style={styles.ImageBackground}
        >
        <View style={styles.imageContentContainer}>
            <View>
                <Text style={styles.imageTitle}>{album.title}</Text>
                <Text style={styles.imageSubTitle}>{`Created by ${album.user}` }</Text>
            </View>

            <View>
                <Text style={styles.imageNumber}>102 photos</Text>
            </View>
        </View>

        </ImageBackground>
    );
};
const styles = StyleSheet.create({
    ImageBackground :{
        resizeMode:'cover',
        overflow: 'hidden',
        height: theme.imageHeight.l,
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        paddingHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.m,
        borderRadius: theme.borderRadius.m,
        justifyContent: 'flex-end',

    },
    imageContentContainer:{
        flexDirection:'row',
        alignItems:'flex-end',
        justifyContent: 'space-between',
    },
    imageTitle:{
        ...theme.textVariants.h1,
        color: theme.colors.white,


    },
    imageSubTitle:{
        ...theme.textVariants.body2,
        color: theme.colors.white,

    },
    imageNumber:{
        ...theme.textVariants.body3,
        color: theme.colors.gray,
    },

})

export default TitleCard;
import React from 'react';
import {View , Text, ImageBackground, StyleSheet, Pressable} from 'react-native';
import theme from '../../assets/themes';
import Avatars from './Avatars';


const Card = ({item , navigation}) => {
    return (
     <ImageBackground
     source={item.background}
     style={styles.ImageBackground}
     >
         <Pressable onPress={() => navigation.navigate("SharedAlbum" , {album:item})}>
             <View style={styles.imageContentContainer}>
                 <View>
                     <Text style={styles.imageTitle}>{item.title}</Text>
                     <Text style={styles.imageSubtitle}>{`Created by ${item.user}`}</Text>
                 </View>
            <View>
                {/*avatars GO here*/}
                <Avatars avatars={item.avatars} />
            </View>

            </View>
         </Pressable>

     </ImageBackground>
        
    );
};
const styles= StyleSheet.create({
    ImageBackground:{
        resizeMode:'cover',
        overflow:'hidden',
        height: theme.imageHeight.s,
        marginTop:theme.spacing.m,
        marginHorizontal:theme.spacing.m,
        paddingHorizontal:theme.spacing.m,
        borderRadius:theme.borderRadius.m,
    },
    imageContentContainer:{
        flexDirection:'row',
        alignItems:'center',
        justifyContent:'space-between',

    },
    imageTitle:{
        ...theme.textVariants.h1,
        color: theme.colors.white,
    },
    imageSubtitle:{
        ...theme.textVariants.body2,
        color: theme.colors.white,
    },

})

export default Card;
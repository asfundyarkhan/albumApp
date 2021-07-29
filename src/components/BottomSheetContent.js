import React from 'react';
import { Text, View ,StyleSheet, TouchableOpacity} from 'react-native';
import theme from '../../assets/themes';

const BottomSheetContent = ({handleClose}) => {
    return (
        <View style={styles.contentWrapper}>
            <TouchableOpacity onPress={console.log("hellow")} style={styles.largeButton}>
             
             <Text style={styles.buttonTitle}>Create New Album</Text>

            </TouchableOpacity>
            <TouchableOpacity onPress={handleClose} style={styles.smallButton}>
                
                <Text style={styles.buttonTitle}>Cancle</Text>

            </TouchableOpacity>
        </View>
        
    );
};
const styles=StyleSheet.create({
    contentWrapper:{
        backgroundColor: theme.colors.lightGray,
        padding: theme.spacing.m,
        height: 250,
    },
    largeButton:{
        marginTop: theme.spacing.sm,
        marginHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.l,
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.m,
        alignItems: 'center',
        shadowColor: theme.colors.black,
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4 ,
    },
    buttonTitle:{
        ...theme.textVariants.h2,

    },
    smallButton:{
        marginTop: theme.spacing.m,
        marginHorizontal: theme.spacing.m,
        paddingVertical: theme.spacing.m,
        backgroundColor: theme.colors.white,
        borderRadius: theme.borderRadius.m,
        alignItems: 'center',
        shadowColor: theme.colors.black,
        shadowOffset:{
            width: 0,
            height: 2,
        },
        shadowOpacity: 0.1,
        shadowRadius: 8,
        elevation: 4 ,
    },
})
export default BottomSheetContent;
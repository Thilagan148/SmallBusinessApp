import React from 'react';
import { View, StyleSheet, Text, ScrollView, FlatList } from 'react-native';
import Firebase from '../firebaseConfig';
import { Avatar, Title, Subheading, Paragraph, Caption, Button } from 'react-native-paper';

const ProfileDetails = ({setUserLoginState}) => {
       
    const signOutUser = () => {
        Firebase.auth().signOut().then((res) => {
            setUserLoginState(null);
        })
    }
    return(
        <ScrollView style={styles.container}>
            <View style={styles.header}>
                <Avatar.Image size={100} source={require('../assets/user_signin.png')} style={styles.avatar} />
                <Text style={styles.buyersCount}>200</Text>
                <Text style={styles.buyersTag}>BUYERS</Text>
                <Text style={styles.productsCount}>210</Text>
                <Text style={styles.productsTag}>SOLD</Text>
            </View>
            <View style={styles.body}>
                <Title>STORENAME</Title>
                <Subheading>username</Subheading>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
                <Caption>12, jhon Doe street, chennai, Tamil Nadu, India </Caption>
                <Button style={styles.editprofile}>Edit profile</Button>
            </View>
            <Text style={styles.productGalleryTopic}>PRODUCT GALLERY</Text>
            <View style={styles.gallery}>
                <FlatList numColumns={3} style={styles.galleryList} />
            </View>
            <Button onPress={signOutUser} style={styles.signout} >SIGN OUT</Button>
            
        </ScrollView>
    );
}

const styles = StyleSheet.create({
    container : {
        flex : 1,
        alignContent : "center",
        backgroundColor:"#fff"
    },
    header:{
        backgroundColor:"#d8e3e3",
        padding:10
    },
    avatar : {
        marginTop : 20,
    },
    buyersCount:{
        position:"absolute",
        marginTop:65,
        marginLeft:155
    },
    buyersTag:{
        position:"absolute",
        marginTop:85,
        marginLeft:150
    },
    productsCount:{
        position:"absolute",
        marginTop:65,
        marginLeft:275
    },
    productsTag:{
        position:"absolute",
        marginTop:85,
        marginLeft:270
    },
    body:{
        padding:10,
        borderBottomWidth:1,
        borderBottomColor:"#D3D3D3"
    },
    editprofile:{

    },
    signout:{
        color:"#211F47"
    },
    gallery:{
        borderTopWidth:1,
        borderTopColor: "#D3D3D3",
        
    },
    productGalleryTopic:{
        textAlign:"center",
        padding:10
    },
    galleryList:{
        
    }
});

export default ProfileDetails;
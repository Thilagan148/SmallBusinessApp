import React from 'react';
import { View, Text, ScrollView, FlatList, Image } from 'react-native';
import { Avatar, Title, Subheading, Paragraph, Caption, Button } from 'react-native-paper';
import Firebase from '../../../firebaseConfig';
import {DetailStyles} from '../../Styles'

const ProfileDetails = ({setUserLoginState}) => {
    let productImagesArray = [
        {
            image: require("../../../assets/SampleProducts/macbook_pro.jpg")
        },
        {
            image: require("../../../assets/SampleProducts/shirt.jpg")
        },
        {
            image: require("../../../assets/SampleProducts/red_hoodie.jpg")
        },
        {
            image: require("../../../assets/SampleProducts/marshmallow_hoodie.jpg")
        }
    ]
       
    const signOutUser = () => {
        Firebase.auth().signOut().then((res) => {
            setUserLoginState(null);
        })
    }
    return(
        <ScrollView style={DetailStyles.container}>
            <View style={DetailStyles.header}>
                <Avatar.Image size={100} source={require('../../../assets/user_signin.png')} style={DetailStyles.avatar} />
                <Text style={DetailStyles.buyersCount}>200</Text>
                <Text style={DetailStyles.buyersTag}>BUYERS</Text>
                <Text style={DetailStyles.productsCount}>210</Text>
                <Text style={DetailStyles.productsTag}>SOLD</Text>
            </View>
            <View style={DetailStyles.body}>
                <Title>STORENAME</Title>
                <Subheading>username</Subheading>
                <Paragraph>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</Paragraph>
                <Caption>12, jhon Doe street, chennai, Tamil Nadu, India </Caption>
                <Button icon="account-edit" style={DetailStyles.editprofile}>Edit profile</Button>
            </View>
            <Text style={DetailStyles.productGalleryTopic}>PRODUCT GALLERY</Text>
            <View style={DetailStyles.gallery}>
                <FlatList
                    numColumns={2} 
                    style={DetailStyles.galleryList} 
                    data={productImagesArray} 
                    renderItem={({item})=>{
                        return <Image source={item.image} style={DetailStyles.listImage} />
                    }}
                />
                <Button icon="plus" onPress={()=>console.log("Add product pressed")}>Add product</Button>
            </View>

            <Button icon="exit-to-app" onPress={signOutUser} style={DetailStyles.signout} >SIGN OUT</Button>
            
        </ScrollView>
    );
}


export default ProfileDetails;
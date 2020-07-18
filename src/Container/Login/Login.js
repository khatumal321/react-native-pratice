import React from 'react';
import {
    SafeAreaView,
    StyleSheet,
    ScrollView,
    View,
    Text,
    StatusBar,
    CheckBox,
    isSelected,
    Image
} from 'react-native';
import {Button} from 'native-base';
import { Link } from '@react-navigation/native';
import Input2 from './../../Component/Input/Input';
import GoogleBtn from './../../Component/googleBtn/googleBtn';
import FbBtn from './../../Component/FbBtn/FbBtn'
import { TextInput } from 'react-native-gesture-handler';

function Login(props) {

    return (
        <SafeAreaView >
        <ScrollView >
        <View style = { styles.contanier } >
        <Image source = { require('./../../Container/Login/logo.png') }
        style = { styles.logo }
        /> 
        <Text style = { styles.text } > Be Alive.Be Yourself.</Text> 
        <Input2  value='Phone Number'/>
        <Input2 value="Password"/>

        < View style = {{ flexDirection: 'row', marginRight: 10, paddingTop: 15 } } >
        <CheckBox
        // value={isSelected}
        // onValueChange={setSelection}
        />
        <Text style = {{ color: '#808080', marginTop: 5, fontSize: 13 } } > Remember Phone Number </Text> 
            <Text style = {{ color: '#808080', marginTop: 5, fontSize: 13, marginLeft: 70 } } > Forget password </Text> 
            </View>

        { /* <View> */ } 
        <View style = { styles.btnView } >
        <Button 
        bordered 
        style = { styles.button }
        onPress = {() => props.navigation.navigate('Home') }
        >
            <Text style={{fontSize: 20, color: 'white'}}>Sign In</Text>
        </Button> 
        <Link onPress = {() => props.navigation.navigate('SignUp') }
        style = {{ color: '#808080', marginTop: 15, fontSize: 15, textAlign: 'right' } } > Don 't have an account?</Link> 
        </View>
        <View style = {{ marginTop: 30 } } >
        <GoogleBtn />
        </View> 

        <View style = { { marginTop: 20 } } >
        <FbBtn />
        </View> 
        <Text style = { styles.policy } >
        By logging in you agree to the < Link to = '#' > Terms of Service </Link> and Privacy Policy.{"\n"}
        You also confirm that you are 13 years or olders. 
        </Text> 
        { /* </View> */ }

        </View> 
        </ScrollView> 
        </SafeAreaView>
    )
}




const styles = StyleSheet.create({
    contanier: {
        paddingTop: 50,
        flex: 1,
        height: 790,
        alignItems: 'center',
        backgroundColor: 'white',
    },
    btnView: {
        marginTop: 20,
    },
    button:{
        width: 350,
        height: 60,
        backgroundColor: '#D9D9D9',
        borderColor: '#D9D9D9',
        borderWidth: 1,
        justifyContent: 'center'
    },
    logo: {
        width: 120,
        height: 120,
    },
    text: {
        fontWeight: 'bold',
        paddingBottom: 33,
    },
    policy: {
        color: '#808080',
        // padding: 10,
        paddingTop: 20,
        fontSize: 11
    },



});

export default Login;
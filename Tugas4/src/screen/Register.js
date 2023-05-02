import React from 'react';
import { 
   View, 
   Text,
   ScrollView,
   KeyboardAvoidingView,
   Image,
   TextInput,
   TouchableOpacity,
   StyleSheet,
   Dimensions,
   Alert
} from 'react-native';
import AuthNavigation from '../AuthNavigation';

// function handleRegister({ navigation, route }) {
//    // Proses pendaftaran akun di sini
//    // ...
//    // Jika berhasil, arahkan ke halaman Login
//    Alert.alert('Pendaftaran berhasil', 'Akun anda berhasil didaftarkan.', [
//       { text: 'OK', onPress: () => navigation.navigate('AuthNavigation') },
//    ]);


// }


const Register = ({
   navigation,
   route
   
}) => {
   return(
      
      <View style={{flex: 1, backgroundColor: '#fff'}}>
         <ScrollView //component yang digunakan agar tampilan kita bisa discroll
            showsVerticalScrollIndicator={false}
            contentContainerStyle={{paddingBottom: 10}}
         >
            
            <KeyboardAvoidingView //component yang digunakan untuk mengatur agar keyboard tidak menutupi
               behavior='padding' //tampilan form atau text input
               enabled
               keyboardVerticalOffset={-500}
            >
               <Image
                  source={require('./../asset/image/image_login.png')} //load atau panggil asset image dari local
                  style={{
                     width: Dimensions.get('window').width, //atur agar lebar gambar adalah selebar layar device
                     height: 317
                  }}
               />
               <View style={{                  
                  width: '100%',
                  backgroundColor: '#fff',
                  borderTopLeftRadius: 19,
                  borderTopRightRadius: 19,
                  paddingHorizontal: 20,
                  paddingTop: 38,
                  marginTop: -20
               }}>
                 <Text style={{color: 'red', fontWeight: 'bold'}}>
                     Nama
                  </Text> 
                  <TextInput //component yang digunakan untuk memasukkan data yang kita inginkan
                     placeholder='Enter your name' //pada tampilan ini, kita ingin user memasukkan email
                     style={{
                        marginTop: 15,
                        width: '100%',
                        borderRadius: 8,
                        backgroundColor: '#F6F8FF',
                        paddingHorizontal: 10
                     }}
                     keyboardType="email-address" //akan muncul tombol @ pada keyboard yang nanti akan memudahkan user mengisi email
                  />
                  <Text style={{color: 'red', fontWeight: 'bold'}}>
                     Email
                  </Text> 
                  <TextInput //component yang digunakan untuk memasukkan data yang kita inginkan
                     placeholder='Enter your Email' //pada tampilan ini, kita ingin user memasukkan email
                     style={{
                        marginTop: 15,
                        width: '100%',
                        borderRadius: 8,
                        backgroundColor: '#F6F8FF',
                        paddingHorizontal: 10
                     }}
                     keyboardType="Youremail@mail.com" //akan muncul tombol @ pada keyboard yang nanti akan memudahkan user mengisi email
                  />
                  <Text style={{color: 'red', fontWeight: 'bold', marginTop: 15}}>
                     Password
                  </Text>
                  <TextInput //component yang digunakan untuk memasukkan data password
                     placeholder='Enter Password'
                     secureTextEntry={true} //props yang digunakan untuk menyembunyikan password user
                     style={{
                        marginTop: 15,
                        width: '100%',
                        borderRadius: 8,
                        backgroundColor: '#F6F8FF',
                        paddingHorizontal: 10
                     }}
                  />
                   <Text style={{color: 'red', fontWeight: 'bold'}}>
                     Confirm Password
                  </Text> 
                  <TextInput //component yang digunakan untuk memasukkan data yang kita inginkan
                     placeholder='Re-entered password' //pada tampilan ini, kita ingin user memasukkan email
                     style={{
                        marginTop: 15,
                        width: '100%',
                        borderRadius: 8,
                        backgroundColor: '#F6F8FF',
                        paddingHorizontal: 10
                     }}
                     keyboardType="email-address" //akan muncul tombol @ pada keyboard yang nanti akan memudahkan user mengisi email
                  />
                  
                  <View style={{
                     width: '100%',
                     flexDirection: 'row',
                     alignItems: 'center',
                     marginTop: 15,
                     justifyContent: 'space-between'
                  }}>
                     <View style={{
                        flexDirection: 'row',
                        alignItems: 'center'
                     }}>
                        {
                           //component TouchableOpacity, kita gunakan sebagai tombol
                           //menggunakan component ini sebagai tombol, karena mudah untuk di atur style dan kegunaanya
                        }
                        <TouchableOpacity>
                           <Image
                              source={require('./../asset/icon/google_ic.png')} //load asset dari local
                              style={{
                                 width: 20, 
                                 height: 20, 
                                 resizeMode: 'contain'
                              }}
                           />
                        </TouchableOpacity>
                        <TouchableOpacity>
                           <Image
                              source={require('./../asset/icon/facebook_ic.png')}
                              style={{
                                 width: 20, 
                                 height: 20, 
                                 marginHorizontal: 15, 
                                 resizeMode: 'contain'
                              }}
                           />
                        </TouchableOpacity>
                        <TouchableOpacity>
                           <Image
                              source={require('./../asset/icon/twitter_ic.png')}
                              style={{
                                 width: 20, 
                                 height: 20, 
                                 resizeMode: 'contain'
                              }}
                           />
                        </TouchableOpacity>
                     </View>
                    
                  </View>
                  <TouchableOpacity
                     onPress={() => navigation.navigate('Login')}
                     style={{
                        width: '100%',
                        marginTop: 30,
                        backgroundColor: '#BB2427',
                        borderRadius: 8,
                        paddingVertical: 15,
                        justifyContent: 'center',
                        alignItems: 'center'
                     }}
                  >
                     <Text style={{
                        color: '#fff', 
                        fontSize: 16, 
                        fontWeight: 'bold'
                     }}>
                        Register
                     </Text>
                  </TouchableOpacity>
                  <View style={{
                     width: '100%',
                     justifyContent: 'center',
                     alignItems: 'center',
                     marginTop: 20,
                     flexDirection: 'row',
                  }}>
                     <Text style={{
                        fontSize: 12, 
                        color: '#717171'
                     }}>
                        Have An Account?
                     </Text>
                     <TouchableOpacity onPress={() => navigation.navigate('Login')}>
                        <Text style={{
                           fontSize: 14, 
                           color: '#BB2427', 
                           marginLeft: 5
                        }}>
                           Login
                        </Text>
                     </TouchableOpacity>
                  </View>
               </View>               
            </KeyboardAvoidingView>
         </ScrollView>
      </View>
   )
}
export default Register;

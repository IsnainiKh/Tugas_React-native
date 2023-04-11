import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  Container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
    alignItems: 'center',
    justifyContent: 'center',
  },

  txtTitleSign: {
    fontSize: 18,
    alignSelf: 'center',
    color: '#5B5B5B',
  },
  txtLoginWith: {
    fontSize: 11,
    alignSelf: 'center',
    color: '#2e3283',
    marginHorizontal: 10,
    
  },
  inputEmail: {
    height: 43,
    width: 273,
    padding: 10,
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  inputSandi: {
    height: 43,
    width: 273,
    padding: 10,
    backgroundColor: 'white',
    borderRadius: 5,
  },
  btnLogin: {
    height: 43,
    width: 273,
    backgroundColor: '#2e3283',
    borderRadius: 5,
    alignItems: 'center',
    justifyContent: 'center',
    marginVertical: 20,
  },
  textLogin: {
    fontSize: 12,
    color: 'white',
  },
  btnForgotPw: {
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBtnForgotPw: {
    fontSize: 11,
    color: '#2E3283',
  },
  rowLoginWith: {
    flexDirection: 'row',
    alignItems: 'center',
    marginTop: 20,
    marginBottom: 20,
  },
  LineView:{
    backgroundColor:'#959595',
    width:95,
    height:2,
    alignItems: 'center',
  },

  ContainerimageRow: {
    flexDirection: 'row',
    //marginHorizontal: 20,
  },
  ContainerimageColumn: {
    flexDirection: 'row',
    //padding: 20
  },
  textVersion:{
    marginTop: 10,
    alignSelf: "center"
  },
  ContainerSignUp:{
    width: '100%',
    height: 35,
    backgroundColor: '#ffff',
    position:'absolute',
    bottom: 0,
    alignItems:'center',
    justifyContent: 'center',
    flexDirection: "row",
  },
  textDHA:{
    fontSize:14,
    color: '#5b5b5b',
    
  },
  btnTextSignup:{
    
  },
  textSignup:{
    fontWeight: 'bold',
    fontSize:14,
    color: '#5b5b5b',
    justifyContent:'center',
  }
});

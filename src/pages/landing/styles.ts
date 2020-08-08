import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#8257E5',
    justifyContent: 'center',
    padding: 40,
  },

  banner: {
    width: '100%',
    resizeMode: 'contain',
  },
  
  title: {
    fontFamily: 'Poppins_400Regular',
    color: '#fff',
    fontSize: 27,
    lineHeight: 30,
    marginTop: 80,
  },

  titleBold: {
    fontWeight: 'bold',
    fontFamily: 'Poppins_600SemiBold',
  },

  buttonsContainer: {
    marginTop: 45,
    justifyContent: 'space-between',
    flexDirection: 'row',
  },

  button: {
    height: 150,
    width:'46%',
    backgroundColor: '#333',
    borderRadius: 8,
    padding: 25,
    justifyContent: 'space-between',
  },

  buttonPrimary: {
    backgroundColor: '#9871f5',
  },

  buttonSecondary: {
    backgroundColor: '#04d361',
  },

  buttonText: {
    fontFamily: 'Archivo_700Bold',
    color: '#fff',
    fontSize: 20,
  },

  totalConnections: {
    fontFamily: 'Poppins_400Regular',
    color: '#d4c2ff',
    fontSize: 12,
    lineHeight: 20,
    maxWidth: 200,
    marginLeft: 70,
    marginTop: 40,
  }
})

export default styles;
import React from 'react'
import { View, Image, Text } from 'react-native'
import { RectButton } from 'react-native-gesture-handler'

import heartOutlineIcon from '../../assets/images/icons/heart-outline.png'
import unfavoriteIcon from '../../assets/images/icons/unfavorite.png'
import whatsappIcon from '../../assets/images/icons/whatsapp.png'

import styles from './styles'


function TeacherItem () {
  return (
    <View style={styles.container}>
      <View style={styles.profile}>
        <Image
          style={styles.avatar}
          source={{ uri:'https://avatars3.githubusercontent.com/u/53788301?s=460&u=91074cdc7e409d97dfe3d54541cbcf955af50040&v=4' }}
          />

          <View style={styles.profileInfo}>
            <Text style={styles.name}>Matheus Tasso</Text>
            <Text style={styles.subject}>Programação</Text>
          </View>
      </View>

      <Text style={styles.bio}>
        Apaixonado por desenvolvimento web e mobile.
        {'\n'}{'\n'}
        Ama programação e design, o que o levou a procurar sempre aperfeiçoar as skills de frontend e mobile developer.
      </Text>

      <View style={styles.footer}>
        <Text style={styles.price}>
          Preço/hora {'   '}
          <Text style={styles.priceValue}>R$ 50,00</Text>
        </Text>

        <View style={styles.buttonsContainer}>
          <RectButton style={[styles.favoriteButton, styles.favorited]}>
            {/* <Image source={heartOutlineIcon}/> */}
            <Image source={unfavoriteIcon}/>
          </RectButton>

          <RectButton style={styles.contactButton}>
            <Image source={whatsappIcon}/>
            <Text style={styles.contactButtonText}>Entrar em contato</Text>
          </RectButton>

        </View>
      </View>
    </View>
  )
}

export default TeacherItem
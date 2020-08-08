import React, { useState } from 'react'
import { View, Text, ScrollView, TextInput } from 'react-native'
import { Feather } from '@expo/vector-icons'

import TeacherItem from '../../components/TeacherItem'
import PageHeader from '../../components/PageHeader'

import styles from './styles'

import { BorderlessButton, RectButton } from 'react-native-gesture-handler'


function TeacherList() {
  const [isFiltersVisible, setIsFilterVisible] = useState(false)

  function handleToggleFiltersVisible(){
    setIsFilterVisible(!isFiltersVisible)
  }

  return (
    <View style={styles.container}>
      <PageHeader 
        title='Proffys disponíveis' 
        headerRight={(
          <BorderlessButton onPress={handleToggleFiltersVisible} >
            <Feather name="filter" size={28} color="#fff" />
          </BorderlessButton>
        )} 
        >
        { isFiltersVisible && (
          <View style={styles.searchForm}>
              <Text style={styles.label}>Matéria</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Matéria desejada"
                  placeholderTextColor="#c1bccc"
                />
            
            <View style={styles.inputGroup}>
                <View style={styles.inputBlock}>
                  <Text style={styles.label}>Dia da semana</Text>
                  <TextInput
                    style={styles.input}
                    placeholder="Dia desejado"
                    placeholderTextColor="#c1bccc"
                  />
                </View>
              

              <View style={styles.inputBlock}>
                <Text style={styles.label}>Horário</Text>
                <TextInput
                  style={styles.input}
                  placeholder="Horário desejado"
                  placeholderTextColor="#c1bccc"
                />
                </View>
            </View>

            <RectButton style={styles.submitButton}>
              <Text style={styles.submitButtonText}>Filtrar</Text>
            </RectButton>
          </View>
        )}
      </PageHeader>

        <ScrollView style={styles.teacherList}
          contentContainerStyle={{
            paddingHorizontal: 16,
            paddinBottom: 16,
          }}
        >
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
          <TeacherItem />
        </ScrollView>
    </View>
  )
}

export default TeacherList
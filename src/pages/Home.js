import React, {useEffect, useState} from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Platform,
  FlatList,
} from 'react-native';

import {Button} from '../components/Button/Button';
import {SkillCard} from '../components/SkillCard/Card';

export function Home() {
  const [newSkills, setNewSkills] = useState('');
  const [mySkills, setMySkills] = useState([]);
  const [grettings, setGrettings] = useState(); // Armazendo hora no state

  function handleAddNewSkill() {
    setMySkills(oldState => [...oldState, newSkills]);
  }
  // Utiliizando useEffect para roda funçao Hora
  useEffect(() => {
    const currentHours = new Date().getHours(); // Função de pegar Hora local

    // Verificando ox Horaios e retornando repota para o cliente
    if (currentHours < 12) {
      setGrettings('good monging');
    } else if (currentHours >= 12 && currentHours < 18) {
      setGrettings('good afternoon');
    } else {
      setGrettings('good night');
    }
  }, []);

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome: Thiago</Text>

      <Text style={styles.greentings}>{grettings}</Text>

      <TextInput
        style={styles.input}
        placeholder="New Skills"
        placeholderTextColor="#5159c1"
        onChangeText={setNewSkills}
      />
      <Button onPress={handleAddNewSkill} />

      <Text style={[styles.title, {marginVertical: 50}]}>my Skills</Text>

      <FlatList
        showsVerticalScrollIndicator={false}
        data={mySkills}
        keyExtractor={item => item}
        renderItem={({item}) => <SkillCard skill={item} />}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#121015',
    paddingVertical: 70,
    paddingHorizontal: 30,
  },
  title: {
    color: '#fff',
    fontSize: 24,
    fontWeight: 'bold',
  },
  input: {
    backgroundColor: '#1f1e25',
    borderColor: '#5159c1',
    borderWidth: 2,
    color: '#fff',
    fontSize: 18,
    padding: Platform.OS === 'ios' ? 15 : 12,
    marginTop: 30,
    borderRadius: 5,
    marginBottom: 20,
  },
  inputTextColor: {
    color: '#5159c1',
  },
  greentings: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
  },
});

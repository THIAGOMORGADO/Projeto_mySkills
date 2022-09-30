import React from 'react';
import {TouchableOpacity, TouchableOpacityProps, Text, StyleSheet} from 'react-native';

interface SkillCardsProps extends TouchableOpacityProps{
  skill: string;
}

export function SkillCard({skill, ...rest} : SkillCardsProps) {
  return (
    <TouchableOpacity 
      style={styles.btnSkill}
      {...rest}
      >
      <Text style={styles.textSkill}>{skill}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  btnSkill: {
    backgroundColor: '#1f1e25',
    padding: 15,
    borderRadius: 50,
    marginTop: 10,
    alignItems: 'center',
  },
  textSkill: {
    color: '#fff',
    fontSize: 22,
    fontWeight: 'bold',
  },
});

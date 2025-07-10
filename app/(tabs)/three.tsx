import React, { useState } from 'react';

import {
  useThemeColor,
  Text,
  TextInput,
  View,
  FlatList,
  SecondaryView,
  CustomButton,
} from '@/components/Themed';
import TodoScreenInfo from '@/components/TodoScreenInfo';
import { Button, StyleSheet, Keyboard } from 'react-native';

export default function TabThreeScreen() {
  const [todos, setTodos] = useState<{ key: string; text: string }[]>([]);
  const [newTodo, setNewTodo] = useState('');

  const handleAddTodo = () => {
    if (newTodo.trim().length === 0) {
      return;
    }
    setTodos((prevTodos) => [
      ...prevTodos,
      { key: Math.random().toString(), text: newTodo },
    ]);
    setNewTodo('');
    Keyboard.dismiss();
  };

  return (
    <View style={styles.container}>
      <SecondaryView style={styles.inputContainer}>
        <TextInput
          style={styles.input}
          placeholder="할 일을 입력해주세요"
          value={newTodo}
          onChangeText={setNewTodo}
        />
        {/* <Button title="추가" onPress={handleAddTodo} /> */}
        <CustomButton style={styles.addButton} onPress={handleAddTodo}>
          <Text> + </Text>
        </CustomButton>
      </SecondaryView>
      <FlatList
        data={todos}
        renderItem={({ item }) => (
          <View style={styles.listItem}>
            <Text>{item.text}</Text>
          </View>
        )}
      />

      <Text>Tab Three</Text>
      <TodoScreenInfo path="app/(tabs)/three.tsx" />
    </View>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 50,
    paddingHorizontal: 20,
  },
  inputContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 20,
  },
  input: {
    flex: 1,
    marginRight: 10,
    padding: 8,
    fontSize: 16,
  },
  listItem: {
    padding: 15,
    marginVertical: 5,
    marginHorizontal: 3,
    borderRadius: 5,
    borderWidth: 1,
    borderColor: '#daf5ff99',
  },
  addButton: {
    // flex: 1,
    width: 60,
    height: 40,
    justifyContent: 'center',
    alignItems: 'center',
    marginVertical: 2,
    marginHorizontal: 3,
    // padding,
  },
});

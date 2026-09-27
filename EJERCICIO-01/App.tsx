import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style = {styles.title}>Diego Moya</Text>
      <Text style = {styles.subtitle}>Cuaderno React Native</Text>
      <Text style = {styles.subtitle}>Curso 2026/27</Text>

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },

    title: {
    fontSize: 40,
    fontWeight: 'bold',
  },
  subtitle: {
    marginTop: 6,
    fontSize: 18,
    color: '#6caad1',
  },
});

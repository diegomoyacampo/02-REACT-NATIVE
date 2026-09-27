import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Text style = {styles.title}>¿Bienvenido!</Text>
        <Text style = {styles.subtitle}>Diseño de interfaces con React Native</Text>      <StatusBar style="auto" />
        <View style = 
        {styles.button}>
          <Text style={styles.buttonText}>COMENZAR</Text>
        </View>
      </View>

      <View style={styles.cardVariant}>
        <Text style={styles.titleVariant}>Nueva tarjeta</Text>
        <Text style={styles.subtitleVariant}>Una tarjeta con variantes</Text>
        <View style={styles.buttonVariant}>
          <Text style={styles.buttonText}>VER MÁS</Text>
        </View>
      </View>

      <StatusBar style="auto" />
    </View>
  );
  
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#d1d5db',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 16,
  },
  card: {
    backgroundColor: 'white',
    padding: 28,
    borderRadius: 20,
  },
  title: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
  },
  subtitle: {
    marginTop: 10,
    fontSize: 22,
    color: '#405470',
    textAlign: 'center',
  },
  button: {
    marginTop: 24,
    backgroundColor: '#af31e0',
    padding: 15,
    borderRadius: 12,
  },
  buttonText: {
    color: 'white',
    textAlign: 'center',
    fontWeight: 'bold',
  },


  //Variante
  cardVariant: {
    backgroundColor: 'lavender',
    padding: 28,
    borderRadius: 20,
  },
  titleVariant: {
    fontSize: 40,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#1f2937',           
  },
  subtitleVariant: {
    marginTop: 10,
    fontSize: 22,
    color: '#4b5563',           
    textAlign: 'center',
  },
  buttonVariant: {
    marginTop: 24,
    backgroundColor: '#10B981', 
    padding: 15,
    borderRadius: 12,
  },
});

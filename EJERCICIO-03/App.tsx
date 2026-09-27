import { Image, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image
          source={{ uri: 'data:image/jpeg;base64,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' }}
          style={styles.avatar}
        />
        <Text style={styles.name}>Diego Moya</Text>
        <Text style={styles.job}>Estudiante Dam</Text>

        <View style={styles.stats}>
          <View style={styles.stat}>
            <Text style={styles.number}>3</Text>
            <Text>Proyectos</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.number}>7</Text>
            <Text>Contacto</Text>
          </View>
          <View style={styles.stat}>
            <Text style={styles.number}>5</Text>
            <Text>Seguidores</Text>
          </View>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    padding: 24,
    backgroundColor: '#bfebbb',
  },
  card: {
    padding: 39,
    borderRadius: 22,
    alignItems: 'center',
    backgroundColor: '#7cc7f1',
  },
  avatar: {
    width: 150,
    height: 150,
    borderRadius: 75,
  },
  name: {
    marginTop: 18,
    fontSize: 33,
    fontWeight: 'bold',
    color: '#e0f7de',
  },
  job: {
    marginTop: 7,
    fontSize: 18,
    color: '#e0f7de',
  },
  stats: {
    flexDirection: 'row',
    gap: 36,
    marginTop: 20,
  },
  stat: {
    alignItems: 'center',
  },
  number: {
    fontSize: 25,
    fontWeight: 'bold',
    color: '#e0f7de',
  },
});
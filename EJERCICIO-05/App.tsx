import { Image, Pressable, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <View style={styles.card}>
        <Image source={{ uri: 'https://images.unsplash.com/photo-1600294037681-c80b4cb5b434?w=600&h=400&fit=crop' }} style={styles.image} />

        <View style={styles.content}>
          <Text style={styles.category}>Tecnología</Text>
          <Text style={styles.offer}>OFERTA</Text>
          <Text style={styles.title}>AirPods</Text>
          <Text style={styles.rating}>⭐ 4.5</Text>

          <View style={styles.bottom}>
            <Text style={styles.price}>50 €</Text>
            <Pressable style={styles.button}>
              <Text style={styles.buttonText}>AGREGAR</Text>
            </Pressable>
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
    backgroundColor: '#b8bfc7',
  },
  card: {
    backgroundColor: 'cyan',
    borderRadius: 18,
    overflow: 'hidden',
  },
  image: {
    width: '100%',
    height: 260,
  },
  content: {
    padding: 25,
  },
  category: {
    color: '#2563eb',
    fontWeight: 'bold',
    fontSize: 16,
  },
  offer: {
    marginTop: 8,
    color: '#dc2626',
    fontWeight: 'bold',
    fontSize: 14,
  },
  title: {
    marginTop: 6,
    fontSize: 24,
    fontWeight: 'bold',
  },
  rating: {
    marginTop: 10,
    fontSize: 18, 
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginTop: 24,
  },
  price: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  button: {
    backgroundColor: '#1f3157',
    paddingVertical: 12,
    paddingHorizontal: 18,
    borderRadius: 10,
  },
  buttonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});
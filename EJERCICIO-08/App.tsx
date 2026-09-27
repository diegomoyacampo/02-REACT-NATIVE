import { FlatList, StyleSheet, Text, View } from 'react-native';

const products = [
  { id: '1', icon: '🎒', name: 'Mochila', price: '45 €' },
  { id: '2', icon: '⌚', name: 'Reloj inteligente', price: '129 €' },
  { id: '3', icon: '🔊', name: 'Altavoz', price: '69 €' },
  { id: '4', icon: '💡', name: 'Lámpara', price: '25 €' },
  { id: '5', icon: '🪑', name: 'Silla', price: '149 €' },
  { id: '6', icon: '🎤', name: 'Micrófono', price: '89 €' },
  { id: '7', icon: '☂️', name: 'Paraguas', price: '19 €' },
  { id: '8', icon: '🕶️', name: 'Gafas de sol', price: '35 €' },
];

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Productos</Text>

      <FlatList
        data={products}
        numColumns={2}
        columnWrapperStyle={styles.row}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => (
          <View style={styles.card}>
            <Text style={styles.icon}>{item.icon}</Text>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.price}>{item.price}</Text>
          </View>
        )}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 18,
    paddingTop: 56,
    backgroundColor: '#f1f5f9',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#172033',
    marginBottom: 18,
  },
  row: {
    gap: 10,
  },
  card: {
    flex: 1,
    backgroundColor: '#fffdf8',
    padding: 16,
    borderRadius: 12,
    marginBottom: 10,
  },
  icon: {
    fontSize: 34,
  },
  name: {
    marginTop: 12,
    fontSize: 16,
    fontWeight: 'bold',
  },
  price: {
    marginTop: 6,
    color: '#0f766e',
    fontWeight: 'bold',
  },
});
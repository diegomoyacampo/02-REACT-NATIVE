import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style = {styles.header}>Noticias del día</Text>

      <NewsCard category="TECNOLOGÍA" title="La IA transforma el desarrollo de software" />
      <NewsCard category="MÓVIL" title="React Native continúa evolucionando" />
      <NewsCard category="CLOUD" title="Las arquitecturas cloud ganan protagonismo" />
      <NewsCard category="CIENCIA" title="Nuevos avances impulsan la investigación espacial" />
    </ScrollView>
  );
}

function NewsCard({ category, title }: { category: string; title: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.category}>{category}</Text>
      <Text style={styles.title}>{title}</Text>
      <Text style={styles.date}>Hace 2 horas</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#eef2f6',
    paddingHorizontal: 22,
  },
  header: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#172033',
    marginTop: 56,
    marginBottom: 22,
  },
  card: {
    backgroundColor: '#fffdf8',
    padding: 17,
    borderRadius: 14,
    marginBottom: 16,
  },
  category: {
    color: '#0f766e',
    fontSize: 12,
    fontWeight: 'bold',
  },
  title: {
    marginTop: 7,
    fontSize: 20,
    fontWeight: 'bold',
  },
  date: {
    marginTop: 10,
    color: '#94a3b8',
  },
});
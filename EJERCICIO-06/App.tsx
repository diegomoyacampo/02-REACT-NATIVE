import { StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dashboard</Text>
      <Text style={styles.subtitle}>Resumen del negocio</Text>


      <View style={styles.grid}>
        <Metric title="Ventas" value="12.450 €" change="+12%" />
        <Metric title="Clientes" value="348" change="+8%" />
        <Metric title="Pedidos" value="1.024" change="+18%" />
        <Metric title="Conversión" value="7,4%" change="+2%" />
        <Metric title="Devoluciones" value="86" change="+5%" />
      </View>
    </View>
  );
}

function Metric({ title, value, change }: { title: string; value: string; change: string }) {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{title}</Text>
      <Text style={styles.value}>{value}</Text>
      <Text style={styles.change}>{change}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 22,
    paddingTop: 64,
    backgroundColor: '#eef2f6',
  },
  title: {
    fontSize: 30,
    fontWeight: 'bold',
    color: '#172033',
  },
  subtitle: {
    color: '#64748b',
    marginTop: 7,
    marginBottom: 24,
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 14,
  },
  card: {
    width: '48%',
    backgroundColor: '#fffdf8',
    padding: 16,
    borderRadius: 12,
  },
  label: {
    color: '#526174',
    fontSize: 14,
  },
  value: {
    fontSize: 25,
    fontWeight: 'bold',
    marginTop: 10,
    color: '#172033',
  },
  change: {
    color: '#15803d',
    fontWeight: 'bold',
    marginTop: 10,
  },
});
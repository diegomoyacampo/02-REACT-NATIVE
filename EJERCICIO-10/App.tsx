import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.greeting}>Buenos días,</Text>
      <Text style={styles.user}>Diego 👋</Text>

      <View style={styles.goalCard}>
        <Text style={styles.goalLabel}>OBJETIVO DIARIO</Text>
        <Text style={styles.steps}>9.120</Text>
        <Text style={styles.stepsLabel}>pasos de 10.000</Text>

        <View style={styles.progressBackground}>
          <View style={styles.progress} />
        </View>

        <Text style={styles.percentage}>91% completado</Text>
      </View>

      <Text style={styles.sectionTitle}>Resumen de hoy</Text>

      <View style={styles.grid}>
        <StatCard icon="🔥" value="610" label="Calorías" />
        <StatCard icon="⏱" value="55 min" label="Actividad" />
        <StatCard icon="❤️" value="69" label="Pulsaciones" />
        <StatCard icon="📍" value="6,3 km" label="Distancia" />
        <StatCard icon="💧" value="1,8 L" label="Agua" />
      </View>

      <Text style={styles.sectionTitle}>Actividad reciente</Text>
      <Activity title="Natación" detail="1,2 km · 32 min" />
      <Activity title="Ciclismo" detail="18 km · 50 min" />
      <Activity title="Yoga" detail="30 min" />
    </ScrollView>
  );
}

function StatCard({ icon, value, label }: { icon: string; value: string; label: string }) {
  return (
    <View style={styles.statCard}>
      <Text style={styles.statIcon}>{icon}</Text>
      <Text style={styles.statValue}>{value}</Text>
      <Text style={styles.statLabel}>{label}</Text>
    </View>
  );
}

function Activity({ title, detail }: { title: string; detail: string }) {
  return (
    <View style={styles.activity}>
      <View>
        <Text style={styles.activityTitle}>{title}</Text>
        <Text style={styles.activityDetail}>{detail}</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff7ed',
    paddingHorizontal: 20,
  },
  greeting: {
    marginTop: 60,
    color: '#9a3412',
    fontSize: 17,
  },
  user: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 24,
    color: '#431407',
  },
  goalCard: {
    backgroundColor: '#7c2d12',
    padding: 24,
    borderRadius: 22,
  },
  goalLabel: {
    color: '#fed7aa',
    fontWeight: 'bold',
  },
  steps: {
    marginTop: 12,
    color: 'white',
    fontSize: 44,
    fontWeight: 'bold',
  },
  stepsLabel: {
    color: '#fed7aa',
  },
  progressBackground: {
    height: 10,
    backgroundColor: '#9a3412',
    borderRadius: 5,
    marginTop: 24,
    overflow: 'hidden',
  },
  progress: {
    width: '91%',
    height: '100%',
    backgroundColor: '#f97316',
  },
  percentage: {
    color: '#fed7aa',
    marginTop: 9,
  },
  sectionTitle: {
    marginTop: 28,
    marginBottom: 12,
    fontSize: 22,
    fontWeight: 'bold',
    color: '#431407',
  },
  grid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 12,
  },
  statCard: {
    width: '48%',
    backgroundColor: 'white',
    borderRadius: 16,
    padding: 18,
  },
  statIcon: {
    fontSize: 28,
  },
  statValue: {
    marginTop: 12,
    fontSize: 21,
    fontWeight: 'bold',
    color: '#431407',
  },
  statLabel: {
    marginTop: 4,
    color: '#9a3412',
  },
  activity: {
    backgroundColor: 'white',
    padding: 16,
    borderRadius: 15,
    marginBottom: 10,
  },
  activityTitle: {
    fontWeight: 'bold',
    color: '#431407',
  },
  activityDetail: {
    marginTop: 4,
    color: '#9a3412',
  },
});

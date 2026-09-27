import { ScrollView, StyleSheet, Text, View } from 'react-native';

export default function App() {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.hello}>Buenos días 👋</Text>
      <Text style={styles.user}>Diego</Text>

      <View style={styles.balanceCard}>
        <Text style={styles.balanceLabel}>Saldo disponible</Text>
        <Text style={styles.balance}>3.150,40 €</Text>
        <Text style={styles.account}>ES00 •••• •••• 4521</Text>
      </View>

      <View style={styles.actions}>
        <QuickAction icon="💸" label="Enviar" />
        <QuickAction icon="🔄" label="Recargar" />
        <QuickAction icon="💳" label="Tarjetas" />
      </View>

      <Text style={styles.sectionTitle}>Últimos movimientos</Text>
      <Movement title="Supermercado" date="Hoy" amount="-42,80 €" />
      <Movement title="Cafetería" date="Ayer" amount="-3,20 €" />
      <Movement title="Nómina" date="20 septiembre" amount="+2.340 €" positivo />
      <Movement title="Electricidad" date="18 septiembre" amount="-74,20 €" />
      <Movement title="Devolución compra" date="15 septiembre" amount="+18,50 €" positivo />
    </ScrollView>
  );
}

type QuickActionProps = {
  icon: string;
  label: string;
};

function QuickAction({ icon, label }: QuickActionProps) {
  return (
    <View style={styles.action}>
      <Text style={styles.actionIcon}>{icon}</Text>
      <Text style={styles.actionLabel}>{label}</Text>
    </View>
  );
}

type MovementProps = {
  title: string;
  date: string;
  amount: string;
  positivo?: boolean;
};

function Movement({ title, date, amount, positivo }: MovementProps) {
  return (
    <View style={styles.movement}>
      <View style={styles.movementInfo}>
        <Text style={styles.movementTitle}>{title}</Text>
        <Text style={styles.movementDate}>{date}</Text>
      </View>
      <Text style={positivo ? [styles.amount, styles.amountPositive] : styles.amount}>{amount}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f8fafc',
    paddingHorizontal: 20,
  },
  hello: {
    marginTop: 60,
    color: '#64748b',
  },
  user: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 24,
  },
  balanceCard: {
    backgroundColor: '#111827',
    borderRadius: 22,
    padding: 24,
  },
  balanceLabel: {
    color: '#cbd5e1',
  },
  balance: {
    color: 'white',
    fontSize: 35,
    fontWeight: 'bold',
    marginTop: 8,
  },
  account: {
    color: '#94a3b8',
    marginTop: 28,
  },
  actions: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 20,
  },
  action: {
    flex: 1,
    alignItems: 'center',
    backgroundColor: 'white',
    marginHorizontal: 4,
    paddingVertical: 16,
    borderRadius: 16,
  },
  actionIcon: {
    fontSize: 24,
  },
  actionLabel: {
    marginTop: 6,
    fontSize: 13,
    fontWeight: 'bold',
    color: '#334155',
  },
  sectionTitle: {
    fontSize: 22,
    fontWeight: 'bold',
    marginTop: 28,
    marginBottom: 12,
  },
  movement: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 14,
    marginBottom: 10,
  },
  movementInfo: {
    flex: 1,
  },
  movementTitle: {
    fontWeight: 'bold',
  },
  movementDate: {
    marginTop: 3,
    color: '#94a3b8',
  },
  amount: {
    fontWeight: 'bold',
  },
  amountPositive: {
    color: '#16a34a',
  },
});

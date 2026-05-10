import React from 'react';

import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  ScrollView,
  Alert,
} from 'react-native';

import {
  Feather,
  Ionicons,
  MaterialCommunityIcons,
  AntDesign,
} from '@expo/vector-icons';

import AsyncStorage from '@react-native-async-storage/async-storage';

import { router } from 'expo-router';

const HomeScreen = () => {

  // LOGOUT
  const handleLogout = async () => {

    try {

      await AsyncStorage.removeItem(
        'isLoggedIn',
      );

      router.replace('/LoginScreen');

    } catch (error) {

      Alert.alert(
        'Error',
        'No se pudo cerrar sesión',
      );
    }
  };

  const quickActions = [
    {
      title: 'Recargar\ncelular',
      icon: 'phone-portrait-outline',
      color: '#2563EB',
      library: 'Ionicons',
    },
    {
      title: 'Pagar\nservicios',
      icon: 'appstore-o',
      color: '#F59E0B',
      library: 'AntDesign',
    },
    {
      title: 'Tarjetas',
      icon: 'credit-card-outline',
      color: '#9333EA',
      library: 'Ionicons',
    },
    {
      title: 'Inversiones',
      icon: 'bar-chart-2',
      color: '#22C55E',
      library: 'Feather',
    },
    {
      title: 'Ver más',
      icon: 'gift-outline',
      color: '#EC4899',
      library: 'Ionicons',
    },
  ];

  const accounts = [
    {
      title: 'Cuenta de Ahorros',
      number: '•••• 5678',
      balance: '$8,430.20',
      icon: 'piggy-bank-outline',
      color: '#2563EB',
    },
    {
      title: 'Cuenta Corriente',
      number: '•••• 9012',
      balance: '$15,250.35',
      icon: 'wallet-outline',
      color: '#22C55E',
    },
  ];

  const movements = [
    {
      title: 'Supermercado',
      type: 'Compras',
      amount: '- $125.80',
      date: 'Hoy',
      color: '#22C55E',
      icon: 'cart-outline',
    },
    {
      title: 'Transferencia',
      type: 'Transferencias',
      amount: '- $500.00',
      date: 'Ayer',
      color: '#9333EA',
      icon: 'swap-horizontal-outline',
    },
    {
      title: 'Salario',
      type: 'Ingreso',
      amount: '+ $2,800.00',
      date: '12 May',
      color: '#22C55E',
      icon: 'arrow-down-outline',
      positive: true,
    },
  ];

  const renderIcon = (item: any) => {

    if (item.library === 'Ionicons') {

      return (

        <Ionicons
          name={item.icon as any}
          size={26}
          color={item.color}
        />

      );
    }

    if (item.library === 'AntDesign') {

      return (

        <AntDesign
          name={item.icon as any}
          size={26}
          color={item.color}
        />

      );
    }

    return (

      <Feather
        name={item.icon as any}
        size={24}
        color={item.color}
      />

    );
  };

  return (

    <SafeAreaView style={styles.container}>

      <StatusBar
        barStyle="light-content"
        backgroundColor="#0B5CFF"
      />

      <ScrollView
        showsVerticalScrollIndicator={false}
      >

        {/* HEADER */}
        <View style={styles.header}>

          <View style={styles.profileContainer}>

            <View style={styles.avatar}>

              <Text style={styles.avatarText}>
                MJ
              </Text>

            </View>

            <View>

              <Text style={styles.greeting}>
                ¡Hola!
              </Text>

              <Text style={styles.subtitle}>
                Qué bueno verte 👋
              </Text>

            </View>

          </View>

          <View style={styles.headerIcons}>

            <TouchableOpacity
              style={styles.iconButton}
            >

              <Feather
                name="bell"
                size={24}
                color="#FFFFFF"
              />

            </TouchableOpacity>

            <TouchableOpacity
              style={styles.iconButton}
            >

              <Feather
                name="mail"
                size={24}
                color="#FFFFFF"
              />

            </TouchableOpacity>

            {/* LOGOUT */}
            <TouchableOpacity
              style={styles.iconButton}
              onPress={handleLogout}
            >

              <Feather
                name="log-out"
                size={24}
                color="#FFFFFF"
              />

            </TouchableOpacity>

          </View>

        </View>

        {/* CARD PRINCIPAL */}
        <View style={styles.balanceCard}>

          <View style={styles.balanceHeader}>

            <View>

              <Text style={styles.accountTitle}>
                Cuenta Principal
              </Text>

              <Text style={styles.accountNumber}>
                •••• 1234
              </Text>

            </View>

            <Feather
              name="eye"
              size={24}
              color="#334155"
            />

          </View>

          <Text style={styles.balanceLabel}>
            Saldo disponible
          </Text>

          <Text style={styles.balance}>
            $25,680.50
          </Text>

          <Text style={styles.currentBalance}>
            Saldo actual
          </Text>

          <Text style={styles.currentAmount}>
            $26,150.75
          </Text>

          <View style={styles.growthContainer}>

            <Text style={styles.growthText}>
              ↑ 8.5% vs. mes anterior
            </Text>

          </View>

          {/* BOTONES */}
          <View style={styles.actionsRow}>

            <TouchableOpacity
              style={styles.actionItem}
            >

              <View style={styles.actionIconBlue}>

                <Feather
                  name="download"
                  size={24}
                  color="#2563EB"
                />

              </View>

              <Text style={styles.actionText}>
                Depositar
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionItem}
            >

              <View style={styles.actionIconGreen}>

                <Feather
                  name="repeat"
                  size={24}
                  color="#22C55E"
                />

              </View>

              <Text style={styles.actionText}>
                Transferir
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionItem}
            >

              <View style={styles.actionIconPurple}>

                <Ionicons
                  name="receipt-outline"
                  size={24}
                  color="#9333EA"
                />

              </View>

              <Text style={styles.actionText}>
                Pagar
              </Text>

            </TouchableOpacity>

            <TouchableOpacity
              style={styles.actionItem}
            >

              <View style={styles.actionIconGray}>

                <Feather
                  name="more-horizontal"
                  size={24}
                  color="#2563EB"
                />

              </View>

              <Text style={styles.actionText}>
                Más
              </Text>

            </TouchableOpacity>

          </View>

        </View>

        {/* ACCESOS RAPIDOS */}
        <View style={styles.section}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>
              Accesos rápidos
            </Text>

            <TouchableOpacity>

              <Text style={styles.linkText}>
                Personalizar
              </Text>

            </TouchableOpacity>

          </View>

          <View style={styles.quickGrid}>

            {quickActions.map((item, index) => (

              <TouchableOpacity
                key={index}
                style={styles.quickCard}
              >

                <View style={styles.quickIcon}>
                  {renderIcon(item)}
                </View>

                <Text style={styles.quickText}>
                  {item.title}
                </Text>

              </TouchableOpacity>

            ))}

          </View>

        </View>

        {/* CUENTAS */}
        <View style={styles.section}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>
              Mis cuentas
            </Text>

          </View>

          <View style={styles.whiteCard}>

            {accounts.map((item, index) => (

              <TouchableOpacity
                key={index}
                style={[
                  styles.accountItem,

                  index !==
                  accounts.length - 1 &&
                  styles.borderBottom,
                ]}
              >

                <View style={styles.accountLeft}>

                  <View
                    style={[
                      styles.accountIcon,
                      {
                        backgroundColor:
                          item.color,
                      },
                    ]}
                  >

                    <MaterialCommunityIcons
                      name={item.icon as any}
                      size={24}
                      color="#FFFFFF"
                    />

                  </View>

                  <View>

                    <Text style={styles.accountName}>
                      {item.title}
                    </Text>

                    <Text style={styles.accountSmall}>
                      {item.number}
                    </Text>

                  </View>

                </View>

                <View style={styles.accountRight}>

                  <Text style={styles.accountBalance}>
                    {item.balance}
                  </Text>

                  <Feather
                    name="chevron-right"
                    size={20}
                    color="#94A3B8"
                  />

                </View>

              </TouchableOpacity>

            ))}

          </View>

        </View>

        {/* MOVIMIENTOS */}
        <View style={styles.section}>

          <View style={styles.sectionHeader}>

            <Text style={styles.sectionTitle}>
              Movimientos recientes
            </Text>

          </View>

          <View style={styles.whiteCard}>

            {movements.map((item, index) => (

              <TouchableOpacity
                key={index}
                style={[
                  styles.movementItem,

                  index !==
                  movements.length - 1 &&
                  styles.borderBottom,
                ]}
              >

                <View style={styles.accountLeft}>

                  <View
                    style={[
                      styles.accountIcon,
                      {
                        backgroundColor:
                          item.color,
                      },
                    ]}
                  >

                    <Ionicons
                      name={item.icon as any}
                      size={24}
                      color="#FFFFFF"
                    />

                  </View>

                  <View>

                    <Text style={styles.movementTitle}>
                      {item.title}
                    </Text>

                    <Text style={styles.movementType}>
                      {item.type}
                    </Text>

                  </View>

                </View>

                <View>

                  <Text
                    style={[
                      styles.amount,

                      item.positive &&
                      styles.positiveAmount,
                    ]}
                  >
                    {item.amount}
                  </Text>

                  <Text style={styles.date}>
                    {item.date}
                  </Text>

                </View>

              </TouchableOpacity>

            ))}

          </View>

        </View>

        {/* CARD FINAL */}
        <View style={styles.investmentCard}>

          <Text style={styles.moneyEmoji}>
            🪴💰
          </Text>

          <View style={styles.investmentContent}>

            <Text style={styles.investmentTitle}>
              ¡Aumenta tu dinero!
            </Text>

            <Text style={styles.investmentSubtitle}>
              Conoce nuestras opciones
              de inversión y haz crecer
              tu patrimonio.
            </Text>

          </View>

          <TouchableOpacity
            style={styles.investmentButton}
          >

            <Text
              style={styles.investmentButtonText}
            >
              Conocer más
            </Text>

          </TouchableOpacity>

        </View>

      </ScrollView>

      {/* BOTTOM TAB */}
      <View style={styles.bottomTab}>

        <TouchableOpacity
          style={styles.tabItem}
        >

          <Ionicons
            name="home"
            size={24}
            color="#2563EB"
          />

          <Text style={styles.activeTabText}>
            Inicio
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
        >

          <Ionicons
            name="wallet-outline"
            size={24}
            color="#475569"
          />

          <Text style={styles.tabText}>
            Cuentas
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.centerButton}
        >

          <Text style={styles.centerButtonText}>
            $
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
        >

          <Ionicons
            name="card-outline"
            size={24}
            color="#475569"
          />

          <Text style={styles.tabText}>
            Tarjetas
          </Text>

        </TouchableOpacity>

        <TouchableOpacity
          style={styles.tabItem}
        >

          <Ionicons
            name="grid-outline"
            size={24}
            color="#475569"
          />

          <Text style={styles.tabText}>
            Más
          </Text>

        </TouchableOpacity>

      </View>

    </SafeAreaView>
  );
};

export default HomeScreen;

const styles = StyleSheet.create({

  container: {
    flex: 1,
    backgroundColor: '#F1F5F9',
  },

  header: {
    backgroundColor: '#0B5CFF',
    paddingHorizontal: 22,
    paddingTop: 20,
    paddingBottom: 35,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    borderBottomLeftRadius: 35,
    borderBottomRightRadius: 35,
  },

  profileContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  avatar: {
    width: 56,
    height: 56,
    borderRadius: 28,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  avatarText: {
    color: '#FFFFFF',
    fontSize: 22,
    fontWeight: '700',
  },

  greeting: {
    color: '#FFFFFF',
    fontSize: 26,
    fontWeight: '700',
  },

  subtitle: {
    color: '#DBEAFE',
    fontSize: 15,
    marginTop: 4,
  },

  headerIcons: {
    flexDirection: 'row',
  },

  iconButton: {
    marginLeft: 16,
  },

  balanceCard: {
    backgroundColor: '#FFFFFF',
    marginHorizontal: 20,
    marginTop: -20,
    borderRadius: 28,
    padding: 24,
    elevation: 5,
  },

  balanceHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },

  accountTitle: {
    fontSize: 22,
    fontWeight: '700',
    color: '#0F172A',
  },

  accountNumber: {
    color: '#64748B',
    fontSize: 16,
    marginTop: 4,
  },

  balanceLabel: {
    marginTop: 25,
    color: '#64748B',
    fontSize: 16,
  },

  balance: {
    fontSize: 42,
    fontWeight: '800',
    color: '#0F172A',
    marginTop: 8,
  },

  currentBalance: {
    color: '#64748B',
    marginTop: 10,
    fontSize: 15,
  },

  currentAmount: {
    color: '#334155',
    fontSize: 24,
    fontWeight: '600',
    marginTop: 4,
  },

  growthContainer: {
    alignSelf: 'flex-start',
    backgroundColor: '#DCFCE7',
    paddingHorizontal: 14,
    paddingVertical: 8,
    borderRadius: 14,
    marginTop: 18,
  },

  growthText: {
    color: '#16A34A',
    fontWeight: '700',
    fontSize: 14,
  },

  actionsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 30,
    paddingTop: 20,
    borderTopWidth: 1,
    borderColor: '#E2E8F0',
  },

  actionItem: {
    alignItems: 'center',
  },

  actionIconBlue: {
    backgroundColor: '#EFF6FF',
    width: 60,
    height: 60,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  actionIconGreen: {
    backgroundColor: '#ECFDF5',
    width: 60,
    height: 60,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  actionIconPurple: {
    backgroundColor: '#F3E8FF',
    width: 60,
    height: 60,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  actionIconGray: {
    backgroundColor: '#EFF6FF',
    width: 60,
    height: 60,
    borderRadius: 18,
    justifyContent: 'center',
    alignItems: 'center',
    marginBottom: 10,
  },

  actionText: {
    fontSize: 14,
    fontWeight: '600',
    color: '#334155',
  },

  section: {
    marginTop: 26,
    paddingHorizontal: 20,
  },

  sectionHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 18,
  },

  sectionTitle: {
    fontSize: 24,
    fontWeight: '700',
    color: '#0F172A',
  },

  linkText: {
    color: '#2563EB',
    fontWeight: '600',
    fontSize: 15,
  },

  quickGrid: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },

  quickCard: {
    backgroundColor: '#FFFFFF',
    width: 68,
    borderRadius: 18,
    paddingVertical: 18,
    alignItems: 'center',
    elevation: 2,
  },

  quickIcon: {
    marginBottom: 12,
  },

  quickText: {
    fontSize: 12,
    textAlign: 'center',
    color: '#334155',
    fontWeight: '600',
  },

  whiteCard: {
    backgroundColor: '#FFFFFF',
    borderRadius: 22,
    overflow: 'hidden',
  },

  accountItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },

  movementItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    padding: 18,
  },

  borderBottom: {
    borderBottomWidth: 1,
    borderColor: '#E2E8F0',
  },

  accountLeft: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  accountIcon: {
    width: 54,
    height: 54,
    borderRadius: 27,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 14,
  },

  accountName: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
  },

  accountSmall: {
    color: '#64748B',
    marginTop: 4,
    fontSize: 15,
  },

  accountRight: {
    flexDirection: 'row',
    alignItems: 'center',
  },

  accountBalance: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    marginRight: 8,
  },

  movementTitle: {
    fontSize: 17,
    fontWeight: '700',
    color: '#0F172A',
  },

  movementType: {
    color: '#64748B',
    marginTop: 4,
    fontSize: 15,
  },

  amount: {
    fontSize: 18,
    fontWeight: '700',
    color: '#0F172A',
    textAlign: 'right',
  },

  positiveAmount: {
    color: '#16A34A',
  },

  date: {
    color: '#64748B',
    marginTop: 4,
    textAlign: 'right',
  },

  investmentCard: {
    backgroundColor: '#EAF2FF',
    marginHorizontal: 20,
    marginTop: 26,
    marginBottom: 120,
    borderRadius: 24,
    padding: 22,
    flexDirection: 'row',
    alignItems: 'center',
  },

  moneyEmoji: {
    fontSize: 42,
    marginRight: 14,
  },

  investmentContent: {
    flex: 1,
  },

  investmentTitle: {
    fontSize: 20,
    fontWeight: '700',
    color: '#0F172A',
  },

  investmentSubtitle: {
    color: '#475569',
    marginTop: 6,
    fontSize: 14,
    lineHeight: 20,
  },

  investmentButton: {
    backgroundColor: '#2563EB',
    paddingHorizontal: 18,
    paddingVertical: 12,
    borderRadius: 14,
  },

  investmentButtonText: {
    color: '#FFFFFF',
    fontWeight: '700',
  },

  bottomTab: {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    backgroundColor: '#FFFFFF',
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'center',
    paddingVertical: 14,
    borderTopWidth: 1,
    borderColor: '#E2E8F0',
  },

  tabItem: {
    alignItems: 'center',
  },

  activeTabText: {
    color: '#2563EB',
    fontSize: 12,
    fontWeight: '700',
    marginTop: 4,
  },

  tabText: {
    color: '#475569',
    fontSize: 12,
    marginTop: 4,
    fontWeight: '600',
  },

  centerButton: {
    width: 68,
    height: 68,
    borderRadius: 34,
    backgroundColor: '#2563EB',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: -40,
  },

  centerButtonText: {
    color: '#FFFFFF',
    fontSize: 30,
    fontWeight: '700',
  },

});
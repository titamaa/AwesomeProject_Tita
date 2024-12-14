import * as React from 'react';
import { Text, View, StyleSheet, ScrollView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faPlusCircle, faSpa, faUserPen, faCircleInfo, faEnvelope, faGlobe, faLocationDot } from '@fortawesome/free-solid-svg-icons';
import { WebView } from 'react-native-webview';
import Createdata from './Createdata';
import Listdata from './Listdata';
import Editdata from './Editdata';

const webmap = require('./map.html')

function HomeScreen() {
  return (
    <Createdata />
  );
}

function SettingsScreen() {
  return (
    <Listdata />
  );
}

function EditdataScreen() {
  return (
    <Editdata />
  );
}
function MapScreen() {
  return (
     <WebView
      source={webmap}
      />
  );
}

function WebScreen() {
  return (
    <ScrollView style={styles.container}>
      <View style={styles.headerContainer}>
        <Text style={styles.headerText}>Tentang Aplikasi</Text>
      </View>

      <View style={styles.contentContainer}>
        <Text style={styles.descriptionText}>
          Aplikasi ini dirancang untuk mempermudah pengguna dalam mengelola data lahan tertanam atau tanaman.
          Anda dapat menambah, melihat, dan mengedit data dengan mudah melalui navigasi di bagian bawah aplikasi.
        </Text>

        <Text style={styles.sectionTitle}>Panduan Penggunaan</Text>
        <Text style={styles.listItem}>1. Gunakan menu "Tambah" untuk menambahkan data lahan tertanam atau tanaman.</Text>
        <Text style={styles.listItem}>2. Gunakan menu "Data" untuk melihat daftar data lahan tertanam yang telah dimasukkan.</Text>
        <Text style={styles.listItem}>3. Gunakan menu "Edit" untuk memperbarui informasi lahan tertanam.</Text>
        <Text style={styles.listItem}>4. Jika membutuhkan bantuan, kunjungi halaman ini untuk informasi lebih lanjut.</Text>

        <Text style={styles.sectionTitle}>Layanan Bantuan</Text>
        <Text style={styles.descriptionText}>
          Jika Anda mengalami kesulitan, hubungi tim kami melalui:
        </Text>
        <View style={styles.linkContainer}>
          <FontAwesomeIcon icon={faEnvelope} size={20} color="#1e88e5" />
          <Text style={styles.linkText}>selumbungnyambung@gmail.com</Text>
        </View>
        <View style={styles.linkContainer}>
          <FontAwesomeIcon icon={faGlobe} size={20} color="#1e88e5" />
          <Text style={styles.linkText}>www.selumbungnyambung.com</Text>
        </View>
      </View>
    </ScrollView>
  );
}

const Tab = createBottomTabNavigator();

export default function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator>
        <Tab.Screen
          name="Tambah"
          component={HomeScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faPlusCircle} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Data"
          component={SettingsScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faSpa} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Maps"
          component={MapScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faLocationDot} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Edit"
          component={EditdataScreen}
          options={{
            headerShown: false,
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faUserPen} color={color} size={20} />
            ),
          }}
        />
        <Tab.Screen
          name="Tentang"
          component={WebScreen}
          options={{
            tabBarIcon: ({ color }) => (
              <FontAwesomeIcon icon={faCircleInfo} color={color} size={20} />
            ),
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f0f4c3', // Hijau pastel terang untuk latar keseluruhan.
  },
  headerContainer: {
    backgroundColor: '#aed581', // Hijau pastel untuk header.
    padding: 20,
    alignItems: 'center',
    borderBottomLeftRadius: 16,
    borderBottomRightRadius: 16,
  },
  headerText: {
    fontSize: 24,
    color: '#1b5e20', // Hijau tua untuk teks agar kontras.
    fontWeight: 'bold',
  },
  contentContainer: {
    padding: 20,
    backgroundColor: '#ffffff', // Latar belakang putih untuk konten.
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 3,
  },
  descriptionText: {
    fontSize: 16,
    color: '#424242', // Abu-abu gelap untuk teks deskripsi.
    marginBottom: 20,
    lineHeight: 24,
  },
  sectionTitle: {
    fontSize: 18,
    color: '#388e3c', // Hijau gelap untuk judul bagian.
    fontWeight: 'bold',
    marginBottom: 10,
  },
  listItem: {
    fontSize: 16,
    color: '#616161', // Abu-abu medium untuk daftar.
    marginBottom: 10,
    paddingLeft: 10,
  },
  linkContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  linkText: {
    fontSize: 16,
    color: '#1e88e5', // Biru untuk menonjol seperti tautan.
    marginLeft: 8,
    textDecorationLine: 'underline', // Garis bawah untuk efek tautan.
  },
});

import React, { useState } from 'react';
import {
  SafeAreaView,
  View,
  Text,
  StyleSheet,
  ScrollView,
  TextInput,
  Alert,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const Createdata = () => {
  const [isStarted, setIsStarted] = useState(false); // State kontrol halaman
  const jsonUrl = 'http://192.168.180.147:3000/lahan';
  const [nama, setNama] = useState('');
  const [jenis, setJenis] = useState('');
  const [luas, setLuas] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [status, setStatus] = useState('');

  const submit = () => {
    if (isNaN(Number(luas))) {
      Alert.alert('Error', 'Luas harus berupa angka.');
      return;
    }

    const data = {
      nama: nama || 'Tidak diisi',
      jenis: jenis || 'Tidak diisi',
      luas: Number(luas) || 0,
      tanggal: tanggal || 'Tidak diisi',
      status: status || 'Tidak diisi',
    };

    console.log('Data yang akan dikirim:', data);

    fetch(jsonUrl, {
      method: 'POST',
      headers: {
        Accept: 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        Alert.alert('Sukses', 'Data berhasil disimpan!');
        setNama('');
        setJenis('');
        setLuas('');
        setTanggal('');
        setStatus('');
      })
      .catch((error) => {
        console.error(error);
        Alert.alert('Error', 'Gagal menyimpan data.');
      });
  };

  if (!isStarted) {
    // Halaman "Get Started"
    return (
      <ImageBackground
        source={{ uri: 'https://i.pinimg.com/736x/98/41/c4/9841c4aa5fdbbdb8dfb4bcc88e4b1b69.jpg' }} // Replace with your image URL
        style={styles.getStartedContainer}
        resizeMode="cover"
      >
        <Text style={styles.getStartedTitle}>SELUMBUNG!</Text>
        <Text style={styles.getStartedText}>
          Monitoring dan Pengelolaan Data Pertanian.
        </Text>
        <TouchableOpacity
          style={styles.getStartedButton}
          onPress={() => setIsStarted(true)}
        >
          <Text style={styles.getStartedButtonText}>Mulai</Text>
        </TouchableOpacity>
      </ImageBackground>
    );
  }

  return (
    // Halaman Utama
    <SafeAreaView style={styles.container}>
      <ScrollView contentContainerStyle={styles.centerContent}>
        <Text style={styles.title}>Input Lahan</Text>
        <View style={styles.card}>
          <TextInput
            style={styles.input}
            placeholder="Nama Lahan"
            value={nama}
            onChangeText={(value) => setNama(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Jenis Tanaman"
            value={jenis}
            onChangeText={(value) => setJenis(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Luas Lahan"
            value={luas}
            keyboardType="numeric"
            onChangeText={(value) => setLuas(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Tanggal Tanam"
            value={tanggal}
            onChangeText={(value) => setTanggal(value)}
          />
          <TextInput
            style={styles.input}
            placeholder="Status (Proses Tanam, Mati, atau Berbuah)"
            value={status}
            onChangeText={(value) => setStatus(value)}
          />
        </View>
        <TouchableOpacity style={styles.button} onPress={submit}>
          <Text style={styles.buttonText}>Simpan Data</Text>
        </TouchableOpacity>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Createdata;

const styles = StyleSheet.create({
  // Style untuk Halaman "Get Started"
  getStartedContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  getStartedTitle: {
    fontSize: 28,
    fontWeight: 'bold',
    color: 'white', // Changed color to white
    marginBottom: 10,
  },
  getStartedText: {
    fontSize: 16,
    color: 'white', // Changed color to white
    marginBottom: 20,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
  getStartedButton: {
    backgroundColor: '#2a9d8f',
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderRadius: 8,
    alignItems: 'center',
  },
  getStartedButtonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },

  // Style untuk Halaman Utama
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
  },
  centerContent: {
    flexGrow: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    paddingVertical: 20,
    paddingHorizontal: 10,
    backgroundColor: '#2a9d8f',
    color: 'white',
    fontSize: 22,
    fontWeight: 'bold',
    textAlign: 'center',
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
    width: '100%',
  },
  card: {
    backgroundColor: 'white',
    borderRadius: 8,
    padding: 20,
    marginBottom: 20,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    elevation: 2,
    width: '100%',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ddd',
    borderRadius: 8,
    padding: 10,
    marginBottom: 10,
    fontSize: 16,
    width: '100%',
  },
  button: {
    backgroundColor: '#2a9d8f',
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginTop: 10,
    width: '100%',
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
    fontWeight: 'bold',
  },
});



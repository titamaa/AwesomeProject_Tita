import React, { useState, useEffect } from 'react';
import {
  SafeAreaView,
  View,
  TextInput,
  StyleSheet,
  Text,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faSpa, faEdit, faSave, faPlus } from '@fortawesome/free-solid-svg-icons';

const Createdata = () => {
  const jsonUrl = 'http://192.168.180.147:3000/lahan';
  const [dataUser, setDataUser] = useState([]);
  const [nama, setNama] = useState('');
  const [jenis, setJenis] = useState('');
  const [luas, setLuas] = useState('');
  const [tanggal, setTanggal] = useState('');
  const [status, setStatus] = useState('');
  const [selectedUser, setSelectedUser] = useState(null);

  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = () => {
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => setDataUser(json))
      .catch((error) => console.error(error));
  };

  const handleSubmit = () => {
    const data = { nama, jenis, luas, tanggal, status };
    const url = selectedUser ? `${jsonUrl}/${selectedUser.id}` : jsonUrl;
    const method = selectedUser ? 'PATCH' : 'POST';

    fetch(url, {
      method,
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(data),
    })
      .then(() => {
        alert(selectedUser ? 'Data berhasil diperbarui!' : 'Data berhasil ditambahkan!');
        clearForm();
        fetchData();
      })
      .catch((error) => console.error(error));
  };

  const clearForm = () => {
    setNama('');
    setJenis('');
    setLuas('');
    setTanggal('');
    setStatus('');
    setSelectedUser(null);
  };

  const selectItem = (item) => {
    setSelectedUser(item);
    setNama(item.nama);
    setJenis(item.jenis);
    setLuas(item.luas);
    setTanggal(item.tanggal);
    setStatus(item.status);
  };

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView>
        {/* Form Section */}
        <View style={styles.formContainer}>
          <Text style={styles.title}>
            {selectedUser ? 'Edit Data Lahan' : 'Tambah Data Lahan'}
          </Text>
          <TextInput
            style={styles.input}
            placeholder="Nama"
            placeholderTextColor="#aaa"
            value={nama}
            onChangeText={setNama}
          />
          <TextInput
            style={styles.input}
            placeholder="Jenis"
            placeholderTextColor="#aaa"
            value={jenis}
            onChangeText={setJenis}
          />
          <TextInput
            style={styles.input}
            placeholder="Luas"
            placeholderTextColor="#aaa"
            value={luas}
            onChangeText={setLuas}
          />
          <TextInput
            style={styles.input}
            placeholder="Tanggal"
            placeholderTextColor="#aaa"
            value={tanggal}
            onChangeText={setTanggal}
          />
          <TextInput
            style={styles.input}
            placeholder="Status"
            placeholderTextColor="#aaa"
            value={status}
            onChangeText={setStatus}
          />
          <TouchableOpacity
            style={[styles.button, selectedUser ? styles.editButton : styles.addButton]}
            onPress={handleSubmit}
          >
            <FontAwesomeIcon icon={selectedUser ? faSave : faPlus} size={16} color="#fff" />
            <Text style={styles.buttonText}>{selectedUser ? 'Simpan' : 'Tambah'}</Text>
          </TouchableOpacity>
        </View>

        {/* List Section */}
        <View style={styles.listContainer}>
          {dataUser.map((item) => (
            <View key={item.id} style={styles.card}>
              <View style={styles.avatar}>
                <FontAwesomeIcon icon={faSpa} size={40} color="#4CAF50" />
              </View>
              <View style={styles.cardContent}>
                <Text style={styles.cardTitle}>{item.nama}</Text>
                <Text style={styles.cardText}>{item.jenis}</Text>
                <Text style={styles.cardText}>{item.luas}</Text>
                <Text style={styles.cardText}>{item.tanggal}</Text>
                <Text style={styles.cardText}>{item.status}</Text>
              </View>
              <TouchableOpacity onPress={() => selectItem(item)} style={styles.editButtonCard}>
                <FontAwesomeIcon icon={faEdit} size={20} color="#fff" />
              </TouchableOpacity>
            </View>
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f4',
  },
  formContainer: {
    padding: 15,
    backgroundColor: '#fff',
    margin: 10,
    borderRadius: 10,
    elevation: 5,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    textAlign: 'center',
    marginBottom: 10,
    color: '#4CAF50',
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 10,
    padding: 10,
    marginBottom: 10,
    backgroundColor: '#f9f9f9',
    color: '#333',
  },
  button: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    padding: 12,
    borderRadius: 10,
    elevation: 3,
  },
  addButton: {
    backgroundColor: '#4CAF50',
  },
  editButton: {
    backgroundColor: '#FF9800',
  },
  buttonText: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 8,
  },
  listContainer: {
    marginHorizontal: 10,
    marginTop: 10,
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#fff',
    padding: 15,
    marginVertical: 5,
    borderRadius: 10,
    elevation: 3,
  },
  avatar: {
    backgroundColor: '#e8f5e9',
    padding: 10,
    borderRadius: 50,
  },
  cardContent: {
    flex: 1,
    marginLeft: 15,
  },
  cardTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#333',
  },
  cardText: {
    color: '#666',
  },
  editButtonCard: {
    backgroundColor: '#2196F3',
    padding: 10,
    borderRadius: 50,
    elevation: 2,
  },
});

export default Createdata;

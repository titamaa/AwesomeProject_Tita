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
import { faGraduationCap, faEdit, faSave, faPlus } from '@fortawesome/free-solid-svg-icons';

const Createdata = () => {
  const jsonUrl = 'http://10.0.2.2:3000/mahasiswa';
  const [dataUser, setDataUser] = useState([]);
  const [first_name, setFirstName] = useState('');
  const [last_name, setLastName] = useState('');
  const [kelas, setKelas] = useState('');
  const [gender, setGender] = useState('');
  const [email, setEmail] = useState('');
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
    const data = { first_name, last_name, kelas, gender, email };
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
    setFirstName('');
    setLastName('');
    setKelas('');
    setGender('');
    setEmail('');
    setSelectedUser(null);
  };

  const selectItem = (item) => {
    setSelectedUser(item);
    setFirstName(item.first_name);
    setLastName(item.last_name);
    setKelas(item.kelas);
    setGender(item.gender);
    setEmail(item.email);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.formContainer}>
        <Text style={styles.title}>{selectedUser ? 'Edit Data Mahasiswa' : 'Tambah Data Mahasiswa'}</Text>
        <TextInput
          style={styles.input}
          placeholder="Nama Depan"
          placeholderTextColor="#aaa"
          value={first_name}
          onChangeText={setFirstName}
        />
        <TextInput
          style={styles.input}
          placeholder="Nama Belakang"
          placeholderTextColor="#aaa"
          value={last_name}
          onChangeText={setLastName}
        />
        <TextInput
          style={styles.input}
          placeholder="Kelas"
          placeholderTextColor="#aaa"
          value={kelas}
          onChangeText={setKelas}
        />
        <TextInput
          style={styles.input}
          placeholder="Jenis Kelamin"
          placeholderTextColor="#aaa"
          value={gender}
          onChangeText={setGender}
        />
        <TextInput
          style={styles.input}
          placeholder="Email"
          placeholderTextColor="#aaa"
          value={email}
          onChangeText={setEmail}
        />
        <TouchableOpacity
          style={[styles.button, selectedUser ? styles.editButton : styles.addButton]}
          onPress={handleSubmit}
        >
          <FontAwesomeIcon icon={selectedUser ? faSave : faPlus} size={16} color="#fff" />
          <Text style={styles.buttonText}>{selectedUser ? 'Simpan' : 'Tambah'}</Text>
        </TouchableOpacity>
      </View>
      <ScrollView style={styles.listContainer}>
        {dataUser.map((item) => (
          <View key={item.id} style={styles.card}>
            <View style={styles.avatar}>
              <FontAwesomeIcon icon={faGraduationCap} size={40} color="#4CAF50" />
            </View>
            <View style={styles.cardContent}>
              <Text style={styles.cardTitle}>{item.first_name} {item.last_name}</Text>
              <Text style={styles.cardText}>{item.kelas}</Text>
              <Text style={styles.cardText}>{item.gender}</Text>
              <Text style={styles.cardText}>{item.email}</Text>
            </View>
            <TouchableOpacity onPress={() => selectItem(item)} style={styles.editButtonCard}>
              <FontAwesomeIcon icon={faEdit} size={20} color="#fff" />
            </TouchableOpacity>
          </View>
        ))}
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
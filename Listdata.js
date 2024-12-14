import React, { useState, useEffect } from 'react';
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  Alert,
  ActivityIndicator,
} from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faTrash, faSync, faSpa } from '@fortawesome/free-solid-svg-icons';

const Listdata = () => {
  const jsonUrl = 'http://192.168.180.147:3000/lahan';
  const [isLoading, setLoading] = useState(true);
  const [dataUser, setDataUser] = useState([]);
  const [refresh, setRefresh] = useState(false);

  // Fetch data from the API
  const fetchData = () => {
    setLoading(true);
    fetch(jsonUrl)
      .then((response) => response.json())
      .then((json) => setDataUser(json))
      .catch((error) => console.error(error))
      .finally(() => setLoading(false));
  };

  useEffect(() => {
    fetchData();
  }, []);

  // Refresh page function
  const refreshPage = () => {
    setRefresh(true);
    fetchData();
    setRefresh(false);
  };

  // Delete data from the API
  const deleteData = (id) => {
    fetch(`${jsonUrl}/${id}`, { method: 'DELETE' })
      .then(() => {
        Alert.alert('Sukses', 'Data berhasil dihapus!');
        fetchData();
      })
      .catch((error) => console.error(error));
  };

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.header}>Riwayat Tanaman</Text>
      {isLoading ? (
        <View style={styles.loader}>
          <ActivityIndicator size="large" color="#4CAF50" />
          <Text style={styles.loadingText}>Loading...</Text>
        </View>
      ) : (
        <FlatList
          data={dataUser}
          onRefresh={refreshPage}
          refreshing={refresh}
          keyExtractor={(item) => item.id.toString()}
          renderItem={({ item }) => {
            let iconColor = '#666';
            if (item.status === 'Proses Tanam') {
              iconColor = '#1E90FF'; // Biru
            } else if (item.status === 'Berbuah') {
              iconColor = '#008000'; // Hijau
            } else if (item.status === 'Mati') {
              iconColor = '#FF0000'; // Merah
            }

            return (
              <View style={styles.card}>
                <FontAwesomeIcon icon={faSpa} size={40} color={iconColor} style={styles.icon} />

                <View style={styles.info}>
                  <Text style={styles.name}>Nama Lahan: {item.nama}</Text>
                  <Text style={styles.detail}>Jenis Tanaman: {item.jenis}</Text>
                  <Text style={styles.detail}>Luas: {item.luas} m²</Text>
                  <Text style={styles.detail}>Tanggal Tanam: {item.tanggal}</Text>
                  <Text style={styles.detail}>Status: {item.status}</Text>
                </View>

                {/* Delete Button */}
                <TouchableOpacity
                  style={styles.deleteButton}
                  onPress={() =>
                    Alert.alert('Hapus Data', 'Yakin ingin menghapus data ini?', [
                      { text: 'Tidak', onPress: () => console.log('Tidak') },
                      { text: 'Ya', onPress: () => deleteData(item.id) },
                    ])
                  }
                >
                  <FontAwesomeIcon icon={faTrash} size={20} color="#fff" />
                </TouchableOpacity>
              </View>
            );
          }}
        />
      )}

      {/* FAB Button for Refresh */}
      <TouchableOpacity style={styles.fab} onPress={refreshPage}>
        <FontAwesomeIcon icon={faSync} size={20} color="#fff" />
      </TouchableOpacity>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9',
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: '#4CAF50',
    textAlign: 'center',
    paddingVertical: 20,
    backgroundColor: '#fff',
    elevation: 5,
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loadingText: {
    marginTop: 10,
    fontSize: 16,
    color: '#4CAF50',
  },
  card: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 15,
    marginVertical: 8,
    marginHorizontal: 10,
    backgroundColor: '#fff',
    borderRadius: 10,
    elevation: 3,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
  },
  info: {
    flex: 1,
    marginLeft: 15,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: '#333',
  },
  detail: {
    fontSize: 14,
    color: '#666',
    marginTop: 4,
  },
  deleteButton: {
    backgroundColor: '#E63946',
    padding: 10,
    borderRadius: 50,
    elevation: 2,
  },
  fab: {
    position: 'absolute',
    bottom: 20,
    right: 20,
    backgroundColor: '#4CAF50',
    width: 50,
    height: 50,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.3,
    shadowRadius: 3.5,
  },
  icon: {
    marginRight: 10,
  },
});

export default Listdata;

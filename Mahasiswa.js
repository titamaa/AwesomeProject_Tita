import React from 'react';
import Datamahasiswa from './data/mahasiswa.json'; // Pastikan status sudah ada di data JSON
import { FlatList, Linking, Text, TouchableOpacity, View, StyleSheet } from 'react-native';

const Mahasiswa = () => {
  return (
    <FlatList
      data={Datamahasiswa}
      renderItem={({ item }) => {
        // Tentukan warna berdasarkan status
        let cardColor = 'white'; // Default color
        if (item.status === 'Proses Tanam') {
          cardColor = 'yellow';
        } else if (item.status === 'Berbuah') {
          cardColor = 'green';
        } else if (item.status === 'Mati') {
          cardColor = 'red';
        }

        return (
          <TouchableOpacity
            onPress={() =>
              Linking.openURL('google.navigation:q=' + item.latitude + ',' + item.longitude)
            }
          >
            <View style={[styles.card, { backgroundColor: cardColor }]}>
              <View>
                <Text style={styles.cardtitle}>
                  {item.nama} {item.jenis}
                </Text>
                <Text>Status: {item.status}</Text> {/* Menampilkan status */}
              </View>
            </View>
          </TouchableOpacity>
        );
      }}
    />
  );
};

export default Mahasiswa;

const styles = StyleSheet.create({
  cardtitle: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  card: {
    flexDirection: 'row',
    padding: 20,
    borderRadius: 10,
    shadowColor: '#000',
    shadowOffset: {
      width: 1,
      height: 1,
    },
    shadowOpacity: 0.20,
    shadowRadius: 1.41,
    elevation: 2,
    marginHorizontal: 20,
    marginVertical: 7,
  },
});

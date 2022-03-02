import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
} from 'react-native';


export default function Doctor({ navigation }) {
  return (
    <View style={styles.cardsWrapper}>
        <Text
          style={{
            alignSelf: 'center',
            fontSize: 18,
            fontWeight: 'bold',
            color: '#333',
          }}>
          Doctors
        </Text>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./asset/image.jpg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Muhammad Tayyab Khazain</Text>
            <Text style={styles.cardDetails}>
              Specialty: Surgeon{"\n"}
              Experince: 10Years
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./asset/image2.jpeg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Muhammad Kamran Azmat</Text>
            <Text style={styles.cardDetails}>
              Specialty: Genral Physician{"\n"}
              Experince: 12Years
            </Text>
          </View>
        </View>
        <View style={styles.card}>
          <View style={styles.cardImgWrapper}>
            <Image
              source={require('./asset/image3.jpeg')}
              resizeMode="cover"
              style={styles.cardImg}
            />
          </View>
          <View style={styles.cardInfo}>
            <Text style={styles.cardTitle}>Usman Yousaf</Text>
            <Text style={styles.cardDetails}>
              Specialty: Gynecologist{"\n"}
              Experince: 5Years
            </Text>
          </View>
        </View>
      </View>
    
  );
}
const styles = StyleSheet.create({
  cardsWrapper: {
    marginTop: 20,
    width: '90%',
    alignSelf: 'center',
  },
  card: {
    height: 100,
    marginVertical: 10,
    flexDirection: 'row',
    shadowColor: '#999',
    shadowOffset: {width: 0, height: 1},
    shadowOpacity: 0.8,
    shadowRadius: 2,
    elevation: 5,
  },
  cardImgWrapper: {
    flex: 1,
  },
  cardImg: {
    height: '100%',
    width: '100%',
    alignSelf: 'center',
    borderRadius: 8,
    borderBottomRightRadius: 0,
    borderTopRightRadius: 0,
  },
  cardInfo: {
    flex: 2,
    padding: 10,
    borderColor: '#ccc',
    borderWidth: 1,
    borderLeftWidth: 0,
    borderBottomRightRadius: 8,
    borderTopRightRadius: 8,
    backgroundColor: '#fff',
  },
  cardTitle: {
    fontWeight: 'bold',
    fontSize: 15,
    marginBottom: 3,
  },
  cardDetails: {
    fontSize: 14,
    color: '#444',
  },
});

import {
    StyleSheet,
    Text,
    View,
    Dimensions,
    Keyboard,
    TouchableWithoutFeedback,
    ScrollView,
    TouchableOpacity,
    Platform,
    Image,
    KeyboardAvoidingView,
    SectionList
  } from "react-native";
  import * as ImagePicker from 'expo-image-picker';
  import React, { useEffect, useState, useRef } from "react";
  import { SafeAreaView } from "react-native-safe-area-context";
  import Big from '../assets/svg/bigIcon'
  import hi from '../data/trip'
  import Clock from '../assets/svg/clockBig'
  import numbro from 'numbro'
  import moment from "moment";
  import ModalTripDetails from "../components/ModalTripDetails";

const TripsScreen = () => {
  const modalTripDetails = useRef()

  const showModalTripDetails = () => {
    modalTripDetails.current.open();

};

   const [trips, setTrips] = useState(true)
    // const date = console.log(new Date())
    const DATA = Object.values(hi.reduce((acc, item) => {

        if (!acc[item.month]) acc[item.month] = {
          title: item.month,
          data: []
        };
        acc[item.month].data.push(item);
        return acc;

      }, {}))

      const renderItems = ({ item }) => {
        return (
          <TouchableOpacity style={styles.itemStyle} onPress={showModalTripDetails}>
            <ModalTripDetails
          ref={modalTripDetails}
          close={() => {
            modalTripDetails.current.close();
          }}
        />
            <TouchableOpacity style={{flexDirection: 'row',}} onPress={showModalTripDetails}>
                <Clock/>
                <View style={{marginLeft: 12}}>
                <Text style={styles.text}>{item.destination}</Text>
                <Text style={styles.text1}>{moment(item.date).format('D MMMM YYYY')}, {moment(item.date).format('hh:mma')}</Text>
                </View>
            </TouchableOpacity>
            <Text style={styles.text3}>₦{numbro(item.price).format({
                 thousandSeparated: true,
            })}</Text>
          </TouchableOpacity>
        )
      }
      const renderHeader = ({ section }) => {
        return (
          <View style={styles.headerStyle}>
            <Text style={styles.header}>{section.title}</Text>
          </View>
        )
      }

  return (
    <SafeAreaView style={styles.container} edges={['top', 'left', 'right']}>
      <Text style={styles.head}>Trips</Text>
      {trips ? (
        <SectionList
        sections={DATA}
        keyExtractor={(item, index) => item + index}
        renderItem={renderItems}
        renderSectionHeader={renderHeader}
        refreshing={false}
        onRefresh={()=>{}}
        initialNumToRender={20}
        showsVerticalScrollIndicator={false}
        showsHorizontalScrollIndicator={false}
        contentContainerStyle={{}}
      />
      ) : (
        <View style={styles.big}>
          <Big/>
          <Text style={styles.texts}>You haven’t been on any Trip</Text>
        </View>
      )}

    </SafeAreaView>
  )
}

export default TripsScreen

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        paddingHorizontal: 30,
        paddingTop: 30,
      },
      head: {
        fontSize: 20,
        fontFamily: 'lexend-medium'
      },
      itemStyle:{
        marginTop: 25,
        flexDirection: 'row',
        justifyContent: 'space-between'
      },
      headerStyle:{
        marginTop: 40
      },
      header: {
        fontSize: 18,
        fontFamily: 'lexend-medium',
        color:'#757575'
      },
      text:{
        fontSize: 14,
        fontFamily: 'lexend-regular',
        color:'#757575'
      },
      text1:{
        fontSize: 12,
        fontFamily: 'lexend-light',
        color:'#757575'
      },
      text3: {
        fontSize: 14,
        fontFamily: 'lexend-regular',
        color:'##121212'
      },
      big:{
        alignItems: 'center',
        justifyContent: 'center',
        flex: 1,
      },
      texts:{
        fontSize: 18,
        fontFamily: 'lexend-regular',
        color:'#757575',
        marginTop: 36
      }
})

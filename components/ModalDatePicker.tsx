import React, {useState, useRef, useEffect} from 'react'
import { FlatList, StyleSheet, TouchableOpacity, View, Dimensions, ScrollView } from "react-native";
import { Text } from "react-native-paper";
import RBSheet from "react-native-raw-bottom-sheet";
import Colors from "../constants/Colors";
import DatePicker from 'react-native-modern-datepicker';
import moment from 'moment';
import CustomButton from "./CustomButton";
import Down from '../assets/svg/down'
import InfiniteScroll from 'react-native-infinite-looping-scroll';
const {width, height} = Dimensions.get('window');
import SwipePicker from 'react-native-swipe-picker'
import DynamicallySelectedPicker from 'react-native-dynamically-selected-picker';
import HorizontalPicker from '@vseslav/react-native-horizontal-picker';
import HorizontalScrollMenu, { RouteProps } from '@nyashanziramasanga/react-native-horizontal-scroll-menu/src';
import HorizontalScrollPicker  from '../CustomModule/CustomModule'

import Back from "../assets/svg/back";

const ModalDatePicker = React.forwardRef((props, ref) => {
  const dates = new Date();
  const date1 = dates.getHours();
  const [format, setFormat] = useState('')
  const newDate = moment(dates).format('YYYY-MM-DD')
  const [loading, setLoading] = useState(false);
  const [time, setTime] = useState('');
  const timeRef = useRef()
  const [isActive, setIsActive] = useState(false)
  const [isActive1, setIsActive1] = useState(false)
  const [selectedValue, setSelectedValue] = useState(0);
  const [selectedDate, setSelectedDate] = useState('')

  const handleClick = () => {
    setFormat('AM')
    setIsActive(true)
    setIsActive1(false)
  }
  const handleClick1 = () => {
    setFormat('PM')
    setIsActive1(true)
    setIsActive(false)
  }

  useEffect(()=>{
    handleClick()
  },[])


  const handleSubmit = async () => {
    setLoading(true);

    const requestData = {

    };

    setTimeout(async() => {
      setLoading(false);
      await props.details(true)
      props.close()
    }, 3000);
}
const slides =  [
  {
    id: 0,
    name: '12:00',
  },
  {
    id: 1,
    name: '1:00',
  },
  {
    id: 2,
    name: '2:00',
  },
  {
    id: 3,
    name: '3:00',
  },
  {
    id: 4,
    name: '4:00',
  },
  {
    id: 5,
    name: '5:00',
  },
  {
    id: 6,
    name: '6:00',
  },
  {
    id: 7,
    name: '7:00',
  },
  {
    id: 8,
    name: '8:00',
  },
  {
    id: 9,
    name: '9:00',

  },
  {
    id: 10,
    name: '10:00',
  },
  {
    id: 11,
    name: '11:00',
  },
]

const onPress = async (route: RouteProps) => {
  setSelectedValue(route.id);
  console.log('Tab pressed', route);
  await props.time(route.name)
  await props.meridian(format)
};


  return (
    <RBSheet
    ref={ref}
    height={750}
    closeOnDragDown={true}
    closeOnPressMask={true}
    dragFromTopOnly={true}
    customStyles={{
      container: {
        borderTopRightRadius: 30,
        borderTopLeftRadius: 30,

        backgroundColor: "white",
      },

      draggableIcon: {
        backgroundColor: "#C4C4C4",
        width: 50,
        marginTop: 20,
      },
    }}

  >
      <View style={styles.container}>
      <View
        style={{
          flexDirection: "row",
          paddingBottom: 20,
          alignItems: "center",
          justifyContent: "space-between",
          paddingHorizontal: 18
        }}
      >
        <TouchableOpacity
          onPress={() => {
            props.close()
          }}
        >
          <Back />
        </TouchableOpacity>
        <Text style={styles.head}>Pickup Date and Time</Text>
        <TouchableOpacity onPress={() => {
        }}>
          <Text>  </Text>
        </TouchableOpacity>
      </View>
      <Text style={styles.text}>Select a date</Text>
      <DatePicker
      options={{
        backgroundColor: 'white',
        textHeaderColor: 'rgba(117, 117, 117, 1)',
        textDefaultColor: 'rgba(18, 18, 18, 1)',
        selectedTextColor: '#fff',
        mainColor: 'rgba(73, 73, 255, 1)',
        textSecondaryColor: 'rgba(117, 117, 117, 1)',
        borderColor: 'white',
      }}
      onSelectedChange={date => setSelectedDate(date)}
      current={newDate}
      selected={newDate}
      mode="calendar"
      minuteInterval={30}
      style={{ paddingHorizontal: -25}}
    />

    <Text style={styles.text1}>Select time</Text>
    <View style={{alignItems: "center", justifyContent: "center", marginTop: 20}}>
      <Down/>
    </View>

       {/* <ScrollView horizontal={true} showsHorizontalScrollIndicator= {false}
      showsVerticalScrollIndicator= {false} style={{}}>
                    {slides.map((item, index) => (
                        <View key={item.value}>
                                <Text style={{ fontSize: 16, fontFamily: 'lexend-regular', paddingHorizontal: 14, }}>
                                    {item.label}
                                </Text>
                        </View>
                    ))}
                </ScrollView> */}
                 {/* <HorizontalPicker
      data={slides}
      renderItem={(item, index) => (
        <Text style={{paddingHorizontal: 14, fontFamily: 'lexend-regular', fontSize: 16, color: 'rgba(217, 217, 217, 1)'}}>{item.label}</Text>
        )}
      itemWidth={80}
      defaultIndex={0}
      animatedScrollToDefaultIndex={false}
      snapTimeout={50000}
      onChange={(position) => setSelectedValue(position)}
    /> */}

<HorizontalScrollMenu
      items={slides}
      onPress={onPress}
      selected={selectedValue}
      itemWidth={80}
      scrollAreaStyle={{ height: 50 }}
      buttonStyle={styles.buttonStyle}
      activeTextColor={'#000'}
      activeBackgroundColor='#fff'
      //textStyle={styles.textStyle}
    />

      <View style={{flexDirection: 'row', alignItems: 'center', justifyContent: 'center', marginTop: 15}}>
        <TouchableOpacity onPress={handleClick}>
        <Text style={{fontFamily: 'lexend-regular', fontSize: 16, marginRight: 12, color: isActive ?  'rgba(73, 73, 255, 1)': 'black'}}>AM</Text>
        </TouchableOpacity>

        <View style={{height: 20, backgroundColor: 'rgba(217, 217, 217, 1)', width: 1}}/>
        <TouchableOpacity onPress={handleClick1}>
        <Text style={{fontFamily: 'lexend-regular', fontSize: 16, marginLeft: 12, color: isActive1 ?  'rgba(73, 73, 255, 1)': 'black'}}>PM</Text>
        </TouchableOpacity>

      </View>

    <CustomButton
          _onPress={handleSubmit}
          title="Pick Time"
          marginTop={30}
          loading={loading}
          textStyle={{color: 'white'}}
          disabled={false}
          containerStyle={{marginBottom: 30}}
        />
      </View>
    </RBSheet>
  )
});

export default ModalDatePicker

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingTop: 20,
  },
  head: {
    fontSize: 18,
    fontFamily: "lexend-regular",
  },
  text:{
    color: 'rgba(117, 117, 117, 1)',
    fontFamily: 'lexend-regular',
    fontSize: 15,
    paddingHorizontal: 20,
    paddingTop: 10,
  },
  text1:{
    color: 'rgba(117, 117, 117, 1)',
    fontFamily: 'lexend-regular',
    fontSize: 15,
    paddingHorizontal: 20,
  },
  buttonStyle: {
    margin: 0,
    borderWidth: 0,
  },
  textStyle:{
    paddingHorizontal: 14,
    fontFamily: 'lexend-regular',
  }
})

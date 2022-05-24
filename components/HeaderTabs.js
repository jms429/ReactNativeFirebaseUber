import { View, Text } from 'react-native'
import React from 'react'
import { TouchableOpacity } from 'react-native-web'
import { useState } from 'react'

export default function HeaderTabs() {
  const [activeTab, setActiveTab] = useState("Delivery");
  return (
    <View style = {{ flexDirection: "row", alignSelf: "center" }}>
      <HeaderButton text="Delivery" btnColor="black" btnText="white" activeTab={activeTab} setActiveTab={setActiveTab}/>
      <HeaderButton text="Pickup" btnColor="white" btnText="black" activeTab={activeTab} setActiveTab={setActiveTab}/>
    </View>
  )
}

const HeaderButton = (props) => (
    
        <TouchableOpacity 
          style ={{ 
            // props.activeTab === props.text ?'black':'white' means that if the activeTab is equal to the text, then the button will be black, otherwise it will be white
            backgroundColor: props.activeTab === props.text ?'black':'white', 
            paddingVertical: 6,
            paddingHorizontal: 16,
            borderRadius: 30,
            }}
            onPress={() => props.setActiveTab(props.text)}
            >
            <Text style= {{color: props.activeTab === props.text ? 'white' : 'black', fontSize: 15, fontWeight: 900}}>{props.text}</Text>
        </TouchableOpacity>
     );
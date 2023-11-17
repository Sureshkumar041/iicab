import React, { useState } from 'react';
import { View, TouchableOpacity, Image, StyleSheet } from 'react-native';
import AlertPopup from "../../components/molecules/popup/AlertPopup/alertPopup";
import IButton from '../../components/atoms/Button';
import InputPopup from '../../components/molecules/popup/inputPopup/inputPopup';

const Testing = () => {
  const [popupVisible, setPopupVisible] = useState(false);
  const [inputPopupVisible, setInputPopupVisible] = useState(false);
  

  return (
    <View style={style.container}>

      <IButton onPress={() => setPopupVisible(true)} title="Open Alert Popup" />
      <View style={style.button}>
        <IButton onPress={() => setInputPopupVisible(true)} title="Open Input Popup" />
      </View>
      <View style={style.button}>
        <IButton onPress={() => setInputPopupVisible(true)} title="Open Input Popup" />
      </View>

      <AlertPopup
        isVisible={popupVisible}
        closePopup={() => setPopupVisible(false)}
        title="You Can't Revert this Action "
        description="This is a sample popup description This is a sample popup descriptionThis is a sample popup descriptionThis is a sample popup descriptionThis is a sample popup descriptionThis is a sample popup descriptionThis is a sample popup description."
        yesButtonLabel="Ok"
        iconSource={require('../../assets/images/popupImages/alertImage.png')}
      />
      <InputPopup
        isVisible={inputPopupVisible}
        closePopup={()=>setInputPopupVisible(false)}
        title="Form No 4568"
        description="Fill the Following details"
        saveButtonLabel="Save"
        cancelButtonLabel="Cancel"

      />

    </View>
  );
};
export default Testing;

const style = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },

  button: {
    paddingTop: 20,
    justifyContent: 'space-between'
  }

})
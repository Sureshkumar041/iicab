
import React from 'react';
import { Modal, View, Text, Image, TouchableOpacity, StyleSheet, ImageSourcePropType } from 'react-native';
import IText from '../../../atoms/Text';
import IButton from '../../../atoms/Button';


interface PopupComponentProps {
  isVisible: any;
  closePopup: () => void;
  title: any;
  description: any;
  yesButtonLabel: any;
  // noButtonLabel: any;
  iconSource: any;
}

const AlertPopup: React.FC<PopupComponentProps> = ({
  isVisible,
  closePopup,
  title,
  description,
  yesButtonLabel,
  // noButtonLabel,
  iconSource,
}) => {
  return (
    <Modal
      transparent={true}
      visible={isVisible}
      animationType="fade"
      onRequestClose={() => closePopup()}
    >
      <View style={styles.container}>
        <View style={styles.popup}>
          <TouchableOpacity onPress={() => closePopup()} style={styles.closeButton}>
            <Image source={require('../../../../assets/icons/close.png')} style={styles.closeIcon} />
          </TouchableOpacity>
          <Image source={iconSource} style={styles.iconImage} />
          <IText textStyle={styles.title} >{title}</IText>
          <IText textStyle={styles.description}>{description}</IText>
          <View style={styles.buttonContainer}>
            <TouchableOpacity >
              <IButton style= {styles.buttonText} title={yesButtonLabel} onPress={() => closePopup()}/>
            </TouchableOpacity>
            {/* <TouchableOpacity >
              <IButton style= {styles.buttonText} title={noButtonLabel}/>
            </TouchableOpacity> */}
          </View>
        </View>
      </View>
    </Modal>
  );
};
const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    popup: {
      width: 300,
      padding: 16,
      backgroundColor: 'white',
      borderRadius: 8,
    },
    closeButton: {
      position: 'absolute',
      top: 8,
      right: 8,
    },
    closeIcon: {
      width: 20,
      height: 20,
    },
    iconImage: {
      width: 60,
      height: 50,
      alignSelf: 'center',
    },
    title: {
      fontSize: 20,
      fontWeight: 'bold',
      marginVertical: 8,
      textAlign: 'center',
    },
    description: {
      fontSize: 16,
      marginBottom: 16,
      textAlign: 'center',
    },
    buttonContainer: {
      flexDirection: 'row',
      justifyContent: 'space-around'
    },
    button: {
      flex: 1,
      backgroundColor: 'green',
      padding: 10,
      borderRadius: 5,
      marginRight: 8,
    },
    buttonText: {
      color: 'white',
      textAlign: 'center',
    },
  });
  

export default AlertPopup;

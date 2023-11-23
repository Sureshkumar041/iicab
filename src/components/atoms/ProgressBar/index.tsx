import React from 'react';
import {StyleSheet, View} from 'react-native';
import {
  BLUE,
  BORDER_INPUT,
  GREEN,
  GREY,
  IIC_ASH,
  WHITE,
} from '../../../common/colors';
import IText from '../Text';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';

interface ProgressBarProps {
  options: any;
  completedOption: any;
  currentStep?: any;
}

const ProgressBar: React.FC<ProgressBarProps> = ({
  options,
  completedOption,
  currentStep,
}) => {
  return (
    <View>
      <View
        style={{
          flexDirection: 'row',
          flex: 1,
          justifyContent: 'center',
          alignItems: 'center',
          columnGap: 12,
          paddingHorizontal: 36,
          marginBottom: 8,
        }}>
        {options?.map((item: any, i: number) => (
          <View
            key={i}
            style={{
              flexDirection: 'row',
              flex: options?.length !== i + 1 ? 1 : 0,
              alignItems: 'center',
              columnGap: 12,
            }}>
            <View
              style={[
                styles.cirleContainer,
                {
                  backgroundColor:
                    completedOption?.filter?.(
                      (cmpltedValue: any) => cmpltedValue === item?.step,
                    )?.length > 0
                      ? GREEN
                      : currentStep === item?.step
                      ? BLUE
                      : BORDER_INPUT,
                },
              ]}>
              {completedOption?.filter(
                (cmpltedValue: any) => cmpltedValue === item?.step,
              )?.length > 0 ? (
                <MaterialIcons
                  name="check"
                  style={{fontSize: 20, color: WHITE}}
                />
              ) : (
                <IText textStyle={{color: WHITE, textAlign: 'center'}}>
                  {item?.step}
                </IText>
              )}
            </View>
            {options?.length !== i + 1 && (
              <View
                style={{
                  height: 2,
                  backgroundColor:
                    completedOption?.filter(
                      (cmpltedValue: any) => cmpltedValue === item?.step,
                    )?.length > 0
                      ? GREEN
                      : BORDER_INPUT,
                  borderRadius: 5,
                  flex: 1,
                }}></View>
            )}
          </View>
        ))}
      </View>
      {false && (
        <View
          style={{
            flex: 1,
            flexDirection: 'row',
            justifyContent: 'space-between',
            paddingVertical: 6,
            paddingHorizontal: 10,
          }}>
          {options?.map((item: any, i: number) => (
            <IText
              key={i}
              numberOfLines={1}
              textStyle={{
                flexWrap: 'wrap',
                fontSize: 12,
                textAlign: 'center',
              }}>
              {item?.name}
            </IText>
          ))}
        </View>
      )}
    </View>
  );
};

export default ProgressBar;

const styles = StyleSheet.create({
  currentStep: {
    backgroundColor: BLUE,
  },
  completedStep: {
    backgroundColor: GREEN,
  },
  pending: {
    backgroundColor: GREY,
  },
  cirleContainer: {
    width: 35,
    aspectRatio: 1 / 1,
    backgroundColor: BORDER_INPUT,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    elevation: 5,
  },
});

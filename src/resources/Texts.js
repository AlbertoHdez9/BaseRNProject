import {StyleSheet} from 'react-native';
import { Style } from './Style';
import Color from 'resources/values/color';

const Texts = StyleSheet.create({
  alignCenter: {
    textAlign: 'center'
  },
  alignLeft: {
    textAlign: 'left'
  },
  alignRight: {
    textAlign: 'right'
  },
  instructions: {
    fontSize: Style.FONT_SIZE,
    textAlign: 'center',
    color: Color.primaryText,
    marginBottom: 10,
  },
  navBarDrawer:{
    fontSize: Style.FONT_SIZE_SMALL_S,
    color: Color.second,
  },
  subTitle: {
    fontSize: Style.FONT_SIZE_TITLE,
    color: Color.primaryText,
    fontWeight: '400',
    marginBottom: 10
  },
  textBold: {
    fontWeight: 'bold'
  },
  textButton: {
    fontSize: Style.FONT_SIZE_TITLE,
    fontWeight: 'normal',
    color: Color.primaryText
  },
  textColorBlack: {
    color: Color.black
  },
  textColorGray: {
    color: Color.gray
  },
  textColorGrayDisabled: {
    color: Color.buttonDisabled
  },
  textColorGrayLight: {
    color: Color.lightGrey
  },
  textColorGreen: {
    color: Color.green
  },
  textColorPrimary: {
    color: Color.primary
  },
  textColorPrimaryText: {
    color: Color.primaryText
  },
  textColorRed: {
    color: Color.red
  },
  textColorSecond: {
    color: Color.second
  },
  textColorSecondText: {
    color: Color.secondText
  },
  textColorThirdText: {
    color: Color.thirdText
  },
  textColorWhite: {
    color: Color.white
  },
  textNormal: {
    fontSize: Style.FONT_SIZE,
    fontWeight: 'normal',
    color: Color.primaryText
  },
  textSmall: {
    fontSize: Style.FONT_SIZE_SMALL,
    color: Color.primaryText
  },
  textSmallS: {
    fontSize: Style.FONT_SIZE_SMALL_S,
    color: Color.primaryText
  },
  textSmallXS: {
    fontSize: Style.FONT_SIZE_SMALL_XS,
    color: Color.primaryText
  },
  title: {
    fontSize: Style.FONT_SIZE_TITLE,
    color: Color.primaryText,
    fontWeight: '800',
  },
  titleS: {
    fontSize: Style.FONT_SIZE_TITLE_S,
    color: Color.primaryText,
    fontWeight: '800',
    marginBottom: 10
  },
  titleM: {
    fontSize: Style.FONT_SIZE_TITLE_M,
    color: Color.primaryText,
    fontWeight: '800',
    marginBottom: 10
  },
  titleL: {
    fontSize: Style.FONT_SIZE_TITLE_L,
    color: Color.primaryText,
    fontWeight: '800',
    marginBottom: 10
  },
  titleXL: {
    fontSize: Style.FONT_SIZE_TITLE_XL,
    color: Color.primaryText,
    fontWeight: '800',
    marginBottom: 10
  },
  titleForm: {
    textAlign: 'center',
    marginTop: 20
  },
  titleSmallGray: {
    fontSize: Style.FONT_SIZE_SMALL,
    color: Color.gray
  }
});

export { Texts };

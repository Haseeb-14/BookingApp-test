import { TextStyle, ViewStyle } from 'react-native';
import { colors } from './colors';
import { sfProDisplayFamilies } from './fonts';

export const theme = {
  colors: {
    ...colors,
  },
  spacing: {
    base: 4,
    '0': 0,
    '1': 1,
    '2': 2,
    '4': 4,
    '6': 6,
    '8': 8,
    '10': 10,
    '12': 12,
    '16': 16,
    '20': 20,
    '24': 24,
    '28': 28,
    '32': 32,
    '36': 36,
    '40': 40,
    '44': 44,
    '48': 48,
  },
  borderRadius: {
    base: 4,
    '0': 0,
    '4': 4,
    '6': 6,
    '8': 8,
    '12': 12,
    '16': 16,
    '20': 20,
    '24': 24,
    '28': 28,
    '32': 32,
    '36': 36,
    '40': 40,
    '44': 44,
    '48': 48,
  },
  fontFamily: {
    ...sfProDisplayFamilies,
  },
  textVariants: {
    body8: {
      fontFamily: sfProDisplayFamilies[400],
      fontSize: 8,
      lineHeight: 12,
    } as TextStyle,
    body8Light: {
      fontFamily: sfProDisplayFamilies[300],
      fontSize: 8,
      lineHeight: 12,
    } as TextStyle,
    body8Medium: {
      fontFamily: sfProDisplayFamilies[500],
      fontSize: 8,
      lineHeight: 12,
    } as TextStyle,
    body8Semi: {
      fontFamily: sfProDisplayFamilies[600],
      fontSize: 8,
      lineHeight: 12,
    } as TextStyle,
    body8Bold: {
      fontFamily: sfProDisplayFamilies[700],
      fontSize: 8,
      lineHeight: 12,
    } as TextStyle,
    body10: {
      fontFamily: sfProDisplayFamilies[400],
      fontSize: 10,
      lineHeight: 14,
    } as TextStyle,
    body10Light: {
      fontFamily: sfProDisplayFamilies[300],
      fontSize: 10,
      lineHeight: 14,
    } as TextStyle,
    body10Medium: {
      fontFamily: sfProDisplayFamilies[500],
      fontSize: 10,
      lineHeight: 14,
    } as TextStyle,
    body10Semi: {
      fontFamily: sfProDisplayFamilies[600],
      fontSize: 10,
      lineHeight: 14,
    } as TextStyle,
    body10Bold: {
      fontFamily: sfProDisplayFamilies[700],
      fontSize: 10,
      lineHeight: 14,
    } as TextStyle,
    body12: {
      fontFamily: sfProDisplayFamilies[400],
      fontSize: 12,
      lineHeight: 16,
    } as TextStyle,
    body12Light: {
      fontFamily: sfProDisplayFamilies[300],
      fontSize: 12,
      lineHeight: 16,
    } as TextStyle,
    body12Medium: {
      fontFamily: sfProDisplayFamilies[500],
      fontSize: 12,
      lineHeight: 16,
    } as TextStyle,
    body12Semi: {
      fontFamily: sfProDisplayFamilies[600],
      fontSize: 12,
      lineHeight: 16,
    } as TextStyle,
    body12Bold: {
      fontFamily: sfProDisplayFamilies[700],
      fontSize: 12,
      lineHeight: 16,
    } as TextStyle,
    body14: {
      fontFamily: sfProDisplayFamilies[400],
      fontSize: 14,
      lineHeight: 18,
    } as TextStyle,
    body14Light: {
      fontFamily: sfProDisplayFamilies[300],
      fontSize: 14,
      lineHeight: 18,
    } as TextStyle,
    body14Medium: {
      fontFamily: sfProDisplayFamilies[500],
      fontSize: 14,
      lineHeight: 18,
    } as TextStyle,
    body14Semi: {
      fontFamily: sfProDisplayFamilies[600],
      fontSize: 14,
      lineHeight: 18,
    } as TextStyle,
    body14Bold: {
      fontFamily: sfProDisplayFamilies[700],
      fontSize: 14,
      lineHeight: 18,
    } as TextStyle,
    body16: {
      fontFamily: sfProDisplayFamilies[400],
      fontSize: 16,
      lineHeight: 24,
    } as TextStyle,
    body16Light: {
      fontFamily: sfProDisplayFamilies[300],
      fontSize: 16,
      lineHeight: 24,
    } as TextStyle,
    body16Medium: {
      fontFamily: sfProDisplayFamilies[500],
      fontSize: 16,
      lineHeight: 24,
    } as TextStyle,
    body16Semi: {
      fontFamily: sfProDisplayFamilies[600],
      fontSize: 16,
      lineHeight: 24,
    } as TextStyle,
    body16Bold: {
      fontFamily: sfProDisplayFamilies[700],
      fontSize: 16,
      lineHeight: 24,
    } as TextStyle,
    h18: {
      fontFamily: sfProDisplayFamilies[400],
      fontSize: 18,
      lineHeight: 26,
    } as TextStyle,
    h18Light: {
      fontFamily: sfProDisplayFamilies[300],
      fontSize: 18,
      lineHeight: 26,
    } as TextStyle,
    h18Medium: {
      fontFamily: sfProDisplayFamilies[500],
      fontSize: 18,
      lineHeight: 26,
    } as TextStyle,
    h18Semi: {
      fontFamily: sfProDisplayFamilies[600],
      fontSize: 18,
      lineHeight: 26,
    } as TextStyle,
    h18Bold: {
      fontFamily: sfProDisplayFamilies[700],
      fontSize: 18,
      lineHeight: 26,
    } as TextStyle,
    h20: {
      fontFamily: sfProDisplayFamilies[400],
      fontSize: 20,
      lineHeight: 28,
    } as TextStyle,
    h20Light: {
      fontFamily: sfProDisplayFamilies[300],
      fontSize: 20,
      lineHeight: 28,
    } as TextStyle,
    h20Medium: {
      fontFamily: sfProDisplayFamilies[500],
      fontSize: 20,
      lineHeight: 28,
    } as TextStyle,
    h20Semi: {
      fontFamily: sfProDisplayFamilies[600],
      fontSize: 20,
      lineHeight: 28,
    } as TextStyle,
    h20Bold: {
      fontFamily: sfProDisplayFamilies[700],
      fontSize: 20,
      lineHeight: 28,
    } as TextStyle,
    h22: {
      fontFamily: sfProDisplayFamilies[400],
      fontSize: 22,
      lineHeight: 30,
    } as TextStyle,
    h22Light: {
      fontFamily: sfProDisplayFamilies[300],
      fontSize: 22,
      lineHeight: 30,
    } as TextStyle,
    h22Medium: {
      fontFamily: sfProDisplayFamilies[500],
      fontSize: 22,
      lineHeight: 30,
    } as TextStyle,
    h22Semi: {
      fontFamily: sfProDisplayFamilies[600],
      fontSize: 22,
      lineHeight: 30,
    } as TextStyle,
    h22Bold: {
      fontFamily: sfProDisplayFamilies[700],
      fontSize: 22,
      lineHeight: 30,
    } as TextStyle,
    h24: {
      fontFamily: sfProDisplayFamilies[400],
      fontSize: 24,
      lineHeight: 32,
    } as TextStyle,
    h24Light: {
      fontFamily: sfProDisplayFamilies[300],
      fontSize: 24,
      lineHeight: 32,
    } as TextStyle,
    h24Medium: {
      fontFamily: sfProDisplayFamilies[500],
      fontSize: 24,
      lineHeight: 32,
    } as TextStyle,
    h24Semi: {
      fontFamily: sfProDisplayFamilies[600],
      fontSize: 24,
      lineHeight: 32,
    } as TextStyle,
    h24Bold: {
      fontFamily: sfProDisplayFamilies[700],
      fontSize: 24,
      lineHeight: 32,
    } as TextStyle,
    h30: {
      fontFamily: sfProDisplayFamilies[400],
      fontSize: 30,
      lineHeight: 38,
    } as TextStyle,
    h30Light: {
      fontFamily: sfProDisplayFamilies[300],
      fontSize: 30,
      lineHeight: 38,
    } as TextStyle,
    h30Medium: {
      fontFamily: sfProDisplayFamilies[500],
      fontSize: 30,
      lineHeight: 38,
    } as TextStyle,
    h30Semi: {
      fontFamily: sfProDisplayFamilies[600],
      fontSize: 30,
      lineHeight: 38,
    } as TextStyle,
    h30Bold: {
      fontFamily: sfProDisplayFamilies[700],
      fontSize: 30,
      lineHeight: 38,
    } as TextStyle,
    h32: {
      fontFamily: sfProDisplayFamilies[400],
      fontSize: 32,
      lineHeight: 40,
    } as TextStyle,
    h32Light: {
      fontFamily: sfProDisplayFamilies[300],
      fontSize: 32,
      lineHeight: 40,
    } as TextStyle,
    h32Medium: {
      fontFamily: sfProDisplayFamilies[500],
      fontSize: 32,
      lineHeight: 40,
    } as TextStyle,
    h32Semi: {
      fontFamily: sfProDisplayFamilies[600],
      fontSize: 32,
      lineHeight: 40,
    } as TextStyle,
    h32Bold: {
      fontFamily: sfProDisplayFamilies[700],
      fontSize: 32,
      lineHeight: 40,
    } as TextStyle,
    text: {
      color: colors.text,
    } as TextStyle,
    lightText: {
      color: colors.textLight,
    } as TextStyle,
    extraLightText: {
      color: colors.textLightExtra,
    } as TextStyle,
    whiteText: {
      color: colors.white,
    } as TextStyle,
    primaryText: {
      color: colors.primary,
    } as TextStyle,
    warningText: {
      color: colors.warning,
    } as TextStyle,
    dangerText: {
      color: colors.danger,
    } as TextStyle,
    centerText: {
      textAlign: 'center',
    } as TextStyle,
    leftText: {
      textAlign: 'left',
    } as TextStyle,
    rightText: {
      textAlign: 'right',
    } as TextStyle,
    underlineText: {
      textDecorationLine: 'underline',
    } as TextStyle,
  },
  globalStyles: {
    flex1: {
      flex: 1,
    } as ViewStyle,
    'flex1.5': {
      flex: 1.5,
    } as ViewStyle,
    flex2: {
      flex: 2,
    } as ViewStyle,
    'flex2.5': {
      flex: 2.5,
    } as ViewStyle,
    widthFull: {
      width: '100%',
    } as ViewStyle,
    widthHalf: {
      width: '50%',
    } as ViewStyle,
    heightFull: {
      height: '100%',
    } as ViewStyle,
    directionRow: {
      flexDirection: 'row',
    } as ViewStyle,
    directionColumn: {
      flexDirection: 'column',
    } as ViewStyle,
    directionRowReverse: {
      flexDirection: 'row-reverse',
    } as ViewStyle,
    directionColumnReverse: {
      flexDirection: 'column-reverse',
    } as ViewStyle,
    horizontalCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
      alignItems: 'center',
    } as ViewStyle,
    horizontalXCenter: {
      flexDirection: 'row',
      justifyContent: 'center',
    } as ViewStyle,
    horizontalYCenter: {
      flexDirection: 'row',
      alignItems: 'center',
    } as ViewStyle,
    verticalCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
    } as ViewStyle,
    verticalXCenter: {
      flexDirection: 'column',
      alignItems: 'center',
    } as ViewStyle,
    verticalYCenter: {
      flexDirection: 'column',
      justifyContent: 'center',
    } as ViewStyle,
    flexWrap: {
      flexWrap: 'wrap',
    } as ViewStyle,
    flexNoWrap: {
      flexWrap: 'nowrap',
    } as ViewStyle,
    divider: {
      height: 1,
      backgroundColor: colors.border,
    } as ViewStyle,
    aspectRatio1: {
      aspectRatio: 1,
    } as ViewStyle,
    shadow: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.2,
      shadowRadius: 2,
      elevation: 3,
    } as ViewStyle,
    shadowLg: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 4,
        height: 6,
      },
      shadowOpacity: 0.2,
      shadowRadius: 6,
      elevation: 6,
    } as ViewStyle,
    card: {
      shadowColor: colors.black,
      shadowOffset: {
        width: 0,
        height: 1,
      },
      shadowOpacity: 0.25,
      shadowRadius: 2,
      elevation: 3,
      backgroundColor: colors.white,
      padding: 12,
      borderRadius: 12,
    } as ViewStyle,
    bgBlack: {
      backgroundColor: colors.black,
    } as ViewStyle,
    bgWhite: {
      backgroundColor: colors.white,
    } as ViewStyle,
    bgPrimary: {
      backgroundColor: colors.primary,
    } as ViewStyle,
    bgWarning: {
      backgroundColor: colors.warning,
    } as ViewStyle,
    bgDanger: {
      backgroundColor: colors.danger,
    } as ViewStyle,
    bgBorder: {
      backgroundColor: colors.border,
    } as ViewStyle,
    justifyStart: {
      justifyContent: 'flex-start',
    } as ViewStyle,
    justifyEnd: {
      justifyContent: 'flex-end',
    } as ViewStyle,
    justifyCenter: {
      justifyContent: 'center',
    } as ViewStyle,
    justifyAround: {
      justifyContent: 'space-around',
    } as ViewStyle,
    justifyBetween: {
      justifyContent: 'space-between',
    } as ViewStyle,
    alignStart: {
      alignItems: 'flex-start',
    } as ViewStyle,
    alignEnd: {
      alignItems: 'flex-end',
    } as ViewStyle,
    alignCenter: {
      alignItems: 'center',
    } as ViewStyle,
    alignBaseline: {
      alignItems: 'baseline',
    } as ViewStyle,
    alignStretch: {
      alignItems: 'stretch',
    } as ViewStyle,

    paddingContainer: {
      paddingHorizontal: 36,
      paddingTop: 16,
      paddingBottom: 32,
    } as ViewStyle,
    paddingBigScroll: {
      paddingHorizontal: 36,
      paddingTop: 64,
      paddingBottom: 64,
    } as ViewStyle,
    paddingList: {
      paddingHorizontal: 36,
      paddingTop: 12,
      paddingBottom: 48,
    } as ViewStyle,
    paddingHeaderComponent: {
      paddingHorizontal: 36,
      paddingTop: 24,
      paddingBottom: 12,
    } as ViewStyle,
    padding0: {
      padding: 0,
    } as ViewStyle,
    padding2: {
      padding: 2,
    } as ViewStyle,
    padding2H: {
      paddingHorizontal: 2,
    } as ViewStyle,
    padding2V: {
      paddingVertical: 2,
    } as ViewStyle,
    padding4: {
      padding: 4,
    } as ViewStyle,
    padding4H: {
      paddingHorizontal: 4,
    } as ViewStyle,
    padding4V: {
      paddingVertical: 4,
    } as ViewStyle,
    padding8: {
      padding: 8,
    } as ViewStyle,
    padding8H: {
      paddingHorizontal: 8,
    } as ViewStyle,
    padding8V: {
      paddingVertical: 8,
    } as ViewStyle,
    padding12: {
      padding: 12,
    } as ViewStyle,
    padding12H: {
      paddingHorizontal: 12,
    } as ViewStyle,
    padding12V: {
      paddingVertical: 12,
    } as ViewStyle,
    padding16: {
      padding: 16,
    } as ViewStyle,
    padding16H: {
      paddingHorizontal: 16,
    } as ViewStyle,
    padding16V: {
      paddingVertical: 16,
    } as ViewStyle,
    padding20: {
      padding: 20,
    } as ViewStyle,
    padding20H: {
      paddingHorizontal: 20,
    } as ViewStyle,
    padding20V: {
      paddingVertical: 20,
    } as ViewStyle,
    padding24: {
      padding: 24,
    } as ViewStyle,
    padding24H: {
      paddingHorizontal: 24,
    } as ViewStyle,
    padding24V: {
      paddingVertical: 24,
    } as ViewStyle,
    padding28: {
      padding: 28,
    } as ViewStyle,
    padding28H: {
      paddingHorizontal: 28,
    } as ViewStyle,
    padding28V: {
      paddingVertical: 28,
    } as ViewStyle,
    padding32: {
      padding: 32,
    } as ViewStyle,
    padding32H: {
      paddingHorizontal: 32,
    } as ViewStyle,
    padding32V: {
      paddingVertical: 32,
    } as ViewStyle,
    padding36: {
      padding: 36,
    } as ViewStyle,
    padding36H: {
      paddingHorizontal: 36,
    } as ViewStyle,
    padding36V: {
      paddingVertical: 36,
    } as ViewStyle,
    padding40: {
      padding: 40,
    } as ViewStyle,
    padding40H: {
      paddingHorizontal: 40,
    } as ViewStyle,
    padding40V: {
      paddingVertical: 40,
    } as ViewStyle,
    padding44: {
      padding: 44,
    } as ViewStyle,
    padding44H: {
      paddingHorizontal: 44,
    } as ViewStyle,
    padding44V: {
      paddingVertical: 44,
    } as ViewStyle,
    padding48: {
      padding: 48,
    } as ViewStyle,
    padding48H: {
      paddingHorizontal: 48,
    } as ViewStyle,
    padding48V: {
      paddingVertical: 48,
    } as ViewStyle,

    gap2: {
      gap: 2,
    } as ViewStyle,
    gap2H: {
      columnGap: 2,
    } as ViewStyle,
    gap2V: {
      rowGap: 2,
    } as ViewStyle,
    gap4: {
      gap: 4,
    } as ViewStyle,
    gap4H: {
      columnGap: 4,
    } as ViewStyle,
    gap4V: {
      rowGap: 4,
    } as ViewStyle,
    gap8: {
      gap: 8,
    } as ViewStyle,
    gap8H: {
      columnGap: 8,
    } as ViewStyle,
    gap8V: {
      rowGap: 8,
    } as ViewStyle,
    gap12: {
      gap: 12,
    } as ViewStyle,
    gap12H: {
      columnGap: 12,
    } as ViewStyle,
    gap12V: {
      rowGap: 12,
    } as ViewStyle,
    gap16: {
      gap: 16,
    } as ViewStyle,
    gap16H: {
      columnGap: 16,
    } as ViewStyle,
    gap16V: {
      rowGap: 16,
    } as ViewStyle,
    gap20: {
      gap: 20,
    } as ViewStyle,
    gap20H: {
      columnGap: 20,
    } as ViewStyle,
    gap20V: {
      rowGap: 20,
    } as ViewStyle,
    gap24: {
      gap: 24,
    } as ViewStyle,
    gap24H: {
      columnGap: 24,
    } as ViewStyle,
    gap24V: {
      rowGap: 24,
    } as ViewStyle,
    gap28: {
      gap: 28,
    } as ViewStyle,
    gap28H: {
      columnGap: 28,
    } as ViewStyle,
    gap28V: {
      rowGap: 28,
    } as ViewStyle,
    gap32: {
      gap: 32,
    } as ViewStyle,
    gap32H: {
      columnGap: 32,
    } as ViewStyle,
    gap32V: {
      rowGap: 32,
    } as ViewStyle,
    gap36: {
      gap: 36,
    } as ViewStyle,
    gap36H: {
      columnGap: 36,
    } as ViewStyle,
    gap36V: {
      rowGap: 36,
    } as ViewStyle,
    gap40: {
      gap: 40,
    } as ViewStyle,
    gap40H: {
      columnGap: 40,
    } as ViewStyle,
    gap40V: {
      rowGap: 40,
    } as ViewStyle,
    gap44: {
      gap: 44,
    } as ViewStyle,
    gap44H: {
      columnGap: 44,
    } as ViewStyle,
    gap44V: {
      rowGap: 44,
    } as ViewStyle,
    gap48: {
      gap: 48,
    } as ViewStyle,
    gap48H: {
      columnGap: 48,
    } as ViewStyle,
    gap48V: {
      rowGap: 48,
    } as ViewStyle,

    borderRadius4: {
      borderRadius: 4,
    } as ViewStyle,
    borderRadius6: {
      borderRadius: 6,
    } as ViewStyle,
    borderRadius8: {
      borderRadius: 8,
    } as ViewStyle,
    borderRadius12: {
      borderRadius: 12,
    } as ViewStyle,
    borderRadius16: {
      borderRadius: 16,
    } as ViewStyle,
    borderRadius20: {
      borderRadius: 20,
    } as ViewStyle,
    borderRadius24: {
      borderRadius: 24,
    } as ViewStyle,
    borderRadius28: {
      borderRadius: 28,
    } as ViewStyle,
    borderRadius32: {
      borderRadius: 32,
    } as ViewStyle,
    borderRadius36: {
      borderRadius: 36,
    } as ViewStyle,
    borderRadius40: {
      borderRadius: 40,
    } as ViewStyle,
    borderRadius44: {
      borderRadius: 44,
    } as ViewStyle,
    borderRadius48: {
      borderRadius: 48,
    } as ViewStyle,

    overflowVisible: {
      overflow: 'visible',
    } as ViewStyle,
    overflowHidden: {
      overflow: 'hidden',
    } as ViewStyle,
    overflowScroll: {
      overflow: 'scroll',
    } as ViewStyle,
  },
};

export type TTheme = typeof theme;

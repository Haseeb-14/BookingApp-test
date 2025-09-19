import { registerSheet, SheetDefinition } from 'react-native-actions-sheet';
import {
  ActionSheetDatePicker,
  TActionSheetDatePicker,
} from '@components/common/action-sheet-datepicker';

registerSheet('datepicker', ActionSheetDatePicker);

declare module 'react-native-actions-sheet' {
  interface Sheets {
    datepicker: SheetDefinition<{ payload: TActionSheetDatePicker }>;
  }
}

export {};

// Header component types
export type TFilterButton = {
  label: string;
  isActive: boolean;
  onPress: () => void;
};

export type THeaderProps = {
  title: string;
  filterButtons?: TFilterButton[];
  onFilterPress?: () => void;
  onCalendarPress?: () => void;
  onBackPress?: () => void;
  showBackButton?: boolean;
  showActionButtons?: boolean;
  // New props for booking detail layout
  currentTime?: string;
  dateTime?: string;
  countdown?: string;
  bookingNumber?: string;
  status?: string;
  statusType?: 'open' | 'lastminute' | 'last_minute' | 'preferred' | 'online';
  showBookingDetailLayout?: boolean;
  price?: string; // Add price prop
};

// BookingCard component types
export type TTag = {
  label: string;
  color: 'lastMinute' | 'preferred' | 'category' | 'online';
};

export type TBookingCardProps = {
  date: string;
  time: string;
  day: string;
  price: string;
  fromAddress: string;
  toAddress: string;
  tags: TTag[];
  onPress?: () => void;
  showConfirmationMessage?: boolean;
  confirmationMessageColor?: string;
};

// HomeScreen types
export type TFilterType = 'all' | 'lastMinute' | 'preferred';

export type TBooking = {
  id: string;
  date: string;
  time: string;
  day: string;
  price: string;
  fromAddress: string;
  toAddress: string;
  tags: TTag[];
};

// InstructionMessage component types
export type TInstructionMessageProps = {
  message: string;
  backgroundColor?: string;
  textColor?: string;
};

// BookingDetailItem component types
export type TBookingDetailItemProps = {
  label: string;
  value: string;
  checked: boolean;
  onCheckChange: (checked: boolean) => void;
  isLink?: boolean;
  onLinkPress?: () => void;
  hasIcon?: boolean;
  iconComponent?: React.ReactNode;
  isPdf?: boolean;
};

// BookingDetailsList component types
export type TBookingDetail = {
  key: string;
  label: string;
  value: string;
  checked: boolean;
  isLink?: boolean;
  onLinkPress?: () => void;
  hasIcon?: boolean;
  isPdf?: boolean;
};

export type TBookingDetailsListProps = {
  details: TBookingDetail[];
  onCheckChange: (key: string, checked: boolean) => void;
};

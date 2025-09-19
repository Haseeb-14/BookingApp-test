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

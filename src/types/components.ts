// Header component types
export type TFilterButton = {
  label: string;
  isActive: boolean;
  onPress: () => void;
};

export type THeaderProps = {
  title: string;
  filterButtons: TFilterButton[];
  onFilterPress?: () => void;
  onCalendarPress?: () => void;
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

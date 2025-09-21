import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Container, Header, BookingCard } from '@components/common';
import { theme } from '@styles/theme';
import { TFilterType, TBooking } from '@types';
import { useAvailableNavigation } from '@hooks/useTypedNavigation';
import { ERoutes } from '@types';

export const HomeScreen = () => {
  const navigation = useAvailableNavigation();
  const [activeFilter, setActiveFilter] = useState<TFilterType>('all');

  const filterButtons = [
    {
      label: 'All',
      isActive: activeFilter === 'all',
      onPress: () => setActiveFilter('all'),
    },
    {
      label: 'Last minute',
      isActive: activeFilter === 'lastMinute',
      onPress: () => setActiveFilter('lastMinute'),
    },
    {
      label: 'Preferred',
      isActive: activeFilter === 'preferred',
      onPress: () => setActiveFilter('preferred'),
    },
  ];

  const sampleBookings: TBooking[] = [
    {
      id: '1',
      date: '14 Apr',
      time: '2:00 AM',
      day: 'Mon',
      price: '$33.96',
      fromAddress: '161 Elizabeth St, Sydney',
      toAddress: '1 Kent St Sydney',
      tags: [
        { label: 'LAST MINUTE', color: 'lastMinute' as const },
        { label: 'PREFERRED', color: 'preferred' as const },
        { label: 'EARLY MORNING', color: 'category' as const },
      ],
    },
    {
      id: '2',
      date: '14 Apr',
      time: '2:00 AM',
      day: 'Mon',
      price: '$33.96',
      fromAddress: '161 Elizabeth St, Sydney',
      toAddress: '1 Kent St Sydney',
      tags: [
        { label: 'LAST MINUTE', color: 'lastMinute' as const },
        { label: 'PREFERRED', color: 'preferred' as const },
        { label: 'EARLY MORNING', color: 'category' as const },
        { label: 'AIRPORT', color: 'category' as const },
      ],
    },
    {
      id: '3',
      date: '15 Apr',
      time: '8:30 AM',
      day: 'Tue',
      price: '$45.50',
      fromAddress: 'Circular Quay, Sydney',
      toAddress: 'Bondi Beach, NSW',
      tags: [
        { label: 'PREFERRED', color: 'preferred' as const },
        { label: 'LATE NIGHT', color: 'category' as const },
      ],
    },
    {
      id: '4',
      date: '15 Apr',
      time: '6:15 PM',
      day: 'Tue',
      price: '$28.75',
      fromAddress: 'Central Station, Sydney',
      toAddress: 'Parramatta, NSW',
      tags: [
        { label: 'ONLINE', color: 'online' as const },
      ],
    },
    {
      id: '5',
      date: '16 Apr',
      time: '11:45 AM',
      day: 'Wed',
      price: '$52.20',
      fromAddress: 'Sydney Airport Terminal 1',
      toAddress: 'Harbour Bridge, Sydney',
      tags: [
        { label: 'ONLINE', color: 'online' as const },
      ],
    },
    {
      id: '6',
      date: '16 Apr',
      time: '3:20 PM',
      day: 'Wed',
      price: '$38.90',
      fromAddress: 'Darling Harbour, Sydney',
      toAddress: 'Manly Beach, NSW',
      tags: [
        { label: 'ONLINE', color: 'online' as const },
      ],
    },
  ];

  const handleFilterPress = () => {
    // Handle filter button press
    console.log('Filter pressed');
  };

  const handleCalendarPress = () => {
    // Handle calendar button press
    console.log('Calendar pressed');
  };

  const handleBookingPress = (booking: TBooking) => {
    // Determine status and status type based on booking tags
    const hasLastMinute = booking.tags.some(tag => tag.color === 'lastMinute');
    const hasPreferred = booking.tags.some(tag => tag.color === 'preferred');
    const hasOnline = booking.tags.some(tag => tag.color === 'online');

    let status = 'OPEN';
    let statusType: 'open' | 'lastminute' | 'last_minute' | 'preferred' | 'online' = 'open';

    if (hasLastMinute) {
      status = 'LAST MINUTE';
      statusType = 'lastminute';
    } else if (hasPreferred) {
      status = 'PREFERRED';
      statusType = 'preferred';
    } else if (hasOnline) {
      status = 'ONLINE';
      statusType = 'online';
    }

    // Create booking data for detail screen
    const bookingData = {
      currentTime: "12:30",
      dateTime: `${booking.date}, ${booking.time}`,
      countdown: "in 3h 40 min", // This could be calculated dynamically
      bookingNumber: `booking ${booking.id}${booking.id}${booking.id}${booking.id}${booking.id}${booking.id}`,
      status,
      statusType,
      rideType: "GPU Ride",
      passengers: 3,
      luggage: 3,
      price: booking.price, // Add the price from the booking
    };

    // Navigate to booking detail screen with booking data
    navigation.navigate(ERoutes.BOOKING_DETAIL, { 
      bookingId: booking.id,
      bookingData 
    });
  };

  return (
    <Container safe style={[theme.globalStyles.bgWhite]}>
      <Header
        title="Available bookings"
        filterButtons={filterButtons}
        onFilterPress={handleFilterPress}
        onCalendarPress={handleCalendarPress}
      />
      
      <ScrollView
        style={[theme.globalStyles.flex1]}
        contentContainerStyle={[
          theme.globalStyles.padding36H,
          { paddingTop: 8, paddingBottom: 32 }
        ]}
        showsVerticalScrollIndicator={false}
      >
        <View style={[theme.globalStyles.directionColumn]}>
          {sampleBookings.map((booking) => (
            <BookingCard
              key={booking.id}
              date={booking.date}
              time={booking.time}
              day={booking.day}
              price={booking.price}
              fromAddress={booking.fromAddress}
              toAddress={booking.toAddress}
              tags={booking.tags}
              onPress={() => handleBookingPress(booking)}
            />
          ))}
        </View>
      </ScrollView>
    </Container>
  );
};

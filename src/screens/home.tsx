import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Container, Header, BookingCard } from '@components/common';
import { theme } from '@styles/theme';
import { TFilterType, TBooking } from '@types';

export const HomeScreen = () => {
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
  ];

  const handleFilterPress = () => {
    // Handle filter button press
    console.log('Filter pressed');
  };

  const handleCalendarPress = () => {
    // Handle calendar button press
    console.log('Calendar pressed');
  };

  const handleBookingPress = (bookingId: string) => {
    // Handle booking card press
    console.log('Booking pressed:', bookingId);
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
        contentContainerStyle={[
          theme.globalStyles.padding36H,
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
              onPress={() => handleBookingPress(booking.id)}
            />
          ))}
        </View>
      </ScrollView>
    </Container>
  );
};

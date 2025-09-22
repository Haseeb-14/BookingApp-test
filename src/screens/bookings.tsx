import React, { useState } from 'react';
import { ScrollView, View } from 'react-native';
import { Container, Header, BookingCard } from '@components/common';
import { theme } from '@styles/theme';
import { TBooking } from '@types';

export const BookingsScreen = () => {
  const [activeTab, setActiveTab] = useState<'active' | 'completed'>('active');

  const filterButtons = [
    {
      label: 'Active',
      isActive: activeTab === 'active',
      onPress: () => setActiveTab('active'),
    },
    {
      label: 'Completed',
      isActive: activeTab === 'completed',
      onPress: () => setActiveTab('completed'),
    },
  ];

  const sampleBookings: TBooking[] = [
    {
      id: '1',
      date: '14 Apr',
      time: '3:00 AM',
      day: 'Mon',
      price: '$33.96',
      fromAddress: '161 Elizabeth St, Sydney',
      toAddress: '1 Kent St Sydney',
      tags: [
        { label: 'PREFERRED', color: 'preferred' as const },
        { label: 'EARLY MORNING', color: 'category' as const },
        { label: 'AIRPORT', color: 'category' as const },
      ],
    },
    {
      id: '2',
      date: '14 Apr',
      time: '3:00 AM',
      day: 'Mon',
      price: '$33.96',
      fromAddress: '161 Elizabeth St, Sydney',
      toAddress: '1 Kent St Sydney',
      tags: [
        { label: 'EARLY MORNING', color: 'category' as const },
      ],
    },
  ];

  const handleFilterPress = () => {
    console.log('Filter pressed');
  };

  const handleCalendarPress = () => {
    console.log('Calendar pressed');
  };

  const handleBookingPress = (booking: TBooking) => {
    console.log('Booking pressed:', booking.id);
  };

  return (
    <Container safe style={[theme.globalStyles.bgWhite]}>
      <Header
        title="My bookings"
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
          {sampleBookings.map((booking, index) => (
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
              showConfirmationMessage={index === 0 || index === 1}
              confirmationMessageColor={index === 0 ? '#F5F5F5' : '#F9CB42'}
            />
          ))}
        </View>
      </ScrollView>
    </Container>
  );
};

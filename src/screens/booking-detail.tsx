import React, { useState } from 'react';
import { ScrollView } from 'react-native';
import { 
  Container, 
  Header,
  RideDetails, 
  InstructionMessage, 
  BookingDetailsList,
  ActionButtons 
} from '@components/common';
import { theme } from '@styles/theme';
import { useAvailableNavigation } from '@hooks/useTypedNavigation';
import { useRoute } from '@react-navigation/native';

export const BookingDetailScreen = () => {
  const navigation = useAvailableNavigation();
  const route = useRoute();
  const [checkedItems, setCheckedItems] = useState<Record<string, boolean>>({});

  // Get booking data from navigation params
  const { bookingData } = route.params as {
    bookingId: string;
    bookingData: {
      currentTime: string;
      dateTime: string;
      countdown: string;
      bookingNumber: string;
      status: string;
      statusType: 'open' | 'lastminute' | 'last_minute' | 'preferred' | 'online';
      rideType: string;
      passengers: number;
      luggage: number;
      price: string; // Add price to the type
    };
  };

  const handleCheckboxChange = (key: string, value: boolean) => {
    setCheckedItems(prev => ({ ...prev, [key]: value }));
  };

  const handleBackPress = () => {
    navigation.goBack();
  };

  const handleAcceptPress = () => {
    // Handle accept booking
    console.log('Accept booking');
  };

  const handleNoThanksPress = () => {
    // Handle no thanks
    console.log('No thanks');
  };

  const handleSignboardPress = () => {
    // Handle signboard PDF
    console.log('Open signboard PDF');
  };

  const isAcceptEnabled = Object.values(checkedItems).every(Boolean);

  const bookingDetails = [
    {
      key: 'time',
      label: 'Time',
      value: '4:58 AM',
      checked: checkedItems.time || false,
    },
    {
      key: 'from',
      label: 'From',
      value: 'Sydney Aeroport',
      checked: checkedItems.from || false,
    },
    {
      key: 'stop',
      label: 'Stop',
      value: '73 Grove Rd, Wamberal NSW',
      checked: checkedItems.stop || false,
    },
    {
      key: 'to',
      label: 'To',
      value: '73 Grove Rd, Wamberal NSW',
      checked: checkedItems.to || false,
    },
    {
      key: 'flight',
      label: 'Flight',
      value: 'QF641 Domestic',
      checked: checkedItems.flight || false,
    },
    {
      key: 'babyseat',
      label: 'Babyseat (x2)',
      value: '4, 6 years',
      checked: checkedItems.babyseat || false,
      hasIcon: true, // Add this line to enable the icon
    },
    {
      key: 'customer',
      label: 'Customer',
      value: 'Luke L',
      checked: checkedItems.customer || false,
    },
    {
      key: 'comment',
      label: 'Comment',
      value: 'Please knock the door',
      checked: checkedItems.comment || false,
    },
    {
      key: 'signboard',
      label: 'Signboard',
      value: 'Filename.pdf',
      checked: false,
      isLink: true,
      onLinkPress: handleSignboardPress,
    },
  ];

  return (
    <Container safe style={[theme.globalStyles.bgWhite]}>
      <Header
        showBookingDetailLayout={true}
        currentTime={bookingData.currentTime}
        dateTime={bookingData.dateTime}
        countdown={bookingData.countdown}
        bookingNumber={bookingData.bookingNumber}
        status={bookingData.status}
        statusType={bookingData.statusType}
        onBackPress={handleBackPress}
        showBackButton={true}
        showActionButtons={false}
        price={bookingData.price} // Pass the price to header
      />
      
      <ScrollView
        style={[theme.globalStyles.flex1]}
        contentContainerStyle={[
          theme.globalStyles.padding36H,
          { paddingTop: 8, paddingBottom: 32 }
        ]}
        showsVerticalScrollIndicator={false}
      >
        <RideDetails
          rideType={bookingData.rideType}
          passengers={bookingData.passengers}
          luggage={bookingData.luggage}
        />

        <InstructionMessage
          message="If you agree to accept this booking please mark checkboxes as read info"
        />

        <BookingDetailsList
          details={bookingDetails}
          onCheckChange={handleCheckboxChange}
        />
      </ScrollView>

      <ActionButtons
        primaryButtonText="Accept"
        secondaryButtonText="No thanks"
        onPrimaryPress={handleAcceptPress}
        onSecondaryPress={handleNoThanksPress}
        primaryDisabled={!isAcceptEnabled}
      />
    </Container>
  );
};

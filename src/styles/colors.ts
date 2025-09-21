export type TColors = {
  // Base colors
  text: string;
  textLight: string;
  textLightExtra: string;
  white: string;
  black: string;
  transparent: string;
  
  // Background colors
  background: string;
  cardBackground: string;
  
  // Primary colors
  primary: string;
  primaryBlue: string;
  
  // Status colors
  success: string;
  danger: string;
  warning: string;
  info: string;
  
  // Tag colors
  lastMinute: string;
  preferred: string;
  open: string;
  category: string;
  
  // UI colors
  border: string;
  muted: string;
  inactive: string;
  inactiveText: string;
  
  // Accent colors
  accent: string;
  leftBorder: string;
  
  // Button colors
  buttonDark: string;
  buttonLight: string;
};

export const colors: TColors = {
  // Base colors
  text: '#000000',
  textLight: '#616161',
  textLightExtra: 'rgba(0,0,0,0.6)',
  white: '#FFFFFF',
  black: '#000000',
  transparent: 'rgba(0,0,0,0)',
  
  // Background colors
  background: '#F5F5F5',
  cardBackground: '#FFFFFF',
  
  // Primary colors
  primary: '#12BF66', // Vibrant green for active states
  primaryBlue: '#297FCA', // Medium blue for preferred tags and left border
  
  // Status colors
  success: '#4CAF50', // Same as primary green
  danger: '#F60B0B',
  warning: '#FBB295',
  info: '#2196F3', // Same as primaryBlue
  
  // Tag colors
  lastMinute: '#FF228C', // Bright pink for last minute tags
  preferred: '#297FCA', // Medium blue for preferred tags
  open: '#4CAF50', // Vibrant green for open status
  category: '#212121', // Dark gray/black for category tags (early morning, airport, late night)
  
  // UI colors
  border: '#E0E0E0', // Light gray for inactive buttons
  muted: '#B6B6B6',
  inactive: '#F6F6FB', // Light gray for inactive filter buttons
  inactiveText: '#616161', // Dark gray for inactive button text
  
  // Accent colors
  accent: '#4CAF50', // Main accent color (green)
  leftBorder: '#2196F3', // Blue for left border accent
  
  // Button colors
  buttonDark: '#3D3D3D', // Dark grey for "No thanks" button
  buttonLight: '#D9D9D9', // Light grey for "Accept" button
};

import { Stack } from 'expo-router';
import React from 'react';

export default function InvoiceLayout() {
  return (
    <Stack screenOptions={{headerShown:false}}>
      <Stack.Screen 
        name="index"
        options={{
          headerShown: false,
        }}
      />
      <Stack.Screen 
        name="create-invoice" 
        options={{
          presentation: 'modal',
          title: 'Create Invoice'
        }}
      />
      <Stack.Screen 
        name="recreate-invoice"
        options={{
          presentation: 'modal', 
          title: 'Bill Pay'
        }}
      />
      <Stack.Screen 
        name="request-invoice"
        options={{
          presentation: 'modal',
          title: 'Request Invoice'
        }}
      />
     <Stack.Screen 
        name="send-detail"
        options={{
          presentation: 'modal',
          title: 'Send Detail'
        }}
      />
      <Stack.Screen 
        name="invoice-detail"
        options={{
          presentation: 'modal',
          title: 'Invoice Detail'
        }}
      />
    </Stack>
  );
}
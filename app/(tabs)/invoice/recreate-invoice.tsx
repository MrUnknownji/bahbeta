import React, { useState } from 'react';
import { View, ScrollView, StyleSheet, Text } from 'react-native';
import { CustomInput } from '@/components/Invoice/CustomInput';
import { CustomButton } from '@/components/Invoice/CustomButton';
import { SendOptionsList } from '@/components/Invoice/SendOptionsList';
import Colors from '@/constants/Colors';
import { CustomHeader } from '@/components/Invoice/CustomHeader';

export default function ReCreateInvoiceScreen() {
  const [formData, setFormData] = useState({
    startDate: '',
    repeatEntry: '',
    frequency: '',
    timePeriod: '',
    quantity: '',
  });

  const [sendOptions, setSendOptions] = useState([
    { id: '1', label: 'SMS', icon: 'commenting', selected: true },
    { id: '2', label: 'Email', icon: 'envelope', selected: true },
    { id: '3', label: 'WhatsApp', icon: 'whatsapp', selected: true },
  ]);

  const handleToggleOption = (id: string) => {
    setSendOptions(options =>
      options.map(option =>
        option.id === id 
          ? { ...option, selected: !option.selected }
          : option
      )
    );
  };

  const handleSendInvoice = () => {
    console.log('Sending invoice:', { formData, sendOptions });
  };

  const handleSaveDraft = () => {
    console.log('Saving draft:', { formData, sendOptions });
  };

  return (
    <ScrollView style={styles.container} contentContainerStyle={{paddingBottom:80}}>
      <View style={styles.content}>
        <CustomHeader title='Create Recurring Invoice' />
        <CustomInput
          label="Invoice start date"
          value={formData.startDate}
          onChangeText={(text) => setFormData(prev => ({ ...prev, startDate: text }))}
          placeholder="Invoice start date"
          type='date'
        />
        <CustomInput
          label="Repeat Entry"
          value={formData.repeatEntry}
          onChangeText={(text) => setFormData(prev => ({ ...prev, repeatEntry: text }))}
          placeholder="Repeat Entry"
        />
        <CustomInput
          label="Select Frequency"
          value={formData.frequency}
          onChangeText={(text) => setFormData(prev => ({ ...prev, frequency: text }))}
          placeholder="Select Frequency"
          type='select'
          options={[
            { title: 'Daily', value: 'daily' },
            { title: 'Weekly', value: 'weekly' },
            { title: 'Monthly', value: 'monthly' },
            { title: 'Yearly', value: 'yearly' },
          ]}
        />
        <CustomInput
          label="Time Period"
          value={formData.timePeriod}
          onChangeText={(text) => setFormData(prev => ({ ...prev, timePeriod: text }))}
          placeholder="Time Period"
          type='select'
          options={[
            { title: 'Days', value: 'days' },
            { title: 'Weeks', value: 'weeks' },
            { title: 'Months', value: 'months' },
            { title: 'Years', value: 'years' },
          ]}
        />
        <CustomInput
          label="Quantity"
          value={formData.quantity}
          onChangeText={(text) => setFormData(prev => ({ ...prev, quantity: text }))}
          placeholder="Quantity"
        />

        <SendOptionsList
          options={sendOptions}
          onToggle={handleToggleOption}
        />

        <CustomButton
          title="Save Draft"
          onPress={handleSaveDraft}
          variant="secondary"
        />
        <CustomButton
          title="Send Invoice"
          onPress={handleSendInvoice}
        />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
  },
  content: {
    padding: 20,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 20,
  },
  headerText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: Colors.textPrimary,
  },
});
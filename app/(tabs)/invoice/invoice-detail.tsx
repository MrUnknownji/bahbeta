import Colors from '@/constants/Colors';
import { FontAwesome } from '@expo/vector-icons';
import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';

type InvoiceDetail = {
  label: string;
  value: string;
};

export default function InvoiceDetailScreen() {
  const invoiceDetails: InvoiceDetail[] = [
    { label: 'Invoice#', value: '00015' },
    { label: 'Invoice Date', value: '10 Oct 2023' },
    { label: 'Customer', value: 'Sonu Ibrahim' },
    { label: 'Mobile Number', value: '+91 78956 34569' },
    { label: 'Total Amount', value: '30.500' },
    { label: 'Remarks', value: 'Order Purchased' },
  ];

  const renderInvoiceRow = (detail: InvoiceDetail, index: number) => (
    <View 
      key={index} 
      style={[
        styles.detailRow,
        index % 2 === 0 && { marginRight: 16 }
      ]}
    >
      <Text style={styles.label}>{detail.label}</Text>
      <Text 
        style={[
          styles.value,
          detail.label === 'Invoice#' && styles.linkText
        ]}
      >
        {detail.label === "Total Amount"? <Text><Text style={styles.bhdText}>BHD</Text> {detail.value}</Text> : detail.value}
      </Text>
    </View>
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.headerTitle}>Invoice Detail</Text>
        <View style={styles.headerRight}>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="copy" size={20} color="#000" />
          </TouchableOpacity>
          <TouchableOpacity style={styles.iconButton}>
            <FontAwesome name="ellipsis-h" size={20} color="#000" />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.content}>
        <View style={styles.detailsGrid}>
          {invoiceDetails.map((detail, index) => renderInvoiceRow(detail, index))}
        </View>

        <View style={styles.statusSection}>
          <Text style={styles.label}>Status</Text>
          <View style={styles.statusContainer}>
            <View style={styles.statusDot} />
            <Text style={styles.statusText}>Awaiting Payment</Text>
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#F5F5F5',
  },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingVertical: 16,
    paddingHorizontal: 28,
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: '600',
    color: '#111827',
  },
  headerRight: {
    flexDirection: 'row',
    alignItems: 'center',
    borderBottomColor: '#E2E2E2',
    borderBottomWidth: 1,
    paddingBottom: 8,
  },
  iconButton: {
    padding: 8,
    marginLeft: 8,
  },
  content: {
    flex: 1,
    paddingHorizontal: 16,
  },
  detailsGrid: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    padding: 16,
  },
  detailRow: {
    width: '45%',
    marginBottom: 24,
  },
  label: {
    fontSize: 18,
    color: Colors.textPrimary,
    marginBottom: 4,
    fontWeight: 'bold',
  },
  value: {
    fontSize: 14,
    color: Colors.textPrimary,
  },
  bhdText:{
    color:Colors.textSecondary
  },
  linkText: {
    color: '#3B82F6',
  },
  statusSection: {
    marginTop: 16,
    paddingHorizontal: 16,
  },
  statusContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    backgroundColor: '#FFECCC',
    alignSelf: 'flex-start',
    paddingVertical: 6,
    paddingHorizontal: 12,
    borderRadius: 20,
    marginTop: 4,
  },
  statusDot: {
    width: 6,
    height: 6,
    borderRadius: 3,
    backgroundColor: '#B14C00',
    marginRight: 6,
  },
  statusText: {
    color: '#B14C00',
    fontSize: 14,
    fontWeight: '500',
  },
});
import React from "react";
import { View, ScrollView, StyleSheet } from "react-native";
import { InvoiceCardProps, StatCardProps } from "@/types";
import { SearchBar } from "@/components/homeScreen Components/SearchBar";
import { StatCard } from "@/components/homeScreen Components/StatCard";
import { ActionBar } from "@/components/homeScreen Components/ActionBar";
import { InvoiceCard } from "@/components/homeScreen Components/InvoiceCard";

const stats: (StatCardProps & { type?: "overdue" | "awaiting" | "draft" })[] = [
  {
    title: "Overdue Invoices",
    amount: "11,345.50",
    count: 13,
    type: "overdue",
  },
  { title: "Awaiting Payment", amount: "5,578.00", count: 5, type: "awaiting" },
  { title: "Draft Invoices", amount: "978.37", count: 4, type: "draft" },
];

const invoices: InvoiceCardProps[] = [
  { id: "00015", name: "John Doe", amount: "190", status: "OVERDUE" },
  { id: "00016", name: "John Doe", amount: "190", status: "PAID" },
  { id: "00017", name: "John Doe", amount: "250", status: "PENDING" },
  { id: "00018", name: "John Doe", amount: "250", status: "PENDING" },
];

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <SearchBar />

        <ScrollView
          horizontal
          showsHorizontalScrollIndicator={false}
          style={styles.statsScroll}
        >
          {stats.map((stat, index) => (
            <StatCard key={index} {...stat} />
          ))}
        </ScrollView>

        <ActionBar />
      </View>

      <ScrollView contentContainerStyle={styles.invoicesListContainer}>
        {invoices.map((invoice, index) => (
          <InvoiceCard key={index} {...invoice} />
        ))}
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  statsScroll: {
    marginBottom: 16,
  },
  container: {
    flex: 1,
    backgroundColor: "#f9fafb",
  },
  header: {
    padding: 16,
  },
  invoicesListContainer: {
    paddingBottom: 80,
  },
});

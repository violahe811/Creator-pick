import React from 'react';
import { View, Text, Image, ScrollView } from 'react-native';

export default function ProductDetailScreen({ route }) {
  const { product } = route.params;

  return (
    <ScrollView style={{ padding: 20 }}>
      <Image
        source={{ uri: product.thumbnail }}
        style={{ width: '100%', height: 250 }}
      />

      <Text style={{ fontSize: 20, fontWeight: 'bold', marginTop: 10 }}>
        {product.title}
      </Text>

      <Text style={{ fontSize: 18, marginVertical: 5 }}>
        ${product.price}
      </Text>

      <Text>⭐ {product.rating}</Text>

      <Text style={{ marginVertical: 10 }}>
        {product.description}
      </Text>

      <Text style={{ color: 'orange', fontWeight: 'bold' }}>
        🔥 Recommended by Top Creator
      </Text>
    </ScrollView>
  );
}
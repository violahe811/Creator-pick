import React, { useEffect, useState } from 'react';
import {
  View,
  Text,
  FlatList,
  ActivityIndicator,
  TouchableOpacity,
  Image,
  TextInput,
} from 'react-native';

import { fetchProducts } from '../api';

export default function ProductListScreen({ navigation }) {
  const [products, setProducts] = useState([]);
  const [filtered, setFiltered] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [search, setSearch] = useState('');

  useEffect(() => {
    loadProducts();
  }, []);

  useEffect(() => {
    const result = products.filter(p =>
      p.title.toLowerCase().includes(search.toLowerCase())
    );
    setFiltered(result);
  }, [search, products]);

  const loadProducts = async () => {
    setLoading(true);
    setError(null);

    try {
      const data = await fetchProducts();
      setProducts(data);
      setFiltered(data);
    } catch (e) {
      setError('Failed to load products');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <ActivityIndicator size="large" />;
  if (error) return <Text>{error}</Text>;

  return (
    <View>
      {/* 搜索栏 */}
      <TextInput
        placeholder="Search products..."
        value={search}
        onChangeText={setSearch}
        style={{
          borderWidth: 1,
          margin: 10,
          padding: 8,
          borderRadius: 8,
        }}
      />

      <FlatList
        data={filtered}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() =>
              navigation.navigate('Detail', { product: item })
            }
            style={{
              padding: 10,
              borderBottomWidth: 1,
              flexDirection: 'row',
            }}
          >
            <Image
              source={{ uri: item.thumbnail }}
              style={{ width: 80, height: 80, marginRight: 10 }}
            />

            <View style={{ flex: 1 }}>
              <Text numberOfLines={1}>{item.title}</Text>
              <Text>${item.price}</Text>
              <Text>⭐ {item.rating}</Text>

              {/* 达人标签 */}
              <Text style={{ color: 'orange' }}>
                🔥 Creator Pick
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}
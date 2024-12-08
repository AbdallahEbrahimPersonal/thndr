import React from 'react';
import { StyleSheet, TextInput, TouchableOpacity, View } from 'react-native';
import { Search, X } from 'lucide-react-native';
import { colors, spacing } from '@/lib';

type SearchInputProps = {
  value: string;
  onSearch: (text: string) => void;
  onClear: () => void;
  placeholder?: string;
};

const SearchInput = ({
  value,
  onSearch,
  onClear,
  placeholder = 'Search stocks ...',
}: SearchInputProps) => {
  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onSearch}
        placeholder={placeholder}
        testID="search-input"
      />
      <TouchableOpacity
        style={styles.icon}
        onPress={() => {
          if (value.length > 0) {
            onClear();
          }
        }}
        testID="search-input-clear">
        {value.length > 0 ? <X size={20} /> : <Search size={20} />}
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.medium,
  },
  input: {
    flex: 1,
    paddingLeft: spacing.small,
    paddingVertical: spacing.small,
    backgroundColor: colors.white,
    height: 42,
  },
  icon: {
    position: 'absolute',
    right: spacing.small,
    marginLeft: spacing.small,
    padding: spacing.small,
  },
});

export { SearchInput };

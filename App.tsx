import React from 'react';
import { SafeAreaView } from 'react-native';
import { Text } from './src/components/Text/Text';

function App(): React.JSX.Element {
  return (
    <SafeAreaView>
      <Text preset="headingLarge" italic>Coffstack</Text>
      <Text preset="headingLarge">Coffstack</Text>
    </SafeAreaView>
  );
}

export default App;

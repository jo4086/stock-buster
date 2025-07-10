import React from 'react';

import { ExternalLink } from './ExternalLink';
import { MonoText } from './StyledText';
import { Text, TextInput, View } from './Themed';

import Colors from '@/constants/Colors';

export default function TodoScreenInfo({ path }: { path: string }) {
  return (
    <View>
      <View>
        <MonoText>{path}</MonoText>
        <TextInput />
      </View>
    </View>
  );
}

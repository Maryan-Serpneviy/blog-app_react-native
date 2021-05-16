import React, { FC } from 'react'
import { View, Text } from 'react-native'

import commonStyles from '../styles/common'

export const InfoScreen: FC = () => (
   <View style={[commonStyles.center]}>
      <Text>Info screen</Text>
   </View>
)

export default InfoScreen
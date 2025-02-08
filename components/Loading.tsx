import { View, Text, ViewStyle, StyleProp, DimensionValue } from 'react-native'
import React from 'react'
import LottieView from 'lottie-react-native'

type LoadingProps = {
    size: DimensionValue
}
const Loading = ({ size }: LoadingProps) => {
    return (
        <View style={{ height: size, aspectRatio: 1 }}>
            <LottieView style={{ flex: 1 }} source={require('../assets/images/loading.json')} autoPlay loop
            />
        </View>
    )
}

export default Loading
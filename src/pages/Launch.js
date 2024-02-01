import React from 'react'
import { Text, View } from 'react-native'
import { styles } from '../styles/styles'
import { SafeAreaView } from 'react-native-safe-area-context'
import Button from '../componets/Button'
import { useNavigation } from '@react-navigation/native'
const TopFrame = () => {
    return (
        <View style={styles.launchTop}>
            <Text style={styles.launchTopText}>
                Face Analysis
            </Text>
            <Text style={styles.launchSmallText}>
                with
            </Text>
            <Text style={styles.launchTopText}>
                Deepface
            </Text>
        </View>
    )
}
const BottomFrame = () => {
    const navigation = useNavigation();
    const buttonPress = () => {
        navigation.navigate('/home');
    }
    return (
        <View style={styles.launchBottom}>
            <Text style={styles.launchBottomTitle}>
                Bir fotoğraf yükleyin
            </Text>
            <Button
                onPress={() => buttonPress()}
                text={"Fotoğraf ekle"}
                mt={24} />
        </View>
    )
}
const Launch = () => {
    return (
        <SafeAreaView
            edges={["top", "left", "right"]}
            style={{
                ...styles.container,
                backgroundColor: "#03AAFF"
            }}>
            <TopFrame />
            <BottomFrame />
        </SafeAreaView>
    )
}

export default Launch
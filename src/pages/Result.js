import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import { fullWidth, styles } from '../styles/styles';
import Button from '../componets/Button';

const Row = ({ Key, Value }) => {
    return (
        <View style={styles.row}>
            <Text style={styles.rowKey}>
                {Key + ":"}
            </Text>
            <Text style={styles.rowValue}>
                {Value}
            </Text>
        </View>
    )
}
const Result = ({ route, navigation }) => {
    const data = route?.params?.data;
    const goBack = () => {
        navigation.goBack();
    }
    return (
        <SafeAreaView
            style={styles.container}>
            <Image
                style={styles.resultImage}
                source={data.image} />
            <Text style={styles.resultsText}>
                Results
            </Text>
            <Row Key={"Age"} Value={"daskgdhj"} />
            <Row Key={"Gender"} Value={"daskgdhj"} />
            <Row Key={"Emotion"} Value={"Nfdf"} />
            <Row Key={"Race"} Value={"daskgdhj"} />
            <Button
                onPress={() => navigation.navigate('/launch')}
                style={{
                    maxWidth: fullWidth - 32
                }}
                mt={32}
                text={"Yeniden başla"} />
        </SafeAreaView>
    )
}

export default Result
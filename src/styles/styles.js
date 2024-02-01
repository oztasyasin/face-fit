import { StatusBar } from "expo-status-bar";
import { Dimensions, StyleSheet } from "react-native";
import Constants from "expo-constants";
export const fullWidth = Dimensions.get('window').width;
export const fullHeight = Dimensions.get('window').height;

export const fullSize = {
    width: fullWidth,
    height: fullHeight
}
const statusBarHeight = Constants.statusBarHeight;
export const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        paddingHorizontal: 16,
    },
    launchTop: {
        width: '100%',
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
    launchTopText: {
        fontSize: 44,
        fontWeight: 600,
        color: 'white'
    },
    launchSmallText: {
        fontSize: 20,
        fontWeight: 600,
        color: 'white'
    },
    launchBottom: {
        width: Dimensions.get('window').width,
        borderRadius: 24,
        paddingVertical: 40,
        paddingHorizontal: 16,
        backgroundColor: 'white',
        alignItems: 'center'
    },
    launchBottomTitle: {
        fontSize: 28,
        fontWeight: 600,
    },
    baseButton: {
        width: '100%',
        borderRadius: 16,
        paddingVertical: 16,
        paddingHorizontal: 24,
        backgroundColor: "#03AAFF",
        justifyContent: 'center',
        alignItems: 'center',

    },
    baseButtonText: {
        fontSize: 16,
        fontWeight: 600,
        color: 'white'
    },
    camera: {
        maxWidth: fullWidth,
        maxHeight: fullWidth,
        height: fullWidth,
        width: fullWidth
    },
    cameraBottomFrame: {
        alignItems: 'center',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: fullWidth,
        height: 129,
        paddingBottom: 33,
        zIndex: 10,
        backgroundColor: 'rgba(0,0,0,0.9)'
    },
    captureButton: {
        padding: 8,
        borderRadius: 32,
        height: 64,
        width: 64,
        backgroundColor: 'white'
    },
    backButton: {
        marginTop: statusBarHeight + 16,
        marginLeft: 16,
        backgroundColor: 'rgba(0,0,0,0.4)',
        width: 32,
        height: 32,
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 16
    },
    resultImage: {
        width: fullWidth - 32,
        borderRadius: 24,
        height: 418,
        marginTop: 32
    },
    resultsText: {
        fontSize: 28,
        fontWeight: 600,
        marginVertical: 12
    },
    row: {
        width: '100%',
        paddingHorizontal: 16,
        alignItems: 'center',
        paddingVertical: 12,
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowKey: {
        fontSize: 16,
        fontWeight: 500,
        color: '#869196'
    },
    rowValue: {
        fontSize: 16,
        fontWeight: 500,
    }

})
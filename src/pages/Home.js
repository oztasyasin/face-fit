import { Camera, CameraType } from 'expo-camera';
import { useEffect, useRef, useState } from 'react';
import { Button, Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { styles } from '../styles/styles';
import { AntDesign, Feather, Ionicons, MaterialIcons } from '@expo/vector-icons';
import * as ImagePicker from 'expo-image-picker';

const iconProps = {
    size: 32,
    color: 'white'
}
const BottomFrame = ({
    image,
    captureImage,
    pickImage,
    flipCamera,
    cancel,
    useIt
}) => {
    return (
        <View style={styles.cameraBottomFrame}>
            {
                !image ?
                    <>
                        <TouchableOpacity
                            onPress={() => pickImage()}>
                            <Ionicons
                                name="image"
                                {...iconProps} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => captureImage()}
                            style={styles.captureButton}>
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => flipCamera()}>
                            <MaterialIcons
                                name="flip-camera-ios"
                                {...iconProps} />
                        </TouchableOpacity>
                    </> :
                    <>
                        <TouchableOpacity
                            onPress={() => useIt()}>
                            <Feather name="check" {...iconProps} />
                        </TouchableOpacity>
                        <TouchableOpacity
                            onPress={() => cancel()}>
                            <Ionicons name="close" {...iconProps} />
                        </TouchableOpacity>
                    </>
            }

        </View>
    )
}
const Home = ({ navigation }) => {
    const [type, setType] = useState(CameraType.back);
    const [permission, requestPermission] = Camera.useCameraPermissions();
    const ref = useRef();
    const [image, setImage] = useState();
    function toggleCameraType() {
        setType(current => (current === CameraType.back ? CameraType.front : CameraType.back));
    }
    const capture = async () => {
        const photo = await ref.current.takePictureAsync();
        setImage(() => {
            return photo;
        })
    }
    const cancel = () => {
        setImage(() => {
            return null
        })
    }
    const pickImage = async () => {
        try {
            const result = await ImagePicker.launchImageLibraryAsync({
                mediaTypes: ImagePicker.MediaTypeOptions.All,
                aspect: [1, 1],
                quality: 0.7,
            });
            if (!result.canceled) {
                setImage(() => {
                    return result?.assets[0]
                })
            }
            return null
        } catch (error) {
            return null
        }
    }
    const formatImage = async (uri) => {
        try {
            const manipResult = await ImageManipulator.manipulateAsync(
                uri,
                [{ resize: { width: 720, height: 720 } }],
            );
            return manipResult
        } catch (error) {
            return uri
        }
    }
    const useIt = () => {
        
        navigation.navigate('/result', { data: { image: image } });
        setImage(() => {
            return null
        })
    }
    useEffect(() => {
        Camera.requestCameraPermissionsAsync()
            .then((res) => {
                requestPermission(() => { return res.status == 'granted' })
            })

    }, [])

    return (
        <>
            {
                permission && !image ?
                    <View style={{
                        ...styles.container,
                        justifyContent: 'center',
                        backgroundColor: 'black',
                        justifyContent: 'space-between'
                    }}>

                        <View style={{
                            ...styles.cameraBottomFrame,
                            justifyContent: 'flex-start'
                        }} >
                            <TouchableOpacity
                                onPress={() => navigation.goBack()}
                                style={styles.backButton}>
                                <AntDesign
                                    name="arrowleft"
                                    size={20}
                                    color="white" />
                            </TouchableOpacity>
                        </View>
                        <Camera
                            ratio='1:1'
                            ref={ref}
                            style={styles.camera}
                            type={type} />
                        <BottomFrame
                            image={image}
                            pickImage={pickImage}
                            flipCamera={toggleCameraType}
                            captureImage={capture}
                        />
                    </View> :
                    permission && image ?
                        <View style={{
                            ...styles.container,
                            justifyContent: 'center',
                            backgroundColor: 'black',
                            justifyContent: 'space-between'
                        }}>
                            <View style={{
                                ...styles.cameraBottomFrame,
                                justifyContent: 'flex-start'
                            }} >
                                <TouchableOpacity
                                    onPress={() => navigation.goBack()}
                                    style={styles.backButton}>
                                    <AntDesign
                                        name="arrowleft"
                                        size={20}
                                        color="white" />
                                </TouchableOpacity>
                            </View>
                            <Image style={styles.camera} source={image} />
                            <BottomFrame
                                image={image}
                                useIt={useIt}
                                cancel={cancel}
                            />
                        </View>
                        : null
            }
        </>
    )
}
export default Home
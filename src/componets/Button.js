import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import { styles } from '../styles/styles'

const Button = (props) => {
    return (
        <TouchableOpacity
            style={{
                ...styles.baseButton,
                ...props.style,
                marginTop: props.mt,
                marginBottom: props.mb
            }}
            onPress={() => props.onPress()}>
            <Text style={styles.baseButtonText}>
                {props.text}
            </Text>
        </TouchableOpacity>
    )
}

export default Button
import React, { Component } from 'react'
import { StyleSheet, TouchableOpacity, View } from 'react-native'
import { Text } from '../../../components'
import { COLORS } from '../../../themes/style';

export default class Button extends Component {
    render() {
        const { style, text, color } = this.props;
        // console.log(color);
        return (
            <TouchableOpacity style={[style, styles.button]}>
                <Text style={{ fontWeight: '600', }} color={color}>{text}</Text>
            </TouchableOpacity>
        )
    }
}
const styles = StyleSheet.create({
    button: {
        borderRadius: 10,
        width: 80,
        height: 25,
        alignItems: 'center',
        justifyContent: 'center',
        marginRight: 10,
        marginVertical: 10
    }
})


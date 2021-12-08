import React, { Component } from 'react'
import { StyleSheet, Text as RNText, View } from 'react-native'
export default class Text extends Component {
    render() {
        const { color = '#fff', children, style, title, subTitle } = this.props;

        return (
            <RNText {...this.props} style={[style, title && styles.title, subTitle && styles.subTitle, { color }]}>
                {children}
            </RNText>
        )
    }
}
const styles = StyleSheet.create({
    title: {
        fontWeight: '600',
        // fontSize: 20
    },
    subTitle: {
        opacity: 0.55,
        fontSize: 13,
    }
})




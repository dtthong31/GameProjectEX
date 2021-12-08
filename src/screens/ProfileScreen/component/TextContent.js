import React, { Component } from 'react'
import { View } from 'react-native'
import { Text } from '../../../components'

export default class TextContent extends Component {
    render() {
        const { number, name, style } = this.props;
        return (
            <View style={[{ flexDirection: 'row', alignItems: 'flex-end' }, , style]}>
                <Text style={[{ fontSize: 25, fontWeight: '600', paddingRight: 5 }]}>{number}</Text>
                <Text style={{ opacity: 0.55 }}>{name}</Text>
            </View>
        )
    }
}

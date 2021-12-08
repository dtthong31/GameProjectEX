import React, { Component } from 'react'
import { StyleSheet, View, Image } from 'react-native'
import { Text } from '../../../components';
import { COLORS } from '../../../themes/style';

export default class ItemGames extends Component {
    render() {
        const { item } = this.props;
        return (
            <View style={styles.container}>
                <View style={styles.item}>
                    <Image source={{ uri: item.icon }} style={styles.image} />
                    <View style={styles.textView}>
                        <Text title>{item.title}</Text>
                        <Text subTitle> 825 Sales</Text>
                    </View>
                </View>
                <Text color="#819ee5" > $36 </Text>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        marginHorizontal: 20,
    },
    image: {
        width: 80,
        height: 80,
        borderRadius: 20,
    }, item: {
        flexDirection: 'row'
    },
    textView: {
        justifyContent: 'center',
        marginLeft: 10
    }
})

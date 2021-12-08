import React, { Component } from 'react'
import { StyleSheet, View, Image, TouchableOpacity } from 'react-native'
import Text from '../../../components/Text';
import { navigate } from '../../../navigation/root-navigation';
import { screenName } from '../../../utils/constant';

export default class GameInfo extends Component {
    render() {
        const { gameItem, onPress } = this.props;
        return (

            <TouchableOpacity
                onPress={() => { navigate(screenName.detail, { id: gameItem.id }) }}
                activeOpacity={0.8}>
                <Image
                    source={{ uri: gameItem.preview[0] }}
                    style={styles.banner}
                />
                <View style={[styles.gameInfo, { backgroundColor: gameItem.backgroundColor }]}>
                    <Image source={{ uri: gameItem.icon }} style={styles.icon} />
                    <View style={{ width: "60%" }}>
                        <Text title>{gameItem.title}</Text>
                        <Text subTitle>{gameItem.subTitle}</Text>
                    </View>
                </View>
            </TouchableOpacity>
        )
    }
}

const styles = StyleSheet.create({
    gameInfo: {
        flexDirection: 'row',
        padding: 10,
        borderRadius: 8,
        position: 'absolute',
        left: 20,
        bottom: -50,
        width: '90%',
        justifyContent: 'space-around',
        alignItems: 'center'

    },
    banner: {
        width: '100%',
        height: 200,
    },
    icon: {
        height: 80,
        width: 80,
        borderRadius: 10,
    }
})

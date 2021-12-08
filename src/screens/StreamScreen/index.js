import React, { Component } from 'react'
import { FlatList, Image, ImageBackground, StyleSheet, TextInput, View } from 'react-native'
import BackgroundView from '../../components/BackgroundView'
import Text from '../../components/Text'
import { styles } from './style.StreamScreen'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../../themes/style.js'
import { getListGame } from '../../api/index.js'
import { useState } from 'react'
import { useEffect } from 'react'
import { mapIP } from '../../utils/common.js'
import { getRequestListGame } from '../../redux/thunk/gameThunkActions.js'
import { useDispatch, useSelector } from 'react-redux'
import { getListGameSelectors } from '../../redux/selector/gameSelectors.js'
const StreamScreen = () => {
    const dispatch = useDispatch();
    const listGame = useSelector(getListGameSelectors);
    useEffect(() => {
        dispatch(getRequestListGame());
    }, [])
    return (
        <BackgroundView style={styles.container}>
            <View style={styles.headerContainer}>
                <Text style={styles.headerText}> Streaming </Text>
                <View >
                    <TextInput style={styles.search} />
                    <AntDesign style={styles.iconStyle} name="search1" size={20} color={COLORS.white} />
                </View>
            </View>
            <View style={styles.popularGameContainer} >
                <Text style={{ fontSize: 15 }}>Popular Game</Text>
                <FlatList
                    style={{ flexGrow: 0, marginTop: 10 }}
                    data={listGame}
                    renderItem={({ item }) => <Image source={{ uri: item.icon }} style={styles.imageStyle} />}
                    horizontal={true}
                    ItemSeparatorComponent={() => <View style={{ width: 17 }} />}
                />
            </View>
            <View style={styles.liveContainer} >
                <FlatList
                    data={listGame}
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                    renderItem={({ item }) => (

                        <ImageBackground
                            source={{ uri: item.preview[0] }}
                            style={{ width: 400, height: 200, borderRadius: 30 }} >
                            <View style={{ flexDirection: 'row', justifyContent: 'flex-end', marginRight: 30, marginTop: 10 }}>
                                <Text title style={[{ backgroundColor: COLORS.lightBlue }, styles.textLive, styles.textPillar]}>The Pillar </Text>
                                <Text title style={[{ backgroundColor: "#e54949" }, styles.textLive]}>Live </Text>
                            </View>
                        </ImageBackground>

                    )}
                />
            </View>
        </BackgroundView>
    )

}

export default StreamScreen;

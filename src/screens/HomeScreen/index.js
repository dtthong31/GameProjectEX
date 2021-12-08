import React, { Component } from 'react'
import { useEffect } from 'react';
import { FlatList, StyleSheet, View } from 'react-native'
import { connect, useDispatch, useSelector } from 'react-redux';
import BackgroundView from '../../components/BackgroundView'
import Text from '../../components/Text/index.js'
import { getIsFetchingSelectors, getListGameSelectors } from '../../redux/selector/gameSelectors';
import { getRequestListGame } from '../../redux/thunk/gameThunkActions.js';
import { COLORS } from '../../themes/style.js';
import GameInfo from './components/GameInfo.js';
const HomeScreen = () => {

    const dispatch = useDispatch();
    const listGame = useSelector(getListGameSelectors);
    useEffect(() => {
        dispatch(getRequestListGame());
    }, [])

    return (
        <BackgroundView >
            <View style={styles.headerContainer} >
                <View>
                    <Text style={styles.headerText}> Hello
                        <Text style={styles.fontBold}> CyberSoft</Text>
                    </Text>
                    <Text> Best game for today</Text>
                </View>
                <View style={styles.avatar} />
            </View>
            <FlatList
                data={listGame}
                showsVerticalScrollIndicator={false}
                renderItem={({ item }) => <GameInfo
                    gameItem={item}
                />}
                ItemSeparatorComponent={() => <View style={{ height: 70 }} />}
                contentContainerStyle={{ paddingBottom: 100 }}
            />
        </BackgroundView>
    )
}
const styles = StyleSheet.create({
    headerContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        paddingHorizontal: 10,
        marginBottom: 5,
    },

    headerText: {
        fontSize: 30,
    },
    fontBold: {
        fontWeight: '800',
    },
    avatar: {
        backgroundColor: COLORS.lightPurple,
        height: 50,
        width: 50,
        borderRadius: 25,
    }
})

export default (HomeScreen);

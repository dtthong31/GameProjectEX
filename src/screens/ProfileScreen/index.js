import React, { useEffect } from 'react'
import { FlatList, Image, TouchableOpacity, View } from 'react-native'
import { useDispatch, useSelector } from 'react-redux';
import { BackgroundView, Text } from '../../components/index';
import { getListGameSelectors } from '../../redux/selector/gameSelectors';
import { getRequestListGame } from '../../redux/thunk/gameThunkActions';
import { COLORS } from '../../themes/style';
import Button from './component/Button';
import ItemGames from './component/ItemGames';
import TextContent from './component/TextContent';
import { styles } from './style.profile';

const ProfileScreen = () => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(getRequestListGame());
    }, []);
    const listGame = useSelector(getListGameSelectors);
    return (
        <BackgroundView>
            <View style={styles.topViewContainer}>
                <View style={styles.avatar} />
                <Text style={{ fontSize: 20, fontWeight: '900', marginVertical: 10 }}>CyberSoft</Text>
                <View style={{ flexDirection: "row", }}>
                    <Button text="Pro Game" style={{ backgroundColor: COLORS.lightBlue, }} />
                    <Button text="Pro Coder" style={styles.btnCoder} color="#000" />
                </View>
                <View style={{ flexDirection: 'row', marginVertical: 10 }}>
                    <TextContent number="250" name="Games" style={{ marginRight: 15 }} />
                    <TextContent number="4" name="Purchases" />
                </View>
            </View>
            <View style={styles.bottomViewContainer}>
                <Text style={{ fontSize: 20, textAlign: 'center', marginBottom: 20 }}>Purchased Games</Text>
                <FlatList
                    data={listGame}
                    renderItem={({ item }) => <ItemGames item={item} />}
                    ItemSeparatorComponent={() => <View style={{ height: 20 }} />}
                />
            </View>
        </BackgroundView>
    )
}

export default ProfileScreen;
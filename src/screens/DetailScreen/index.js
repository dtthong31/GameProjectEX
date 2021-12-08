import React, { Component } from 'react'
import { View, TouchableOpacity, Image, FlatList } from 'react-native'
import BackgroundView from '../../components/BackgroundView';
import { styles } from './styles.detail'
import AntDesign from 'react-native-vector-icons/AntDesign'
import { COLORS } from '../../themes/style';
import Ionicons from 'react-native-vector-icons/Ionicons'
import { connect } from 'react-redux';
import Text from '../../components/Text';
import { getRequestGameById } from '../../redux/thunk/gameThunkActions';
import { useEffect } from 'react';
const DetailScreen = ({ game, getRequestGameById, navigation, isFetching, route }) => {

    renderStar = () => {
        let listStar = [];
        for (let index = 1; index <= 5; index++) {
            const element = Math.round(game.rating) >= index ? COLORS.lightPurple : COLORS.white;
            listStar.push(<AntDesign key={index} name="star" size={18} color={element} />)
        }
        listStar.push(<Text key={'Text'}>{game.rating}</Text>);
        return listStar;
    }
    useEffect(() => {
        getRequestGameById(route.params.id)
    }, [])

    if (isFetching || !game.title) {
        return <Text title>Loading!!!</Text>
    }
    return (
        <BackgroundView>
            <Image
                source={{ uri: game.preview[0] }}
                style={styles.barnerConntain} />
            <TouchableOpacity style={styles.iconBack} onPress={() => navigation.goBack()}>
                <AntDesign name="close" color={COLORS.white} size={30} />
            </TouchableOpacity>
            <View style={styles.infoContent}>
                <View style={styles.topInfoContentIcon}>
                    <Image source={{ uri: game.icon }} style={styles.iconStyle} />
                    <View style={{ width: "65%", marginLeft: 5 }}>
                        <Text title>{game.title}</Text>
                        <Text subTitle style={styles.topTextContent}>{game.subTitle}</Text>
                    </View>
                    <View style={styles.downLoadStyle}>
                        <Ionicons name="cloud-download" size={30} color={COLORS.white} />
                    </View>
                </View>
                <View style={styles.botInfoContent}>
                    <View style={styles.starContent}>{renderStar()}</View>
                    <Text>{game.age}</Text>
                    <Text>Game for the day</Text>
                </View>
            </View>
            <View style={styles.previewContent} >
                <FlatList
                    snapToInterval={350}
                    decelerationRate="fast"
                    horizontal
                    showsHorizontalScrollIndicator={false}
                    contentContainerStyle={{ paddingRight: 10 }}
                    style={styles.listPreview}
                    data={game.preview}
                    renderItem={({ item }) => (
                        <Image source={{ uri: item }} style={styles.previewItem} />
                    )}
                    ItemSeparatorComponent={() => <View style={{ width: 30 }} />}
                />
                <Text subTitle>{game.description}</Text>
            </View>
        </BackgroundView>
    )
}

const mapDispatchToProps = (dispatch) => ({
    getRequestGameById: (id) => dispatch(getRequestGameById(id)),
})
const mapStateToProps = state => ({
    game: state.gameReducer.gameDetail,
    isFetching: state.gameReducer.isFetching,
})
export default connect(mapStateToProps, mapDispatchToProps)(DetailScreen);

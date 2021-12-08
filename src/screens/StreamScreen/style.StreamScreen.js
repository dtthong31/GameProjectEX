import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
        paddingHorizontal: 10,
    },
    headerText: {
        fontSize: 28,
        fontWeight: '900'
    },
    headerContainer: {
        flex: 0.8,
        // backgroundColor: '#fbf',
    },
    popularGameContainer: {
        flex: 1
    },
    liveContainer: {
        flex: 2,
    },
    search: {
        marginTop: 30,
        // marginBottom: 10,
        marginHorizontal: 10,
        backgroundColor: "#404040",
        padding: 10,
        paddingRight: 47,
        borderRadius: 20
    },
    iconStyle: {
        position: "absolute",
        top: 44,
        right: 30,
    }, imageStyle: {
        width: 80,
        height: 80,
        borderRadius: 10,

    },
    textLive: {
        width: 60, fontSize: 20, textAlign: 'center',
        borderRadius: 5,
        marginHorizontal: 5
    },
    textPillar: {
        width: 100
    }

})

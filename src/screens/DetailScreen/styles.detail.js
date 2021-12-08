import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    barnerConntain: {
        flex: 2,
        width: "100%",
    },
    iconBack: {
        position: 'absolute',
        top: 20,
        left: 10,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "gray",
        borderRadius: 25,
    },
    downLoadStyle: {
        marginTop: 20,
        height: 40,
        width: 40,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: "#819ee8",
        borderRadius: 25,
    },
    infoContent: {
        flex: 0.7,
        padding: 15,
        justifyContent: 'center',

    },
    previewContent: {
        flex: 2,
        paddingHorizontal: 15,
        justifyContent: 'space-around',
    },
    iconStyle: {
        width: 80,
        height: 80,
        borderRadius: 10
    },
    previewItem: {
        height: 190,
        width: 300,
        borderRadius: 25,

    }, topInfoContentIcon: {
        flex: 1,
        // padding: 15,
        flexDirection: 'row',
        justifyContent: 'space-between'
    }, topTextContent: {
        width: '100%',

    },
    botInfoContent: {
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    starContent: {
        flexDirection: 'row',
    }, listPreview: {
        flexGrow: 0,
        marginRight: 15,
    },
})

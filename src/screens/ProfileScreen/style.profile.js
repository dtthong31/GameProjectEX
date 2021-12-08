import { StyleSheet } from "react-native";
import { COLORS } from "../../themes/style";

export const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    topViewContainer: {
        flex: 1.5,
        alignItems: "center",
        justifyContent: 'center'
    }
    ,
    avatar: {
        backgroundColor: "gray",
        width: 120,
        height: 120,
        borderRadius: 100
    },
    bottomViewContainer: {
        flex: 2,
    },

    btnCoder: {
        backgroundColor: COLORS.lightYellow,

    },
    textButton:
        { fontWeight: '600', color: '#000' }
})

import { StyleSheet } from "react-native"

export const styles = StyleSheet.create({
    outerInfoBox: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        marginHorizontal: 5,
        marginBottom: 5,
    },
    outerInfoBoxDisabled: {
        flex: 1,
        backgroundColor: "#f0f0f0",
        marginHorizontal: 5,
        marginBottom: 5,
        opacity: 0.5,
    },
    infoBox: {
        flex: 1,
        position: 'relative',
        gap: 5,
        backgroundColor: "#C3C7CB",
        borderColor: "#606060",
        padding: 10,
        borderWidth: 2,
        shadowColor: '#fff',
        shadowOffset: { width: -2, height: -2 },
        shadowOpacity: 1,
        shadowRadius: 2
    },
    inputBox: {
        flex: 1,
        padding: 5,
        paddingLeft: 20,
        paddingRight: 30,
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 30
    },
})
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
        opacity: 0.5
    },
    infoBox: {
        flex: 1,
        gap: 10,
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
        width: '50%',
        flexDirection: 'row',
        justifyContent: 'space-between',
        gap: 30
    },
})
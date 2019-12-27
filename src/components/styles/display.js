import { StyleSheet } from 'react-native';

const display = StyleSheet.create({
    none: {
        display: "none"
    },
    flex: {
        display: "flex"
    }
});

const flex = StyleSheet.create({
    row: {
        flexDirection: "row"
    },
    column: {
        flexDirection: "column"
    }
});

const position = StyleSheet.create({
    relative: {
        position: "relative"
    },
    absolute: {
        position: "absolute"
    }
});

export {display, flex, position};
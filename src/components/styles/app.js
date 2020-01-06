import { StyleSheet } from 'react-native';
import { $colors } from './variables';
import margins from './helpers/margins';
import paddings from './helpers/paddings';
import { mixBorderRadius } from './helpers/borders';

export default StyleSheet.create({
    screen: {
        backgroundColor: $colors.main,
        flex: 1
    },
    message: {
        backgroundColor: $colors.white,
        ...mixBorderRadius(5),
        display: "flex",
        ...margins(10),
        ...paddings({top: 20, right: 10, bottom: 20, left: 10})
    }
});
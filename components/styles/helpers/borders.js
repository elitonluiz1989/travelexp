import $color from '../variables';

const mixBorders = border => {
    border = border || {};    
    const customBorder = {
        borderColor: border.color || $color.gray,
        borderStyle: border.style || "solid",
    };

    if (border.side) {
        if (border.side.includes('top')) {
            customBorder.borderTopWidth = border.width || 1;
        }
        
        if (border.side.includes('right')) {
            customBorder.borderRightWidth = border.width || 1;
        }
        
        if (border.side.includes('bottom')) {
            customBorder.borderBottomWidth = border.width || 1;
        }
        
        if (border.side.includes('left')) {
            customBorder.borderLeftWidth = border.width || 1;
        }
    } else {
        customBorder.borderWidth = border.width || 1;
    }

    return customBorder;
};

const mixBorderRadius = radius => {
    let customRadius = {};

    if (typeof radius == 'number') {
        customRadius.borderRadius = radius;
    } else if (typeof radius == 'object') {
        if (radius.topRight) {
            customRadius.borderTopRightRadius = radius.topRight;
        }
        if (radius.topLeft) {
            customRadius.borderTopLeftRadius = radius.topLeft;
        }
        if (radius.topStart) {
            customRadius.borderTopStartRadius = radius.topStart;
        }
        if (radius.topEnd) {
            customRadius.borderTopEndRadius = radius.topEnd;
        }

        if (radius.bottomRight) {
            customRadius.borderBottomRightRadius = radius.bottomRight;
        }
        if (radius.bottomLeft) {
            customRadius.borderBottomLeftRadius = radius.bottomLeft;
        }
        if (radius.bottomStart) {
            customRadius.borderTopStartRadius = radius.bottomStart;
        }
        if (radius.bottomEnd) {
            customRadius.borderTopEndRadius = radius.bottomEnd;
        }
    }    
    
    return customRadius;
}

export {mixBorders, mixBorderRadius};
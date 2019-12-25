import color from '../color';

export default function(border) {
    border = border || {};    
    const customBorder = {
        borderColor: border.color || color.gray,
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
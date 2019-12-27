export default function(padding) {
    const customPadding = {};

    if (typeof padding == 'number') {
        customPadding.padding = padding;
    } else if (typeof padding == 'object') {
        if (padding.top) {
            customPadding.paddingTop = padding.top;
        }
        if (padding.right) {
            customPadding.paddingRight = padding.right;
        }
        if (padding.bottom) {
            customPadding.paddingBottom = padding.bottom;
        }
        if (padding.left) {
            customPadding.paddingLeft = padding.left;
        }
        if (padding.horizontal) {
            customPadding.paddingHorizontal = padding.horizontal;
        }
        if (padding.vertical) {
            customPadding.paddingVertical = padding.vertical;
        }
        if (padding.start) {
            customPadding.paddingStart = padding.start;
        }
        if (padding.end) {
            customPadding.paddingEnd = padding.end;
        }
    }     

    return customPadding;
};
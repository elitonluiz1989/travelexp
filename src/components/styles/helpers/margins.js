export default function(margin) {
    const customMargin = {};

    if (typeof margin == 'number') {
        customMargin.margin = margin;
    } if (typeof margin == 'object') {
        if (margin.top) {
            customMargin.marginTop = margin.top;
        }
        if (margin.right) {
            customMargin.marginRight = margin.right;
        }
        if (margin.bottom) {
            customMargin.marginBottom = margin.bottom;
        }
        if (margin.left) {
            customMargin.marginLeft = margin.left;
        }
        if (margin.horizontal) {
            customMargin.marginHorizontal = margin.horizontal;
        }
        if (margin.vertical) {
            customMargin.marginVertical = margin.vertical;
        }
        if (margin.start) {
            customMargin.marginStart = margin.start;
        }
        if (margin.end) {
            customMargin.marginEnd = margin.end;
        }
    }

    return customMargin;
};
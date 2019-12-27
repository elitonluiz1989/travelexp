export default function(position) {
    position = position || {}
    const customPosition = {};

    if (position.type) {
        customPosition.position = position.type;

        if (position.centralized) {
            if (position.centralized === 'vertical') {
                const top = (window.outerHeight - position.height) / 2;
                if (position.corners){ 
                    if (position.corners.top)  
                        delete position.corners.top;

                    if (position.corners.bottom)  
                        delete position.corners.bottom;
                }

                customPosition.top = top;
            } else {                
                const left = (100 - position.width) / 2;
                if (position.corners){ 
                    if (position.corners.right)  
                        delete position.corners.right;

                    if (position.corners.left)  
                        delete position.corners.left;
                }

                customPosition.left = left + "%";
            }
        }

        if (position.corners) {
            if (position.corners.top) {
                customPosition.top = position.corners.top;
            }

            if (position.corners.right) {
                customPosition.right = position.corners.right;
            }

            if (position.corners.bottom) {
                customPosition.bottom = position.corners.bottom;
            }

            if (position.corners.left) {
                customPosition.left = position.corners.left;
            }
        }
    }

    return customPosition;
};
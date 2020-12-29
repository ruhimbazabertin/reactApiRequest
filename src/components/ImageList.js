import React from 'react';

const ImageList = (props) => {

        console.log(props.images);

    return (
        <div className="image-list">
            <span>Images List Space{props.images}</span>
            </div>
    )
};

export default ImageList;
import './ImageList.css';
import React from 'react';

const ImageList = (props) => {

       const images = props.images.map(({id,description,urls}) => {
          
            return <img alt={description} key={id} src={urls.regular}/>
        }); 

    return (
        <div ui segment>
        <div className="image-list">
            <span>{images}</span>
            </div>
            </div>
    )
};

export default ImageList;
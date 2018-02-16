import React from "react";

const CharacterCard = (props) => {

  const selectImage = () => {
    props.scoreUp(props.id);
  };

  return(
    <div className="card col-4">
      <div className="card-block">
        <img alt={props.name} src={props.image} onClick={selectImage} />
      </div>
    </div>
  )
}


export default CharacterCard; 

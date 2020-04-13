import React from 'react';

const Cards = (props) => {
    return (
        <div className="card flex-center bg-primary text-white custome-height-16" onClick={()=> props.handleClick(props.id)}>
            <div className="card-header w-100">
                <img className="p-3 w-100 custome-height-10" src={props.logo} alt={props.title}/>
            </div>
            <div className="card-body text-center p-0 flex-center">
                <div className="card-title m-0 w-100">{props.title}</div>
            </div>
        </div>
    );
}

export default Cards;

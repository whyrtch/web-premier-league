import React from 'react';

const Cards = (props) => {
    return (
        <div className={"card flex-center bg-secondary text-white " + props.class} onClick={props.handleClick ? ()=> props.handleClick(props.id) : null}>
            {
                props.logo ?
                    <div className="card-header flex-center w-100">
                        <img className="p-3 custome-height-10" src={props.logo} alt={props.title}/>
                    </div>
                    : null
            }
            <div className="card-body text-center p-0 flex-center">
                <div className="card-title m-0 w-100">{props.title}</div>
            </div>
        </div>
    );
}

export default Cards;

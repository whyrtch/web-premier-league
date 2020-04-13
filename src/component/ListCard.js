import React from "react";
import Card from '../atom/Card';

const ListCard = (props) => {
    console.log(props);

    return (
        <div className="container-fluid">
            <div className="card-deck p-4">
                {
                    props.loading ?
                        'Loading'
                        :
                        props.data.map(data => {
                            return (
                                <div className="col-lg-2 py-lg-4" key={data.id}>
                                    <Card id={data.id} logo={data.crestUrl} title={data.name}
                                          handleClick={props.handleClick}/>
                                </div>
                            )
                        })
                }
            </div>
        </div>
    );
}


export default ListCard;
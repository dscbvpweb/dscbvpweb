import React from 'react';

const items = (props) => {
    return (
        <div className="row">
            {props.items.map(item => {
                return (
                    <div className="col-lg-4 mt-3 mt-lg-0" key={item.id}>
                        <img className="d-block img-fluid" src={item.src} onClick={()=>props.display(item.id)}></img>
                    </div>
                );
            })}
        </div>
    );
}

export default items;
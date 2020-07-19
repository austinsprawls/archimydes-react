import React from 'react';

export function Card(props) {
    return (
        <div className="row justify-content-center align-items-center">
            <div className="col-sm-12 col-md-6">
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{props.title}</h5>
                        {props.children}
                    </div>
                </div>
            </div>
        </div>
    );
}
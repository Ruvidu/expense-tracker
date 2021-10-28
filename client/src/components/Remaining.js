import React from 'react'

export default function Remaining(props) {

    const alertType = props.rem<=1000 ? 'alert-danger' : 'alert-success';
    return (
        <div className={`alert ${alertType}`}>
            <span>
                Remaining: Rs {props.rem}
            </span>
        </div>
    )
}

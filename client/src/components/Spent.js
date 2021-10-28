import React from 'react'

export default function Spent(props) {
    return (
        <div className='alert alert-primary'>
            <span>Spent: Rs {props.amount}</span>
        </div>
    )
}

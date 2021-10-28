import React from 'react'

export default function ExpenseLimit(props) {
    return (
        <div className="alert alert-secondary">
            <span>Expense Limit: Rs {props.limit}</span>
        </div>
    )
}

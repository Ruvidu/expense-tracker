import axios from 'axios'
import React from 'react'
import { TiDelete } from 'react-icons/ti'
import UpdateExpense from './UpdateExpense'

export default function ExpenseItem(props) {

    const exName=props.exp.name
    const exCost=props.exp.cost
    const exD=props.exp.exDate
    const exId=props.exp._id

    function deleteExpense(id) {
        axios.post('/api/expenses/deleteexpense', { id }).then(res => {
            alert(res.data)
            window.location.reload();
        }).catch(err => {
            console.log(err)
        })
    }
    return (
        <div>
            <li className='list-group-item d-flex justify-content-between align-items-center'>
                <span className="w-25">{props.exp.name}</span>
                <span className="w-30">{props.exp.exDate}</span>
                <span className="w-20">Rs {props.exp.cost}</span>
                <div className='mr-3 w-10'>
                    <UpdateExpense exName={exName} exCost={exCost} exD={exD} exId={exId} style={{ cursor: 'pointer' }} className='pr-5' />
                </div>
                <div className='mr-3 w-10'>
                    <TiDelete size='1.5em' style={{ cursor: 'pointer' }} onClick={() => { if (window.confirm('Are you sure you wish to delete this expense?')) deleteExpense(props.exp._id) }} />
                </div>
                
            </li>
        </div>
    )
}

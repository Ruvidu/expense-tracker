import React, { useState } from 'react'
import axios from 'axios'

export default function AddExpenseForm() {

    const [name, setName] = useState('')
    const [exDate, setExDate] = useState()
    const [cost, setCost] = useState('')

    function addExpense() {
        if (name !== '' && cost !== '' & exDate !== '') {
            var expense = {
                name: name,
                exDate: exDate,
                cost: cost
            }
            console.log(expense)
            axios.post('/api/expenses/addexpense', expense).then(res => {
                alert(res.data)
                setName('')
                setExDate('')
                setCost('')
                window.location.reload();
            }).then(err => {
                console.log(err)
            })
        }else{
            alert("Fields are empty!")
        }
    }

    return (
        <div>
            <div className='row'>
                <div className='col-sm'>
                    <label for='name'>Name</label>
                    <input
                        required='required'
                        placeholder='Name'
                        type='text'
                        className='form-control'
                        value={name}
                        onChange={(e) => { setName(e.target.value) }}>
                    </input>
                </div>

                <div className='col-sm'>
                    <label>Date</label>
                    <input
                        required='required'
                        type='date'
                        className='form-control'
                        value={exDate}
                        onChange={(e) => { setExDate(e.target.value) }}>
                    </input>
                </div>

                <div className='col-sm'>
                    <label>Cost</label>
                    <input
                        required='required'
                        placeholder='Cost'
                        type='number'
                        className='form-control'
                        value={cost}
                        onChange={(e) => { setCost(e.target.value) }}>
                    </input>
                </div>

                <div className='mt-3'>
                    <button className='btn btn-primary' onClick={addExpense}>
                        Save
                    </button>
                </div>

            </div>
        </div>
    )
}

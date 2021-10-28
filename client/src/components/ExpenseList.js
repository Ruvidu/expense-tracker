import React, { useEffect, useState } from 'react'
import ExpenseItem from './ExpenseItem'
import axios from 'axios'
import Chart from './Chart';
import Remaining from './Remaining';
import Spent from './Spent';
import ExpenseLimit from './ExpenseLimit';



export default function ExpenseList() {

    const [expenseData, setExpenseData] = useState([]);
    const [chartData, setChartData] = useState([]);
    const cdata = [];
    const [searchedName, setSearchedName] = useState('');
    const [searchedCost, setSearchedCost] = useState('');
    const [searchedDate, setSearchedDate] = useState('');
    const [filteredData, setFilteredData] = useState([]);
    const [spent,setSpent] = useState();
    const expLimit = 10000;
    const [remaining,setRemaining] = useState(0)
    var spentAmount=0;

    useEffect(() => {
        axios.get('/api/expenses/getexpenses').then(res => {
            console.log(res.data)
            setExpenseData(res.data)
            setFilteredData(res.data)
            res.data.map(i => {
                const obj = {};
                obj.name = i.name;
                obj.value = i.cost;
                cdata.push(obj);
            })
            setChartData(cdata)
        }).catch(err => {
            console.log(err)
        })
    }, [])

    useEffect(()=>{
        if(expenseData.length!=0){
            spentAmount = expenseData.reduce((n, {cost}) => n + cost, 0)
            setRemaining (expLimit - spentAmount);
            setSpent(spentAmount)
        }
    },[expenseData])

    function SearchExpenses() {
        console.log(searchedCost)
        console.log(searchedDate)
        const filtered = expenseData.filter((expense) => {
            if (searchedName === '' && searchedCost === '' && searchedDate === '') {
                return expense
            } else if (expense.cost <= parseInt(searchedCost) || expense.exDate === searchedDate.toString() || expense.name.toLowerCase() === searchedName.toLowerCase()) {
                return expense
            }
        })
        setFilteredData(filtered)
    }


    return (
        <div>
            <div className="row mt-3">
                <div className="col-sm">
                    <ExpenseLimit limit={expLimit}/>
                </div>
                <div className="col-sm">
                <Remaining rem={remaining}/>
                </div>
                <div className="col-sm">
                    <Spent amount={spent}/>
                </div>
            </div>
            <ul className='list-group'>
                <div>
                    <Chart data={chartData} />
                </div>
                <div className='row mb-3'>
                    <div className='col-sm'>
                        <label>Name</label>
                        <input
                            placeholder='Name'
                            type='text'
                            className='form-control'
                            value={searchedName}
                            onChange={(e) => { setSearchedName(e.target.value) }}>
                        </input>
                    </div>

                    <div className='col-sm'>
                        <label>Date</label>
                        <input
                            type='date'
                            className='form-control'
                            value={searchedDate}
                            onChange={(e) => { setSearchedDate(e.target.value) }}>
                        </input>
                    </div>

                    <div className='col-sm'>
                        <label>Cost</label>
                        <input
                            placeholder='Cost'
                            type='number'
                            className='form-control'
                            value={searchedCost}
                            onChange={(e) => { setSearchedCost(e.target.value) }}>
                        </input>
                    </div>

                    <div className='col-sm align-items-center mt-4'>
                        <button className='btn btn-primary' onClick={SearchExpenses}>
                            Search
                        </button>
                    </div>

                </div>
                {filteredData.map((expense) => (
                    <ExpenseItem exp={expense} />
                ))}
            </ul>


        </div>
    )
}

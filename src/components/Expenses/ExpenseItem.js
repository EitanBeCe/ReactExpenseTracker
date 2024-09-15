import { useState } from 'react'
import Card from '../UI/Card'
import ExpenseDate from './ExpenseDate'
import './ExpenseItem.css'

function ExpenseItem(props) {
    const [title, setTitle] = useState(props.title)

    const clickHandler = () => {
        setTitle('Upa')
    }
    
    return (
        <Card className='expense-item'>
            <ExpenseDate date={props.date}/>
            <div className='expense-item__description'>
                <h2>{title}</h2>
                <div className='expense-item__price'>{props.price}</div>
                <button onClick={() => setTitle('Upaaa')}>Change title</button>
            </div>
        </Card>
    )
}

export default ExpenseItem
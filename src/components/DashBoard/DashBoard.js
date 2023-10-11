import React from 'react'
import './DashBoard.css'
import TableData from '../TableData/TableData'
import ChartData from '../ChartData/ChartData'

const DashBoard = () => {
    return (
        <div className='mainData'>
            <div className="component">
                <TableData />
            </div>
            <div className="component">
                <ChartData />
            </div>
        </div>
    )
}

export default DashBoard
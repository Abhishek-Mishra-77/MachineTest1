import React, { useState } from 'react';
import './TableData.css';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';

const tabledata = [
    {
        id: 'a1',
        Campaigns: 'Cosmetics',
        Click: '454',
        Cost: '4,74',
        Conversions: '115',
        Revenue: '16,458'
    },
    {
        id: 'a2',
        Campaigns: 'Serums',
        Click: '712',
        Cost: '4,272',
        Conversions: '8',
        Revenue: '16,458'
    },
    {
        id: 'a3',
        Campaigns: 'Facewash',
        Click: '39,45',
        Cost: '4,272',
        Conversions: '8',
        Revenue: '16,458'
    },
    {
        id: 'a4',
        Campaigns: 'Shampoos',
        Click: '451',
        Cost: '4,77',
        Conversions: '123',
        Revenue: '4,458'
    },
    {
        id: 'a5',
        Campaigns: 'Conditioners',
        Click: '87',
        Cost: '44',
        Conversions: '07',
        Revenue: '56,44'
    },
    {
        id: 'a6',
        Campaigns: 'Facewash 2',
        Click: '125',
        Cost: '7,45',
        Conversions: '11',
        Revenue: '48,755'
    },
]



const TableData = () => {

    const [data, setData] = useState(tabledata);


    const sortingHandler = () => {
        let userStoreValue = document.getElementById('sort');
        let sort_value = userStoreValue.options[userStoreValue.selectedIndex].value;
        if (sort_value === 'lowest') {
            tabledata.sort((a, b) => a.Conversions - b.Conversions);
        }
        else if (sort_value === 'highest') {
            tabledata.sort((a, b) => b.Conversions - a.Conversions);
        }
        setData([...tabledata])
    }


    const icon = {
        fontSize: 'small'
    }


    return (
        <div className='container tableData'>
            <div className="card">
                <div className="card-header d-flex chart-header">
                    <div>Ad Insights</div>
                    <div className='d-flex sorting'>
                        <form action='#' className='d-flex'>
                            <label htmlFor='sort'></label>
                            <select id='sort' onClick={sortingHandler} className="form-select" aria-label="Default select example">
                                <option value="#">Sorting</option>
                                <option value="lowest">Low to High</option>
                                <option value="highest">High to Low</option>
                            </select>
                        </form>
                        <div><HelpOutlineOutlinedIcon /></div>
                    </div>
                </div>
                <div className="card-body">
                    <div className="table-responsive">
                        <table className="table">
                            <thead>
                                <tr className='table-head'>
                                    <th scope="col">Campaigns <UnfoldMoreIcon style={icon} /></th>
                                    <th scope="col">Clicks<UnfoldMoreIcon style={icon} /></th>
                                    <th scope="col">Cost <UnfoldMoreIcon style={icon} /></th>
                                    <th scope="col">Conversions <UnfoldMoreIcon style={icon} /></th>
                                    <th scope="col">Revenue <UnfoldMoreIcon style={icon} /></th>
                                </tr>
                            </thead>
                            <tbody>
                                {data && data.map((data) => (
                                    <tr key={data.id}>
                                        <td>{data.Campaigns}</td>
                                        <td>{data.Click}</td>
                                        <td>USD {data.Cost}</td>
                                        <td>{data.Conversions}</td>
                                        <td>USD {data.Revenue}</td>
                                    </tr>
                                ))}
                                <tr>
                                    <td>Total</td>
                                    <td>13545</td>
                                    <td>USD 45,455</td>
                                    <td>457</td>
                                    <td>USD 45,54577</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>

    )
}

export default TableData;
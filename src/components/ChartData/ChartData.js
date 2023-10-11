import React, { useState } from 'react';
import './ChartData.css';
import UnfoldMoreIcon from '@mui/icons-material/UnfoldMore';
import DataSaverOffIcon from '@mui/icons-material/DataSaverOff';
import TableChartOutlinedIcon from '@mui/icons-material/TableChartOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
// import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import ChartBar from './ChartBar';


const ChartData = () => {


    const [toggle, setToggle] = useState(false);
    const [selectedMetric, setSelectedMetric] = useState('');
    const [selectdData, setSelectDataMatrix] = useState({});


    const icon = {
        fontSize: 'small'
    }

    const chartData = [
        {
            id: 'b1',
            Campaigns: 'Male',
            Click: '454',
            Cost: '4,74',
            Conversions: '115',
            Revenue: '16,458'
        },
        {
            id: 'b2',
            Campaigns: 'Female',
            Click: '712',
            Cost: '4,272',
            Conversions: '8',
            Revenue: '16,458'
        },
        {
            id: 'b3',
            Campaigns: 'Unknown',
            Click: '39,45',
            Cost: '4,272',
            Conversions: '8',
            Revenue: '16,458'
        },
    ]

    const metrics = ['clicks', 'conversions', 'cost'];



    const handler = () => {
        setToggle((toggle) => !toggle)
    }



    return (
        <div className='container ChartData'>
            <div className="card chart-card">
                <div className="card-header d-flex chart-header">
                    <div>Ad Insights</div>
                    <div className='d-flex'>
                        <form>
                            <select value={selectedMetric} >
                                <option value='#'>click</option>
                                {metrics.map((metric) => (
                                    <option key={metric} value={metric}>
                                        {metric}
                                    </option>
                                ))}
                            </select>
                        </form>
                        <div>
                            <HelpOutlineOutlinedIcon /></div>
                    </div>
                </div>
                <div className="card-body">
                    {toggle ? <table className="table">
                        <thead>
                            <tr>
                                <th scope="col">Group <UnfoldMoreIcon style={icon} /></th>
                                <th scope="col">Clicks<UnfoldMoreIcon style={icon} /></th>
                                <th scope="col">Cost <UnfoldMoreIcon style={icon} /></th>
                                <th scope="col">Conversions <UnfoldMoreIcon style={icon} /></th>
                                <th scope="col">Conversions <UnfoldMoreIcon style={icon} /></th>
                            </tr>
                        </thead>
                        <tbody>
                            {chartData.map((data) => (
                                <tr key={data.id}>
                                    <td>{data.Campaigns}</td>
                                    <td>{data.Click}</td>
                                    <td>{data.Cost}</td>
                                    <td>{data.Conversions}</td>
                                    <td>{data.Revenue}</td>
                                </tr>
                            ))}
                            <tr>
                                <td>Total</td>
                                <td>13545</td>
                                <td>USD 45</td>
                                <td>457</td>
                                <td>USD 45</td>
                            </tr>
                        </tbody>
                    </table> :
                        <ChartBar />}
                </div>
                <div className='toggle-main'>
                    <div onClick={handler} className='toggle'>
                        <DataSaverOffIcon className={`${toggle ? 'chartToggle' : 'chartToggle-active'}`} />
                        <TableChartOutlinedIcon className={`${!toggle ? 'tableToggle' : 'chartToggle-active'}`} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ChartData
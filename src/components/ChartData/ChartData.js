import React, { useEffect, useState } from 'react';
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
    const [selectedMetric, setSelectedMetric] = useState('Clicks');
    const [ChartDataSelected, setChartDataSelected] = useState(null);


    const icon = {
        fontSize: 'small'
    }

    const chartData = [
        {
            id: 'b1',
            Campaigns: 'Male',
            Clicks: '70',
            Cost: '48',
            Conversions: '40',
            Revenue: '16,458'
        },
        {
            id: 'b2',
            Campaigns: 'Female',
            Clicks: '20',
            Cost: '22',
            Conversions: '52',
            Revenue: '16458'
        },
        {
            id: 'b3',
            Campaigns: 'Unknown',
            Clicks: '10',
            Cost: '30',
            Conversions: '8',
            Revenue: '16458'
        },
    ]

    const metrics = ['Clicks', 'Conversions', 'Cost'];

    const handler = () => {
        setToggle((toggle) => !toggle)
    }


    const selecteHandler = (event) => {
        setSelectedMetric(event.target.value);
    }


    const generateChartData = (selectedMetric) => {
        const labels = chartData.map((data) => data.Campaigns);
        const dataValues = chartData.map((data) => data[selectedMetric]);
        if (selectedMetric === 'Clicks') {
            return {
                labels: labels,
                datasets: [
                    {
                        data: dataValues,
                    },
                ],
            };
        }
        else if (selectedMetric === 'Conversions') {
            return {
                labels: labels,
                datasets: [
                    {
                        data: dataValues,
                    },
                ],
            };
        }
        else if (selectedMetric === 'Cost') {
            return {
                labels: labels,
                datasets: [
                    {
                        data: dataValues,
                    },
                ],
            };
        }
    }


    useEffect(() => {
        const newChartData = generateChartData(selectedMetric);
        setChartDataSelected(newChartData);
    }, [selectedMetric]);


    return (
        <div className='container ChartData'>
            <div className="card chart-card">
                <div className="card-header d-flex chart-header">
                    <div>Ad Insights</div>
                    <div className='d-flex'>
                        <form>
                            <select value={selectedMetric} onChange={selecteHandler}>
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
                                    <td>{data.Clicks}</td>
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
                        <ChartBar ChartDataSelected={ChartDataSelected} />}
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
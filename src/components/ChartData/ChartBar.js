import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';


const size = {
    width: 370,
    height: 220,
};

const StyledText = styled('text')(({ theme }) => ({
    fill: theme.palette.text.primary,
    textAnchor: 'middle',
    dominantBaseline: 'central',
    fontSize: 25,
}));


const ChartBar = ({ ChartDataSelected }) => {


    // const selectedData = ChartDataSelected ? ChartDataSelected : [];


    // const chartData = selectedData.map((item) => ({
    //     value: item.value,
    //     label: item.label,
    // }));

    const { labels, datasets } = ChartDataSelected ? ChartDataSelected : {};
    const data1 = datasets && datasets[0] && datasets[0].data[0];
    const data2 = datasets && datasets[0] && datasets[0].data[1];
    const data3 = datasets && datasets[0] && datasets[0].data[2];

    const data = [
        { value: data1, label: `${data1}%Male` },
        { value: data2, label: '35% Female' },
        { value: data3, label: '25% Unknown' },
    ];


    return (
        <PieChart series={[{ data, innerRadius: 75 }]} {...size}>
            <PieCenterLabel>Center label</PieCenterLabel>
        </PieChart>
    )
}

export default ChartBar;



function PieCenterLabel() {
    const { width, height, left, top } = useDrawingArea();

    return (
        <StyledText x={left + width / 2} y={top + height / 2}>
        </StyledText>
    );
}





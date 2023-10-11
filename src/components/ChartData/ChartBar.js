import React from 'react'
import { PieChart } from '@mui/x-charts/PieChart';
import { useDrawingArea } from '@mui/x-charts/hooks';
import { styled } from '@mui/material/styles';

const data = [
    { value: 40, label: '40% Male' },
    { value: 35, label: '35% Female' },
    { value: 25, label: '25% Unknown' },
];

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


const ChartBar = () => {
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





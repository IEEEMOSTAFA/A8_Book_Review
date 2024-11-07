import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
const PagesToRead = () => {
    const data = [
        { name: 'Page A', uv: 400, pv: 2400, amt: 2400 },
        { name: 'Page B', uv: 300, pv: 1398, amt: 2210 },
        { name: 'Page C', uv: 200, pv: 9800, amt: 2290 },
        { name: 'Page D', uv: 278, pv: 3908, amt: 2000 },
        { name: 'Page E', uv: 189, pv: 4800, amt: 2181 },
        { name: 'Page F', uv: 239, pv: 3800, amt: 2500 }
    ];

    function getIntroOfPage(label) {
        switch (label) {
            case 'Page A': return 'Page A is about men\'s clothing';
            case 'Page B': return 'Page B is about women\'s dress';
            case 'Page C': return 'Page C is about women\'s bag';
            case 'Page D': return 'Page D is about household goods';
            case 'Page E': return 'Page E is about food';
            case 'Page F': return 'Page F is about baby food';
            default: return '';
        }
    }

    function CustomTooltip({ payload, label, active }) {
        if (active && payload && payload.length) {
            return (
                <div className="custom-tooltip">
                    <p className="label">{`${label} : ${payload[0].value}`}</p>
                    <p className="intro">{getIntroOfPage(label)}</p>
                    <p className="desc">Anything you want can be displayed here.</p>
                </div>
            );
        }
        return null;
    }
    return (
        <div>
            <BarChart width={600} height={300} data={data}>
                <XAxis dataKey="name" />
                <YAxis />
                <Tooltip content={<CustomTooltip />} />
                <Bar dataKey="uv" fill="#8884d8" />
            </BarChart>
        </div>
    );
};

export default PagesToRead;
import React, { useEffect } from 'react';
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
const PagesToRead = () => {
    const books = useLoaderData();


    const [data, setData] = useState([]);


    useEffect(() => {
        // Fetch data from books.json
        // fetch('/path/to/books.json')
        //     .then(response => response.json())
        //     .then(books => {
        //         // Transform data to match the chart's requirements
        //         const chartData = books.map(book => ({
        //             name: book.bookName,
        //             totalPages: book.totalPages
        //         }));
        //         setData(chartData);
        //     })
        //     .catch(error => console.error('Error loading data:', error));

        // testing
        const chartData = books.map(book => ({
            name: book.bookName,
            totalPages: book.totalPages
        }));
        setData(chartData);

    }, [books]);
    const getPath = (x, y, width, height) => (
        `M${x},${y + height}
         C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
         C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
         Z`
    );

    const TriangleBar = (props) => {
        const {
            fill, x, y, width, height,
        } = props;

        return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
    };

    function CustomTooltip({ payload, label, active }) {
        if (active && payload && payload.length) {
            return (


                <div className="custom-tooltip">
                    <p className="label">{`${label} : ${payload[0].value} pages`}</p>
                    <p className="desc">Details about the book can be displayed here.</p>
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
                <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
            </BarChart>
        </div>
    );
};

export default PagesToRead;
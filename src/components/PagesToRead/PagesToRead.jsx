// import React, { useEffect } from 'react';
// import { useState } from 'react';
// import { useLoaderData } from 'react-router-dom';
// import { BarChart, Bar, XAxis, YAxis, Tooltip } from 'recharts';
// const PagesToRead = () => {
//     const books = useLoaderData();


//     const [data, setData] = useState([]);


//     useEffect(() => {
//         // Fetch data from books.json
//         // fetch('/path/to/books.json')
//         //     .then(response => response.json())
//         //     .then(books => {
//         //         // Transform data to match the chart's requirements
//         //         const chartData = books.map(book => ({
//         //             name: book.bookName,
//         //             totalPages: book.totalPages
//         //         }));
//         //         setData(chartData);
//         //     })
//         //     .catch(error => console.error('Error loading data:', error));

//         // testing
//         const chartData = books.map(book => ({
//             name: book.bookName,
//             totalPages: book.totalPages
//         }));
//         setData(chartData);

//     }, [books]);
//     const getPath = (x, y, width, height) => (
//         `M${x},${y + height}
//          C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
//          C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
//          Z`
//     );

//     const TriangleBar = (props) => {
//         const {
//             fill, x, y, width, height,
//         } = props;

//         return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
//     };

//     function CustomTooltip({ payload, label, active }) {
//         if (active && payload && payload.length) {
//             return (


//                 <div className="custom-tooltip">
//                     <p className="label">{`${label} : ${payload[0].value} pages`}</p>
//                     <p className="desc">Details about the book can be displayed here.</p>
//                 </div>
//             );
//         }
//         return null;
//     }
//     return (
//         <div>




//             <BarChart width={600} height={300} data={data}>
//                 <XAxis dataKey="name" />
//                 <YAxis />
//                 <Tooltip content={<CustomTooltip />} />
//                 <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
//             </BarChart>
//         </div>
//     );
// };

// export default PagesToRead;

import React, { useEffect, useState } from 'react';
import { Helmet } from 'react-helmet-async';
import { useLoaderData } from 'react-router-dom';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

const PagesToRead = () => {
  const books = useLoaderData();
  const [data, setData] = useState([]);

  useEffect(() => {
    const chartData = books.map(book => ({
      name: book.bookName,
      totalPages: book.totalPages,
    }));
    setData(chartData);
  }, [books]);

  const getPath = (x, y, width, height) =>
    `M${x},${y + height}
     C${x + width / 3},${y + height} ${x + width / 2},${y + height / 3} ${x + width / 2}, ${y}
     C${x + width / 2},${y + height / 3} ${x + 2 * width / 3},${y + height} ${x + width}, ${y + height}
     Z`;

  const TriangleBar = (props) => {
    const { fill, x, y, width, height } = props;
    return <path d={getPath(x, y, width, height)} stroke="none" fill={fill} />;
  };

  const CustomTooltip = ({ payload, label, active }) => {
    if (active && payload && payload.length) {
      return (
        <div className="custom-tooltip p-2 bg-gray-200 border rounded shadow-lg">
          <p className="label font-bold">{`${label} : ${payload[0].value} pages`}</p>
          <p className="desc text-sm">Details about the book can be displayed here.</p>
        </div>
      );
    }
    return null;
  };

  return (
    <div className="container mx-auto p-4">
      <Helmet>
        <title>Chart Measure</title>
      </Helmet>
      <h2 className="text-center text-2xl sm:text-3xl font-bold mb-6">Pages to Read</h2>
      <div className="flex justify-center">
        <div className="w-full sm:w-10/12 md:w-8/12 lg:w-6/12">
          <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip content={<CustomTooltip />} />
              <Bar dataKey="totalPages" fill="#8884d8" shape={<TriangleBar />} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
};

export default PagesToRead;

import React, { useEffect, useState } from 'react';
import {
  PieChart, Pie, Cell, ResponsiveContainer
} from 'recharts';

const EventGenre = ({ events }) => {

  useEffect(() => { setData(() => getData()); }, [events]);
  const [data, setData] = useState([]);

  const colors = ['red', 'orange', 'purple', 'green', 'blue'];

  const getData = () => {
    const genres = ['React', 'JavaScript', 'Node', 'jQuery', 'AngularJS'];
    const data = genres.map((genre) => {
      const value = events.filter((event) => event.summary.split(' ').includes(genre)).length;
      return { name: genre, value: value };
    });
    return data;
  };

  return (
    <div className='data-vis-wrapper'>
      <ResponsiveContainer height={400} >
        <PieChart width={400} height={400}>
          <Pie
            data={data}
            cx={200}
            cy={200}
            labelLine={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
            label={({ name, percent }) => `${name} ${(percent * 100).toFixed(0)}%`}
          >
            {data.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={colors[index]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}


export default EventGenre;
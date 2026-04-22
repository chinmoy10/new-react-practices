import React from 'react';
import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineCharts = () => {

    const studentMarks = [
        { id: 1, name: "Student 1", math: 65, physics: 60, chemistry: 62 },
        { id: 2, name: "Student 2", math: 72, physics: 70, chemistry: 68 },
        { id: 3, name: "Student 3", math: 58, physics: 55, chemistry: 59 },
        { id: 4, name: "Student 4", math: 80, physics: 78, chemistry: 75 },
        { id: 5, name: "Student 5", math: 76, physics: 74, chemistry: 72 },
        { id: 6, name: "Student 6", math: 85, physics: 82, chemistry: 80 },
        { id: 7, name: "Student 7", math: 90, physics: 88, chemistry: 85 },
        { id: 8, name: "Student 8", math: 70, physics: 68, chemistry: 66 },
        { id: 9, name: "Student 9", math: 88, physics: 85, chemistry: 83 },
        { id: 10, name: "Student 10", math: 95, physics: 92, chemistry: 90 }
    ];

    return (
        <div>
            <LChart width={400} height={400} data={studentMarks}>
                <XAxis dataKey="name" />
                <YAxis />
                <Line dataKey="math" stroke='red'></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
                <Line dataKey="chemistry" stroke='blue'></Line>
            </LChart>
        </div>
    );
};

export default LineCharts;
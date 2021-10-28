import React from 'react'
import { PieChart, Pie, Legend, Tooltip } from "recharts";

export default function Chart(props) {
    return (
        <div>
             <PieChart width={400} height={200}>
                        <Pie
                            dataKey="value"
                            isAnimationActive={false}
                            data={props.data}
                            cx={150}
                            cy={90}
                            outerRadius={50}
                            fill="#0E86D4"
                            label
                        />
                        <Tooltip />
                    </PieChart>
        </div>
    )
}

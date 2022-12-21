import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Label
} from "recharts";

export default function Histogram(props) {
  console.log(props.data)
  return (
    <BarChart
      width={1000}
      height={500}
      data={props.data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5
      }}
      barSize={100}
    >
      <Legend verticalAlign="top" height={36}/>
      <XAxis dataKey="name" height={40}>
        <Label value="Words" offset={0} position="insideBottom" />
      </XAxis>
      <YAxis width={75}>
      <Label value="Count" offset={0} position="insideLeft" />
      </YAxis>
      <Tooltip />
      <CartesianGrid strokeDasharray="3 3" />
      <Bar dataKey="count" fill="#8884d8" background={{ fill: "#eee" }} />
    </BarChart>
  );
}

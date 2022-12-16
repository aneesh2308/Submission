import Chart from "react-google-charts";
export default function Histogram(props) {
    const options = {
        title: "Frequency of all elements",
        legend: {alignment:'center', position: 'bottom', textStyle: {color: 'black', fontSize: 10}},
        titleTextStyle : { fontSize:16, bold:true },
        titlePosition : 'out'
    };
    return(
        <Chart
          chartType="Histogram"
          width={500}
          height="400px"
          data={props.data}
          options={options}
        />
    );
}
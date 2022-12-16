import Chart from "react-google-charts";
export default function Histogram(props) {
    const options = {
        title: "Frequency of all elements",
        legend: { position: "none" }
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
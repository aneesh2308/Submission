import React from 'react';
import Chart from "react-google-charts";
import LoadingButton from '@mui/lab/LoadingButton';
import style from './style';
var _ = require('lodash');
function App() {
  const [loading,setLoading]=React.useState(false);
  const [comdata,setComdata]=React.useState([["Word","Frequency"]]);
  const options = {
    title: "Frequency of all elements",
    legend: { position: "none" }
  };
  return (
    <div className="App" style={style.App.maindivtag}>
      <header className="App-header">
        <LoadingButton
          type="submit"
          fullWidth
          loading={loading}
          variant="contained"
          onClick={()=>{
            setLoading(true);
            fetch('https://www.terriblytinytales.com/test.txt').then((res)=>res.text()).then((data)=>{
            var words = data.replace(/[.]/g, '').split('.').join(' ').split('?').join(' ').split(':').join(' ').split('"').join(' ').split('/').join(' ').split(' ');
            var freqMap = [];
            words.forEach(function(w) {
                if (!freqMap[w]) {
                    freqMap[w] = 0;
                }
                freqMap[w] += 1;
            });
            var setdata=[];
            for (const [key, value] of Object.entries(freqMap)) {
              if(typeof value==='number')
              setdata.push([key.toString(),value]);
            }
            setdata.sort(function(a, b){return b[1] - a[1]});
            setdata=_.slice(setdata,[0],[20]);
            setdata.unshift(["Word","Frequency"]);
            setComdata(setdata);
            setLoading(false);
            }).catch(err=>{
              setLoading(false);
              console.log("this is the error",err);
            })
          }}
        >
          Calculate
        </LoadingButton>
        <Chart
          chartType="Histogram"
          width={500}
          height="400px"
          data={comdata}
          options={options}
        />
      </header>
    </div>
  );
}

export default App;

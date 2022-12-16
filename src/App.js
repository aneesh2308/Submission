import React from 'react';
import Histogram from './components/Charts/Histogram';
import CustomButton from './components/Button/button';
import {BASE_URL} from './api/api';
import DataFormat from './api/data';
import style from './style';
function App() {
  const [loading,setLoading]=React.useState(false);
  const [comdata,setComdata]=React.useState([["Word","Frequency"]]);
  return (
    <div className="App" style={style.App.maindivtag}>
      <header className="App-header">
        <CustomButton 
        name="Calculate"
        loading={loading}
        onClick={()=>{
          setLoading(true);
          fetch(BASE_URL).then((res)=>res.text()).then((data)=>{
            setComdata(DataFormat(data));
            setLoading(false);
          }).catch(err=>{
            setLoading(false);
            console.log("this is the error",err);
          })
        }}/>
        <Histogram data={comdata}/>
      </header>
    </div>
  );
}

export default App;

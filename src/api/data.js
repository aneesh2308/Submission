var _ = require('lodash');
export default function DataFormat(data){
    var words = data.replace(/[.]/g, '').split('.').join(' ').split('?').join(' ').split(':').join(' ').split('"').join(' ').split('/').join(' ').split(' ');
    var freqMap = [];
    words.forEach(function(w) {
        w=w.toLowerCase();
        if (!freqMap[w]) {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });
    console.log(freqMap);
    var setdata=[];
    for (const [key, value] of Object.entries(freqMap)) {
      if(typeof value==='number')
      setdata.push([key.toString(),value]);
    }
    setdata.sort(function(a, b){return b[1] - a[1]});
    setdata=_.slice(setdata,[0],[20]);
    setdata.unshift(["Word","Frequency"]);
    return setdata;
}
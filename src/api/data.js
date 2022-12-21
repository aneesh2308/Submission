var _ = require('lodash');
export default function DataFormat(data){
    var words = data.replace(/[.]/g, '').split('.').join(' ').split('?').join(' ').split(':').join(' ').split('"').join(' ').split('/').join(' ').split(' ');
    var freqMap = [];
    words.forEach(function(w) {
        w=w.toLowerCase();
        if (!freqMap[w] && w!=='' && w!==' '&& w!=='.' && w!=='?' && w!==':' && w!=='"' && w!=='/') {
            freqMap[w] = 0;
        }
        freqMap[w] += 1;
    });
    var setdata=[];
    for (const [key, value] of Object.entries(freqMap)) {
      if(typeof value==='number')
      setdata.push({name:key.toString(),count:value});
    }
    setdata.sort(function(a, b){return b.count - a.count});
    setdata=_.slice(setdata,[0],[20]);
    return setdata;
}
// const generateDataset = () => (
//     Array(10).fill(0).map(() => ([
//        Math.random() * 80 + 10,
//        Math.random() * 35 + 10,
//     ]))
    
// )
// export default generateDataset;

var yea =["2017","2018","2019","2020","2021", "2020"];
var val= Array(6).fill().map(() => ([Math.floor(
    Math.random() * (100 - 45))+45
   
 ]))
const ChartData=[]
for(var i=0; i<6; i++){
   ChartData.push({year: yea[i], value: val[i]})
}


export default ChartData;
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import React from "react";

highchartsMap(Highcharts);

// const initOptions = {
//   chart: {
//     height: "500",
//   },
//   title: {
//     text: null,
//   },
//   mapNavigation: {
//     enabled: true,
//   },
//   colorAxis: {
//     min: 0,
//     stops: [
//       [0.2, "#FFC4AA"],
//       [0.4, "#FF8A66"],
//       [0.6, "#FF392B"],
//       [0.8, "#B71525"],
//       [1, "	#7A0826"],
//     ],
//   },
//   legend: {
//     layout: "vertical",
//     align: "right",
//     verticalAlign: "bottom",
//   },
//   series: [
//     {
//       mapData: {},
//       name: "Dân số",
//       joinBy: ["hc-key", "key"],
//     },
//   ],
// };

function HighMap({ mapData }) {
  //   const [options, setOptions] = useState({});

  //   useEffect(() => {
  //     setOptions({
  //       ...initOptions,
  //       series: [
  //         {
  //           ...initOptions.series[0],
  //           mapData: mapData,
  //         },
  //       ],
  //     });
  //   }, [mapData]);

  return (
    <HighchartsReact
      highcharts={Highcharts}
      options={{}}
      constructorType="mapChart"
    ></HighchartsReact>
  );
}

export default HighMap;

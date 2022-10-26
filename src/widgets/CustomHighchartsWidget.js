import { useEffect, useRef, useState } from "react";
import Highcharts from 'highcharts'
import HighchartsReact from 'highcharts-react-official'
import HighchartsHeatmap from "highcharts/modules/heatmap";

HighchartsHeatmap(Highcharts);


let yAxisheaders = [];
let xAxisData = [];

function CustomHighhcartsWidget({ columnHeaders, rowsData, stopsStyle }) {
    let minValue = useRef(Infinity);
    let maxValue = useRef(-Infinity);
    const [minValueState, setMinValueState] = useState(0);
    const [maxValueState, setMaxValueState] = useState(0);

    useEffect(() => {
        // if (xAxisData.length === 0) {
        rowsData.map((row, rowIdx) => {
            yAxisheaders.push(row[0]);
            row.slice(1).map((value, colIdx) => {
                minValue.current = Math.min(minValue.current, value);
                maxValue.current = Math.max(maxValue.current, value);
                xAxisData.push([colIdx, rowIdx, value]);
            })
        });
        setMinValueState(minValue.current);
        setMaxValueState(maxValue.current);
        // }
    }, [rowsData]);

    const options = {
        data: xAxisData,
        chart: {
            type: "heatmap",
            marginTop: 40,
            marginBottom: 80,
            plotBorderWidth: 1
          },
    
        boost: {
            useGPUTranslations: true
        },
        xAxis: {
            categories: columnHeaders[0].slice(1),
            abels: {
                align: 'left',
                x: 5,
                y: 14,
            },
            showLastLabel: false,
            tickLength: 16
        },
        yAxis: {
            categories: yAxisheaders,
            minPadding: 0,
            maxPadding: 0,
            startOnTick: false,
            endOnTick: false,
            tickWidth: 1,
            reversed: true
        },
        colorAxis: {
            stops: stopsStyle ? stopsStyle : [
                [0, '#3060cf'],
                [0.5, '#fffbbc'],
                [0.9, '#c4463a'],
                [1, '#c4463a']
            ],
            min: minValueState,
            max: maxValueState,
            startOnTick: false,
            endOnTick: false,
            labels: {
                format: '{value}'
            }
        },
    
        series: [{
            data: xAxisData,
            borderWidth: 1,
            nullColor: '#EFEFEF',
            boostThreshold: 100
        }]
    }
    
    return (
        <>
            <HighchartsReact
                highcharts={Highcharts}
                options={options}
             />
        </>
    )
}

export default CustomHighhcartsWidget;
import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';
import'./styles.css';
import { useEffect, useRef } from 'react';

registerAllModules();

function CustomHandsontableWidget({ columnHeaders, rowsData }) {    
  const hotRef = useRef(null);
  const minValue = useRef(Infinity);
  const maxValue = useRef(-Infinity);
  const firstStop = useRef(0)
  const secondStop = useRef(0);

  useEffect(() => {
    const hot = hotRef.current.hotInstance;
    for (let row = 0; row < rowsData.length; row++) {
      for (let col = 1; col < rowsData[row].length; col++) {
        minValue.current = Math.min(minValue.current, rowsData[row][col]);
        maxValue.current = Math.max(maxValue.current, rowsData[row][col])
      }
    };

    firstStop.current = minValue.current + ((maxValue.current - minValue.current) * 0.5);
    secondStop.current = minValue.current + ((maxValue.current - minValue.current) * 0.9);

    for (let rowIndex = 0; rowIndex < rowsData.length; rowIndex++) {
      for (let columnIndex = 1; columnIndex < rowsData[rowIndex].length; columnIndex++) {
        if (rowsData[rowIndex][columnIndex] === minValue.current) hot.setCellMeta(rowIndex, columnIndex, 'className', 'minStopStyle');
        else if (rowsData[rowIndex][columnIndex] <= firstStop.current) hot.setCellMeta(rowIndex, columnIndex, 'className', 'firstStopStyle');
        else if (rowsData[rowIndex][columnIndex] <= secondStop.current) hot.setCellMeta(rowIndex, columnIndex, 'className', 'secondStopStyle');
        else hot.setCellMeta(rowIndex, columnIndex, 'className', 'secondStopStyle');
      }
    };

    hot.render();
  }, []);

    return (
        <HotTable
          ref={hotRef}
          data={rowsData}
          colHeaders={true}
          colHeaders={columnHeaders[0]}
          height="auto"
          manualColumnMove={true}
          width="auto"
        />
    ); 
}

export default CustomHandsontableWidget;
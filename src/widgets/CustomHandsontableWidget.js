import { HotTable } from '@handsontable/react';
import { registerAllModules } from 'handsontable/registry';
import 'handsontable/dist/handsontable.full.min.css';

registerAllModules();

function CustomHandsontableWidget({ columnHeaders, rowsData }) {    

    return (
        <HotTable
          data={rowsData}
          colHeaders={true}
          // minSpareRows={1}
          colHeaders={columnHeaders[0]}
          height="auto"
          width="auto"
        />
    ); 
}

export default CustomHandsontableWidget;
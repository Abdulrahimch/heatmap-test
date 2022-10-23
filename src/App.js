import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import CustomHighhcartsWidget from './widgets/CustomHighchartsWidget';
import CustomHandsontableWidget from './widgets/CustomHandsontableWidget';
import { columnHeaders, rowsData } from "./widgets/customData";

function App() {
    return (
        <div className="App">

            <div className="jumbotron text-center">
                <h1>Developer Assessment</h1>
            </div>

            <br />
            <div className="container">
                <div className="row">
                    <div className="col-sm-12 widget">
                        <h1>Highcharts Heatmap</h1>
                        <i>Please modify the custom-highcharts-widget so that it returns a heatmap using <a href="https://www.npmjs.com/package/highcharts">highcharts</a>.</i>
                        <CustomHighhcartsWidget columnHeaders={columnHeaders} rowsData={rowsData} />
                    </div>
                    <div className="col-sm-12">&nbsp;</div>
                    <div className="col-sm-12 widget">
                        <h1>Handsontable Heatmap</h1>
                        <i>Please modify the custom-handsontable-widget so that it returns a heatmap using <a href="https://www.npmjs.com/package/handsontable">handsontable</a>.</i>
                        <CustomHandsontableWidget columnHeaders={columnHeaders} rowsData={rowsData} />
                    </div>
                </div>
            </div>
        </div>
    );
}

export default App;

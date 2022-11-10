import React, { Component } from 'react';
import './Sheet.scss';
import {
  SpreadsheetComponent, ColumnDirective, ColumnsDirective, RangeDirective,
  RangesDirective, SheetDirective, SheetsDirective
} from '@syncfusion/ej2-react-spreadsheet';
import {DataManager, WebApiAdaptor}  from '@syncfusion/ej2-data';
// https://ej2.syncfusion.com/react/documentation/spreadsheet/getting-started/
class Sheet extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: [
        {
          "name": "touhid",
          "id": 100
        },
        {
          "name": "th",
          "id": 101
        },
        {
          "name": "yo",
          "id": 102
        }
      ]
    }
  }
  
   onCreated=()=>{
    let SSObj= SpreadsheetComponent;
    fetch("https://js.syncfusion.com/demos/ejservices/data/Spreadsheet/LargeData.xlsx")
    .then((response)=>{
      response.blob().then((fileBlob)=>{
        var file = new File([fileBlob], "Sample.xlsx");
        SSObj.open({file: file});
      })
    })
   }
  render() {
    let {data} = this.state;
    let SSObj= SpreadsheetComponent;
    return (
      <div>
        <SpreadsheetComponent 
        // ref={((s:SpreadsheetComponent)=>SSObj=s)}
        // created={this.onCreated}
        allowOpen={true}
         openUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/open"
        allowSave={true}
        saveUrl="https://ej2services.syncfusion.com/production/web-services/api/spreadsheet/save">
          <SheetsDirective>
            <SheetDirective>
              <RangesDirective>
                <RangeDirective dataSource={data}>
                </RangeDirective>
              </RangesDirective>
              <ColumnsDirective>
                <ColumnDirective width={130}>
                </ColumnDirective>
                <ColumnDirective width={130}>
                </ColumnDirective>
                <ColumnDirective width={130}>
                </ColumnDirective>
              </ColumnsDirective>
            </SheetDirective>
          </SheetsDirective>
        </SpreadsheetComponent>
      </div>
    );
  }
}

export default Sheet;
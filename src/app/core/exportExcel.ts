import * as XLSX from 'xlsx';

export class exportToExcel {
    //this function recieve an file name and creates an excel from a table
    exportToExcel(fileName:string) {
        // table id is passed over here
        let element = document.getElementById('excel-table');
        const ws: XLSX.WorkSheet = XLSX.utils.table_to_sheet(element);
        // generate workbook and add the worksheet
        const wb: XLSX.WorkBook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(wb, ws, 'Sheet1');
        // save to file
        XLSX.writeFile(wb, `${fileName}.xlsx`);
      }
}
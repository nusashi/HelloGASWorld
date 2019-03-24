/** */
function HelloGASWorld() {
  var selectSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = selectSpreadSheet.getSheetByName('シート1');
  var range = sheet.getRange(1,1,1);
  // getRange(row,column,numRows);
  
  range.setValue('HelloGASWorld');
}

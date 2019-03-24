/**
 * Description
 * @method myFunction
 * @param {paramType} ParamName paramDescription
 * @returns {paramType} returnDescription
 */
function myFunction() {
    var selectSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
    var sheet = selectSpreadSheet.getSheetByName('シート1');
    var range = sheet.getRange(1, 1, 1);
    // getRange(row,column,numRows);

    range.setValue('HelloGASWorld');
}

//function onEdit(event){
//    var sheet = event.source.getActiveSheet();
//    sheet.getRange("B1").setValue("Last modified: " + (new Date()));
//}

// function onOpen(event) {
//     var sheet = event.source.getActiveSheet();
//     sheet.getRange("C1").setValue("OPEN：" + event.user);
// }

/**
* 色を特定する
*/
function identifyColor() {
    var sheet = SpreadsheetApp.getActiveSheet();

    // 特定する色を取得する
    var targetColor = sheet.getRange(3, 4).getBackground();

    // 色一覧の「背景色の配列」と「内容の配列」を取得する
    var colorNum = 20;
    var colorsListRange = sheet.getRange(3, 2, colorNum, 1);
    var colorArray = colorsListRange.getBackgrounds();
    var contentArray = colorsListRange.getValues();

    // 色に応じて処理する
    for (var i = 0; i < colorNum; i++) {
        var cellColor = colorArray[i][0];
        if (cellColor == targetColor) {
            contentArray[i][0] = "コレ！";
        } else {
            contentArray[i][0] = "";
        }
    }

    // シートにセットする
    colorsListRange.setValues(contentArray);
}
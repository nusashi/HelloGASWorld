/**
 * GAS開発環境構築
 * 前提条件：
 *    ・Chrome
 *    ・GoogleAppsScriptGitHubアシスタント
 *    ・VisualStudioCode
 * 手順：
 *    1.Googleアカウントを取得
 *    2.GoogleDriveなどでScriptを新規作成
 *    3.Chrome拡張機能「GoogleAppsScriptGitHubアシスタント」を導入
 *    4.拡張機能からリポジトリを作成
 *    5.Gitコマンドでローカルにクローン
 *    6.VisualStudioCodeでリポジトリのファイルを確認
 *    7.「.gs」はそのままだとsyntaxが有効ではない。
 *    8.VSCウィンドウ下の笑顔マークの一つ左をクリック言語設定を変更
 *    9.「.gs」の関連付けにJavaScriptを設定
 * 
 */
function HelloGASWorld() {
  var selectSpreadSheet = SpreadsheetApp.getActiveSpreadsheet();
  var sheet = selectSpreadSheet.getSheetByName('シート1');
  var range = sheet.getRange(1, 1, 1);
  // getRange(row,column,numRows);

  range.setValue('HelloGASWorld');
}

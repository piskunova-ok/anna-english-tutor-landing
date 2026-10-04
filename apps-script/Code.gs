// Google Apps Script — приём заявок из формы и запись в Google Таблицу
// Связка: расширение скрипта К таблице «Заявки» -> Deploy -> Web app -> скопировать /exec URL
// Затем этот URL вписать в VITE_SHEETS_ENDPOINT в .env

const SHEET_NAME = 'Заявки';
const HEADERS = ['Дата и время', 'Имя', 'Контакт', 'Цель'];

function doPost(e) {
  try {
    const p = (e && e.parameter) || {};

    const ss = SpreadsheetApp.getActiveSpreadsheet();
    let sheet = ss.getSheetByName(SHEET_NAME);
    if (!sheet) {
      sheet = ss.insertSheet(SHEET_NAME);
      sheet.appendRow(HEADERS);
    } else if (sheet.getLastRow() === 0) {
      sheet.appendRow(HEADERS);
    }

    sheet.appendRow([
      new Date(),
      p.name || '',
      p.contact || '',
      p.goal || '',
    ]);

    return json({ ok: true });
  } catch (err) {
    return json({ ok: false, error: String(err) });
  }
}

// Тест прямо из редактора: запусти testWebhook() и посмотри, появилась ли строка
function testWebhook() {
  doPost({ parameter: { name: 'Тестовый клиент', contact: '+7 999 000-00-00', goal: 'Проверка связи' } });
}

function json(obj) {
  return ContentService.createTextOutput(JSON.stringify(obj)).setMimeType(ContentService.MimeType.JSON);
}
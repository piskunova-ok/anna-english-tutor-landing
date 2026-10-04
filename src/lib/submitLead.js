const ENDPOINT = 'https://api.web3forms.com/submit';
const SHEETS_ENDPOINT = import.meta.env.VITE_SHEETS_ENDPOINT?.trim();

export async function submitLead({ name, contact, goal }) {
  const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY?.trim();
  const result = { ok: true };

  if (SHEETS_ENDPOINT) {
    try {
      await fetch(SHEETS_ENDPOINT, {
        method: 'POST',
        mode: 'no-cors',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: new URLSearchParams({ name, contact, goal }).toString(),
      });
      result.sheet = true;
    } catch (err) {
      console.warn('[form] Не удалось записать в Google Таблицу:', err);
    }
  }

  if (!accessKey) {
    console.warn(
      '[form] VITE_WEB3FORMS_ACCESS_KEY не задан — заявка НЕ отправлена, показан демо-успех. ' +
        'Получите ключ на https://web3forms.com и добавьте его в .env',
    );
    await new Promise((r) => setTimeout(r, 700));
    return result;
  }

  const res = await fetch(ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', Accept: 'application/json' },
    body: JSON.stringify({
      access_key: accessKey,
      subject: 'Новая заявка с лендинга Anna English Tutor',
      from_name: name,
      botcheck: '',
      name,
      contact,
      goal,
      _template: 'table',
    }),
  });

  const data = await res.json().catch(() => ({}));
  if (!res.ok || !data.success) {
    throw new Error(data.message || 'Ошибка сервиса отправки');
  }
  return result;
}
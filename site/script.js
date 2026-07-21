(() => {
  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.global-nav');
  const year = document.querySelector('#year');

  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  // Company information is sourced from the Smile Group company registry.
  // Public wording should still be checked against the latest registry documents before launch.
  const companyData = {
    会社名: 'SMC株式会社',
    所在地: '東京都千代田区神田須田町一丁目7番8号 VORT秋葉原IV 2F',
    代表者: '佐藤 卓',
    設立: '2025年9月1日',
    資本金: '500万円',
    決算期: '8月（毎年9月1日〜翌年8月31日）',
    各種登録: '適格請求書発行事業者登録済み',
  };

  const companyTable = document.querySelector('.company-table');
  if (companyTable) {
    companyTable.querySelectorAll(':scope > div').forEach((row) => {
      const term = row.querySelector('dt')?.textContent?.trim();
      const value = row.querySelector('dd');
      if (term && value && companyData[term]) {
        value.textContent = companyData[term];
      }
    });

    const insertRegistryRow = (label, value, beforeLabel = '各種登録') => {
      if ([...companyTable.querySelectorAll('dt')].some((dt) => dt.textContent.trim() === label)) return;

      const row = document.createElement('div');
      const dt = document.createElement('dt');
      const dd = document.createElement('dd');
      dt.textContent = label;
      dd.textContent = value;
      row.append(dt, dd);

      const beforeRow = [...companyTable.children].find(
        (candidate) => candidate.querySelector('dt')?.textContent?.trim() === beforeLabel,
      );
      companyTable.insertBefore(row, beforeRow || null);
    };

    insertRegistryRow('資本金', companyData.資本金);
    insertRegistryRow('決算期', companyData.決算期);
  }

  if (!button || !nav) return;

  const closeMenu = () => {
    button.setAttribute('aria-expanded', 'false');
    nav.classList.remove('open');
    document.body.classList.remove('menu-open');
  };

  button.addEventListener('click', () => {
    const opening = button.getAttribute('aria-expanded') !== 'true';
    button.setAttribute('aria-expanded', String(opening));
    nav.classList.toggle('open', opening);
    document.body.classList.toggle('menu-open', opening);
  });

  nav.querySelectorAll('a').forEach((link) => {
    link.addEventListener('click', closeMenu);
  });

  document.addEventListener('keydown', (event) => {
    if (event.key === 'Escape') closeMenu();
  });

  window.addEventListener('resize', () => {
    if (window.innerWidth > 760) closeMenu();
  });
})();

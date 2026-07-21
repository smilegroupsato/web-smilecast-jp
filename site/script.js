(() => {
  const mobileStylesheet = document.createElement('link');
  mobileStylesheet.rel = 'stylesheet';
  mobileStylesheet.href = './mobile-fix.css';
  document.head.appendChild(mobileStylesheet);

  const year = document.querySelector('#year');
  if (year) {
    year.textContent = String(new Date().getFullYear());
  }

  const companyTable = document.querySelector('.company-table');
  if (companyTable) {
    const rows = Array.from(companyTable.querySelectorAll(':scope > div'));
    const setValue = (label, value) => {
      const row = rows.find((item) => item.querySelector('dt')?.textContent.trim() === label);
      const field = row?.querySelector('dd');
      if (field) field.textContent = value;
    };

    setValue('所在地', '東京都千代田区神田須田町一丁目7番8号 VORT秋葉原IV 2F');
    setValue('代表者', '佐藤 卓');
    setValue('設立', '2025年9月1日');
    setValue('各種登録', 'インボイス登録済み／社会保険・労働保険・雇用保険加入済み');

    const capitalRow = document.createElement('div');
    capitalRow.innerHTML = '<dt>資本金</dt><dd>500万円</dd>';

    const careerRow = document.createElement('div');
    careerRow.innerHTML = '<dt>キャリアアップ計画</dt><dd>2026年5月27日 提出済み</dd>';

    companyTable.append(capitalRow, careerRow);
  }

  const button = document.querySelector('.menu-button');
  const nav = document.querySelector('.global-nav');
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

import Table from './Table';

const table = new Table(document.querySelector('.table'));

const titles = table.querySelectorAll('.cell');

for (const title of titles) {
  title.onclick = () => {
    const name = title.textContent;
    if (title.classList.contains('sorted')) {
      title.classList.remove('sorted');
      data.sort((a, b) => b[name] - a[name]);
      table.renderTable(data);
      return;
    }
    data.sort((a, b) => a[name] - b[name]);
    title.classList.add('sorted');
    table.renderTable(data);
  };
}

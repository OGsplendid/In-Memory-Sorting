import Table from './Table';

const data = [
  {
    id: 26,
    title: 'Побег из Шоушенка',
    imdb: 9.30,
    year: 1994,
  },
  {
    id: 25,
    title: 'Крёстный отец',
    imdb: 9.20,
    year: 1972,
  },
  {
    id: 27,
    title: 'Крёстный отец 2',
    imdb: 9.00,
    year: 1974,
  },
  {
    id: 1047,
    title: 'Тёмный рыцарь',
    imdb: 9.00,
    year: 2008,
  },
  {
    id: 223,
    title: 'Криминальное чтиво',
    imdb: 8.90,
    year: 1994,
  },
];

const table = new Table(document.querySelector('.table'));

const titles = table.querySelectorAll('.cell');

for (const title of titles) {
  title.onclick = () => {
    if (title.classList.contains('sorted')) {
      title.classList.remove('sorted');
      data.sort((a, b) => b - a);
      table.renderTable(data);
      return;
    }
    data.sort((a, b) => a - b);
    title.classList.add('sorted');
    table.renderTable(data);
  };
}

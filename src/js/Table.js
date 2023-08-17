export default class Table {
  constructor(element, array) {
    try {
      this.element = element;
    } catch (error) {
      throw new Error('error');
    }

    this.array = array;

    // this.types = {
    //   id: 'number',
    //   title: 'string',
    //   imdb: 'number',
    //   year: 'number',
    // };

    this.onClick = this.onClick.bind(this);
    this.element.addEventListener('click', this.onClick);
  }

  static createRow(obj) {
    const row = document.createElement('ul');
    row.classList.add('row', 'sub');
    for (const key in obj) {
      const item = document.createElement('li');
      item.classList.add('cell', key);
      item.textContent = obj[key];
      row.insertAdjacentElement('beforeend', item);
    }
    return row;
  }

  renderTable() {
    for (const item of this.array) {
      const movie = Table.createRow(item);
      this.element.insertAdjacentElement('beforeend', movie);
    }
  }

  clearTable() {
    const rows = this.element.querySelectorAll('.sub');
    rows.forEach((el) => {
      el.remove();
    });
  }

  sortData(el) {
    if (this.element.classList.contains('sorted')) {
      if (el === 'title') {
        this.array.sort((a, b) => b[el].localeCompare(a[el]));
      } else {
        this.array.sort((a, b) => b[el] - a[el]);
      }
      this.element.classList.remove('sorted');
    } else {
      if (el === 'title') {
        this.array.sort((a, b) => a[el].localeCompare(b[el]));
      } else {
        this.array.sort((a, b) => a[el] - b[el]);
      }
      this.element.classList.add('sorted');
    }
  }

  onClick(e) {
    if (e.target.classList.contains('main-cell')) {
      const key = e.target.textContent;
      this.sortData(key);
      this.clearTable();
      this.renderTable();
    }
  }
}

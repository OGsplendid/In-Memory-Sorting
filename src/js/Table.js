export default class Table {
  constructor(element, array) {
    try {
      this.element = element;
    } catch (error) {
      throw new Error('error');
    }

    this.array = array;

    this.onClick = this.onClick.bind(this);
    this.element.addEventListener('click', this.onClick);
  }

  static createRow(obj) {
    const row = document.createElement('ul');
    row.classList.add('row', 'sub');
    for (const key in obj) {
      const item = document.createElement('li');
      item.classList.add('cell');
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

  onClick(e) {
    if (e.target.classList.contains('main-cell')) {
      const key = e.target.textContent;
      if (this.element.classList.contains('sorted')) {
        this.array.sort((a, b) => b[key] - a[key]);
        this.element.classList.remove('sorted');
      } else {
        this.array.sort((a, b) => a[key] - b[key]);
        this.element.classList.add('sorted');
      }
      this.clearTable();
      this.renderTable();
    }
  }
}

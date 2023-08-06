export default class Table {
  constructor(element) {
    try {
      this.element = element;
    } catch (error) {
      console.log(error);
    }
  }

  static createRow(obj) {
    const row = document.createElement('tr');
    const item = document.createElement('td');
    for (const key in obj) {
      item.classList.add(key, 'cell');
      item.textContent = obj[key];
      row.insertAdjacentElement('beforeend', item);
    }
    return row;
  }

  renderTable(array) {
    for (const item of array) {
      const movie = Table.createRow(item);
      this.element.insertAdjacentElement('beforeend', movie);
    }
  }

  addEvents(data) {
    const titles = this.element.querySelectorAll('.main-cell');
    for (const title of titles) {
      title.onclick = () => {
        const name = title.textContent;
        if (title.classList.contains('sorted')) {
          title.classList.remove('sorted');
          data.sort((a, b) => b[name] - a[name]);
          this.renderTable(data);
          return;
        }
        data.sort((a, b) => a[name] - b[name]);
        title.classList.add('sorted');
        this.renderTable(data);
      };
    }
  }
}

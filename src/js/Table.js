export default class Table {
  constructor(element) {
    try {
      this.element = element;
    } catch (error) {
      console.log(error);
    }
  }

  createRow(obj) {
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
      const movie = this.createRow(item);
      this.element.insertAdjacentElement('beforeend', movie);
    }
  }
}

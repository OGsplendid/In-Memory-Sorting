import Table from './src/js/Table';
import './src/css/style.css';
import data from './src/js/dataBase.json';

const table = new Table(document.querySelector('.table'), data);
table.renderTable();

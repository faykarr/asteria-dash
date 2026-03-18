import { DataTable } from 'simple-datatables';
import 'simple-datatables/dist/style.css';

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.datatable').forEach(el => {
    new DataTable(el, {
      searchable: true,
      sortable: true,
      perPage: 10,
    });
  });
});

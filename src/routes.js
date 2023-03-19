const {
  addNoteHandler,
  getAllNotesHandler,
  getNoteByIdHandler,
  editNoteByIdHandler,
  deleteNoteByIdHandler
} = require("./handler"); // Mengimpor addNoteHandler dari modul handler

const routes = [ // Deklarasi array routes
  {
    method: 'POST', // Metode request yang digunakan (POST)
    path: '/notes', // URL yang digunakan (/notes)
    handler: addNoteHandler, // Handler yang akan dijalankan untuk request ini (addNoteHandler)
  },
  {
    method: 'GET', // Metode request yang digunakan (POST)
    path: '/notes', // URL yang digunakan (/notes)
    handler: getAllNotesHandler,
  },
  {
    method: 'GET',
    path: '/notes/{id}',
    handler: getNoteByIdHandler,
  },
  {
    method: 'PUT',
    path: '/notes/{id}',
    handler: editNoteByIdHandler,
  },
  {
    method: 'DELETE',
    path: '/notes/{id}',
    handler: deleteNoteByIdHandler,
  },
];

module.exports = routes; // Mengekspor array routes
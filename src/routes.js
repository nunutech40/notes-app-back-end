const { addNoteHandler, getAllNotesHandler, getNoteByIdHandler } = require("./handler"); // Mengimpor addNoteHandler dari modul handler

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
];

module.exports = routes; // Mengekspor array routes
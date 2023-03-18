const { addNoteHandler } = require("./handler"); // Mengimpor addNoteHandler dari modul handler

const routes = [ // Deklarasi array routes
  {
    method: 'POST', // Metode request yang digunakan (POST)
    path: '/notes', // URL yang digunakan (/notes)
    handler: addNoteHandler, // Handler yang akan dijalankan untuk request ini (addNoteHandler)
  },
];

module.exports = routes; // Mengekspor array routes
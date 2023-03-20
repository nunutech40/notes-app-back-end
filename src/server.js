const Hapi = require('@hapi/hapi'); // Mengimpor Hapi framework
const routes = require('./routes'); // Mengimpor modul routes
 
const init = async () => { // Deklarasi fungsi init
  const server = Hapi.server({ // Membuat objek server dengan konfigurasi port dan host
    port: 5000,
    host: process.env.NODE_ENV !== 'production' ? 'localhost' : '0.0.0.0',
    routes: {
      cors: {
        origin: ['*'],
      },
    },
  });

  server.route(routes); // Menambahkan route yang didefinisikan pada modul routes ke dalam server

  await server.start(); // Menjalankan server
  console.log(`Server berjalan pada ${server.info.uri}`); // Menampilkan pesan server telah berjalan
};

init(); // Memanggil fungsi init untuk menjalankan server
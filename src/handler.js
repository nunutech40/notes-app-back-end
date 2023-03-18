const { nanoid } = require('nanoid'); // Mengimport dependensi nanoid yang digunakan untuk membuat id acak
const notes = require('./notes'); // Mengimport module notes yang berisi daftar catatan

const addNoteHandler = (request, h) => { // Fungsi untuk menambahkan catatan baru
    const { title, tags, body } = request.payload; // Menyimpan nilai title, tags, body dari request.payload yang diterima

    const id = nanoid(16); // Membuat id acak dengan panjang 16 karakter menggunakan nanoid
    const createAt = new Date().toISOString(); // Mengambil tanggal saat ini dalam format iso string untuk menandai waktu dibuatnya catatan
    const updateAt = createAt; // Mengatur updateAt sama dengan createAt karena catatan baru belum pernah diubah

    const newNote = { // Membuat object baru untuk catatan baru yang akan ditambahkan
        title, tags, body, id, createAt, updateAt
    };

    notes.push(newNote); // Menambahkan catatan baru ke dalam daftar notes

    const isSuccess = notes.filter((note) => note.id === id).length > 0; // Cek apakah catatan baru berhasil ditambahkan dengan membandingkan jumlah catatan dengan id yang sama

    if (isSuccess) { // Jika catatan berhasil ditambahkan
        const response = h.response({
            status: 'success',
            message: 'Catatan berhasil ditambahkan',
            data: {
                noteId: id,
                title: title,
                body: body,
                tags: tags
            },
            
        });
        response.code(201); // Set status code response menjadi 201 (created)
        return response;
    }

    // Jika catatan gagal ditambahkan, maka kirim response fail dengan status code 500 (internal server error)
    const response = h.response({
        status: 'fail',
        message: 'Catatan gagal ditambahkan',
    });
    response.code(500);
    return response;
};

const getAllNotesHandler = () => ({
    status: 'success',
    data: {
      notes,
    },
});

const getNoteByIdHandler = (request, h) => {
    const { id } = request.params; // destructuring id from params

    const note = notes.filter((n) => n.id === id)[0];

    if (note != undefined) {
        return {
            status: 'success',
            data: {
                note,
            },
        };
    }

    const response = h.response({
        status: 'fail',
        message: 'Catatan tidak ditemukan'
    });

    response.code(404);
    return response;
}

module.exports = { addNoteHandler, getAllNotesHandler, getNoteByIdHandler }; // Ekspor fungsi addNoteHandler agar bisa digunakan di file lain

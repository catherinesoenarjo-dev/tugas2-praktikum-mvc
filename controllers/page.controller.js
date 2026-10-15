const daftarBuku = [
    { judul: 'Laskar Pelangi', penulis: 'Andrea Hirata', tahun: 2005, kategori: 'E-journal' },
    { judul: 'Bumi Manusia', penulis: 'Pramoedya Ananta Toer', tahun: 1980, kategori: 'Sastra' },
    { judul: 'Sapiens', penulis: 'Yuval Noah Harari', tahun: 2011, kategori: 'Preprint' },
    { judul: 'Clean Code', penulis: 'Robert C. Martin', tahun: 2008, kategori: 'Conference Paper' }
];
exports.getHome = (req, res) => {
 res.render('pages/home', {
 userName: 'Catherine',
 fiturList: ['Katalog Buku', 'Form Tambah Buku', 'Arsitektur MVC dengan EJS']
 });
};
exports.getAbout = (req, res) => {
 res.render('pages/about', { pageTitle: 'Tentang Kami' });
};
exports.getKatalog = (req, res) => {
 res.render('pages/katalog', { 
    pageTitle: 'Galeri Buku',
    daftarBuku: daftarBuku // Mengirim data daftarBuku ke view
});
};
exports.getForm = (req, res) => {
 res.render('pages/form', { pageTitle: 'Formulir Tambah Koleksi' });
};
exports.postTambahKoleksi = (req, res) => {
    console.log("\n[BACK-END] Menerima Payload POST:");
    console.log(req.body);
    daftarBuku.push({
        judul: req.body.judul,
        penulis: req.body.penulis,
        tahun: Number(req.body.tahun),
        kategori: req.body.kategori
    });
 // Post-Redirect-Get (PRG) Pattern: Cegah resubmit data saat F5
    res.redirect('/katalog');
};



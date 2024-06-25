const khodamArray = [
  {
    id: 1,
    name: "Jus Timun",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 2,
    name: "Sayur Asem",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 3,
    name: "Cupcake",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 4,
    name: "Es Cincau",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 5,
    name: "Jus Belimbing",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 6,
    name: "Ketoprak",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 7,
    name: "Ayam Goreng",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 8,
    name: "Bika Ambon",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 9,
    name: "Ketoprak",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 10,
    name: "Tiramisu",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 11,
    name: "Es Selendang Mayang",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 12,
    name: "Kue Semprit",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 13,
    name: "Pempek",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 14,
    name: "Jus Belimbing",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 15,
    name: "Teh Tarik",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 16,
    name: "Bika Ambon",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 17,
    name: "Sop Buntut",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 18,
    name: "Pecel Lele",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 19,
    name: "Jus Jambu",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 20,
    name: "Es Doger",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 21,
    name: "Kue Sagu Keju",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 22,
    name: "Kue Putri Salju",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 23,
    name: "Siomay",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 24,
    name: "Sate Ayam",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 25,
    name: "Es Campur",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 26,
    name: "Kue Nastar",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 27,
    name: "Nasi Uduk",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 28,
    name: "Kue Kastengel",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 29,
    name: "Bakso",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 30,
    name: "Bakso",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 31,
    name: "Bandrek",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 32,
    name: "Siomay",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 33,
    name: "Es Campur Durian",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 34,
    name: "Klepon",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 35,
    name: "Kue Kering Wijen",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 36,
    name: "Sayur Asem",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 37,
    name: "Bandrek",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 38,
    name: "Kolak Pisang",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 39,
    name: "Jus Belimbing",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 40,
    name: "Jus Jambu",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 41,
    name: "Rujak Cingur",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 42,
    name: "Dodol",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 43,
    name: "Ayam Bakar",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 44,
    name: "Bandrek",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 45,
    name: "Batagor",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 46,
    name: "Kue Semprit",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 47,
    name: "Jus Kubis",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 48,
    name: "Es Potong",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 49,
    name: "Jus Sirsak",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 50,
    name: "Jus Apel",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 51,
    name: "Gulai Kambing",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 52,
    name: "Agar-agar",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 53,
    name: "Kue Kering Coklat",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 54,
    name: "Puding",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 55,
    name: "Kue Sagu Keju",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 56,
    name: "Muffin",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 57,
    name: "Es Potong",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 58,
    name: "Bajigur",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 59,
    name: "Pempek",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 60,
    name: "Bebek Goreng",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 61,
    name: "Mie Ayam",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 62,
    name: "Jus Apel",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 63,
    name: "Mie Ayam",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 64,
    name: "Jus Seledri",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 65,
    name: "Es Cendol Durian",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 66,
    name: "Cap Cay",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 67,
    name: "Nasi Uduk",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 68,
    name: "Es Potong",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 69,
    name: "Jus Wortel",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 70,
    name: "Tiramisu",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 71,
    name: "Es Kelapa Muda",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 72,
    name: "Mie Ayam",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 73,
    name: "Brownies",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 74,
    name: "Jus Semangka",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 75,
    name: "Sayur Asem",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 76,
    name: "Jus Apel",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 77,
    name: "Kue Lidah Kucing",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 78,
    name: "Ayam Goreng",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 79,
    name: "Getuk",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 80,
    name: "Serabi",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 81,
    name: "Jus Alpukat",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 82,
    name: "Getuk",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 83,
    name: "Jus Bayam",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 84,
    name: "Kue Tart",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 85,
    name: "Wedang Ronde",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 86,
    name: "Martabak",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 87,
    name: "Jus Terong Belanda",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 88,
    name: "Kopi Tubruk",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 89,
    name: "Getuk",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 90,
    name: "Wedang Ronde",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 91,
    name: "Jus Jambu Biji",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 92,
    name: "Opor Ayam",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 93,
    name: "Tahu Telur",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 94,
    name: "Kolak Pisang",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 95,
    name: "Es Teler",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 96,
    name: "Es Selendang Mayang",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 97,
    name: "Jus Nanas",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 98,
    name: "Jus Belimbing",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 99,
    name: "Nasi Uduk",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 100,
    name: "Lumpia",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 101,
    name: "Nasi Goreng",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 102,
    name: "Kue Kering Coklat",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 103,
    name: "Mie Ayam",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 104,
    name: "Dodol",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 105,
    name: "Es Teler",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 106,
    name: "Jus Kubis",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 107,
    name: "Bika Ambon",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 108,
    name: "Es Doger",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 109,
    name: "Batagor",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 110,
    name: "Kue Tart",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 111,
    name: "Lumpia",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 112,
    name: "Kue Pancong",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 113,
    name: "Bakso",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 114,
    name: "Teh Tarik",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 115,
    name: "Muffin",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 116,
    name: "Nasi Goreng",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 117,
    name: "Jus Kubis",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 118,
    name: "Kue Pancong",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 119,
    name: "Muffin",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 120,
    name: "Lumpia",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 121,
    name: "Gulai Kambing",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 122,
    name: "Tahu Telur",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 123,
    name: "Opor Ayam",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 124,
    name: "Es Teler Durian",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 125,
    name: "Agar-agar",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 126,
    name: "Ayam Goreng",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 127,
    name: "Jus Melon",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 128,
    name: "Es Kelapa Muda",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 129,
    name: "Sayur Asem",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 130,
    name: "Kue Kering Coklat",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 131,
    name: "Ikan Bakar",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 132,
    name: "Tiramisu",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 133,
    name: "Rujak Cingur",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 134,
    name: "Serabi",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 135,
    name: "Kue Tart",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 136,
    name: "Onde-onde",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 137,
    name: "Jus Brokoli",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 138,
    name: "Jus Kubis",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 139,
    name: "Ayam Bakar",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 140,
    name: "Jus Kubis",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 141,
    name: "Ayam Goreng",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 142,
    name: "Muffin",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 143,
    name: "Bajigur",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 144,
    name: "Soto Betawi",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 145,
    name: "Es Dawet",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 146,
    name: "Es Cincau",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 147,
    name: "Jus Bayam",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 148,
    name: "Martabak Manis",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 149,
    name: "Ayam Goreng",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 150,
    name: "Es Dawet",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 151,
    name: "Nasi Padang",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 152,
    name: "Nasi Goreng",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 153,
    name: "Kue Pukis",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 154,
    name: "Wajik",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 155,
    name: "Pisang Goreng",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 156,
    name: "Martabak Manis",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 157,
    name: "Es Krim",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 158,
    name: "Kue Putu",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 159,
    name: "Jus Jambu Biji",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 160,
    name: "Dodol",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 161,
    name: "Soto Betawi",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 162,
    name: "Wedang Ronde",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 163,
    name: "Muffin",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 164,
    name: "Es Campur",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 165,
    name: "Bakso",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 166,
    name: "Gado-gado",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 167,
    name: "Jus Bayam",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 168,
    name: "Bubur Ayam",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 169,
    name: "Jus Timun",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 170,
    name: "Kue Kastengel",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 171,
    name: "Kue Kering Coklat",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 172,
    name: "Jus Melon",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 173,
    name: "Rawon",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 174,
    name: "Ketoprak",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 175,
    name: "Kue Kering Kacang",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 176,
    name: "Sayur Lodeh",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 177,
    name: "Agar-agar",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 178,
    name: "Cupcake",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 179,
    name: "Pempek",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 180,
    name: "Onde-onde",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 181,
    name: "Kue Pancong",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 182,
    name: "Es Selendang Mayang",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 183,
    name: "Martabak",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 184,
    name: "Jus Mangga",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 185,
    name: "Jus Kubis",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 186,
    name: "Jus Jambu",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 187,
    name: "Nasi Padang",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 188,
    name: "Kue Lidah Kucing",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 189,
    name: "Bajigur",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 190,
    name: "Soto Betawi",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 191,
    name: "Pecel Lele",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 192,
    name: "Muffin",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 193,
    name: "Cap Cay",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 194,
    name: "Wajik",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 195,
    name: "Ayam Goreng",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 196,
    name: "Jus Bayam",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 197,
    name: "Ikan Bakar",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 198,
    name: "Sayur Asem",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 199,
    name: "Brownies",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 200,
    name: "Lumpia",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 201,
    name: "Cenil",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 202,
    name: "Teh Tarik",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 203,
    name: "Es Teler",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 204,
    name: "Es Campur",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 205,
    name: "Jus Seledri",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 206,
    name: "Nasi Uduk",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 207,
    name: "Jus Tomat",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 208,
    name: "Jus Belimbing",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 209,
    name: "Lumpia",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 210,
    name: "Cupcake",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 211,
    name: "Onde-onde",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 212,
    name: "Nasi Goreng",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 213,
    name: "Soto Betawi",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 214,
    name: "Kue Cubit",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 215,
    name: "Kue Tart",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 216,
    name: "Kolak Pisang",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 217,
    name: "Tahu Telur",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 218,
    name: "Agar-agar",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 219,
    name: "Rendang",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 220,
    name: "Jus Jeruk",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 221,
    name: "Soto Betawi",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 222,
    name: "Serabi",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 223,
    name: "Kue Kering Kacang",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 224,
    name: "Nasi Kuning",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 225,
    name: "Kue Cubit",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 226,
    name: "Donat",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 227,
    name: "Dodol",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 228,
    name: "Teh Tarik",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 229,
    name: "Pecel Lele",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 230,
    name: "Kue Pancong",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 231,
    name: "Bakso",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 232,
    name: "Sayur Asem",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 233,
    name: "Kue Kering Kacang",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 234,
    name: "Nasi Goreng",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 235,
    name: "Sate Ayam",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 236,
    name: "Pempek",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 237,
    name: "Es Teler",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 238,
    name: "Jus Belimbing",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 239,
    name: "Jus Wortel",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 240,
    name: "Jus Belimbing",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 241,
    name: "Bubur Ayam",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 242,
    name: "Lumpia",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 243,
    name: "Puding",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 244,
    name: "Kue Lidah Kucing",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 245,
    name: "Jus Brokoli",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 246,
    name: "Jus Brokoli",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 247,
    name: "Sayur Lodeh",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 248,
    name: "Jus Terong Belanda",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 249,
    name: "Sayur Lodeh",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 250,
    name: "Kue Semprit",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 251,
    name: "Es Teler Durian",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 252,
    name: "Ayam Goreng",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 253,
    name: "Nasi Kuning",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 254,
    name: "Nasi Padang",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 255,
    name: "Mie Ayam",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 256,
    name: "Teh Tarik",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 257,
    name: "Ikan Bakar",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 258,
    name: "Jus Alpukat",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 259,
    name: "Jus Wortel",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 260,
    name: "Es Cendol Durian",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 261,
    name: "Wajik",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 262,
    name: "Pempek",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 263,
    name: "Muffin",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 264,
    name: "Brownies",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 265,
    name: "Kue Kering Kacang",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 266,
    name: "Kopi Tubruk",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 267,
    name: "Cupcake",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 268,
    name: "Jus Jambu Biji",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 269,
    name: "Kolak Pisang",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 270,
    name: "Ikan Bakar",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 271,
    name: "Kue Lumpur",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 272,
    name: "Kue Sagu Keju",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 273,
    name: "Kue Sagu Keju",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 274,
    name: "Es Cendol Durian",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 275,
    name: "Brownies",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 276,
    name: "Kolak Pisang",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 277,
    name: "Bika Ambon",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 278,
    name: "Kue Semprit",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 279,
    name: "Mie Ayam",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 280,
    name: "Siomay",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 281,
    name: "Es Kelapa Muda",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 282,
    name: "Es Krim",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 283,
    name: "Jus Sirsak",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 284,
    name: "Opor Ayam",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 285,
    name: "Nasi Uduk",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 286,
    name: "Teh Tarik",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 287,
    name: "Es Krim",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 288,
    name: "Puding",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 289,
    name: "Gado-gado",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 290,
    name: "Es Potong",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 291,
    name: "Bandrek",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 292,
    name: "Jus Kubis",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 293,
    name: "Es Doger",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 294,
    name: "Kue Putri Salju",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 295,
    name: "Es Teler Durian",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 296,
    name: "Jus Kubis",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 297,
    name: "Cendol",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 298,
    name: "Es Teler",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 299,
    name: "Bakso",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 300,
    name: "Es Kelapa Muda",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 301,
    name: "Jus Belimbing",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 302,
    name: "Jus Terong Belanda",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 303,
    name: "Brownies",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 304,
    name: "Getuk",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 305,
    name: "Bajigur",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 306,
    name: "Sayur Asem",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 307,
    name: "Gudeg",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 308,
    name: "Ketoprak",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 309,
    name: "Kue Kastengel",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 310,
    name: "Kue Putu",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 311,
    name: "Cenil",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 312,
    name: "Es Krim",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 313,
    name: "Jus Wortel",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 314,
    name: "Ikan Bakar",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 315,
    name: "Cap Cay",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 316,
    name: "Kue Kering Coklat",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 317,
    name: "Es Cendol Durian",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 318,
    name: "Jus Brokoli",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 319,
    name: "Soto Betawi",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 320,
    name: "Es Teler Durian",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 321,
    name: "Rujak Cingur",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 322,
    name: "Jus Wortel",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 323,
    name: "Ikan Bakar",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 324,
    name: "Opor Ayam",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 325,
    name: "Kue Lapis",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 326,
    name: "Kue Black Forest",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 327,
    name: "Kue Bangkit",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 328,
    name: "Sate Ayam",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 329,
    name: "Ikan Bakar",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 330,
    name: "Bubur Ayam",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 331,
    name: "Kue Kastengel",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 332,
    name: "Ketoprak",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 333,
    name: "Kue Kering Wijen",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 334,
    name: "Kopi Tubruk",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 335,
    name: "Jus Terong Belanda",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 336,
    name: "Jus Alpukat",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 337,
    name: "Muffin",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 338,
    name: "Ayam Bakar",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 339,
    name: "Jus Kubis",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 340,
    name: "Ayam Bakar",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 341,
    name: "Klepon",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 342,
    name: "Jus Mangga",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 343,
    name: "Cap Cay",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 344,
    name: "Serabi",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 345,
    name: "Jus Kubis",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 346,
    name: "Cenil",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 347,
    name: "Es Campur Durian",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 348,
    name: "Jus Sirsak",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 349,
    name: "Jus Bayam",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 350,
    name: "Pecel Lele",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 351,
    name: "Kue Lumpur",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 352,
    name: "Kue Putri Salju",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 353,
    name: "Klepon",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 354,
    name: "Kue Cubit",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 355,
    name: "Kue Lidah Kucing",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 356,
    name: "Sate Ayam",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 357,
    name: "Ayam Goreng",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 358,
    name: "Muffin",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 359,
    name: "Jus Sawi",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 360,
    name: "Es Doger",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 361,
    name: "Serabi",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 362,
    name: "Jus Alpukat",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 363,
    name: "Martabak",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 364,
    name: "Nasi Padang",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 365,
    name: "Jus Tomat",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 366,
    name: "Kue Lapis",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 367,
    name: "Kue Putu",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 368,
    name: "Es Potong",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 369,
    name: "Donat",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 370,
    name: "Es Teler",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 371,
    name: "Nasi Uduk",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 372,
    name: "Jus Apel",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 373,
    name: "Pecel Lele",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 374,
    name: "Jus Alpukat",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 375,
    name: "Kue Cubit",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 376,
    name: "Jus Seledri",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 377,
    name: "Jus Mangga",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 378,
    name: "Batagor",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 379,
    name: "Es Krim",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 380,
    name: "Bandrek",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 381,
    name: "Kopi Tubruk",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 382,
    name: "Es Potong",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 383,
    name: "Kue Lumpur",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 384,
    name: "Kue Tart",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 385,
    name: "Kue Lumpur",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 386,
    name: "Cendol",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 387,
    name: "Gudeg",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 388,
    name: "Kue Lapis",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 389,
    name: "Jus Seledri",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 390,
    name: "Wedang Ronde",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 391,
    name: "Sate Ayam",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 392,
    name: "Serabi",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 393,
    name: "Es Kelapa Muda",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 394,
    name: "Sop Buntut",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 395,
    name: "Gudeg",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 396,
    name: "Kue Kering Kacang",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 397,
    name: "Jus Kubis",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 398,
    name: "Jus Brokoli",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 399,
    name: "Kue Kering Kacang",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 400,
    name: "Tiramisu",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 401,
    name: "Jus Jambu Biji",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 402,
    name: "Martabak",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 403,
    name: "Nasi Uduk",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 404,
    name: "Nasi Uduk",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 405,
    name: "Jus Jambu Biji",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 406,
    name: "Ayam Goreng",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 407,
    name: "Wedang Ronde",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 408,
    name: "Jus Belimbing",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 409,
    name: "Ketoprak",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 410,
    name: "Kolak Pisang",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 411,
    name: "Tahu Telur",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 412,
    name: "Jus Tomat",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 413,
    name: "Jus Sirsak",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 414,
    name: "Kue Lidah Kucing",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 415,
    name: "Kue Putu",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 416,
    name: "Kue Pukis",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 417,
    name: "Es Cendol Durian",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 418,
    name: "Bajigur",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 419,
    name: "Kue Pukis",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 420,
    name: "Kue Kering Kacang",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 421,
    name: "Lumpia",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 422,
    name: "Jus Bayam",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 423,
    name: "Lumpia",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 424,
    name: "Batagor",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 425,
    name: "Tiramisu",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 426,
    name: "Muffin",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 427,
    name: "Jus Nanas",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 428,
    name: "Kue Kering Kacang",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 429,
    name: "Kolak Pisang",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 430,
    name: "Jus Melon",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 431,
    name: "Kue Cubit",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 432,
    name: "Jus Seledri",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 433,
    name: "Jus Belimbing",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 434,
    name: "Kue Kering Coklat",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 435,
    name: "Es Teler Durian",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 436,
    name: "Kue Lumpur",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 437,
    name: "Es Campur Durian",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 438,
    name: "Kue Pukis",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 439,
    name: "Nasi Uduk",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 440,
    name: "Teh Tarik",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 441,
    name: "Gulai Kambing",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 442,
    name: "Kue Lapis",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 443,
    name: "Jus Mangga",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 444,
    name: "Klepon",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 445,
    name: "Es Teler Durian",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 446,
    name: "Kue Lumpur",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 447,
    name: "Kue Pancong",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 448,
    name: "Cenil",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 449,
    name: "Mie Ayam",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 450,
    name: "Jus Kubis",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 451,
    name: "Mie Ayam",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 452,
    name: "Kue Lumpur",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 453,
    name: "Es Selendang Mayang",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 454,
    name: "Kue Nastar",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 455,
    name: "Agar-agar",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 456,
    name: "Jus Bayam",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 457,
    name: "Es Teler Durian",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 458,
    name: "Kue Sagu Keju",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 459,
    name: "Es Puter",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 460,
    name: "Kue Kering Wijen",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 461,
    name: "Bakso",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 462,
    name: "Es Cendol Durian",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 463,
    name: "Jus Seledri",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 464,
    name: "Wedang Ronde",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 465,
    name: "Rendang",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 466,
    name: "Bebek Goreng",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 467,
    name: "Lumpia",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 468,
    name: "Kue Semprit",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 469,
    name: "Agar-agar",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 470,
    name: "Jus Kubis",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 471,
    name: "Gulai Kambing",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 472,
    name: "Jus Kubis",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 473,
    name: "Teh Tarik",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 474,
    name: "Kue Lidah Kucing",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 475,
    name: "Kue Nastar",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 476,
    name: "Rujak Cingur",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 477,
    name: "Bandrek",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 478,
    name: "Nasi Padang",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 479,
    name: "Cap Cay",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 480,
    name: "Gulai Kambing",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 481,
    name: "Sayur Lodeh",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 482,
    name: "Sayur Asem",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 483,
    name: "Ikan Bakar",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 484,
    name: "Jus Belimbing",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 485,
    name: "Kue Semprit",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 486,
    name: "Es Potong",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 487,
    name: "Soto Betawi",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 488,
    name: "Es Campur Durian",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 489,
    name: "Kue Kering Wijen",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 490,
    name: "Bajigur",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 491,
    name: "Ayam Goreng",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 492,
    name: "Tahu Telur",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 493,
    name: "Martabak Manis",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 494,
    name: "Kue Bangkit",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 495,
    name: "Jus Seledri",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 496,
    name: "Kolak Pisang",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 497,
    name: "Es Teler Durian",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 498,
    name: "Bandrek",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 499,
    name: "Tahu Telur",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 500,
    name: "Kue Kastengel",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 501,
    name: "Bika Ambon",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 502,
    name: "Klepon",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 503,
    name: "Muffin",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 504,
    name: "Donat",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 505,
    name: "Teh Tarik",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 506,
    name: "Nasi Uduk",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 507,
    name: "Teh Tarik",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 508,
    name: "Sayur Asem",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 509,
    name: "Kue Black Forest",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 510,
    name: "Teh Tarik",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 511,
    name: "Bika Ambon",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 512,
    name: "Jus Jambu",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 513,
    name: "Tahu Telur",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 514,
    name: "Jus Tomat",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 515,
    name: "Es Campur",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 516,
    name: "Sayur Asem",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 517,
    name: "Bika Ambon",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 518,
    name: "Ayam Goreng",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 519,
    name: "Kue Sagu Keju",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 520,
    name: "Jus Alpukat",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 521,
    name: "Bandrek",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 522,
    name: "Donat",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 523,
    name: "Tahu Telur",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 524,
    name: "Martabak",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 525,
    name: "Klepon",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 526,
    name: "Jus Terong Belanda",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 527,
    name: "Wajik",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 528,
    name: "Pecel Lele",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 529,
    name: "Kolak Pisang",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 530,
    name: "Sayur Asem",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 531,
    name: "Kue Putu",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 532,
    name: "Mie Ayam",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 533,
    name: "Es Krim",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 534,
    name: "Kue Kering Coklat",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 535,
    name: "Kue Sagu Keju",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 536,
    name: "Es Puter",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 537,
    name: "Es Puter",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 538,
    name: "Puding",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 539,
    name: "Wajik",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 540,
    name: "Rendang",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 541,
    name: "Cap Cay",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 542,
    name: "Pecel Lele",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 543,
    name: "Es Selendang Mayang",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 544,
    name: "Es Cendol Durian",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 545,
    name: "Ketoprak",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 546,
    name: "Jus Sawi",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 547,
    name: "Ketoprak",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 548,
    name: "Siomay",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 549,
    name: "Kue Pancong",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 550,
    name: "Ayam Goreng",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 551,
    name: "Wajik",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 552,
    name: "Es Campur",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 553,
    name: "Cap Cay",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 554,
    name: "Kue Sagu Keju",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 555,
    name: "Nasi Padang",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 556,
    name: "Nasi Uduk",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 557,
    name: "Tahu Telur",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 558,
    name: "Tiramisu",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 559,
    name: "Wajik",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 560,
    name: "Kue Pukis",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 561,
    name: "Batagor",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 562,
    name: "Jus Melon",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 563,
    name: "Es Cendol Durian",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 564,
    name: "Jus Timun",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 565,
    name: "Kue Kering Kacang",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 566,
    name: "Agar-agar",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 567,
    name: "Dodol",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 568,
    name: "Getuk",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 569,
    name: "Jus Timun",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 570,
    name: "Sayur Asem",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 571,
    name: "Kue Kastengel",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 572,
    name: "Wajik",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 573,
    name: "Jus Nanas",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 574,
    name: "Teh Tarik",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 575,
    name: "Siomay",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 576,
    name: "Getuk",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 577,
    name: "Kue Lidah Kucing",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 578,
    name: "Jus Sawi",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 579,
    name: "Jus Nanas",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 580,
    name: "Gulai Kambing",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 581,
    name: "Lumpia",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 582,
    name: "Kue Lapis",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 583,
    name: "Jus Wortel",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 584,
    name: "Kue Nastar",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 585,
    name: "Kue Pancong",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 586,
    name: "Nasi Goreng",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 587,
    name: "Onde-onde",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 588,
    name: "Nasi Goreng",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 589,
    name: "Gudeg",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 590,
    name: "Ikan Bakar",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 591,
    name: "Ikan Bakar",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 592,
    name: "Bika Ambon",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 593,
    name: "Sop Buntut",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 594,
    name: "Jus Jeruk",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 595,
    name: "Klepon",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 596,
    name: "Lumpia",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 597,
    name: "Bika Ambon",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 598,
    name: "Puding",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 599,
    name: "Kue Kering Kacang",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 600,
    name: "Jus Wortel",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 601,
    name: "Rujak Cingur",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 602,
    name: "Rendang",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 603,
    name: "Jus Jambu",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 604,
    name: "Onde-onde",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 605,
    name: "Kue Bangkit",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 606,
    name: "Es Cincau",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 607,
    name: "Kolak Pisang",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 608,
    name: "Es Krim",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 609,
    name: "Kue Putu",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 610,
    name: "Bajigur",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 611,
    name: "Kue Sagu Keju",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 612,
    name: "Jus Terong Belanda",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 613,
    name: "Kue Kering Kacang",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 614,
    name: "Klepon",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 615,
    name: "Jus Tomat",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 616,
    name: "Jus Semangka",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 617,
    name: "Donat",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 618,
    name: "Jus Bayam",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 619,
    name: "Kue Kering Coklat",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 620,
    name: "Jus Apel",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 621,
    name: "Es Krim",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 622,
    name: "Jus Alpukat",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 623,
    name: "Onde-onde",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 624,
    name: "Nasi Kuning",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 625,
    name: "Pisang Goreng",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 626,
    name: "Rendang",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 627,
    name: "Donat",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 628,
    name: "Cap Cay",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 629,
    name: "Gulai Kambing",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 630,
    name: "Kue Lidah Kucing",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 631,
    name: "Bakso",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 632,
    name: "Kopi Tubruk",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 633,
    name: "Jus Mangga",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 634,
    name: "Jus Timun",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 635,
    name: "Es Kelapa Muda",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 636,
    name: "Serabi",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 637,
    name: "Pisang Goreng",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 638,
    name: "Sayur Lodeh",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 639,
    name: "Jus Apel",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 640,
    name: "Kue Black Forest",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 641,
    name: "Kopi Tubruk",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 642,
    name: "Brownies",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 643,
    name: "Opor Ayam",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 644,
    name: "Bika Ambon",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 645,
    name: "Es Campur Durian",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 646,
    name: "Es Campur Durian",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 647,
    name: "Gado-gado",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 648,
    name: "Bebek Goreng",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 649,
    name: "Rawon",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 650,
    name: "Kue Lapis",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 651,
    name: "Onde-onde",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 652,
    name: "Nasi Goreng",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 653,
    name: "Kopi Tubruk",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 654,
    name: "Gudeg",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 655,
    name: "Nasi Padang",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 656,
    name: "Kue Putu",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 657,
    name: "Opor Ayam",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 658,
    name: "Sop Buntut",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 659,
    name: "Nasi Kuning",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 660,
    name: "Kolak Pisang",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 661,
    name: "Ayam Goreng",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 662,
    name: "Wedang Ronde",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 663,
    name: "Martabak",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 664,
    name: "Rawon",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 665,
    name: "Jus Alpukat",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 666,
    name: "Es Cincau",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 667,
    name: "Jus Alpukat",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 668,
    name: "Martabak Manis",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 669,
    name: "Cap Cay",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 670,
    name: "Lumpia",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 671,
    name: "Gado-gado",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 672,
    name: "Jus Nanas",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 673,
    name: "Es Teler",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 674,
    name: "Ketoprak",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 675,
    name: "Es Cendol Durian",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 676,
    name: "Sate Ayam",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 677,
    name: "Soto Betawi",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 678,
    name: "Jus Seledri",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 679,
    name: "Agar-agar",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 680,
    name: "Jus Terong Belanda",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 681,
    name: "Kue Pancong",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 682,
    name: "Jus Jambu",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 683,
    name: "Jus Apel",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 684,
    name: "Puding",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 685,
    name: "Jus Melon",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 686,
    name: "Jus Seledri",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 687,
    name: "Klepon",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 688,
    name: "Jus Semangka",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 689,
    name: "Nasi Kuning",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 690,
    name: "Es Dawet",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 691,
    name: "Sayur Asem",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 692,
    name: "Jus Sawi",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 693,
    name: "Jus Seledri",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 694,
    name: "Batagor",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 695,
    name: "Klepon",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 696,
    name: "Jus Terong Belanda",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 697,
    name: "Es Potong",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 698,
    name: "Sayur Lodeh",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 699,
    name: "Dodol",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 700,
    name: "Muffin",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 701,
    name: "Bajigur",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 702,
    name: "Nasi Padang",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 703,
    name: "Kue Sagu Keju",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 704,
    name: "Muffin",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 705,
    name: "Es Cendol Durian",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 706,
    name: "Bandrek",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 707,
    name: "Bubur Ayam",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 708,
    name: "Wedang Ronde",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 709,
    name: "Sate Ayam",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 710,
    name: "Jus Brokoli",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 711,
    name: "Jus Seledri",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 712,
    name: "Jus Terong Belanda",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 713,
    name: "Gado-gado",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 714,
    name: "Es Potong",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 715,
    name: "Nasi Goreng",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 716,
    name: "Kolak Pisang",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 717,
    name: "Kue Lapis",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 718,
    name: "Jus Jambu Biji",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 719,
    name: "Es Doger",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 720,
    name: "Donat",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 721,
    name: "Kue Sagu Keju",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 722,
    name: "Jus Bayam",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 723,
    name: "Kue Cubit",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 724,
    name: "Es Campur Durian",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 725,
    name: "Es Teler",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 726,
    name: "Es Selendang Mayang",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 727,
    name: "Kue Black Forest",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 728,
    name: "Gado-gado",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 729,
    name: "Es Dawet",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 730,
    name: "Bika Ambon",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 731,
    name: "Kue Sagu Keju",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 732,
    name: "Jus Jeruk",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 733,
    name: "Siomay",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 734,
    name: "Kue Lapis",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 735,
    name: "Nasi Kuning",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 736,
    name: "Sayur Asem",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 737,
    name: "Es Campur Durian",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 738,
    name: "Nasi Goreng",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 739,
    name: "Kue Cubit",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 740,
    name: "Cupcake",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 741,
    name: "Teh Tarik",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 742,
    name: "Jus Sawi",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 743,
    name: "Es Teler",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 744,
    name: "Ayam Goreng",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 745,
    name: "Wajik",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 746,
    name: "Es Cincau",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 747,
    name: "Kue Pukis",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 748,
    name: "Jus Wortel",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 749,
    name: "Bika Ambon",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 750,
    name: "Kue Kastengel",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 751,
    name: "Bakso",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 752,
    name: "Tiramisu",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 753,
    name: "Jus Sirsak",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 754,
    name: "Serabi",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 755,
    name: "Jus Melon",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 756,
    name: "Gulai Kambing",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 757,
    name: "Martabak",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 758,
    name: "Donat",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 759,
    name: "Cap Cay",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 760,
    name: "Donat",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 761,
    name: "Jus Wortel",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 762,
    name: "Jus Brokoli",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 763,
    name: "Es Dawet",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 764,
    name: "Jus Jambu",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 765,
    name: "Rawon",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 766,
    name: "Ayam Goreng",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 767,
    name: "Sop Buntut",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 768,
    name: "Es Dawet",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 769,
    name: "Bandrek",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 770,
    name: "Wajik",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 771,
    name: "Bika Ambon",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 772,
    name: "Es Doger",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 773,
    name: "Jus Tomat",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 774,
    name: "Jus Nanas",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 775,
    name: "Es Teler",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 776,
    name: "Gudeg",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 777,
    name: "Kue Cubit",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 778,
    name: "Cap Cay",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 779,
    name: "Es Dawet",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 780,
    name: "Jus Semangka",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 781,
    name: "Kue Cubit",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 782,
    name: "Brownies",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 783,
    name: "Gado-gado",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 784,
    name: "Gulai Kambing",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 785,
    name: "Es Doger",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 786,
    name: "Brownies",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 787,
    name: "Ayam Bakar",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 788,
    name: "Onde-onde",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 789,
    name: "Batagor",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 790,
    name: "Nasi Padang",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 791,
    name: "Jus Terong Belanda",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 792,
    name: "Cenil",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 793,
    name: "Cap Cay",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 794,
    name: "Kue Cubit",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 795,
    name: "Tiramisu",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 796,
    name: "Tiramisu",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 797,
    name: "Jus Nanas",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 798,
    name: "Jus Tomat",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 799,
    name: "Jus Sirsak",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 800,
    name: "Agar-agar",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 801,
    name: "Jus Belimbing",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 802,
    name: "Es Campur",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 803,
    name: "Es Kelapa Muda",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 804,
    name: "Es Krim",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 805,
    name: "Kue Tart",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 806,
    name: "Tiramisu",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 807,
    name: "Sayur Lodeh",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 808,
    name: "Pisang Goreng",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 809,
    name: "Es Selendang Mayang",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 810,
    name: "Kue Tart",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 811,
    name: "Es Cendol Durian",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 812,
    name: "Gudeg",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 813,
    name: "Cupcake",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 814,
    name: "Kue Pukis",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 815,
    name: "Jus Bayam",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 816,
    name: "Jus Wortel",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 817,
    name: "Kue Kering Wijen",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 818,
    name: "Rawon",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 819,
    name: "Opor Ayam",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 820,
    name: "Batagor",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 821,
    name: "Jus Timun",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 822,
    name: "Pisang Goreng",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 823,
    name: "Kue Nastar",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 824,
    name: "Soto Betawi",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 825,
    name: "Pempek",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 826,
    name: "Bika Ambon",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 827,
    name: "Teh Tarik",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 828,
    name: "Kue Lapis",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 829,
    name: "Nasi Goreng",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 830,
    name: "Jus Jambu",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 831,
    name: "Dodol",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 832,
    name: "Kue Kering Wijen",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 833,
    name: "Es Teler Durian",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 834,
    name: "Nasi Kuning",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 835,
    name: "Kue Lumpur",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 836,
    name: "Rujak Cingur",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 837,
    name: "Donat",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 838,
    name: "Es Krim",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 839,
    name: "Kue Kering Kacang",
    description:
      "Jangan Takut Gagal: Kegagalan adalah bagian dari proses pembelajaran. Jangan takut gagal, karena dari kegagalanlah kita belajar dan tumbuh. Anggaplah setiap kegagalan sebagai kesempatan untuk menjadi lebih baik."
  },
  {
    id: 840,
    name: "Bakso",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 841,
    name: "Es Puter",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 842,
    name: "Pecel Lele",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 843,
    name: "Kue Black Forest",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 844,
    name: "Kopi Tubruk",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 845,
    name: "Sop Buntut",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 846,
    name: "Kue Kering Coklat",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 847,
    name: "Kue Kastengel",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 848,
    name: "Jus Bayam",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 849,
    name: "Bubur Ayam",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 850,
    name: "Kue Lapis",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 851,
    name: "Jus Terong Belanda",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 852,
    name: "Es Krim",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 853,
    name: "Gudeg",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 854,
    name: "Onde-onde",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 855,
    name: "Es Campur Durian",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 856,
    name: "Bika Ambon",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 857,
    name: "Sop Buntut",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 858,
    name: "Gado-gado",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 859,
    name: "Jus Seledri",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 860,
    name: "Jus Sawi",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 861,
    name: "Agar-agar",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 862,
    name: "Soto Betawi",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 863,
    name: "Es Dawet",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 864,
    name: "Es Campur",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 865,
    name: "Kolak Pisang",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 866,
    name: "Sayur Asem",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 867,
    name: "Rawon",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 868,
    name: "Kue Cubit",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 869,
    name: "Martabak Manis",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 870,
    name: "Jus Melon",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 871,
    name: "Mie Ayam",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 872,
    name: "Kue Semprit",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 873,
    name: "Batagor",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 874,
    name: "Jus Jambu Biji",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 875,
    name: "Opor Ayam",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 876,
    name: "Jus Semangka",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 877,
    name: "Jus Seledri",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 878,
    name: "Es Cincau",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 879,
    name: "Bebek Goreng",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 880,
    name: "Kue Pancong",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 881,
    name: "Tahu Telur",
    description:
      "Berani Mengambil Risiko: Terkadang, untuk mencapai sesuatu yang besar, kita perlu mengambil risiko. Jangan biarkan rasa takut menghentikanmu. Pertimbangkan risiko dengan matang, tetapi jangan biarkan rasa takut melumpuhkanmu. Ingatlah, tidak ada keberhasilan tanpa risiko."
  },
  {
    id: 882,
    name: "Sop Buntut",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 883,
    name: "Kue Lapis",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 884,
    name: "Jus Semangka",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 885,
    name: "Kopi Tubruk",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 886,
    name: "Wedang Ronde",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 887,
    name: "Rendang",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 888,
    name: "Kue Lumpur",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 889,
    name: "Martabak",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 890,
    name: "Rujak Cingur",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 891,
    name: "Soto Betawi",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 892,
    name: "Martabak Manis",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 893,
    name: "Agar-agar",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 894,
    name: "Brownies",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 895,
    name: "Pecel Lele",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 896,
    name: "Onde-onde",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 897,
    name: "Donat",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 898,
    name: "Kue Nastar",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 899,
    name: "Rawon",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 900,
    name: "Ayam Bakar",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 901,
    name: "Jus Apel",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 902,
    name: "Kue Nastar",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 903,
    name: "Jus Melon",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 904,
    name: "Bebek Goreng",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 905,
    name: "Batagor",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 906,
    name: "Sayur Asem",
    description:
      "Jangan Pernah Berhenti Belajar: Pembelajaran adalah proses seumur hidup. Jangan pernah berhenti mencari ilmu dan mengembangkan diri. Baca buku, ikuti kursus, atau belajar dari pengalaman orang lain. Pengetahuan adalah kekuatan yang tak ternilai harganya."
  },
  {
    id: 907,
    name: "Bika Ambon",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 908,
    name: "Jus Alpukat",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 909,
    name: "Kue Kering Wijen",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 910,
    name: "Kue Putu",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 911,
    name: "Sop Buntut",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 912,
    name: "Wajik",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 913,
    name: "Jus Jeruk",
    description:
      "Hargai Perbedaan: Dunia ini indah karena keragamannya. Setiap orang unik dan memiliki kelebihan dan kekurangan masing-masing. Hargai perbedaan tersebut, belajarlah dari orang lain, dan jangan pernah membandingkan dirimu dengan orang lain."
  },
  {
    id: 914,
    name: "Jus Belimbing",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 915,
    name: "Kue Bangkit",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 916,
    name: "Rawon",
    description:
      "Carilah Mentor: Seorang mentor dapat memberikan bimbingan, dukungan, dan inspirasi dalam perjalanan hidupmu. Carilah seseorang yang kamu kagumi dan hormati, dan mintalah mereka untuk menjadi mentor."
  },
  {
    id: 917,
    name: "Sayur Asem",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 918,
    name: "Muffin",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 919,
    name: "Kue Kering Coklat",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 920,
    name: "Es Dawet",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 921,
    name: "Es Cincau",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 922,
    name: "Kue Lumpur",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 923,
    name: "Onde-onde",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 924,
    name: "Cendol",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 925,
    name: "Ayam Goreng",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 926,
    name: "Cap Cay",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 927,
    name: "Es Doger",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 928,
    name: "Jus Terong Belanda",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 929,
    name: "Jus Sawi",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 930,
    name: "Es Campur Durian",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 931,
    name: "Ayam Goreng",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 932,
    name: "Kue Kering Coklat",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 933,
    name: "Es Selendang Mayang",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 934,
    name: "Es Kelapa Muda",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 935,
    name: "Kue Kering Coklat",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 936,
    name: "Lumpia",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 937,
    name: "Sop Buntut",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 938,
    name: "Onde-onde",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 939,
    name: "Jus Jeruk",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 940,
    name: "Bika Ambon",
    description:
      "Selalu Bersyukur: Rasa syukur adalah kunci kebahagiaan. Setiap hari, luangkan waktu untuk merenungkan hal-hal yang patut kamu syukuri. Bersyukurlah atas kesehatanmu, keluargamu, teman-temanmu, dan segala berkat yang telah kamu terima."
  },
  {
    id: 941,
    name: "Sop Buntut",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 942,
    name: "Martabak Manis",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 943,
    name: "Cap Cay",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 944,
    name: "Nasi Goreng",
    description:
      "Jangan Menunda-nunda: Penundaan adalah pencuri waktu. Jika kamu memiliki impian atau tujuan, jangan tunda-tunda untuk mewujudkannya. Mulailah dari langkah kecil, dan lakukanlah secara konsisten. Seiring waktu, langkah-langkah kecil tersebut akan membawa hasil yang besar."
  },
  {
    id: 945,
    name: "Ikan Bakar",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 946,
    name: "Kue Kering Coklat",
    description:
      'Berani Mengatakan Tidak: Tidak semua permintaan atau tawaran harus kamu terima. Belajarlah untuk mengatakan ""tidak"" dengan tegas dan sopan ketika kamu merasa sesuatu tidak sesuai dengan nilai-nilai atau tujuanmu.'
  },
  {
    id: 947,
    name: "Kue Kering Wijen",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 948,
    name: "Donat",
    description:
      "Syukuri Setiap Momen: Hidup ini adalah anugerah yang berharga. Syukuri setiap momen, baik besar maupun kecil. Hargai hal-hal sederhana dalam hidup, seperti kesehatan, keluarga, teman, dan kesempatan untuk belajar dan tumbuh."
  },
  {
    id: 949,
    name: "Jus Timun",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 950,
    name: "Jus Nanas",
    description:
      "Jadilah Solusi: Jangan hanya mengeluh tentang masalah, jadilah bagian dari solusi. Carilah cara untuk berkontribusi positif dalam lingkunganmu, komunitasmu, dan duniamu. Sekecil apa pun kontribusimu, itu akan memberikan dampak yang berarti."
  },
  {
    id: 951,
    name: "Jus Jambu",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 952,
    name: "Es Puter",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 953,
    name: "Kopi Tubruk",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 954,
    name: "Es Teler",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 955,
    name: "Nasi Kuning",
    description:
      "Berani Berubah: Perubahan adalah bagian dari kehidupan. Jangan takut untuk berubah dan beradaptasi dengan situasi baru. Terkadang, perubahan adalah satu-satunya cara untuk tumbuh dan berkembang."
  },
  {
    id: 956,
    name: "Es Campur",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 957,
    name: "Dodol",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 958,
    name: "Kue Lidah Kucing",
    description:
      "Jadilah Diri Sendiri: Kamu adalah individu yang unik dan berharga. Jangan pernah mencoba menjadi orang lain. Jadilah diri sendiri, dengan segala kelebihan dan kekuranganmu. Cintai dirimu apa adanya dan jangan biarkan orang lain mendefinisikan siapa kamu."
  },
  {
    id: 959,
    name: "Teh Tarik",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 960,
    name: "Kue Kastengel",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 961,
    name: "Jus Nanas",
    description:
      "Berani Keluar dari Zona Nyaman: Zona nyaman adalah tempat yang aman dan nyaman, tetapi juga tempat di mana pertumbuhan terhenti. Jangan takut untuk keluar dari zona nyamanmu. Jelajahi hal-hal baru, coba pengalaman baru, dan tantang dirimu untuk tumbuh dan berkembang."
  },
  {
    id: 962,
    name: "Kue Black Forest",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 963,
    name: "Kue Pancong",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 964,
    name: "Ayam Bakar",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 965,
    name: "Jus Jeruk",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 966,
    name: "Kue Kastengel",
    description:
      "Kejar Impian dengan Semangat: Jangan pernah menyerah pada impianmu. Impian adalah api yang membakar semangat dan memberikanmu tujuan hidup. Kejarlah impianmu dengan penuh semangat, kegigihan, dan keyakinan. Ingatlah, tidak ada impian yang terlalu besar jika kamu berani memperjuangkannya."
  },
  {
    id: 967,
    name: "Es Potong",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 968,
    name: "Sop Buntut",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 969,
    name: "Agar-agar",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 970,
    name: "Jus Kubis",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 971,
    name: "Es Teler Durian",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 972,
    name: "Bajigur",
    description:
      "Jadilah Dirimu yang Terbaik: Setiap hari adalah kesempatan baru untuk menjadi versi terbaik dari dirimu. Jangan puas dengan apa yang telah kamu capai. Teruslah berusaha untuk meningkatkan diri, baik secara fisik, mental, maupun spiritual."
  },
  {
    id: 973,
    name: "Muffin",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 974,
    name: "Gudeg",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  },
  {
    id: 975,
    name: "Gudeg",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 976,
    name: "Bakso",
    description:
      "Jaga Keseimbangan Hidup: Jangan biarkan satu aspek kehidupanmu mendominasi yang lain. Jaga keseimbangan antara pekerjaan, keluarga, teman, kesehatan, dan hobi. Luangkan waktu untuk melakukan hal-hal yang kamu nikmati dan mengisi ulang energimu."
  },
  {
    id: 977,
    name: "Nasi Goreng",
    description:
      "Tetap Rendah Hati: Kesuksesan tidak boleh membuatmu sombong. Tetaplah rendah hati dan ingatlah bahwa kamu tidak akan mencapai apa pun tanpa bantuan dan dukungan dari orang lain. Hargai setiap kontribusi dan selalu berterima kasih."
  },
  {
    id: 978,
    name: "Kue Putu",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 979,
    name: "Es Campur",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 980,
    name: "Es Campur Durian",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 981,
    name: "Jus Tomat",
    description:
      "Jaga Integritas: Integritas adalah pondasi kepercayaan dan respek. Selalu jujur, bertanggung jawab, dan memegang teguh prinsip-prinsip moralmu. Jangan pernah mengorbankan integritasmu demi keuntungan sesaat."
  },
  {
    id: 982,
    name: "Nasi Kuning",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 983,
    name: "Martabak Manis",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 984,
    name: "Kue Kastengel",
    description:
      "Berani Mengambil Keputusan: Hidup ini penuh dengan pilihan. Jangan takut untuk mengambil keputusan, meskipun sulit. Pertimbangkan pilihanmu dengan matang, tetapi jangan biarkan keraguan melumpuhkanmu."
  },
  {
    id: 985,
    name: "Puding",
    description:
      "Berani Mengungkapkan Pendapat: Jangan takut untuk mengungkapkan pendapatmu, meskipun berbeda dengan orang lain. Sampaikan pendapatmu dengan cara yang sopan dan logis. Perbedaan pendapat adalah sumber pembelajaran dan pertumbuhan."
  },
  {
    id: 986,
    name: "Kue Putri Salju",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 987,
    name: "Jus Melon",
    description:
      "Belajar Memaafkan: Memaafkan adalah hadiah yang kamu berikan untuk dirimu sendiri. Memaafkan orang lain yang telah menyakitimu tidak berarti membenarkan kesalahan mereka, tetapi membebaskan dirimu dari beban amarah dan dendam. Memaafkan adalah langkah awal menuju penyembuhan dan kedamaian batin."
  },
  {
    id: 988,
    name: "Agar-agar",
    description:
      "Cintai Prosesnya: Jangan hanya fokus pada tujuan akhir, tetapi nikmatilah prosesnya. Setiap langkah yang kamu ambil, setiap tantangan yang kamu hadapi, dan setiap pelajaran yang kamu pelajari adalah bagian dari perjalanan hidupmu yang berharga."
  },
  {
    id: 989,
    name: "Muffin",
    description:
      "Jadilah Teladan: Jadilah contoh yang baik bagi orang lain dengan tindakan dan perilakumu. Tunjukkan kepada mereka nilai-nilai positif yang kamu anut, seperti kejujuran, kerja keras, dan kepedulian terhadap sesama."
  },
  {
    id: 990,
    name: "Es Krim",
    description:
      "Jalin Hubungan yang Positif: Hubungan yang positif dengan orang lain adalah sumber kebahagiaan dan dukungan. Kelilingi dirimu dengan orang-orang yang positif, suportif, dan menginspirasi. Hindari orang-orang yang negatif dan merendahkanmu."
  },
  {
    id: 991,
    name: "Martabak",
    description:
      "Jangan Takut Bermimpi Besar: Jangan pernah membatasi dirimu dengan mimpi-mimpi kecil. Beranikan diri untuk bermimpi besar, karena mimpi-mimpi besarlah yang akan mendorongmu untuk mencapai hal-hal luar biasa dalam hidup."
  },
  {
    id: 992,
    name: "Gado-gado",
    description:
      "Jadilah Pendengar yang Baik: Mendengarkan adalah keterampilan yang berharga. Dengarkanlah orang lain dengan penuh perhatian dan empati. Berikan mereka ruang untuk mengungkapkan perasaan dan pikiran mereka tanpa penghakiman."
  },
  {
    id: 993,
    name: "Jus Jambu Biji",
    description:
      "Jaga Komitmen: Ketika kamu membuat komitmen, berusahalah untuk menepatinya. Komitmen adalah tanda integritas dan kepercayaan. Jangan mudah menyerah atau mengingkari janji yang telah kamu buat."
  },
  {
    id: 994,
    name: "Klepon",
    description:
      "Berbagi Kebaikan: Berbagi kebaikan dengan orang lain adalah cara terbaik untuk menciptakan kebahagiaan bagi diri sendiri dan orang lain. Lakukanlah tindakan kebaikan setiap hari, sekecil apa pun itu. Kebaikan yang kamu berikan akan kembali kepadamu dalam berbagai bentuk."
  },
  {
    id: 995,
    name: "Es Dawet",
    description:
      "Hargai Waktu: Waktu adalah sumber daya yang paling berharga. Gunakanlah waktu dengan bijak. Jangan"
  },
  {
    id: 996,
    name: "Jus Terong Belanda",
    description:
      "Belajar dari Kesalahan: Setiap orang pasti pernah membuat kesalahan. Jangan biarkan kesalahan masa lalu menghantuimu. Belajarlah dari kesalahanmu, perbaiki diri, dan jadikan pengalaman tersebut sebagai pelajaran berharga untuk masa depan."
  },
  {
    id: 997,
    name: "Kue Lumpur",
    description:
      "Bangkit dari Kegagalan: Kegagalan adalah bagian tak terpisahkan dari perjalanan hidup. Jangan biarkan kegagalan menghancurkan semangatmu. Anggaplah kegagalan sebagai pelajaran berharga dan batu loncatan menuju kesuksesan. Bangkitlah dengan lebih kuat, lebih bijaksana, dan lebih bertekad untuk meraih impianmu."
  },
  {
    id: 998,
    name: "Es Teler Durian",
    description:
      "Jaga Kesehatan Fisik dan Mental: Kesehatan adalah aset paling berharga yang kamu miliki. Jaga kesehatan fisikmu dengan berolahraga secara teratur, makan makanan bergizi, dan istirahat yang cukup. Jaga kesehatan mentalmu dengan mengelola stres, berlatih mindfulness, dan mencari bantuan profesional jika diperlukan."
  },
  {
    id: 999,
    name: "Bakso",
    description:
      "Hadapi Tantangan dengan Keberanian: Hidup ini penuh dengan tantangan dan rintangan. Jangan biarkan tantangan menghentikan langkahmu. Hadapilah setiap tantangan dengan keberanian, keyakinan, dan kepala tegak. Ingatlah, kamu lebih kuat dari yang kamu kira."
  },
  {
    id: 1000,
    name: "Kue Putri Salju",
    description:
      "Fokus pada Hal yang Dapat Kamu Kendalikan: Hidup ini penuh dengan ketidakpastian. Ada banyak hal yang berada di luar kendali kita. Daripada terjebak dalam kekhawatiran tentang hal-hal yang tidak bisa kamu ubah, fokuslah pada hal-hal yang dapat kamu kendalikan, seperti sikapmu, usahamu, dan pilihanmu."
  }
];

export default khodamArray;

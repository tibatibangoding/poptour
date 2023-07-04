import type { NextApiRequest, NextApiResponse } from 'next';

import { TourPackages } from '../../interfaces/tourPackages';

type Data = {
  tour?: TourPackages[];
  message?: string;
};

export default function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  const { method } = req;

  if (method === 'GET') {
    res.status(200).json({
      tour: [
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/bromo.jpg',
          title: 'Paket Wisata Bromo Open Trip',
          slug: 'paket-wisata-bromo-1-day-open',
          tags: [{ tag: 'Populer' }, { tag: 'Gunung Bromo' }],
          address: 'Malang, Jawa Timur',
          desc: 'Gunung Bromo adalah gunung berapi aktif yang terletak di Taman Nasional Bromo Tengger Semeru, Jawa Timur, Indonesia. Dikenal karena keindahan lanskapnya yang menakjubkan, Gunung Bromo menawarkan pemandangan yang memukau dengan kawahnya yang mengeluarkan asap putih tebal. Perjalanan ke Gunung Bromo akan membawa Anda melintasi padang pasir, gunung berapi kecil, dan bukit-bukit eksotis. Puncak bukit Penanjakan adalah tempat yang populer untuk menyaksikan matahari terbit yang spektakuler, sementara kawah Bromo memungkinkan Anda untuk merasakan keunikan keberadaan gunung berapi yang masih aktif. Dalam tur kami, kami memastikan Anda menikmati pengalaman tak terlupakan, dengan panduan berpengetahuan luas yang akan memandu Anda sepanjang perjalanan.',
          facilities: [
            { text: 'Tiket masuk' },
            { text: 'Transportasi antar penjemputan' },
            { text: 'Jeep Bromo' },
            { text: 'BBM' },
            { text: 'Driver' },
            { text: 'P3K' },
          ],
          destination: [
            { text: 'Sunrise Penanjakan' },
            { text: 'Bukit Widodaren' },
            { text: 'Kawah Bromo' },
            { text: 'Lautan Pasir' },
            { text: 'Savana Bukit Teletubbies' },
          ],
          rundown: [
            {
              time: '00.30',
              text: 'Penjemputan Area Kota Malang',
              desc: 'Di tengah malam yang sunyi, tim kami akan menjemput Anda di area Kota Malang untuk memulai perjalanan menuju Gunung Bromo. Dalam perjalanan menuju destinasi, Anda dapat bersantai dan menikmati pemandangan malam yang indah di sepanjang jalan. Pemandu kami yang ramah akan menjelaskan rencana perjalanan dan memberikan informasi tentang area yang akan Anda kunjungi.',
            },
            {
              time: '02.00',
              text: 'Prepare Basecamp',
              desc: 'Setelah tiba di basecamp, Anda akan merasakan kegembiraan dan antisipasi sebelum pendakian. Tim kami akan membantu Anda menyiapkan segala perlengkapan yang diperlukan, seperti masker, sarung tangan, dan peralatan pendakian lainnya. Jangan lupa untuk menyediakan bekal dan air minum yang cukup untuk menjaga energi Anda selama perjalanan. Di sini, Anda juga dapat beristirahat sejenak sebelum memulai pendakian menuju puncak Penanjakan.',
            },
            {
              time: '04.00',
              text: 'Sunrise Penanjakan',
              desc: ' Saat fajar mulai menyingsing, perjalanan Anda akan melanjutkan ke puncak Penanjakan. Di sini, Anda akan disuguhkan pemandangan yang menakjubkan saat matahari terbit, mengubah langit menjadi palet warna yang indah. Nuansa oranye, merah, dan kuning yang memancar dari cakrawala menciptakan pemandangan yang memukau dan mempesona. Jangan lupa mengabadikan momen ini dengan kamera Anda untuk kenangan yang tak terlupakan.',
            },
            {
              time: '06.00',
              text: 'Explore Bromo',
              desc: 'Setelah menikmati keajaiban matahari terbit, perjalanan Anda akan dilanjutkan menuju kawah Gunung Bromo. Melintasi padang pasir yang luas, Anda akan merasakan sensasi petualangan sejati. Jelajahi keunikan alam Gunung Bromo yang masih aktif dengan mendekati kawah yang mengeluarkan asap putih tebal. Anda dapat memilih untuk berjalan kaki atau menyewa kuda untuk membantu Anda menavigasi medan yang menarik ini. Jangan lewatkan kesempatan untuk merasakan getaran dan kehangatan dari aktivitas geologi yang terjadi di sekitar Anda.',
            },
            {
              time: '10.30',
              text: 'Basecamp',
              desc: 'Setelah puas menjelajahi Gunung Bromo, perjalanan ini akan membawa Anda kembali ke basecamp. Di sini, Anda dapat meregangkan kaki, beristirahat sejenak, dan membagikan cerita-cerita seru dengan sesama peserta tur. Nikmati hidangan ringan yang telah disiapkan untuk menyegarkan tubuh Anda setelah petualangan yang mengasyikkan. Tim kami akan siap membantu Anda dalam keperluan apa pun dan menjawab pertanyaan yang Anda miliki.',
            },
          ],
          day: 1,
          price: 250000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/bromo.jpg',
          title: 'Paket Wisata Bromo Private Trip',
          slug: 'paket-wisata-bromo-1-day-private',
          tags: [{ tag: 'Populer' }, { tag: 'Gunung Bromo' }],
          address: 'Malang, Jawa Timur',
          desc: 'Gunung Bromo adalah gunung berapi aktif yang terletak di Taman Nasional Bromo Tengger Semeru, Jawa Timur, Indonesia. Dikenal karena keindahan lanskapnya yang menakjubkan, Gunung Bromo menawarkan pemandangan yang memukau dengan kawahnya yang mengeluarkan asap putih tebal. Perjalanan ke Gunung Bromo akan membawa Anda melintasi padang pasir, gunung berapi kecil, dan bukit-bukit eksotis. Puncak bukit Penanjakan adalah tempat yang populer untuk menyaksikan matahari terbit yang spektakuler, sementara kawah Bromo memungkinkan Anda untuk merasakan keunikan keberadaan gunung berapi yang masih aktif. Dalam tur kami, kami memastikan Anda menikmati pengalaman tak terlupakan, dengan panduan berpengetahuan luas yang akan memandu Anda sepanjang perjalanan.',
          facilities: [
            { text: 'Tiket masuk' },
            { text: 'Transportasi antar penjemputan' },
            { text: 'Jeep Bromo' },
            { text: 'BBM' },
            { text: 'Driver' },
            { text: 'P3K' },
          ],
          destination: [
            { text: 'Sunrise Penanjakan' },
            { text: 'Bukit Widodaren' },
            { text: 'Kawah Bromo' },
            { text: 'Lautan Pasir' },
            { text: 'Savana Bukit Teletubbies' },
          ],
          rundown: [
            {
              time: '00.30',
              text: 'Penjemputan Area Kota Malang',
              desc: 'Di tengah malam yang sunyi, tim kami akan menjemput Anda di area Kota Malang untuk memulai perjalanan menuju Gunung Bromo. Dalam perjalanan menuju destinasi, Anda dapat bersantai dan menikmati pemandangan malam yang indah di sepanjang jalan. Pemandu kami yang ramah akan menjelaskan rencana perjalanan dan memberikan informasi tentang area yang akan Anda kunjungi.',
            },
            {
              time: '02.00',
              text: 'Prepare Basecamp',
              desc: 'Setelah tiba di basecamp, Anda akan merasakan kegembiraan dan antisipasi sebelum pendakian. Tim kami akan membantu Anda menyiapkan segala perlengkapan yang diperlukan, seperti masker, sarung tangan, dan peralatan pendakian lainnya. Jangan lupa untuk menyediakan bekal dan air minum yang cukup untuk menjaga energi Anda selama perjalanan. Di sini, Anda juga dapat beristirahat sejenak sebelum memulai pendakian menuju puncak Penanjakan.',
            },
            {
              time: '04.00',
              text: 'Sunrise Penanjakan',
              desc: ' Saat fajar mulai menyingsing, perjalanan Anda akan melanjutkan ke puncak Penanjakan. Di sini, Anda akan disuguhkan pemandangan yang menakjubkan saat matahari terbit, mengubah langit menjadi palet warna yang indah. Nuansa oranye, merah, dan kuning yang memancar dari cakrawala menciptakan pemandangan yang memukau dan mempesona. Jangan lupa mengabadikan momen ini dengan kamera Anda untuk kenangan yang tak terlupakan.',
            },
            {
              time: '06.00',
              text: 'Explore Bromo',
              desc: 'Setelah menikmati keajaiban matahari terbit, perjalanan Anda akan dilanjutkan menuju kawah Gunung Bromo. Melintasi padang pasir yang luas, Anda akan merasakan sensasi petualangan sejati. Jelajahi keunikan alam Gunung Bromo yang masih aktif dengan mendekati kawah yang mengeluarkan asap putih tebal. Anda dapat memilih untuk berjalan kaki atau menyewa kuda untuk membantu Anda menavigasi medan yang menarik ini. Jangan lewatkan kesempatan untuk merasakan getaran dan kehangatan dari aktivitas geologi yang terjadi di sekitar Anda.',
            },
            {
              time: '10.30',
              text: 'Basecamp',
              desc: 'Setelah puas menjelajahi Gunung Bromo, perjalanan ini akan membawa Anda kembali ke basecamp. Di sini, Anda dapat meregangkan kaki, beristirahat sejenak, dan membagikan cerita-cerita seru dengan sesama peserta tur. Nikmati hidangan ringan yang telah disiapkan untuk menyegarkan tubuh Anda setelah petualangan yang mengasyikkan. Tim kami akan siap membantu Anda dalam keperluan apa pun dan menjawab pertanyaan yang Anda miliki.',
            },
          ],
          day: 1,
          price: 1500000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/tiga-warna.jpg',
          title: 'Paket Wisata Pantai 3 Warna Open Trip',
          slug: 'paket-wisata-pantai-3-warna-1-day-open',
          tags: [{ tag: 'Populer' }, { tag: 'Pantai' }],
          address: 'Malang, Jawa Timur',
          desc: 'Nikmati pesona indah Pantai 3 Warna dengan paket tur travel kami. Dalam perjalanan ini, Anda akan menikmati keindahan pantai dengan air yang berubah warna menjadi biru, hijau, dan putih. Anda akan dipandu oleh pemandu wisata berpengetahuan, memiliki waktu senggang untuk beraktivitas di pantai, dan disediakan makanan ringan. Bergabunglah dengan paket tour ini untuk pengalaman liburan yang tak terlupakan di destinasi pantai yang menakjubkan.',
          facilities: [
            { text: 'Tiket masuk' },
            { text: 'Transportasi antar penjemputan' },
            { text: 'BBM' },
            { text: 'Driver' },
            { text: 'P3K' },
          ],
          destination: [
            { text: 'Pantai 3 Warna' },
            {
              text: 'Pantai dengan air berwarna biru, hijau, dan putih (tergantung kondisi air)',
            },
          ],
          rundown: [
            {
              time: '13.30',
              text: 'Penjemputan Area Kota Malang',
              desc: 'Penjemputan di lokasi yang telah disepakati. Tim kami akan menjemput Anda dengan ramah dan membawa Anda menuju perjalanan yang menakjubkan ke Pantai 3 Warna.',
            },
            {
              time: '14.00',
              text: 'Perjalanan Menuju Pantai 3 Warna',
              desc: 'Anda akan menikmati perjalanan yang nyaman dan pemandangan indah sepanjang jalan menuju pantai. Tim kami akan memberikan informasi tentang destinasi, sejarah, dan keunikan Pantai 3 Warna selama perjalanan.',
            },
            {
              time: '16.00',
              text: 'Tiba Di Pantai 3 Warna',
              desc: 'Setibanya di pantai, Anda akan disambut oleh pemandangan yang menakjubkan. Air pantai yang berwarna biru, hijau, dan putih akan membuat Anda terpesona. Anda dapat menikmati suasana pantai yang tenang, bersantai di pasir putih, atau berjalan-jalan di sepanjang pantai untuk menikmati pemandangan alam yang indah',
            },
            {
              time: '16.15',
              text: 'Aktivitas Di Pantai 3 Warna',
              desc: 'Anda akan memiliki waktu luang untuk berenang di air yang jernih, snorkeling untuk menjelajahi kehidupan bawah laut yang kaya, atau hanya bersantai di tepi pantai sambil menikmati pemandangan yang menakjubkan. Anda juga dapat mencoba berbagai olahraga air yang tersedia di pantai, seperti banana boat, jetski, atau kayak (biaya tambahan).',
            },
            {
              time: '20.00',
              text: 'Kembali Ke Lokasi Penjemputan',
              desc: 'Setelah menikmati waktu yang menyenangkan di Pantai 3 Warna, kami akan membawa Anda kembali ke lokasi penjemputan dengan membawa pulang kenangan indah dari liburan Anda.',
            },
          ],
          day: 1,
          price: 8000000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/tiga-warna.jpg',
          title: 'Paket Wisata Pantai 3 Warna Private Trip',
          slug: 'paket-wisata-pantai-3-warna-1-day-private',
          tags: [{ tag: 'Populer' }, { tag: 'Pantai' }],
          address: 'Malang, Jawa Timur',
          desc: 'Nikmati pesona indah Pantai 3 Warna dengan paket tur travel kami. Dalam perjalanan ini, Anda akan menikmati keindahan pantai dengan air yang berubah warna menjadi biru, hijau, dan putih. Anda akan dipandu oleh pemandu wisata berpengetahuan, memiliki waktu senggang untuk beraktivitas di pantai, dan disediakan makanan ringan. Bergabunglah dengan paket tour ini untuk pengalaman liburan yang tak terlupakan di destinasi pantai yang menakjubkan.',
          facilities: [
            { text: 'Tiket masuk' },
            { text: 'Transportasi antar penjemputan' },
            { text: 'BBM' },
            { text: 'Driver' },
            { text: 'P3K' },
          ],
          destination: [
            { text: 'Pantai 3 Warna' },
            {
              text: 'Pantai dengan air berwarna biru, hijau, dan putih (tergantung kondisi air)',
            },
          ],
          rundown: [
            {
              time: '13.30',
              text: 'Penjemputan Area Kota Malang',
              desc: 'Penjemputan di lokasi yang telah disepakati. Tim kami akan menjemput Anda dengan ramah dan membawa Anda menuju perjalanan yang menakjubkan ke Pantai 3 Warna.',
            },
            {
              time: '14.00',
              text: 'Perjalanan Menuju Pantai 3 Warna',
              desc: 'Anda akan menikmati perjalanan yang nyaman dan pemandangan indah sepanjang jalan menuju pantai. Tim kami akan memberikan informasi tentang destinasi, sejarah, dan keunikan Pantai 3 Warna selama perjalanan.',
            },
            {
              time: '16.00',
              text: 'Tiba Di Pantai 3 Warna',
              desc: 'Setibanya di pantai, Anda akan disambut oleh pemandangan yang menakjubkan. Air pantai yang berwarna biru, hijau, dan putih akan membuat Anda terpesona. Anda dapat menikmati suasana pantai yang tenang, bersantai di pasir putih, atau berjalan-jalan di sepanjang pantai untuk menikmati pemandangan alam yang indah',
            },
            {
              time: '16.15',
              text: 'Aktivitas Di Pantai 3 Warna',
              desc: 'Anda akan memiliki waktu luang untuk berenang di air yang jernih, snorkeling untuk menjelajahi kehidupan bawah laut yang kaya, atau hanya bersantai di tepi pantai sambil menikmati pemandangan yang menakjubkan. Anda juga dapat mencoba berbagai olahraga air yang tersedia di pantai, seperti banana boat, jetski, atau kayak (biaya tambahan).',
            },
            {
              time: '20.00',
              text: 'Kembali Ke Lokasi Penjemputan',
              desc: 'Setelah menikmati waktu yang menyenangkan di Pantai 3 Warna, kami akan membawa Anda kembali ke lokasi penjemputan dengan membawa pulang kenangan indah dari liburan Anda.',
            },
          ],
          day: 1,
          price: 8000000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/tumpak-sewu.jpg',
          title: 'Paket Wisata Tumpak Sewu Open Trip',
          slug: 'paket-wisata-tumpak-sewu-1-day-open',
          tags: [{ tag: 'Populer' }, { tag: 'Air Terjun' }],
          address: 'Malang, Jawa Timur',
          desc: 'Nikmati pesona Air Terjun Tumpak Sewu dengan paket tur travel kami. Dapatkan pengalaman memukau di air terjun seribu ini. Kami menyediakan transportasi, pemandu wisata, dan waktu senggang untuk menikmati keindahan alam sekitar. Bergabunglah dengan paket ini untuk petualangan yang tak terlupakan di salah satu air terjun paling spektakuler di Indonesia.',
          facilities: [
            { text: 'Tiket masuk' },
            { text: 'Transportasi antar penjemputan' },
            { text: 'BBM' },
            { text: 'Driver' },
            { text: 'P3K' },
          ],
          destination: [
            { text: 'Air Terjun Tumpak Sewu' },
            { text: 'Kolam alami di sekitar air terjun' },
          ],
          rundown: [
            {
              time: '07.00',
              text: 'Penjemputan Area Kota Malang',
              desc: 'Penjemputan di lokasi yang telah disepakati. Tim kami akan menjemput Anda dengan ramah dan membawa Anda menuju perjalanan yang spektakuler ke Air Terjun Tumpak Sewu.',
            },
            {
              time: '07.30',
              text: 'Perjalanan Menuju Air Terjun Tumpak Sewu',
              desc: 'Anda akan menikmati perjalanan yang menakjubkan melalui pedesaan dan pemandangan alam yang indah. Tim kami akan memberikan informasi tentang air terjun, lingkungan sekitarnya, dan keunikan yang dimiliki Air Terjun Tumpak Sewu.',
            },
            {
              time: '09.30',
              text: 'Tiba Di Air Terjun Tumpak Sewu',
              desc: 'Begitu tiba di air terjun, Anda akan terpesona oleh keindahannya. Air terjun yang tinggi dan lebat mengalir dari ketinggian, membentuk panorama yang memukau. Anda akan merasakan keajaiban alam yang luar biasa saat air jatuh ke kolam bawah dengan suara gemuruh yang menggetarkan hati.',
            },
            {
              time: '09.45',
              text: 'Eksplorasi Dan Fotografi',
              desc: 'Anda akan memiliki waktu luang untuk menjelajahi sekitar air terjun, berjalan di sekitar kolam alami yang terbentuk, dan mengabadikan momen indah dengan kamera Anda. Nikmati keindahan alam yang menakjubkan dan ambil foto yang tak terlupakan di depan Air Terjun Tumpak Sewu.',
            },
            {
              time: '13.00',
              text: 'Kembali Ke Lokasi Penjemputan',
              desc: 'Setelah menikmati waktu yang spektakuler di Air Terjun Tumpak Sewu, kami akan membawa Anda kembali ke lokasi penjemputan dengan membawa pulang kenangan indah dari liburan Anda.',
            },
          ],
          day: 6,
          price: 2000000,
        },
        {
          img_src: 'https://poptour.vercel.app/assets/img/tour/tumpak-sewu.jpg',
          title: 'Paket Wisata Tumpak Sewu Private Trip',
          slug: 'paket-wisata-tumpak-sewu-1-day-private',
          tags: [{ tag: 'Populer' }, { tag: 'Air Terjun' }],
          address: 'Malang, Jawa Timur',
          desc: 'Nikmati pesona Air Terjun Tumpak Sewu dengan paket tur travel kami. Dapatkan pengalaman memukau di air terjun seribu ini. Kami menyediakan transportasi, pemandu wisata, dan waktu senggang untuk menikmati keindahan alam sekitar. Bergabunglah dengan paket ini untuk petualangan yang tak terlupakan di salah satu air terjun paling spektakuler di Indonesia.',
          facilities: [
            { text: 'Tiket masuk' },
            { text: 'Transportasi antar penjemputan' },
            { text: 'BBM' },
            { text: 'Driver' },
            { text: 'P3K' },
          ],
          destination: [
            { text: 'Air Terjun Tumpak Sewu' },
            { text: 'Kolam alami di sekitar air terjun' },
          ],
          rundown: [
            {
              time: '07.00',
              text: 'Penjemputan Area Kota Malang',
              desc: 'Penjemputan di lokasi yang telah disepakati. Tim kami akan menjemput Anda dengan ramah dan membawa Anda menuju perjalanan yang spektakuler ke Air Terjun Tumpak Sewu.',
            },
            {
              time: '07.30',
              text: 'Perjalanan Menuju Air Terjun Tumpak Sewu',
              desc: 'Anda akan menikmati perjalanan yang menakjubkan melalui pedesaan dan pemandangan alam yang indah. Tim kami akan memberikan informasi tentang air terjun, lingkungan sekitarnya, dan keunikan yang dimiliki Air Terjun Tumpak Sewu.',
            },
            {
              time: '09.30',
              text: 'Tiba Di Air Terjun Tumpak Sewu',
              desc: 'Begitu tiba di air terjun, Anda akan terpesona oleh keindahannya. Air terjun yang tinggi dan lebat mengalir dari ketinggian, membentuk panorama yang memukau. Anda akan merasakan keajaiban alam yang luar biasa saat air jatuh ke kolam bawah dengan suara gemuruh yang menggetarkan hati.',
            },
            {
              time: '09.45',
              text: 'Eksplorasi Dan Fotografi',
              desc: 'Anda akan memiliki waktu luang untuk menjelajahi sekitar air terjun, berjalan di sekitar kolam alami yang terbentuk, dan mengabadikan momen indah dengan kamera Anda. Nikmati keindahan alam yang menakjubkan dan ambil foto yang tak terlupakan di depan Air Terjun Tumpak Sewu.',
            },
            {
              time: '13.00',
              text: 'Kembali Ke Lokasi Penjemputan',
              desc: 'Setelah menikmati waktu yang spektakuler di Air Terjun Tumpak Sewu, kami akan membawa Anda kembali ke lokasi penjemputan dengan membawa pulang kenangan indah dari liburan Anda.',
            },
          ],
          day: 6,
          price: 2000000,
        },
      ],
    });
  } else {
    res.status(404).json({
      message: 'Not Found',
    });
  }
}

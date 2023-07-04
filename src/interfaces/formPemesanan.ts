export interface FormPemesananDestinasi {
  fullName: string;
  emailAddress: string;
  noWa: string;
  tglBerangkat: string;
  jumlahPeserta: string;
  paketWisata: string;
  lamaWisata: number;
  notes: string;
}

export interface FormPemesananCustomTrip {
  fullName: string;
  emailAddress: string;
  days: string;
  jumlahPeserta: string;
  noWa: string;
  tglBerangkat: string;
  armada: string;
  paketWisata: string;
  notes: string;
}

export interface FormPemesananRentalMobil {
  fullName: string;
  emailAddress: string;
  tglPemesanan: string;
  tglSelesai: string;
  armada: string | string[];
  notes: string;
}

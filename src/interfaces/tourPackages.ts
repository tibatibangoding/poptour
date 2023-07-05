export interface TourPackages {
  img_src: string;
  title: string;
  slug: string;
  isPopular?: boolean;
  tags?: string[] | any;
  address: string;
  desc?: string;
  facilities?: string[] | any;
  destination?: string[] | any;
  rundown?: string[] | any;
  day: number;
  price: number;
}

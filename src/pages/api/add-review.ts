import { getXataClient } from '@/xata';

const xata = getXataClient();

const handler = async (req: any, res: any) => {
  const { name, review, image, paket_wisata } = req.body;
  const result = await xata.db['reviews'].create({
    name,
    review,
    image,
    paket_wisata,
  });
  res.send({ result });
};
export default handler;

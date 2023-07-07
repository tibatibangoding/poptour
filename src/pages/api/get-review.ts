import { getXataClient } from '@/xata';

const xata = getXataClient();

const handler = async (req: any, res: any) => {
  if (req.method === 'GET') {
    const reviews = await xata.db['reviews'].getMany();
    res.send({ reviews });
  } else {
    res.status(405).send({ message: 'Method Not Allowed' });
  }
};

export default handler;

import Cors from 'cors';
import runMiddleware from '../../utils/api/runMiddleware';

const cors = Cors({
  origin: 'http://localhost:3000',
  methods: ['GET'],
  optionsSuccessStatus: 200,
})

export default async function handler(req, res) {
  await runMiddleware(req, res, cors);

  if (req.method === 'GET' && req.headers.referer === 'http://localhost:3000/admin') {
    res.status(200).json({ name: 'Ronnie', full_name: 'Ronnie Ingram', avatar: '/heehaw.png' });
  } else {
    res.status(403).send({ error: '*** You are not authorized ***' });
  }
};
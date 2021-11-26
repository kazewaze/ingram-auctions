/*
*  This endpoint will contain the
*  editable site content from admin.
*  (Store auction images in github project folder with raw link?)
*  (And use connected GitHub api key to add/remove images.)
*/

export default function handler(req, res) {
  if (req.headers.referer === process.env.LOGIN_REFER_PROD) {
    if (req.method === 'GET') {
      // res.status(200).json({})
    } else if (req.method === 'POST') {
      // res.status(200).json({})
    } else {
      // res.status(404).json({ error: '*** NOT FOUND ***' })
    }
  } else {
    res.status(403).send({ error: '*** YOU ARE NOT AUTHORIZED ***' });
  }
}
const count = 3;

export default function handler(req, res) {
  console.log(count);

  if (req.method === 'POST' && req.headers.referer === process.env.LOGIN_REFER_DEV) {

    const { username, password } = req.body;         // Change to LOGIN_REFER_PROD in production.

    if (username.toLowerCase() === process.env.USERNAME && password === process.env.PASSWORD) {
      res.redirect('/admin');
    } else {
      res.status(403).send({ error: '*** You are not authorized ***' });
    }
  } else {
    res.status(403).send({ error: '*** You are not authorized ***' });
  }
};
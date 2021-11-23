// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res.status(200).json({ name: 'Ronnie', full_name: 'Ronnie Ingram', password: process.env.PASSWORD, avatar: '/heehaw.png' })
}
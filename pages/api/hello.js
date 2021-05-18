export default function handler(req, res) {
    res.status(200).json({ text: 'Hello' })
  }

// Refer to this URL for more details: https://nextjs.org/learn/basics/api-routes/api-routes-details
// This is used to handle form data, to be saved in database, write functions only to store in database  
export default function handler(req, res) {
    const email = req.body.email
    // Then save email to your database, etc...
  }
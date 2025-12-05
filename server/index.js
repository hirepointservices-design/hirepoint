
import express from 'express';
import fs from 'fs';
import path from 'path';
import multer from 'multer';

const app = express();
const upload = multer();
const PORT = process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const LEADS_FILE = path.join(process.cwd(), 'server', 'leads.json');

function saveLead(lead){
  let arr = [];
  try {
    if (fs.existsSync(LEADS_FILE)) arr = JSON.parse(fs.readFileSync(LEADS_FILE, 'utf8') || '[]');
  } catch(e){ arr = []; }
  arr.push(Object.assign({id: Date.now()}, lead));
  fs.writeFileSync(LEADS_FILE, JSON.stringify(arr, null, 2));
}

app.post('/api/lead', upload.none(), (req, res) => {
  const { name, phone, email, city, message } = req.body;
  if(!name || !phone) return res.status(400).json({ ok: false, message: 'Missing fields' });
  saveLead({ name, phone, email, city, message, created: new Date().toISOString() });
  return res.json({ ok: true, message: 'Lead saved' });
});

app.get('/api/leads', (req, res) => {
  try {
    const data = fs.existsSync(LEADS_FILE) ? JSON.parse(fs.readFileSync(LEADS_FILE, 'utf8') || '[]') : [];
    res.json({ ok: true, leads: data });
  } catch(e){
    res.status(500).json({ ok: false, message: 'Error reading leads' });
  }
});

app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));

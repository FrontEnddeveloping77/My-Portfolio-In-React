import express from 'express';
import fetch from 'node-fetch';
import cors from 'cors';

const app = express();
app.use(cors());
app.use(express.json());

const BOT_TOKEN = '8238860417:AAERcbHXD8aUixfsgkOK44heOJ6yboFoNGY';
const CHAT_ID = '5977830644';

app.post('/send-message', async (req, res) => {
    const { name, email, message } = req.body;

    const text = `
📩 Yangi xabar:

👤 Ism: ${name}

📧 Email: ${email}

📝 Xabar: ${message}
`;

    try {
        await fetch(`https://api.telegram.org/bot${BOT_TOKEN}/sendMessage`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                chat_id: CHAT_ID,
                text
            })
        });

        res.json({ success: true });
    } catch (err) {
        res.json({ success: false });
    }
});

app.listen(5000, () => console.log('Server running on 5000'));

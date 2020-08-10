import 'dotenv/config';
import Express from 'express';

const app = Express();

app.get('/', (req, res) => {
    res.json({ message: "teste" })
})

app.listen(3000);
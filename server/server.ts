import express from 'express';
import bodyParser from 'body-parser';
// import cors from 'cors';
import path from 'path';

const app = express();
const port = process.env.PORT || 3000;

app.get('/', (req, res) => {
    res.send("hello from server!");
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

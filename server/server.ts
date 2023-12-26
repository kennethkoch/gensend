import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors())
const port = process.env.PORT || 3000;

const buildPath = path.resolve('../client', 'dist')
app.use(express.static(buildPath));
console.log(buildPath)

app.get('/', (req, res) => {
    console.log("this is the buildpath:" + buildPath)
    res.sendFile(path.resolve(buildPath, 'index.html'));
});

app.get('/api', (req, res) => {
    res.send('hello from the api!')
})

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

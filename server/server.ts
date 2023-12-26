import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(cors())
const port = process.env.PORT || 3000;

const buildPath = path.resolve('../client', 'dist')
app.use(express.static(buildPath));

app.get('/', (req, res) => {
    res.sendFile(path.resolve(buildPath, 'index.html'));
});

app.get('/api', (req, res) => {
    res.send('hello from the api!')
})

app.post('/api/generate', async (req, res) => {
    const openaiRequest = {
        senderName: req.body.senderName,
        recipientName: req.body.recipientName,
        subject: req.body.subject,
        instructions: req.body.instructions,
        sliderValue: req.body.sliderValue,
        emojiMode: req.body.emojiMode,
    }
    try {
        // const completion = await openai.createChatCompletion({
        //     model: "gpt-3.5-turbo",
        //     messages: [{
        //         role: "user",
        //         content: `please write an email from ${openaiRequest.senderName} to ${openaiRequest.recipientName} about 
        //     ${openaiRequest.subject}. On a scale of 0 to 10, where 0 is extremely 
        //     casual, 5 is somewhat formal, and 10 is extremely formal, please write this email with a 
        //     formality of ${openaiRequest.sliderValue}. Do not include the subject line in the generated email.`
        //     }],
        // })
        res.send("request received:" + openaiRequest)
        // res.send(completion.data.choices[0].message.content);
    } catch (err) {
        console.log(err);
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

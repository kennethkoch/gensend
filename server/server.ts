import express from 'express';
import bodyParser from 'body-parser';
import cors from 'cors';
import dotenv from 'dotenv';
import path from 'path';
import OpenAI from 'openai';


dotenv.config();

const app = express();

const corsOptions = {
    origin: 'http://localhost:5173',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials: true, // Allow cookies, authorization headers, etc.
};

app.use(bodyParser.json())
app.use(cors(corsOptions));


const port = process.env.PORT || 3000;
const apiKey = process.env.API_KEY;

const buildPath = path.resolve('../client', 'dist')
app.use(express.static(buildPath));

const openai = new OpenAI({
    apiKey: apiKey,
});

app.get('/', (req, res) => {
    res.sendFile(path.resolve(buildPath, 'index.html'));
});

app.get('/api', (req, res) => {
    res.send('hello from the api!')
})

interface OpenAIRequest {
    senderName: string;
    recipientName: string;
    subject: string;
    instructions: string;
    sliderValue: number;
    emojiMode: boolean;
}

app.post('/api/generate', async (req, res) => {
    const openaiRequest: OpenAIRequest = {
        senderName: req.body.senderName,
        recipientName: req.body.recipientName,
        subject: req.body.subject,
        instructions: req.body.instructions,
        sliderValue: req.body.sliderValue,
        emojiMode: req.body.emojiMode,
    }

    const baseRequest = `please write an email from ${openaiRequest.senderName} to ${openaiRequest.recipientName} about 
    ${openaiRequest.subject}. On a scale of 0 to 10, where 0 is extremely 
    casual with no corpspeak or extra jargon, 5 is somewhat formal with excessive corpspeak, and 10 is extremely formal with an obscene
    amount of corpspeak and unnecessary buzzwords, please write this email with a 
    corpspeak level of ${openaiRequest.sliderValue}. Do not include the subject line in the generated email.`

    const emojiMode = openaiRequest.emojiMode ? ` please use lots of emojis in the email.` : ""

    const specialInstructions = openaiRequest.instructions ? ` for added context, the message you are writing
    is a response to the following message: ${openaiRequest.instructions}` : ""

    const completeRequest = baseRequest + specialInstructions + emojiMode

    try {
        const completion = await openai.chat.completions.create({
            model: "gpt-3.5-turbo",
            messages: [{
                role: "user",
                content: completeRequest
            }],
        })
        res.send(completion.choices[0].message.content);
    } catch (err) {
        console.log(err);
        res.send(err)
    }
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}/`);
});

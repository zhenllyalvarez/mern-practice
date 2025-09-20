import express from 'express';
import route from './routes/route.js';

const app = express();
const port = 8000;

app.use('/', route);
app.use("/api/test", route);

app.listen(port, () => {
    console.log(`Successfully running in port ${port}`);
});
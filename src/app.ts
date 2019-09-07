import express from 'express';
import exampleMiddleware from './middlewares/example';

const app: express.Application = express();

app.get('/sum', (req, res) => {
    res.send(exampleMiddleware(3, 4).toString());
});

app.listen(process.env.PORT, () => {
    console.log(`Example app listening on port ${process.env.PORT}`);
});

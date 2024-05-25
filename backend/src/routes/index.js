import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const app=express();
app.use(express.json());

app.get('/', (req, res) => {
    console.log(process.env.PORT);
    res.send('Hello World!')
  })
  
  app.listen(3000, () => {
    console.log(`server is running on 3000`);
  });

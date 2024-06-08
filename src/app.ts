import {requestHandler} from "./handle";
import {Request} from "./type";

const express = require('express')
const app = express();

const path = require('path')
const pathJoin = path.join(__dirname, '../public')

app.use(express.static(pathJoin))
app.use(express.json())

app.post('/userData', async (req: Request, res: any) => {
    const data = await requestHandler(req.body)
})

app.listen(3000, () => {
    console.log(" listening on port 3000")
})
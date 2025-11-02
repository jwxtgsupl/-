const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();

app.use(cors());
app.use(express.json());

app.post('/save', (req, res) => {
    const { text1, text2 } = req.body;
    const saveContent = `[${new Date().toLocaleString()}] 文字1:${text1},.文字2:${text2}\n`;

    fs.appendFile('data.txt', saveContent, (err) => {
        if (err) {
            console.error('保存失败：', err);
            res.send('保存失败');
            return;
        }
        res.send('保存成功');
    });
});

app.listen(3000, () => {
    console.log('后端服务已启动,访问地址:http://localhost:3000');
});
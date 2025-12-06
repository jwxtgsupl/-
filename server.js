const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.json()); 

app.post('/save', (req, res) => {
  const { username, password } = req.body;
  const now = new Date().toLocaleString();
  const content = `用户名：${username}，密码：${password}  ${now}\n`;
  fs.appendFile('.data.txt', content, (err) => {
    if (err) {
      console.log('写入文件失败：', err);
      res.status(500).send('保存失败！');
      return;
    }
    console.log('数据已写入data.txt');
    res.send('保存成功！'); 
  });
});

app.listen(3000, () => {
  console.log('后端服务已启动，访问地址:http://localhost:3000');
});


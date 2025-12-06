const express = require('express');
const cors = require('cors');
const fs = require('fs');
const app = express();
app.use(cors());
app.use(express.json()); 

app.post('/save', (req, res) => {
  const { username, password } = req.body;
  if (!username || !password) {
    return res.status(400).send('用户名/密码不能为空');
  }
  const content = `用户名：${username}，密码：${password}\n`;
  fs.appendFile('./data.txt', content, (err) => {
    if (err) {
      console.error(err);
      return res.status(500).send('写入文件失败');
    }
    res.send('保存成功');
  });
});

app.listen(3000, '0.0.0.0', () => {
  console.log('后端服务已启动，访问地址:http://0.0.0.0:3000');
});

const mysql = require('mysql');

// 数据库连接配置
const connection = mysql.createConnection({
  host: 'localhost', // 数据库服务器的地址
  user: 'root', // 数据库用户名
  password: '12345678', // 数据库密码
  database: 'fitness_db', // 使用的数据库名称
});

connection.connect((err) => {
  if (err) {
    return console.error('error: ' + err.message);
  }
  console.log('Connected to the MySQL server.');
});

exports.createGoal = (req, res) => {
  // 创建新目标
  const data = req.body; // 确保传入数据的格式与数据库表结构匹配
  console.log('createGoalcreateGoalcreateGoal', data);
  const query = `INSERT INTO goals SET ?`;
  connection.query(query, data, (err, result) => {
    if (err) throw err;
    res.status(201).send('Goal created successfully.');
  });
};

exports.retrieveGoals = (req, res) => {
  // 检索所有目标
  connection.query('SELECT * FROM goals', (err, results) => {
    if (err) throw err;
    res.status(200).json(results);
  });
};

exports.updateGoal = (req, res) => {
  // 更新目标，假定请求体中有id和其它要更新的字段
  const { id, ...updateData } = req.body;
  const query = `UPDATE goals SET ? WHERE id = ?`;
  connection.query(query, [updateData, id], (err, result) => {
    if (err) throw err;
    res.status(200).send('Goal updated successfully.');
  });
};

exports.deleteGoal = (req, res) => {
  // 删除目标，假定请求中的id指定了要删除的目标
  const { id } = req.body;
  const query = `DELETE FROM goals WHERE id = ?`;
  connection.query(query, id, (err, result) => {
    if (err) throw err;
    res.status(200).send('Goal deleted successfully.');
  });
};

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
        console.error('error connecting: ' + err.stack);
        return;
    }
    console.log('Connected to the MySQL server as ID ' + connection.threadId);
});

exports.createDailyData = (req, res) => {
    console.log('createDailyData', req.body);
    const data = req.body;
    const query = `INSERT INTO daily_data SET ?`;
    connection.query(query, data, (err, result) => {
        if (err) throw err;
        res.status(201).send('Daily data created successfully.');
    });
};

exports.retrieveDailyData = (req, res) => {
    connection.query('SELECT * FROM daily_data', (err, results) => {
        if (err) throw err;
        res.status(200).json(results);
    });
};

exports.updateDailyData = (req, res) => {
    const { id, ...updateData } = req.body;
    const query = `UPDATE daily_data SET ? WHERE id = ?`;
    connection.query(query, [updateData, id], (err, result) => {
        if (err) throw err;
        res.status(200).send('Daily data updated successfully.');
    });
};

exports.deleteDailyData = (req, res) => {
    const { id } = req.body;
    const query = `DELETE FROM daily_data WHERE id = ?`;
    connection.query(query, id, (err, result) => {
        if (err) throw err;
        res.status(200).send('Daily data deleted successfully.');
    });
};
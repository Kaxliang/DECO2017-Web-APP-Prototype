const mysql = require('mysql');
// 创建数据库连接
const connection = mysql.createConnection({
    host: 'localhost', // 数据库服务器的地址
    user: 'root', // 数据库用户名
    password: '12345678', // 数据库密码
    database: 'fitness_db', // 使用的数据库名称
    port: 3306
});

// 连接到数据库
connection.connect((err) => {
    console.log(err);
    if (err) throw err;
    console.log('Connected to the database.');

    // 创建 goals 表
    const createGoalsTable = `
    CREATE TABLE goals (
      id INT AUTO_INCREMENT PRIMARY KEY,
      goalWeight VARCHAR(255),
      goalFocus VARCHAR(255),
      planWeight VARCHAR(255),
      planCalory VARCHAR(255),
      planFat VARCHAR(255),
      planWater VARCHAR(255),
      planProtein VARCHAR(255),
      planCarbon VARCHAR(255)
    );
  `;

    connection.query(createGoalsTable, (err, result) => {
        if (err) throw err;
        console.log("Table 'goals' created");
    });

    // 创建 daily_data 表
    const createDailyDataTable = `
    CREATE TABLE daily_data (
      id INT AUTO_INCREMENT PRIMARY KEY,
      date VARCHAR(255),
      weight VARCHAR(255),
      calory VARCHAR(255),
      fat VARCHAR(255),
      water VARCHAR(255),
      protein VARCHAR(255),
      carbon VARCHAR(255)
    );
  `;

    connection.query(createDailyDataTable, (err, result) => {
        if (err) throw err;
        console.log("Table 'daily_data' created");
        connection.end(); // 关闭数据库连接
    });
});
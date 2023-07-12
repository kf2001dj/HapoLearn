const express = require('express')
const mysql = require('mysql');
const app = express()
const port = 4000

const cors = require('cors')
app.use(cors())
app.get('/users/:id', function (req, res, next) {
  res.json({msg: 'Lúc này cors sẽ được bật ở toàn bộ các request'})
})

// Cấu hình kết nối MySQL  and chức năng CRUD (Create, Read, Update, Delete)
const connection = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: '',
  database: 'hapo'
}); 

// Kết nối MySQL
connection.connect((error) => {
  if (error) {
    console.error('Lỗi kết nối MySQL: ', error);
  } else {
    console.log('Kết nối MySQL thành công!');
  }
});

// GET: Lấy danh sách người dùng    -> Create
app.get('/users', (req, res) => {
  connection.query('SELECT * FROM users', (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Lấy thông tin user theo ID       -> Create
app.get('/users/:id', (req, res) => {
  const userId = req.params.id;
  connection.query('SELECT * FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) throw err;
    res.json(results[0]);
  });
});


// POST: Tạo người dùng mới      ->Read
app.post('/users', (req, res) => {
  const { name, email, age } = req.body;
  connection.query('INSERT INTO users (name, email, age) VALUES (?, ?, ?)', [name, email, age], (err, results) => {
    if (err) throw err;
    res.json({ message: 'User created successfully' });
  });
});


// PUT: Cập nhật thông tin người dùng     ->Update
app.put('/users/:id', (req, res) => {
  const userId = req.params.id;
  const { name, email, age } = req.body;
  connection.query('UPDATE users SET name = ?, email = ?, age = ? WHERE id = ?', [name, email, age, userId], (err, results) => {
    if (err) throw err;
    res.json({ message: 'User updated successfully' });
  });
});

// DELETE: Xóa người dùng
// Xóa user theo ID
app.delete('/users/:id', (req, res) => {
  const userId = req.params.id;
  connection.query('DELETE FROM users WHERE id = ?', [userId], (err, results) => {
    if (err) throw err;
    res.json({ message: 'User deleted successfully' });
  });
});

// Tìm kiếm user theo tên
app.get('/search/users', (req, res) => {
  const searchTerm = req.query.q;
  connection.query('SELECT * FROM users WHERE name LIKE ?', [`%${searchTerm}%`], (err, results) => {
    if (err) throw err;
    res.json(results);
  });
});

// Khởi chạy server
app.listen(port, () => {
  console.log('Server đang lắng nghe trên cổng 4000');
});




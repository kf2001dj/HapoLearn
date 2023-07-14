import "reflect-metadata";
import { createConnection, getRepository } from "typeorm";
import { User } from "./entity/User";
// import { Users } from "./entity/Users";
// Khởi tạo ứng dụng Express
const express = require('express')
const app = express();
app.use(express.json());

//cors
const cors = require('cors')
app.use(cors())
app.get('/users/:id', function (req, res, next) {
  res.json({msg: 'Lúc này cors sẽ được bật ở toàn bộ các request'})
})

// Tạo kết nối với cơ sở dữ liệu MySQL
createConnection()
  .then((connection) => {
    console.log("Connected to database");
    // Định nghĩa các route CRUD
    // Lấy danh sách tất cả người dùng  =>read
    app.get("/user", async (req, res) => {
      const userRepository = connection.getRepository(User);
      const users = await userRepository.find();
      res.json(users);
    });
    ////
    // app.get("/users", async (req, res) => {
    //   const userRepository = connection.getRepository(Users);
    //   const users = await userRepository.find();
    //   res.json(users);
    // });

    // Lấy thông tin một người dùng dựa trên ID 
    app.get("/user/:id", async (req, res) => {
      const userRepository = connection.getRepository(User);
      const user = await userRepository.findOne(req.params.id);
      res.json(user);
    });

    // Tạo một người dùng mới  ==>create
    app.post("/user", async (req, res) => {
      const { name, email ,age } = req.body;
      const userRepository = connection.getRepository(User);
      const user = new User();
      user.name = name;
      user.email = email;
      user.age = age;
      await userRepository.save(user);
      res.json(user);
    });

    // Cập nhật thông tin một người dùng dựa trên ID
    app.put("/user/:id", async (req, res) => {
      const { name, email , age } = req.body;
      const userRepository = connection.getRepository(User);
      await userRepository.update(req.params.id, { name, email ,age });
      const updatedUser = await userRepository.findOne(req.params.id);
      res.json(updatedUser);
    });

    // Xóa một người dùng dựa trên ID
    app.delete("/user/:id", async (req, res) => {
      const userRepository = connection.getRepository(User);
      await userRepository.delete(req.params.id);
      res.sendStatus(204);
    });

    // Chạy ứng dụng trên cổng 4000
    app.listen(4000, () => {
      console.log("Server is running on port 4000");
    });
  })
  .catch((error) => {
    console.log("Database connection failed. Error:", error);
  });

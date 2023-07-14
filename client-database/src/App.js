import React, { useState, useEffect } from 'react';

const App = () => {
  const [database, setData] = useState([]);
  const [id, setID] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [age ,setAge] = useState('');
  useEffect(() => {
   fetchData();
  }, []);
  const fetchData = async () => {
    try {
      const response = await fetch('http://localhost:4000/user');
      const jsonData = await response.json();
      setData(jsonData);
    }catch(error){
      console.log('Erro data :', error);
    }
}

  const addUser = event => {
    event.preventDefault();
    fetch('http://localhost:4000/user', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({id , name, email ,age}),
    })
      .then(response => response.json())
      .then(user => {
        setData([...database, user]);
        setID('');
        setName('');
        setEmail('');
        setAge('');
      });
  };

  const editUser = userId => {
    // Implementation for editing a user
    console.log('Edit user:', userId);
  };

  const deleteUser = userId => {
    fetch(`http://localhost:4000/user/${userId}`, {
      method: 'DELETE',
    })
      .then(response => {
        if (response.status === 204) {
          setData(database.filter(user => user.id !== userId));
        }
      });
  };

  return (
    <div>
      <h1>User Management</h1>
      <form onSubmit={addUser}>
        <input type="id" value={id} placeholder="ID" required onChange={e => setID(e.target.value)} />
        <input type="text" value={name} placeholder="Name" required onChange={e => setName(e.target.value)} />
        <input type="email" value={email} placeholder="Email" required onChange={e => setEmail(e.target.value)} />
        <input type="age" value={age} placeholder="Age" required onChange={e => setAge(e.target.value)} />
        <button type="submit">Add User</button>
      </form>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Age</th>
          </tr>
        </thead>
        <tbody>
          {database.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.email}</td>
              <td>{item.age}</td>
              <td>
                <button onClick={() => editUser(database.id)}>Edit</button>
                <button onClick={() => deleteUser(database.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default App;

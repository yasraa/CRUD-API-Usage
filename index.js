import express from 'express';  
import users from './MOCK_DATA.js';  // Importing the users data
import { writeFileSync } from 'fs';
import { error } from 'console';


const app = express();
 // Importing JSON data
app.use(express.json());  // Middleware to parse JSON data
app.use(express.urlencoded({ extended: false }));  // Middleware to parse URL-encoded data

app.get('/', (req, res) => {
  res.send('Hello, World!');    
})

app.route('/api/users/:id')
  .get((req, res) => {
    const userId = Number(req.params.id);  // Get the user ID from the request parameters
    const user = users.find(user => user.id == userId);  // Find the user by ID
    if (user) {
      res.json(user);  // Respond with the user data
    } else {
      res.status(404).json({ error: 'User not found' });  // Respond with an error if user not found
    }
  })
.patch((req, res) => {
  const userId = Number(req.params.id);
  const body = req.body;

  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  // Update user with new fields
  users[userIndex] = { ...users[userIndex], ...body };

  // Save changes to file
  writeFileSync('./MOCK_DATA.js', `export default ${JSON.stringify(users, null, 2)};`);

  res.json({ message: 'User updated', user: users[userIndex] });
})

.delete((req, res) => {
  const userId = Number(req.params.id);

  const userIndex = users.findIndex(user => user.id === userId);

  if (userIndex === -1) {
    return res.status(404).json({ error: 'User not found' });
  }

  const deletedUser = users.splice(userIndex, 1)[0]; // remove from array

  // Save updated users to file
  writeFileSync('./MOCK_DATA.js', `export default ${JSON.stringify(users, null, 2)};`);

  res.json({ message: 'User deleted', deleted: deletedUser });
});

app.get('/users', (req, res) => {
  const html =`
  <ul>
    ${users.map(user => (`
      <li key={user.id}>
        ${user.first_name} ${user.last_name} - ${user.email}
      </li>`
    ))}
  </ul> `// Respond with the users data
    res.send(html);  // Send the HTML response
});

app.get('/api/users', (req, res) => {
  res.json(users);  // Respond with the users data
});




app.post('/api/users', (req, res) => {
  const body = req.body;

  if (!body.first_name || !body.email) {
    return res.status(400).json({ error: 'Missing required fields' });
  }

  const newUser = {
    ...body,
    id: users.length + 1
  };

  users.push(newUser);

  // Overwrite the MOCK_DATA.js file with the new array
  writeFileSync('./MOCK_DATA.js', `export default ${JSON.stringify(users, null, 2)};`);

  res.status(201).json({ message: 'User added successfully', user: newUser });
});




const PORT = process.env.PORT || 3000;  
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
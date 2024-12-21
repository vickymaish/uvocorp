import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const users = [
  { username: "admin", password: "password" },
  { username: "user1", password: "password1" },
  { username: "user2", password: "password2" },
  // Add more users as needed
];

const Login = ({ onLogin }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    const user = users.find((user) => user.username === username && user.password === password);
    if (user) {
      onLogin(username);
    } else {
      alert("Invalid credentials");
    }
  };

  return (
    <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", mt: 5 }}>
      <Typography variant="h4">Login</Typography>
      <TextField
        label="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        sx={{ mt: 2 }}
      />
      <TextField
        label="Password"
        type="password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        sx={{ mt: 2 }}
      />
      <Button variant="contained" onClick={handleLogin} sx={{ mt: 2 }}>
        Login
      </Button>
    </Box>
  );
};

export default Login;
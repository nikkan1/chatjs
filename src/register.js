import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './App.css'
function Register() {
    const [newUsername, setNewUsername] = useState('');
    const [newPassword, setNewPassword] = useState('');
    const [isRegistered, setIsRegistered] = useState(false);

    const handleRegister = () => {
        if (newUsername.trim() !== '' && newPassword.trim() !== '') {
            const existingUsers = JSON.parse(localStorage.getItem('users')) || [];
            const isUserExist = existingUsers.some((user) => user.username === newUsername);
            if (isUserExist) {
                alert('Пользователь с таким именем уже существует.');
            } else {
                const newUser = { username: newUsername, password: newPassword };
                existingUsers.push(newUser);
                localStorage.setItem('users', JSON.stringify(existingUsers));

                setIsRegistered(true);
            }
        } else {
            alert('Введите имя пользователя и пароль.');
        }
    };

    return (
        <div className="login-container">
            <h2>Регистрация</h2>
            {isRegistered ? (
                <div>
                    <p>Регистрация прошла успешно. Теперь вы можете <Link to="/login">войти</Link>.</p>
                </div>
            ) : (
                <div>
                    <input
                        type="text"
                        placeholder="Имя пользователя"
                        value={newUsername}
                        onChange={(e) => setNewUsername(e.target.value)}
                    />
                    <input
                        type="password"
                        placeholder="Пароль"
                        value={newPassword}
                        onChange={(e) => setNewPassword(e.target.value)}
                    />
                    <button onClick={handleRegister}>Зарегистрироваться</button>
                </div>
            )}
        </div>
    );
}

export default Register;

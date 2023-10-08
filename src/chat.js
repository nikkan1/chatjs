import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import './App.css'
function Chat() {
    const [message, setMessage] = useState('');
    const [messages, setMessages] = useState([]);
    const username = localStorage.getItem('username');
    const isLoggedIn = localStorage.getItem('isLoggedIn');
    const navigate = useNavigate();

    useEffect(() => {
        const savedMessages = JSON.parse(localStorage.getItem('chatMessages')) || [];
        setMessages(savedMessages);
    }, []);

    const handleSendMessage = () => {
        if (message.trim() === '') {
            return;
        }

        const newMessage = { user: username, text: message };
        setMessages([...messages, newMessage]);
        setMessage('');

        localStorage.setItem('chatMessages', JSON.stringify([...messages, newMessage]));
    };

    const handleDeleteMessage = (index) => {
        const updatedMessages = [...messages];
        updatedMessages.splice(index, 1);
        setMessages(updatedMessages);
        localStorage.setItem('chatMessages', JSON.stringify(updatedMessages));
    };

    const handleLogout = () => {
        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('username');
        navigate('/login');
    };

    return (
        <div className="chat-container">
            <h2>Чат</h2>
            {!isLoggedIn ? (
                <div>Необходимо войти в систему, чтобы использовать чат.</div>
            ) : (
                <div>
                    <p>Вы вошли как: {username}</p>
                    <button onClick={handleLogout}>Выйти</button>
                    <div id="chat-container" className="message-container">
                        {messages.map((msg, index) => (
                            <div key={index}>
                                <strong>{msg.user}: </strong>
                                {msg.text}
                                {username === msg.user && (
                                    <button onClick={() => handleDeleteMessage(index)}>Удалить</button>
                                )}
                            </div>
                        ))}
                    </div>
                    <input
                        type="text"
                        placeholder="Введите сообщение"
                        value={message}
                        onChange={(e) => setMessage(e.target.value)}
                        className="input-style"
                    />
                    <button onClick={handleSendMessage} className="button-style">Отправить</button>
                </div>
            )}
        </div>
    );
}

export default Chat;

import React, {useState, useEffect} from 'react';

function Footer() {
    const [currentTime, setCurrentTime] = useState('');

    useEffect(() => {
        fetch('http://worldtimeapi.org/api/timezone/Europe/Moscow')
            .then((response) => response.json())
            .then((data) => {
                const datetime = new Date(data.datetime);
                const formattedTime = datetime.toLocaleTimeString('en-US', {
                    hour: 'numeric',
                    minute: 'numeric',
                    second: 'numeric',
                    timeZoneName: 'short',
                });

                setCurrentTime(formattedTime);
            })
            .catch((error) => {
                console.error('Ошибка при загрузке текущего времени:', error);
            });
    }, []);

    return (
        <footer>
            <p>Текущее время в Москве: {currentTime}</p>
        </footer>
    );
}

export default Footer;

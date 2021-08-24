import { useState, useEffect, useRef } from 'react';
import io from 'socket.io-client';

export default function useChat(user) {
  const [chat, setChat] = useState(null);
  const socketRef = useRef();

  useEffect(() => {
    socketRef.current = io('http://localhost:3001');
    socketRef.current.emit('CHAT/NEW_USER', { user });
    socketRef.current.on('CHAT/UPDATE', chatResp => {
      setChat(chatResp);
    });
  }, []);

  function sendMsg(text) {
    socketRef.current.emit('CHAT/SEND_MSG', { user, text });
  }

  return { chat, sendMsg };
}

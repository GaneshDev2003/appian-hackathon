'use client'
import React, { useEffect, useState } from 'react';
import FileInput from '../FileInput/fileInput';

interface Message {
  text: string;
  sender: 'user' | 'bot';
}

const Chat: React.FC = () => {
  const [questionNumber, setQuestionNumber] = useState<number>(0);
  const [transcription, setTranscription] = useState<string>('');
  const questions = ["What is your body temperature currently?", "Do you have persistent cough?", "Do you have shortness of breath?", "Have you travelled recently to an affected area"]
  const [messages, setMessages] = useState<Message[]>([
    {text: "Hi! Please answer the following questions.", sender : "bot"},
  ]);
  const [newMessage, setNewMessage] = useState('');
  const updateQuestionNumber = () => {
    setQuestionNumber(questionNumber + 1)
  }
  
  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSendMessage = () => {
    if (newMessage.trim() !== '') {
    if(questionNumber<questions.length - 1)
      updateQuestionNumber();
      console.log(questionNumber)
      console.log(questions[questionNumber])
      setMessages([...messages, { text: newMessage, sender: 'user' }]);
      setNewMessage('');
    }
  };
  useEffect(()=>{
    setMessages([...messages, {text: questions[questionNumber], sender : "bot"}]);
  }, [questionNumber]);

  return (
    <div className="flex flex-col mt-4 bg-sky-600 rounded-lg p-4">
        <div className = "text-slate-800">
            <h1 className = "text-xl font-bold mb-2 text-white text-center">Chatbot</h1>
        </div>
      <div className="flex-1 overflow-y-auto p-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`mb-2 ${message.sender === 'user' ? 'text-right' : 'text-left'}`}
          >
            <span
              className={`inline-block p-2 rounded ${
                message.sender === 'user' ? 'bg-blue-500 text-white' : 'bg-gray-200 text-slate-800'
              }`}
            >
              {message.text}
            </span>
          </div>
        ))}
      </div>
      <div className="flex p-4">
        <FileInput fileContent={transcription} setFileContent={setTranscription} ></FileInput>
        <input
          type="text"
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyDown={handleKeyDown}
          className="flex-1 px-2 py-1 border rounded-l text-slate-800"
          placeholder="Type a message..."
        />

        <button
          onClick={handleSendMessage}
          className="px-4 py-2 bg-blue-500 text-white rounded-r"
        >
          Send
        </button>
      </div>
    </div>
  );
};

export default Chat
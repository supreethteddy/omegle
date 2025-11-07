
import { useEffect, useRef } from 'react';

interface Message {
  id: number;
  text: string;
  sender: 'me' | 'other';
  timestamp: Date;
  isGift?: boolean;
}

interface ChatMessagesProps {
  messages: Message[];
}

export default function ChatMessages({ messages }: ChatMessagesProps) {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto p-4 space-y-3">
      {messages.map((message) => (
        <div
          key={message.id}
          className={`flex ${message.sender === 'me' ? 'justify-end' : 'justify-start'}`}
        >
          <div
            className={`max-w-xs px-4 py-2 rounded-2xl ${
              message.sender === 'me'
                ? message.isGift
                  ? 'bg-yellow-500 text-white'
                  : 'bg-purple-600 text-white'
                : 'bg-gray-200 text-gray-900'
            }`}
          >
            <p className="text-sm">{message.text}</p>
            <p className={`text-xs mt-1 ${
              message.sender === 'me' ? 'text-white/70' : 'text-gray-500'
            }`}>
              {message.timestamp.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
            </p>
          </div>
        </div>
      ))}
      
      {/* AI Translation Demo */}
      <div className="flex justify-center">
        <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-xs">
          🤖 AI Translation: "Hello" → "Hola"
        </div>
      </div>
      
      <div ref={messagesEndRef} />
    </div>
  );
}

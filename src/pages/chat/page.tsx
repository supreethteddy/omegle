
import { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import ChatHeader from './components/ChatHeader';
import VideoContainer from './components/VideoContainer';
import ChatMessages from './components/ChatMessages';
import ChatInput from './components/ChatInput';
import GiftModal from './components/GiftModal';
import ReportModal from './components/ReportModal';
import GameModal from './components/GameModal';

export default function Chat() {
  const navigate = useNavigate();
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hey there! 👋', sender: 'other', timestamp: new Date() },
    { id: 2, text: 'Hi! Nice to meet you!', sender: 'me', timestamp: new Date() }
  ]);
  const [showGiftModal, setShowGiftModal] = useState(false);
  const [showReportModal, setShowReportModal] = useState(false);
  const [showGameModal, setShowGameModal] = useState(false);
  const [isVideoEnabled, setIsVideoEnabled] = useState(true);
  const [isAudioEnabled, setIsAudioEnabled] = useState(true);
  const [coins, setCoins] = useState(250);
  const [connectionTime, setConnectionTime] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setConnectionTime(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleSendMessage = (text: string) => {
    const newMessage = {
      id: messages.length + 1,
      text,
      sender: 'me' as const,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, newMessage]);

    // Simulate other user response
    setTimeout(() => {
      const responses = [
        'That\'s interesting!',
        'Tell me more about that',
        'I agree!',
        'What do you think about...',
        'That\'s cool! 😊'
      ];
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      
      setMessages(prev => [...prev, {
        id: prev.length + 1,
        text: randomResponse,
        sender: 'other',
        timestamp: new Date()
      }]);
    }, 1000 + Math.random() * 2000);
  };

  const handleSendGift = (gift: any) => {
    if (coins >= gift.cost) {
      setCoins(prev => prev - gift.cost);
      const giftMessage = {
        id: messages.length + 1,
        text: `🎁 Sent ${gift.name}`,
        sender: 'me' as const,
        timestamp: new Date(),
        isGift: true
      };
      setMessages(prev => [...prev, giftMessage]);
      setShowGiftModal(false);
    }
  };

  const handleNext = () => {
    navigate('/post-chat');
  };

  const handleReport = () => {
    setShowReportModal(true);
  };

  const formatTime = (seconds: number) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins.toString().padStart(2, '0')}:${secs.toString().padStart(2, '0')}`;
  };

  return (
    <div className="min-h-screen bg-gray-900 flex flex-col">
      <ChatHeader
        onNext={handleNext}
        onReport={handleReport}
        connectionTime={formatTime(connectionTime)}
        coins={coins}
      />

      <VideoContainer
        isVideoEnabled={isVideoEnabled}
        isAudioEnabled={isAudioEnabled}
        onToggleVideo={() => setIsVideoEnabled(!isVideoEnabled)}
        onToggleAudio={() => setIsAudioEnabled(!isAudioEnabled)}
        onOpenGifts={() => setShowGiftModal(true)}
        onOpenGame={() => setShowGameModal(true)}
      />

      <div className="flex-1 flex flex-col bg-white">
        <ChatMessages messages={messages} />
        <ChatInput onSendMessage={handleSendMessage} />
      </div>

      {showGiftModal && (
        <GiftModal
          coins={coins}
          onSendGift={handleSendGift}
          onClose={() => setShowGiftModal(false)}
        />
      )}

      {showReportModal && (
        <ReportModal
          onClose={() => setShowReportModal(false)}
          onReport={(reason) => {
            console.log('Reported:', reason);
            setShowReportModal(false);
          }}
        />
      )}

      {showGameModal && (
        <GameModal
          onClose={() => setShowGameModal(false)}
        />
      )}
    </div>
  );
}

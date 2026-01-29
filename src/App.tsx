import { useState } from 'react';
import { ChatScreen } from './components/ChatScreen';
import { StoryDatabase } from './components/StoryDatabase';

type Screen = 'chat' | 'database';

export default function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('chat');

  return (
    <div className="min-h-screen bg-[#121212] text-white max-w-[1366px] mx-auto">
      {/* Screen Switcher - iPad optimized */}
      <div className="fixed top-4 left-1/2 -translate-x-1/2 z-50 flex gap-2 bg-[#1E1E1E] p-2 rounded-lg border border-gray-800">
        <button
          onClick={() => setCurrentScreen('chat')}
          className={`px-6 py-2 rounded text-sm font-medium transition ${
            currentScreen === 'chat'
              ? 'bg-[#0A84FF] text-white'
              : 'bg-transparent text-gray-400 hover:text-white'
          }`}
        >
          Chat
        </button>
        <button
          onClick={() => setCurrentScreen('database')}
          className={`px-6 py-2 rounded text-sm font-medium transition ${
            currentScreen === 'database'
              ? 'bg-[#0A84FF] text-white'
              : 'bg-transparent text-gray-400 hover:text-white'
          }`}
        >
          Story Database
        </button>
      </div>

      {/* Render current screen */}
      {currentScreen === 'chat' && <ChatScreen />}
      {currentScreen === 'database' && <StoryDatabase />}
    </div>
  );
}
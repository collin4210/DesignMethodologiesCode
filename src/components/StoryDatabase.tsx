import image_31d28cbb8f2057c466814a18c938dc5b1aadb46f from 'figma:asset/31d28cbb8f2057c466814a18c938dc5b1aadb46f.png';
import image_9ef35c53d5853a2d122c074e9a9c76f5c1a7c7f2 from 'figma:asset/9ef35c53d5853a2d122c074e9a9c76f5c1a7c7f2.png';
import image_3602bb6a4154647a67a57dcf9d79e3f0e403fda0 from 'figma:asset/3602bb6a4154647a67a57dcf9d79e3f0e403fda0.png';
import { useState } from 'react';
import { Home, Upload, Settings, Lock, Send, Bot } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Character = {
  id: string;
  name: string;
  rank: string;
  chakraLevel: number;
  skills: { name: string; locked: boolean }[];
  avatar: string;
};

const characters: Character[] = [
  {
    id: '1',
    name: 'Naruto',
    rank: 'Genin',
    chakraLevel: 3,
    skills: [
      { name: 'Shadow Clone Jutsu', locked: false },
      { name: 'Rasengan', locked: false },
      { name: 'Sage Mode', locked: true },
      { name: 'Nine-Tails Chakra', locked: true },
    ],
    avatar: image_3602bb6a4154647a67a57dcf9d79e3f0e403fda0,
  },
  {
    id: '2',
    name: 'Sasuke',
    rank: 'Genin',
    chakraLevel: 4,
    skills: [
      { name: 'Sharingan', locked: false },
      { name: 'Chidori', locked: false },
      { name: 'Amaterasu', locked: true },
      { name: 'Susanoo', locked: true },
    ],
    avatar: image_9ef35c53d5853a2d122c074e9a9c76f5c1a7c7f2,
  },
  {
    id: '3',
    name: 'Sakura',
    rank: 'Genin',
    chakraLevel: 2,
    skills: [
      { name: 'Medical Ninjutsu', locked: false },
      { name: 'Inner Sakura', locked: false },
      { name: 'Cherry Blossom Impact', locked: true },
      { name: 'Creation Rebirth', locked: true },
    ],
    avatar: image_31d28cbb8f2057c466814a18c938dc5b1aadb46f,
  },
];

export function StoryDatabase() {
  const [selectedCharacter, setSelectedCharacter] = useState(characters[0]);
  const [chatOpen, setChatOpen] = useState(true);
  const [message, setMessage] = useState('');

  return (
    <div className="h-screen flex bg-[#121212] overflow-hidden pt-16">
      {/* Left Sidebar */}
      <div className="w-16 bg-[#1A1A1A] border-r border-gray-800 flex flex-col items-center py-6 gap-6">
        <button className="p-3 rounded-lg bg-[#2A2A2A] hover:bg-[#3A3A3A] transition">
          <Home className="w-5 h-5 text-white" />
        </button>
        <button className="p-3 rounded-lg hover:bg-[#2A2A2A] transition">
          <Upload className="w-5 h-5 text-gray-400" />
        </button>
        <button className="p-3 rounded-lg hover:bg-[#2A2A2A] transition mt-auto">
          <Settings className="w-5 h-5 text-gray-400" />
        </button>
      </div>

      {/* Character List */}
      <div className="w-64 bg-[#1A1A1A] border-r border-gray-800 flex flex-col">
        <div className="p-4 border-b border-gray-800">
          <h2 className="text-sm font-medium text-gray-400">CHARACTER DATABASE</h2>
        </div>
        <div className="flex-1 overflow-auto">
          {characters.map((character) => (
            <button
              key={character.id}
              onClick={() => setSelectedCharacter(character)}
              className={`w-full p-4 flex items-center gap-3 border-b border-gray-800 hover:bg-[#2A2A2A] transition ${
                selectedCharacter.id === character.id ? 'bg-[#2A2A2A]' : ''
              }`}
            >
              <div className="w-10 h-10 rounded-full bg-gray-700 overflow-hidden flex-shrink-0">
                <ImageWithFallback
                  src={character.avatar}
                  alt={character.name}
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex-1 text-left">
                <p className="text-sm text-white font-medium">{character.name}</p>
                <p className="text-xs text-gray-500">{character.rank}</p>
              </div>
            </button>
          ))}
        </div>
      </div>

      {/* Main Character Details */}
      <div className="flex-1 overflow-auto p-8 relative">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="flex items-start gap-6 mb-8">
            <div className="w-32 h-32 rounded-lg bg-gray-800 overflow-hidden flex-shrink-0 border border-gray-700">
              <ImageWithFallback
                src={selectedCharacter.avatar}
                alt={selectedCharacter.name}
                className="w-full h-full object-cover"
              />
            </div>
            <div className="flex-1">
              <h1 className="text-3xl font-bold text-white mb-2">{selectedCharacter.name}</h1>
              <div className="flex gap-4 font-mono text-sm">
                <div>
                  <span className="text-gray-500">Rank: </span>
                  <span className="text-white">{selectedCharacter.rank}</span>
                </div>
                <div>
                  <span className="text-gray-500">Chakra Level: </span>
                  <span className="text-[#0A84FF]">{selectedCharacter.chakraLevel}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-4 mb-8">
            <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-2">STRENGTH</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-[60%] h-full bg-[#0A84FF]"></div>
                </div>
                <span className="text-sm font-mono text-white">60</span>
              </div>
            </div>
            <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-2">SPEED</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-[75%] h-full bg-[#0A84FF]"></div>
                </div>
                <span className="text-sm font-mono text-white">75</span>
              </div>
            </div>
            <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-2">INTELLIGENCE</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-[45%] h-full bg-[#0A84FF]"></div>
                </div>
                <span className="text-sm font-mono text-white">45</span>
              </div>
            </div>
            <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-4">
              <p className="text-xs text-gray-500 mb-2">CHAKRA CONTROL</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-[50%] h-full bg-[#0A84FF]"></div>
                </div>
                <span className="text-sm font-mono text-white">50</span>
              </div>
            </div>
          </div>

          {/* Skills Section */}
          <div className="bg-[#1A1A1A] border border-gray-800 rounded-lg p-6">
            <h3 className="text-sm font-medium text-gray-400 mb-4">ABILITIES & SKILLS</h3>
            <div className="grid grid-cols-2 gap-3">
              {selectedCharacter.skills.map((skill, idx) => (
                <div
                  key={idx}
                  className={`flex items-center gap-3 p-3 rounded-lg border ${
                    skill.locked
                      ? 'bg-gray-900/30 border-gray-800'
                      : 'bg-[#30D158]/10 border-[#30D158]/30'
                  }`}
                >
                  {skill.locked ? (
                    <Lock className="w-4 h-4 text-gray-600 flex-shrink-0" />
                  ) : (
                    <div className="w-2 h-2 rounded-full bg-[#30D158] flex-shrink-0"></div>
                  )}
                  <span
                    className={`text-sm ${skill.locked ? 'text-gray-600' : 'text-white'}`}
                  >
                    {skill.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Floating Chat Assistant - BLUE */}
        {chatOpen && (
          <div className="fixed bottom-8 right-8 w-96 bg-[#1A1A1A] border-2 border-[#0A84FF] rounded-lg shadow-[0_0_30px_rgba(10,132,255,0.4)] overflow-hidden">
            <div className="bg-gradient-to-r from-[#0A84FF]/20 to-[#0A84FF]/10 p-4 border-b border-[#0A84FF]/30 flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-8 h-8 rounded-full bg-[#0A84FF] flex items-center justify-center">
                  <Bot className="w-5 h-5 text-white" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-white">Twin Assistant</h3>
                  <p className="text-xs text-gray-400">AI Story Advisor</p>
                </div>
              </div>
              <button
                onClick={() => setChatOpen(false)}
                className="text-gray-400 hover:text-white transition"
              >
                ×
              </button>
            </div>

            <div className="h-64 p-4 overflow-auto space-y-3 bg-[#121212]/50">
              {/* User Message */}
              <div className="flex justify-end">
                <div className="bg-[#0A84FF] text-white px-4 py-2 rounded-lg rounded-tr-sm max-w-[80%]">
                  <p className="text-sm">
                    Can Naruto learn Rasengan at this point in the story?
                  </p>
                </div>
              </div>

              {/* AI Response */}
              <div className="flex justify-start">
                <div className="bg-[#2A2A2A] border border-gray-700 text-white px-4 py-2 rounded-lg rounded-tl-sm max-w-[80%]">
                  <p className="text-sm">
                    Yes! Based on the current timeline (Chapter 18), Naruto has completed
                    training with Jiraiya. His chakra level is 3, which meets the minimum
                    requirement for basic Rasengan. ✓
                  </p>
                  <p className="text-xs text-gray-400 mt-2">
                    However, advanced variants remain locked until Chakra Lvl 5+.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-4 border-t border-gray-800 bg-[#1A1A1A]">
              <div className="flex gap-2">
                <input
                  type="text"
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Ask about story consistency..."
                  className="flex-1 bg-[#2A2A2A] border border-gray-700 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-500 focus:outline-none focus:border-[#0A84FF] transition"
                />
                <button className="bg-[#0A84FF] hover:bg-[#0A94FF] text-white p-2 rounded-lg transition">
                  <Send className="w-5 h-5" />
                </button>
              </div>
            </div>
          </div>
        )}

        {!chatOpen && (
          <button
            onClick={() => setChatOpen(true)}
            className="fixed bottom-8 right-8 w-14 h-14 bg-[#0A84FF] hover:bg-[#0A94FF] rounded-full shadow-lg shadow-[#0A84FF]/30 flex items-center justify-center transition"
          >
            <Bot className="w-6 h-6 text-white" />
          </button>
        )}
      </div>
    </div>
  );
}

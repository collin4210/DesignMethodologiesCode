import image_b6743f1652de3d2b20ae76359c8df78c7a45fae3 from 'figma:asset/b6743f1652de3d2b20ae76359c8df78c7a45fae3.png';
import image_b062b11008cf4a4e6eeb2c2bef0c5ac9ea5a3314 from 'figma:asset/b062b11008cf4a4e6eeb2c2bef0c5ac9ea5a3314.png';
import { useState } from 'react';
import { Home, Upload, Settings, Send, Bot, AlertCircle, CheckCircle2, ChevronDown } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

type Message = {
  id: string;
  type: 'user' | 'ai';
  content: string;
  status?: 'conflict' | 'approved' | 'neutral';
  timestamp: string;
  image?: string;
  analysis?: {
    title: string;
    details: string[];
    severity?: number;
    checks?: { label: string; passed: boolean }[];
  };
};

const mockMessages: Message[] = [
  {
    id: '1',
    type: 'user',
    content: 'Can you analyze this sketch for me? I want to make sure it fits the timeline.',
    timestamp: '10:24',
    image: image_b062b11008cf4a4e6eeb2c2bef0c5ac9ea5a3314,
  },
  {
    id: '2',
    type: 'ai',
    content: 'I\'ve analyzed your sketch. I found a logic conflict that needs attention.',
    status: 'conflict',
    timestamp: '10:25',
    analysis: {
      title: 'LOGIC CONFLICT',
      details: [
        'Character ability level inconsistent with established timeline position.',
        'In Chapter 12, Naruto is at Genin rank (Chakra: Lvl 2).',
        'Current drawing shows advanced Rasengan technique (requires Chakra: Lvl 5+).',
      ],
      severity: 85,
    },
  },
  {
    id: '3',
    type: 'user',
    content: 'What do you suggest I do?',
    timestamp: '10:26',
  },
  {
    id: '4',
    type: 'ai',
    content: 'I recommend two options: 1) Adjust the technique to a basic form that matches his current skill level, or 2) Update the character stats in the database to reflect timeline progression.',
    status: 'neutral',
    timestamp: '10:26',
  },
  {
    id: '5',
    type: 'user',
    content: 'I\'ve updated it. Here\'s the new version with the shadow clones.',
    timestamp: '10:32',
    image: image_b6743f1652de3d2b20ae76359c8df78c7a45fae3,
  },
  {
    id: '6',
    type: 'ai',
    content: 'Perfect! This version passes all consistency checks.',
    status: 'approved',
    timestamp: '10:33',
    analysis: {
      title: 'APPROVED',
      details: [
        'Timeline consistency validated (Chapter 18, Post-training arc)',
        'Shadow Clone technique matches current skill level',
        'Scene composition and emotional arc maintained',
      ],
      checks: [
        { label: 'Timeline Consistency', passed: true },
        { label: 'Character Abilities', passed: true },
        { label: 'Scene Composition', passed: true },
        { label: 'Environment Context', passed: true },
        { label: 'Emotional Arc', passed: true },
      ],
    },
  },
  {
    id: '7',
    type: 'user',
    content: 'Awesome! Can I export this now?',
    timestamp: '10:34',
  },
  {
    id: '8',
    type: 'ai',
    content: 'Yes! Your sketch is ready for the inking stage. Confidence score: 98%. Would you like to export now?',
    status: 'approved',
    timestamp: '10:34',
  },
];

export function ChatScreen() {
  const [messages] = useState<Message[]>(mockMessages);
  const [inputMessage, setInputMessage] = useState('');
  const [expandedAnalysis, setExpandedAnalysis] = useState<string | null>(null);

  const handleSend = () => {
    if (inputMessage.trim()) {
      // In a real app, this would send the message
      setInputMessage('');
    }
  };

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

      {/* Chat Area */}
      <div className="flex-1 flex flex-col bg-[#121212]">
        {/* Chat Header */}
        <div className="bg-[#1A1A1A] border-b border-gray-800 px-6 py-4 flex items-center gap-3">
          <div className="w-10 h-10 rounded-full bg-gradient-to-br from-[#0A84FF] to-[#0A64CF] flex items-center justify-center">
            <Bot className="w-6 h-6 text-white" />
          </div>
          <div>
            <h2 className="text-white font-medium">Twin Assistant</h2>
            <p className="text-xs text-gray-500">AI Story & Consistency Advisor</p>
          </div>
          <div className="ml-auto">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#30D158]"></div>
              <span className="text-xs text-gray-400">Online</span>
            </div>
          </div>
        </div>

        {/* Messages Area - Scrollable */}
        <div className="flex-1 overflow-y-auto px-6 py-6 space-y-6">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[75%] ${
                  message.type === 'user' ? 'items-end' : 'items-start'
                } flex flex-col gap-2`}
              >
                {/* Message Bubble */}
                <div
                  className={`rounded-2xl px-4 py-3 ${
                    message.type === 'user'
                      ? 'bg-[#0A84FF] text-white rounded-tr-sm'
                      : 'bg-[#1E1E1E] border border-gray-800 text-white rounded-tl-sm'
                  }`}
                >
                  {message.image && (
                    <div className="mb-3 rounded-lg overflow-hidden bg-gray-900">
                      <ImageWithFallback
                        src={message.image}
                        alt="Uploaded sketch"
                        className="w-full h-64 object-contain"
                      />
                    </div>
                  )}
                  <p className="text-sm leading-relaxed">{message.content}</p>
                </div>

                {/* Analysis Card */}
                {message.analysis && (
                  <div
                    className={`w-full rounded-lg border-2 overflow-hidden ${
                      message.status === 'conflict'
                        ? 'border-[#FF453A] bg-[#FF453A]/5'
                        : 'border-[#30D158] bg-[#30D158]/5'
                    }`}
                  >
                    {/* Analysis Header */}
                    <div
                      className={`px-4 py-3 flex items-center justify-between cursor-pointer ${
                        message.status === 'conflict'
                          ? 'bg-[#FF453A]/10'
                          : 'bg-[#30D158]/10'
                      }`}
                      onClick={() =>
                        setExpandedAnalysis(
                          expandedAnalysis === message.id ? null : message.id
                        )
                      }
                    >
                      <div className="flex items-center gap-2">
                        {message.status === 'conflict' ? (
                          <AlertCircle className="w-5 h-5 text-[#FF453A]" />
                        ) : (
                          <CheckCircle2 className="w-5 h-5 text-[#30D158]" />
                        )}
                        <span
                          className={`font-semibold text-sm tracking-wide ${
                            message.status === 'conflict'
                              ? 'text-[#FF453A]'
                              : 'text-[#30D158]'
                          }`}
                        >
                          {message.analysis.title}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-gray-400 transition-transform ${
                          expandedAnalysis === message.id ? 'rotate-180' : ''
                        }`}
                      />
                    </div>

                    {/* Analysis Details - Expandable */}
                    {expandedAnalysis === message.id && (
                      <div className="px-4 py-3 space-y-3 bg-[#1A1A1A] border-t border-gray-800">
                        {message.analysis.details.map((detail, idx) => (
                          <p key={idx} className="text-xs text-gray-300 leading-relaxed">
                            {detail}
                          </p>
                        ))}

                        {message.analysis.severity && (
                          <div className="pt-2">
                            <p className="text-xs text-gray-500 mb-2">Conflict Severity:</p>
                            <div className="flex items-center gap-2">
                              <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                                <div
                                  className="h-full bg-[#FF453A]"
                                  style={{ width: `${message.analysis.severity}%` }}
                                ></div>
                              </div>
                              <span className="text-xs text-[#FF453A] font-mono">
                                {message.analysis.severity}%
                              </span>
                            </div>
                          </div>
                        )}

                        {message.analysis.checks && (
                          <div className="pt-2 space-y-2">
                            {message.analysis.checks.map((check, idx) => (
                              <div key={idx} className="flex items-center gap-2">
                                <CheckCircle2 className="w-4 h-4 text-[#30D158] flex-shrink-0" />
                                <span className="text-xs text-gray-300">{check.label}</span>
                              </div>
                            ))}
                          </div>
                        )}
                      </div>
                    )}
                  </div>
                )}

                {/* Timestamp */}
                <span className="text-xs text-gray-600 px-2">{message.timestamp}</span>
              </div>
            </div>
          ))}
        </div>

        {/* Input Area */}
        <div className="bg-[#1A1A1A] border-t border-gray-800 px-6 py-4">
          <div className="flex gap-3 items-end">
            <div className="flex-1 bg-[#2A2A2A] border border-gray-700 rounded-xl overflow-hidden focus-within:border-[#0A84FF] transition">
              <textarea
                value={inputMessage}
                onChange={(e) => setInputMessage(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && !e.shiftKey) {
                    e.preventDefault();
                    handleSend();
                  }
                }}
                placeholder="Ask about story consistency, upload a sketch, or request analysis..."
                className="w-full bg-transparent text-white text-sm px-4 py-3 resize-none focus:outline-none placeholder-gray-500"
                rows={2}
              />
            </div>
            <button
              onClick={handleSend}
              disabled={!inputMessage.trim()}
              className="bg-[#0A84FF] hover:bg-[#0A94FF] disabled:bg-gray-700 disabled:cursor-not-allowed text-white p-3 rounded-xl transition flex-shrink-0"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
          <p className="text-xs text-gray-600 mt-2 px-1">
            Press Enter to send, Shift+Enter for new line
          </p>
        </div>
      </div>
    </div>
  );
}
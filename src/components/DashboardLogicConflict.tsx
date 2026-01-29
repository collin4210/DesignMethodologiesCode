import image_b062b11008cf4a4e6eeb2c2bef0c5ac9ea5a3314 from 'figma:asset/b062b11008cf4a4e6eeb2c2bef0c5ac9ea5a3314.png';
import { Home, Upload, Settings, AlertCircle, ChevronRight } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DashboardLogicConflict() {
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

      {/* Center Canvas */}
      <div className="flex-1 flex items-center justify-center p-8">
        <div className="relative w-full h-full max-w-4xl bg-[#1E1E1E] rounded-lg overflow-hidden border border-gray-800">
          <div className="absolute top-4 left-4 text-xs text-gray-500 font-mono">
            sketch_v1_naruto_energysphere.jpg
          </div>
          <ImageWithFallback
            src={image_b062b11008cf4a4e6eeb2c2bef0c5ac9ea5a3314}
            alt="Manga sketch"
            className="w-full h-full object-contain opacity-90"
          />
          
          {/* Analysis overlay */}
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-2 rounded text-xs font-mono text-gray-300">
            Layer: Pencil Draft | Resolution: 3000x4000px
          </div>
        </div>
      </div>

      {/* Right Analysis Panel - RED */}
      <div className="w-96 bg-[#1A1A1A] border-l-4 border-[#FF453A] shadow-[0_0_20px_rgba(255,69,58,0.3)] flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-sm font-medium text-gray-400 mb-4">ANALYSIS</h2>
          
          {/* Red Alert Badge */}
          <div className="inline-flex items-center gap-2 bg-[#FF453A]/10 border border-[#FF453A] rounded-full px-6 py-3 mb-6">
            <AlertCircle className="w-5 h-5 text-[#FF453A]" />
            <span className="font-semibold text-[#FF453A] tracking-wide">LOGIC CONFLICT</span>
          </div>

          {/* Technical Analysis */}
          <div className="space-y-4 font-mono text-xs text-gray-300">
            <div>
              <p className="text-gray-500 mb-1">// Detected Issue:</p>
              <p className="text-white">Character ability level inconsistent with established timeline position.</p>
            </div>
            
            <div>
              <p className="text-gray-500 mb-1">// Context:</p>
              <p className="leading-relaxed">
                In Chapter 12, Naruto is at Genin rank (Chakra: Lvl 2). 
                Current drawing shows advanced Rasengan technique (requires Chakra: Lvl 5+).
              </p>
            </div>

            <div>
              <p className="text-gray-500 mb-1">// Conflict Severity:</p>
              <div className="flex items-center gap-2">
                <div className="flex-1 h-2 bg-gray-800 rounded-full overflow-hidden">
                  <div className="w-[85%] h-full bg-[#FF453A]"></div>
                </div>
                <span className="text-[#FF453A]">85%</span>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-gray-500 mb-2">// Affected Elements:</p>
              <ul className="space-y-1 pl-4">
                <li className="flex items-start gap-2">
                  <span className="text-[#FF453A]">×</span>
                  <span>Energy sphere complexity</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF453A]">×</span>
                  <span>Character skill timeline</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[#FF453A]">×</span>
                  <span>Narrative progression arc</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Suggestions */}
        <div className="p-6 flex-1 overflow-auto">
          <h3 className="text-xs font-medium text-gray-500 mb-3">SUGGESTED ACTIONS</h3>
          <div className="space-y-2">
            <button className="w-full bg-[#2A2A2A] hover:bg-[#3A3A3A] border border-gray-700 rounded-lg p-3 text-left transition group">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Adjust to basic technique</span>
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition" />
              </div>
              <p className="text-xs text-gray-500 mt-1">Modify energy sphere to match skill level</p>
            </button>
            
            <button className="w-full bg-[#2A2A2A] hover:bg-[#3A3A3A] border border-gray-700 rounded-lg p-3 text-left transition group">
              <div className="flex items-center justify-between">
                <span className="text-sm text-white">Update character stats</span>
                <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition" />
              </div>
              <p className="text-xs text-gray-500 mt-1">Advance timeline position in database</p>
            </button>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="p-6 border-t border-gray-800">
          <button className="w-full bg-[#FF453A] hover:bg-[#FF5A4A] text-white font-medium py-3 rounded-lg transition shadow-lg shadow-[#FF453A]/20">
            Show Alternative
          </button>
        </div>
      </div>
    </div>
  );
}

import image_b6743f1652de3d2b20ae76359c8df78c7a45fae3 from 'figma:asset/b6743f1652de3d2b20ae76359c8df78c7a45fae3.png';
import { Home, Upload, Settings, CheckCircle2, Download } from 'lucide-react';
import { ImageWithFallback } from './figma/ImageWithFallback';

export function DashboardApproved() {
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
            sketch_v2_shadowclone_attack.jpg
          </div>
          <ImageWithFallback
            src={image_b6743f1652de3d2b20ae76359c8df78c7a45fae3}
            alt="Manga action sketch"
            className="w-full h-full object-contain opacity-90"
          />
          
          {/* Analysis overlay */}
          <div className="absolute bottom-4 left-4 bg-black/60 backdrop-blur-sm px-3 py-2 rounded text-xs font-mono text-gray-300">
            Layer: Pencil Draft | Resolution: 3000x4000px | Status: Validated
          </div>

          {/* Green checkmark overlay */}
          <div className="absolute top-4 right-4 bg-[#30D158]/10 backdrop-blur-sm border border-[#30D158] rounded-full p-2">
            <CheckCircle2 className="w-6 h-6 text-[#30D158]" />
          </div>
        </div>
      </div>

      {/* Right Analysis Panel - GREEN */}
      <div className="w-96 bg-[#1A1A1A] border-l-4 border-[#30D158] shadow-[0_0_20px_rgba(48,209,88,0.3)] flex flex-col">
        <div className="p-6 border-b border-gray-800">
          <h2 className="text-sm font-medium text-gray-400 mb-4">VALIDATION</h2>
          
          {/* Green Approved Badge */}
          <div className="inline-flex items-center gap-2 bg-[#30D158]/10 border border-[#30D158] rounded-full px-6 py-3 mb-6">
            <CheckCircle2 className="w-5 h-5 text-[#30D158]" />
            <span className="font-semibold text-[#30D158] tracking-wide">APPROVED</span>
          </div>

          {/* Narrative Consistency Checklist */}
          <div className="space-y-4">
            <h3 className="text-xs font-medium text-gray-500 mb-3">NARRATIVE CONSISTENCY</h3>
            
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#30D158]/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#30D158]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">Timeline Consistency</p>
                  <p className="text-xs text-gray-500 mt-0.5">Chapter 18, Post-training arc</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#30D158]/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#30D158]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">Character Abilities</p>
                  <p className="text-xs text-gray-500 mt-0.5">Shadow Clone unlocked ✓</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#30D158]/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#30D158]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">Scene Composition</p>
                  <p className="text-xs text-gray-500 mt-0.5">Dynamic poses validated</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#30D158]/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#30D158]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">Environment Context</p>
                  <p className="text-xs text-gray-500 mt-0.5">Training grounds location</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <div className="mt-0.5 w-5 h-5 rounded-full bg-[#30D158]/20 flex items-center justify-center flex-shrink-0">
                  <CheckCircle2 className="w-4 h-4 text-[#30D158]" />
                </div>
                <div className="flex-1">
                  <p className="text-sm text-white">Emotional Arc</p>
                  <p className="text-xs text-gray-500 mt-0.5">Determination theme maintained</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Stats Summary */}
        <div className="p-6 flex-1 overflow-auto font-mono text-xs">
          <h3 className="text-gray-500 mb-3">// Analysis Stats:</h3>
          <div className="space-y-2 text-gray-300">
            <div className="flex justify-between">
              <span>Checks Passed:</span>
              <span className="text-[#30D158]">5/5</span>
            </div>
            <div className="flex justify-between">
              <span>Confidence Score:</span>
              <span className="text-[#30D158]">98%</span>
            </div>
            <div className="flex justify-between">
              <span>Processing Time:</span>
              <span className="text-gray-400">1.4s</span>
            </div>
            <div className="flex justify-between">
              <span>Last Updated:</span>
              <span className="text-gray-400">2m ago</span>
            </div>
          </div>

          <div className="mt-6 p-3 bg-[#30D158]/5 border border-[#30D158]/20 rounded-lg">
            <p className="text-[#30D158] text-xs">
              ✓ Ready for next pipeline stage
            </p>
          </div>
        </div>

        {/* Bottom Action */}
        <div className="p-6 border-t border-gray-800">
          <button className="w-full bg-[#30D158] hover:bg-[#3AE162] text-black font-semibold py-3 rounded-lg transition shadow-lg shadow-[#30D158]/20 flex items-center justify-center gap-2">
            <Download className="w-5 h-5" />
            EXPORT TO INKING
          </button>
        </div>
      </div>
    </div>
  );
}

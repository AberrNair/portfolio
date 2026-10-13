import React, { useState } from 'react';
import { skillsHeatmapData } from '../data/portfolioData';
import IconHelper from './IconHelper';
import { Sparkles, Check, CheckCircle2, HelpCircle, Layers, ArrowRight, Crown } from 'lucide-react';

export default function SkillsHeatmap() {
  const [selectedSkill, setSelectedSkill] = useState(skillsHeatmapData.rows[0]);
  const [hoveredColumn, setHoveredColumn] = useState(null);

  const { columns, rows } = skillsHeatmapData;

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#0D131F] relative overflow-hidden text-slate-200">
      {/* Background stone grid */}
      <div className="absolute inset-0 bg-got-stone pointer-events-none opacity-40" />

      {/* Ambiance blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 border border-amber-500/30 text-amber-300 text-xs font-cinzel font-bold uppercase tracking-widest mb-3">
            <Layers className="w-3.5 h-3.5 text-amber-400" />
            <span>The Grand Skill Matrix</span>
          </div>
          <h2 className="font-cinzel font-black text-3xl sm:text-4xl md:text-5xl text-white tracking-tight">
            How My Interests <span className="text-gold-gradient">Build My Skills</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-slate-400 font-body">
            Every non-academic pursuit fuels specific core competencies. Tap or hover on any skill to trace its origins.
          </p>
        </div>

        {/* Matrix Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Interactive Heatmap Table */}
          <div className="lg:col-span-8 bg-[#111827]/90 rounded-card-lg p-5 sm:p-7 border border-amber-500/25 shadow-card-got overflow-x-auto">
            <div className="min-w-[560px]">
              
              {/* Header Row */}
              <div className="grid grid-cols-12 gap-2 pb-4 border-b-2 border-amber-500/20 text-xs font-cinzel font-bold uppercase tracking-widest text-amber-400">
                <div className="col-span-4 flex items-center gap-1.5 pl-2">
                  <span>Skill Domain</span>
                </div>
                {columns.map((col) => (
                  <div
                    key={col.id}
                    onMouseEnter={() => setHoveredColumn(col.id)}
                    onMouseLeave={() => setHoveredColumn(null)}
                    className={`col-span-1 text-center py-1 rounded-lg transition-colors cursor-pointer ${
                      hoveredColumn === col.id ? 'bg-amber-500 text-black shadow-xs font-bold' : 'hover:bg-amber-500/10'
                    }`}
                    style={{ flex: 1 }}
                  >
                    <div className="flex flex-col items-center">
                      <IconHelper name={col.icon} className="w-4 h-4 mb-1" />
                      <span className="text-[11px] font-bold">{col.label}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Skill Rows */}
              <div className="divide-y divide-amber-500/10 mt-2">
                {rows.map((row) => {
                  const isSelected = selectedSkill.skill === row.skill;
                  return (
                    <div
                      key={row.skill}
                      onClick={() => setSelectedSkill(row)}
                      onMouseEnter={() => setSelectedSkill(row)}
                      className={`grid grid-cols-12 gap-2 py-3.5 px-2 rounded-xl items-center cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-black shadow-[0_0_20px_rgba(245,158,11,0.35)]'
                          : 'hover:bg-[#1E293B]/80 text-slate-200'
                      }`}
                    >
                      {/* Skill Name */}
                      <div className="col-span-4 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-black' : 'bg-amber-400'}`} />
                        <span className="font-cinzel font-bold text-xs sm:text-sm tracking-wide">
                          {row.skill}
                        </span>
                      </div>

                      {/* Matrix Columns */}
                      {columns.map((col) => {
                        const hasDot = row.matrix[col.id];
                        const isColHovered = hoveredColumn === col.id;
                        return (
                          <div
                            key={col.id}
                            className="col-span-1 flex items-center justify-center"
                            style={{ flex: 1 }}
                          >
                            {hasDot ? (
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                                  isSelected
                                    ? 'bg-black text-amber-400 font-bold scale-110 shadow-xs'
                                    : isColHovered
                                    ? 'bg-amber-400 text-black scale-110'
                                    : 'bg-amber-500/20 border border-amber-500 text-amber-300'
                                }`}
                                title={`${row.skill} is built through ${col.label}`}
                              >
                                <span className="text-[10px] leading-none">●</span>
                              </div>
                            ) : (
                              <span className={`text-xs ${isSelected ? 'text-black/30' : 'text-slate-600'}`}>
                                —
                              </span>
                            )}
                          </div>
                        );
                      })}
                    </div>
                  );
                })}
              </div>

            </div>
          </div>

          {/* Active Skill Breakdown Card */}
          <div className="lg:col-span-4">
            <div
              className="bg-[#111827]/95 rounded-card-lg p-6 sm:p-7 border border-amber-500/30 shadow-card-got relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-red-600 via-amber-400 to-amber-600" />

              <span className="text-xs font-cinzel font-bold uppercase tracking-widest text-amber-400 block mb-1">
                Selected Skill Details
              </span>

              <h3 className="font-cinzel font-black text-2xl text-gold-gradient mb-2">
                {selectedSkill.skill}
              </h3>

              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5 font-body">
                {selectedSkill.description}
              </p>

              {/* Built Through Chips */}
              <div className="border-t border-amber-500/15 pt-4">
                <span className="text-[11px] font-cinzel font-bold uppercase tracking-widest text-amber-300 block mb-2.5">
                  Built Directly Through:
                </span>

                <div className="space-y-2">
                  {columns
                    .filter((col) => selectedSkill.matrix[col.id])
                    .map((col) => (
                      <div
                        key={col.id}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-[#080B11]/90 border border-amber-500/20"
                      >
                        <div className="flex items-center gap-2">
                          <IconHelper name={col.icon} className="w-4 h-4 text-amber-400" />
                          <span className="text-xs font-cinzel font-bold text-slate-100">
                            {col.label}
                          </span>
                        </div>
                        <span className="text-[11px] text-amber-400 font-cinzel font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" />
                          <span>Active Factor</span>
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Hint badge */}
              <div className="mt-5 pt-3 border-t border-amber-500/15 flex items-center gap-1.5 text-[11px] text-slate-400 font-body">
                <HelpCircle className="w-3.5 h-3.5 text-amber-400" />
                <span>Hover over table rows to inspect each skill</span>
              </div>
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}

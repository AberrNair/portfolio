import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { skillsHeatmapData } from '../data/portfolioData';
import IconHelper from './IconHelper';
import { Sparkles, Check, CheckCircle2, HelpCircle, Layers, ArrowRight } from 'lucide-react';

export default function SkillsHeatmap() {
  const [selectedSkill, setSelectedSkill] = useState(skillsHeatmapData.rows[0]);
  const [hoveredColumn, setHoveredColumn] = useState(null);

  const { columns, rows } = skillsHeatmapData;

  return (
    <section id="skills" className="py-20 md:py-28 bg-[#FFF8F0] relative overflow-hidden">
      {/* Background court grid */}
      <div className="absolute inset-0 bg-court-pattern pointer-events-none opacity-40" />

      {/* Ambiance blobs */}
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#FFB703]/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-10 left-10 w-96 h-96 bg-[#0F766E]/10 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#134E4A]/10 text-[#0F766E] text-xs font-bold uppercase tracking-wider mb-3">
            <Layers className="w-3.5 h-3.5 text-[#FF6B4A]" />
            <span>Interactive Matrix</span>
          </div>
          <h2 className="font-heading font-extrabold text-3xl sm:text-4xl md:text-5xl text-[#134E4A] tracking-tight">
            How My Interests <span className="text-[#FF6B4A]">Build My Skills</span>
          </h2>
          <p className="mt-3 text-sm sm:text-base text-[#4B5563]">
            Every non-academic pursuit fuels specific core competencies. Tap or hover on any skill to trace its origins.
          </p>
        </div>

        {/* Matrix Container */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-12">
          
          {/* Interactive Heatmap Table (7 cols on lg) */}
          <div className="lg:col-span-8 bg-white rounded-card-lg p-5 sm:p-7 border border-[#0F766E]/15 shadow-soft overflow-x-auto">
            <div className="min-w-[560px]">
              
              {/* Header Row */}
              <div className="grid grid-cols-12 gap-2 pb-4 border-b-2 border-teal-100 text-xs font-bold uppercase tracking-wider text-[#134E4A]">
                <div className="col-span-4 flex items-center gap-1.5 pl-2">
                  <span>Skill Domain</span>
                </div>
                {columns.map((col) => (
                  <div
                    key={col.id}
                    onMouseEnter={() => setHoveredColumn(col.id)}
                    onMouseLeave={() => setHoveredColumn(null)}
                    className={`col-span-1 sm:col-span-1 md:col-span-1 text-center py-1 rounded-lg transition-colors cursor-pointer ${
                      hoveredColumn === col.id ? 'bg-[#FF6B4A] text-white shadow-xs' : 'hover:bg-teal-50'
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
              <div className="divide-y divide-gray-100 mt-2">
                {rows.map((row) => {
                  const isSelected = selectedSkill.skill === row.skill;
                  return (
                    <div
                      key={row.skill}
                      onClick={() => setSelectedSkill(row)}
                      onMouseEnter={() => setSelectedSkill(row)}
                      className={`grid grid-cols-12 gap-2 py-3.5 px-2 rounded-xl items-center cursor-pointer transition-all duration-200 ${
                        isSelected
                          ? 'bg-[#0F766E] text-white shadow-md'
                          : 'hover:bg-[#FFF8F0] text-[#1F2937]'
                      }`}
                    >
                      {/* Skill Name */}
                      <div className="col-span-4 flex items-center gap-2">
                        <span className={`w-2 h-2 rounded-full ${isSelected ? 'bg-[#FFB703]' : 'bg-[#FF6B4A]'}`} />
                        <span className="font-heading font-bold text-xs sm:text-sm">
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
                            className="col-span-1 sm:col-span-1 md:col-span-1 flex items-center justify-center"
                            style={{ flex: 1 }}
                          >
                            {hasDot ? (
                              <div
                                className={`w-6 h-6 rounded-full flex items-center justify-center transition-transform ${
                                  isSelected
                                    ? 'bg-[#FFB703] text-[#134E4A] font-bold scale-110 shadow-xs'
                                    : isColHovered
                                    ? 'bg-[#FF6B4A] text-white scale-110'
                                    : 'bg-[#0F766E] text-white'
                                }`}
                                title={`${row.skill} is built through ${col.label}`}
                              >
                                <span className="text-[10px] leading-none">●</span>
                              </div>
                            ) : (
                              <span className={`text-xs ${isSelected ? 'text-teal-300/40' : 'text-gray-200'}`}>
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

          {/* Active Skill Breakdown Card (4 cols on lg) */}
          <div className="lg:col-span-4">
            <motion.div
              key={selectedSkill.skill}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-card-lg p-6 sm:p-7 border border-[#0F766E]/15 shadow-soft relative overflow-hidden"
            >
              <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#FF6B4A] to-[#FFB703]" />

              <span className="text-xs font-bold uppercase tracking-wider text-[#FF6B4A] block mb-1">
                Selected Skill Details
              </span>

              <h3 className="font-heading font-extrabold text-2xl text-[#134E4A] mb-2">
                {selectedSkill.skill}
              </h3>

              <p className="text-xs sm:text-sm text-[#4B5563] leading-relaxed mb-5">
                {selectedSkill.description}
              </p>

              {/* Built Through Chips */}
              <div className="border-t border-gray-100 pt-4">
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#134E4A] block mb-2.5">
                  Built Directly Through:
                </span>

                <div className="space-y-2">
                  {columns
                    .filter((col) => selectedSkill.matrix[col.id])
                    .map((col) => (
                      <div
                        key={col.id}
                        className="flex items-center justify-between p-2.5 rounded-lg bg-[#FFF8F0] border border-teal-100"
                      >
                        <div className="flex items-center gap-2">
                          <IconHelper name={col.icon} className="w-4 h-4 text-[#0F766E]" />
                          <span className="text-xs font-bold text-[#134E4A]">
                            {col.label}
                          </span>
                        </div>
                        <span className="text-[11px] text-[#FF6B4A] font-semibold flex items-center gap-1">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Active Factor</span>
                        </span>
                      </div>
                    ))}
                </div>
              </div>

              {/* Hint badge */}
              <div className="mt-5 pt-3 border-t border-gray-100 flex items-center gap-1.5 text-[11px] text-[#6B7280]">
                <HelpCircle className="w-3.5 h-3.5 text-[#0F766E]" />
                <span>Hover over table rows to inspect each skill</span>
              </div>
            </motion.div>
          </div>

        </div>

      </div>
    </section>
  );
}

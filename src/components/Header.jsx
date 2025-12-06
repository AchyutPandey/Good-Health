import React from 'react';
import { Flag, Sun, Moon, Gauge } from 'lucide-react';

export const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="relative bg-gradient-to-r from-merc-silver via-white to-merc-teal dark:from-rb-blue dark:via-rb-blue dark:to-rb-red text-gray-900 dark:text-white shadow-lg border-b-4 border-merc-teal dark:border-rb-yellow transition-all duration-500">
      {/* Carbon fiber pattern overlay (simulated) */}
      <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] opacity-10 pointer-events-none mix-blend-overlay"></div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-5">
          <div className="flex items-center space-x-4">
            <div className="flex items-center justify-center w-12 h-12 bg-merc-black/10 dark:bg-white/10 rounded-lg skew-x-[-10deg] border border-merc-black/20 dark:border-white/20">
              <Gauge className="w-8 h-8 text-merc-teal dark:text-rb-yellow transform skew-x-[10deg]" />
            </div>
            <div>
              <h1 className="text-3xl font-black tracking-tighter uppercase italic font-display">
                Good<span className="text-merc-teal dark:text-rb-red">Health</span>
              </h1>
              <div className="flex items-center space-x-2 text-xs font-bold uppercase tracking-[0.2em] text-gray-600 dark:text-gray-400">
                <Flag className="w-3 h-3 text-rb-red" />
                <span>Performance News</span>
              </div>
            </div>
          </div>

          <div className="flex items-center space-x-6">
            {/* DRS Indicator - Dynamic */}
            <div className={`hidden md:flex items-center space-x-1 text-xs font-mono font-bold transition-colors duration-300 ${isDarkMode ? 'text-green-400' : 'text-gray-400'}`}>
              <span className={`w-2 h-2 rounded-full ${isDarkMode ? 'bg-green-500 animate-pulse shadow-[0_0_8px_rgba(34,197,94,0.8)]' : 'bg-gray-400'}`}></span>
              <span>{isDarkMode ? 'DRS ENABLED' : 'DRS DISABLED'}</span>
            </div>

            {/* Team Logos */}
            <div className="hidden md:block h-16 opacity-100 transition-opacity duration-300">
              {isDarkMode ? (
                <img
                  src="/rb-logo2.png"
                  alt="Red Bull Racing"
                  className="h-full w-auto object-contain"
                />
              ) : (
                <img
                  src="/merc-logo.png"
                  alt="Mercedes AMG"
                  className="h-full w-auto object-contain"
                />
              )}
            </div>

            <button
              onClick={toggleTheme}
              className="group relative p-2 overflow-hidden rounded-full bg-gray-200/80 dark:bg-white/10 hover:bg-merc-teal/20 dark:hover:bg-rb-yellow/20 transition-all duration-300 focus:outline-none ring-2 ring-gray-900/20 dark:ring-white/20 shadow-sm"
              aria-label="Toggle dark mode"
            >
              <div className="relative z-10">
                {isDarkMode ? (
                  <Sun className="w-6 h-6 text-rb-yellow group-hover:rotate-90 transition-transform duration-500" />
                ) : (
                  <Moon className="w-6 h-6 text-merc-teal group-hover:-rotate-12 transition-transform duration-500" />
                )}
              </div>
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
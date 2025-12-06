import React from 'react';
import { Activity, Sparkles, Sun, Moon } from 'lucide-react';

export const Header = ({ isDarkMode, toggleTheme }) => {
  return (
    <header className="bg-gradient-to-r from-emerald-600 via-blue-600 to-purple-600 text-white shadow-lg dark:shadow-gray-900/50 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between py-6">
          <div className="flex items-center space-x-3">
            <div className="flex items-center space-x-2">
              {/* <Activity className="w-8 h-8 animate-pulse" /> */}
              <h1 className="text-2xl font-bold tracking-tight">Good Health</h1>
            </div>
          </div>

          <div className="flex items-center space-x-6">

            <button
              onClick={toggleTheme}
              className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
              aria-label="Toggle dark mode"
            >
              {isDarkMode ? (
                <Sun className="w-6 h-6 text-yellow-300" />
              ) : (
                <Moon className="w-6 h-6 text-white" />
              )}
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};
import React, { useState } from 'react';
import { Calendar, ExternalLink, ChevronDown, ChevronUp, Sparkles, Zap, Timer } from 'lucide-react';
import { useArticleAI } from '../hooks/useArticleAI';
import { LoadingSpinner } from './ui/LoadingSpinner';
import { ErrorBanner } from './ui/ErrorBanner';

export const ArticleCard = ({ article, onArticleClick }) => {
  const [showTakeaways, setShowTakeaways] = useState(false);
  const { summaryState, generateSummary, retrySummary } = useArticleAI();

  const handleGenerateSummary = async () => {
    try {
      await generateSummary(article._id);
    } catch (error) {
      // Error is handled by the hook
    }
  };

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric'
    });
  };

  const currentSummary = summaryState.summary || article.summary;
  const currentTakeaways = summaryState.takeaways || article.takeaways;

  return (
    <article className="group relative bg-white dark:bg-rb-blue/50 rounded-sm overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 border-l-4 border-merc-teal dark:border-rb-red hover:-translate-y-1">
      {/* Aerodynamic decorative element */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-bl from-merc-silver/20 dark:from-rb-yellow/10 to-transparent -skew-x-12 transform translate-x-8 -translate-y-8" />

      <div className="p-6">
        <div className="flex items-start space-x-4 mb-4 relative z-10">
          {article.imageUrl && (
            <div className="relative">
              <img
                src={article.imageUrl}
                alt=""
                className="w-24 h-24 rounded-sm object-cover flex-shrink-0 shadow-md ring-2 ring-gray-100 dark:ring-white/10"
              />
              <div className="absolute -bottom-2 -right-2 bg-merc-black text-white text-[10px] font-bold px-2 py-1 uppercase tracking-wider skew-x-[-10deg]">
                Paddock Intel
              </div>
            </div>
          )}
          <div className="flex-1 min-w-0">
            <h2 className="text-xl font-bold text-gray-900 dark:text-white mb-2 line-clamp-2 leading-tight font-display tracking-tight uppercase italic">
              {article.title}
            </h2>
            <div className="flex items-center space-x-4 text-xs font-mono text-gray-500 dark:text-gray-400 uppercase tracking-widest">
              <div className="flex items-center space-x-1">
                <Calendar className="w-3 h-3" />
                <span>{formatDate(article.datePublished)}</span>
              </div>
              <div className="flex items-center space-x-1">
                <Timer className="w-3 h-3 text-rb-red dark:text-rb-yellow" />
                <span>Lap Time: 3m</span>
              </div>
            </div>
          </div>
        </div>

        {/* Summary Section */}
        <div className="mb-4">
          {summaryState.error && (
            <ErrorBanner
              message={summaryState.error}
              onRetry={() => retrySummary(article._id)}
              className="mb-4"
            />
          )}

          {currentSummary ? (
            <div className="space-y-3">
              <div className="bg-merc-silver/30 dark:bg-black/20 border-l-2 border-merc-teal dark:border-rb-yellow p-4 transition-colors duration-200">
                <div className="flex items-center space-x-2 mb-2">
                  <Zap className="w-4 h-4 text-merc-teal dark:text-rb-yellow fill-current" />
                  <span className="text-sm font-bold text-merc-teal dark:text-rb-yellow uppercase tracking-wider">Telemetry Data</span>
                </div>
                <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-sans text-sm border-l border-white/5 pl-2">{currentSummary}</p>
              </div>

              {currentTakeaways && currentTakeaways.length > 0 && (
                <div>
                  <button
                    onClick={() => setShowTakeaways(!showTakeaways)}
                    className="flex items-center space-x-2 text-sm font-bold text-gray-600 dark:text-gray-400 hover:text-merc-teal dark:hover:text-rb-yellow transition-colors duration-200 uppercase tracking-wide"
                  >
                    <span>Key Sectors</span>
                    {showTakeaways ? (
                      <ChevronUp className="w-4 h-4" />
                    ) : (
                      <ChevronDown className="w-4 h-4" />
                    )}
                  </button>

                  {showTakeaways && (
                    <div className="mt-2 bg-gray-50 dark:bg-black/40 rounded-sm p-4 transition-colors duration-200">
                      <ul className="space-y-2">
                        {currentTakeaways.map((takeaway, index) => (
                          <li key={index} className="flex items-start space-x-2">
                            <div className="w-1.5 h-1.5 bg-rb-red dark:bg-rb-yellow transform rotate-45 mt-2 flex-shrink-0" />
                            <span className="text-gray-700 dark:text-gray-300 text-sm font-mono">{takeaway}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                </div>
              )}
            </div>
          ) : (
            <button
              onClick={handleGenerateSummary}
              disabled={summaryState.isLoading}
              className="w-full relative overflow-hidden group/btn bg-merc-black/5 dark:bg-white/5 hover:bg-merc-teal dark:hover:bg-rb-red text-gray-900 dark:text-white px-4 py-3 font-bold uppercase tracking-widest transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center space-x-2 border border-gray-200 dark:border-white/10"
            >
              <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover/btn:translate-x-full transition-transform duration-700 ease-in-out" />
              {summaryState.isLoading ? (
                <LoadingSpinner size="sm" className="text-current" />
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Run Simulation</span>
                </>
              )}
            </button>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center justify-between pt-4 border-t border-gray-100 dark:border-white/5">
          <button
            onClick={() => onArticleClick(article)}
            className="group/read inline-flex items-center space-x-2 text-sm font-bold text-gray-900 dark:text-white hover:text-merc-teal dark:hover:text-rb-yellow transition-colors duration-200 uppercase tracking-wider"
          >
            <span>Full Analysis</span>
            <ExternalLink className="w-4 h-4 transform group-hover/read:translate-x-1 transition-transform" />
          </button>

          {currentSummary && (
            <button
              onClick={handleGenerateSummary}
              disabled={summaryState.isLoading}
              className="text-xs font-mono text-gray-500 hover:text-rb-red dark:hover:text-rb-yellow transition-colors duration-200 uppercase"
            >
              {summaryState.isLoading ? 'Calculating...' : 'Re-Run Model'}
            </button>
          )}
        </div>
      </div>
    </article>
  );
};
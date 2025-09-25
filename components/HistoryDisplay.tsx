/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

interface HistoryDisplayProps {
  topics: string[];
  currentIndex: number;
  onTopicClick: (index: number) => void;
  onClear: () => void;
}

const HistoryDisplay: React.FC<HistoryDisplayProps> = ({ topics, currentIndex, onTopicClick, onClear }) => {
  // Only render the history section if there's more than one item to show.
  if (topics.length <= 1) {
    return null;
  }

  return (
    <div className="history-container">
      <div className="history-header">
        <h2>History</h2>
        <button onClick={onClear} className="clear-button">Clear</button>
      </div>
      <ul className="history-list">
        {topics.map((topic, index) => (
          <li key={`${topic}-${index}`}>
            <button
              onClick={() => onTopicClick(index)}
              className={index === currentIndex ? 'history-item active' : 'history-item'}
              aria-current={index === currentIndex ? 'page' : undefined}
              disabled={index === currentIndex}
            >
              {topic}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default HistoryDisplay;
/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
*/
import React from 'react';

// This is a new CSS class that will be defined in index.html
const skeletonBarClass = "skeleton-bar";

const LoadingSkeleton: React.FC = () => {
  return (
    <div aria-label="Loading content..." role="progressbar">
      <div className={skeletonBarClass} style={{ width: '100%' }}></div>
      <div className={skeletonBarClass} style={{ width: '83.33%' }}></div>
      <div className={skeletonBarClass} style={{ width: '100%' }}></div>
      <div className={skeletonBarClass} style={{ width: '75%' }}></div>
      <div className={skeletonBarClass} style={{ width: '66.66%' }}></div>
    </div>
  );
};

// Add the CSS for .skeleton-bar to your main stylesheet (e.g., in index.html)
/*
.skeleton-bar {
  animation: shimmer 1.2s infinite linear;
  background: linear-gradient(to right, #f0f0f0 8%, #e0e0e0 18%, #f0f0f0 33%);
  background-size: 800px 104px;
  height: 1rem;
  margin-bottom: 0.75rem;
  border-radius: 2px;
}

@keyframes shimmer {
  0% { background-position: -468px 0; }
  100% { background-position: 468px 0; }
}
*/


export default LoadingSkeleton;
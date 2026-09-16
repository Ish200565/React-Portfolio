import React from 'react';
import './CodingJourney.css';

const CodingJourney = () => {
    const months = ['Oct', 'Nov', 'Dec', 'Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep'];
    
    // Generate realistic contribution graph matching user's actual screenshot (active in Feb-Mar, Jun-Jul, Aug-Sep)
    const generateHeatmapGrid = () => {
        const grid = [];
        for (let col = 0; col < 36; col++) {
            const week = [];
            for (let row = 0; row < 7; row++) {
                // Active contribution periods: Feb-Mar (cols 13-18), Jun-Jul (cols 24-28), Aug-Sep (cols 32-35)
                const isActivePeriod = 
                    (col >= 13 && col <= 18) || 
                    (col >= 24 && col <= 28) || 
                    (col >= 32 && col <= 35);

                let level = 0;
                if (isActivePeriod) {
                    const rand = Math.random();
                    if (rand > 0.3) level = 3;
                    else if (rand > 0.15) level = 2;
                    else level = 1;
                } else {
                    // Occasional activity elsewhere
                    const rand = Math.random();
                    if (rand > 0.92) level = 2;
                    else if (rand > 0.85) level = 1;
                    else level = 0;
                }
                week.push(level);
            }
            grid.push(week);
        }
        return grid;
    };

    const heatmapData = generateHeatmapGrid();

    return (
        <section className="coding-journey" id="coding-stats">
            <div className="cj-container">
                <h2 className="section-title">
                    CODING JOURNEY & <span className="highlight">STATS</span>
                </h2>

                <div className="cj-stats-cards">
                    <div className="cj-card">
                        <span className="cj-card-icon">⚡</span>
                        <div className="cj-card-info">
                            <span className="cj-number">272+</span>
                            <span className="cj-label">GitHub Contributions (Last Year)</span>
                        </div>
                    </div>

                    <div className="cj-card">
                        <span className="cj-card-icon">🔥</span>
                        <div className="cj-card-info">
                            <span className="cj-number">Active</span>
                            <span className="cj-label">Consistent Backend Commit Activity</span>
                        </div>
                    </div>

                    <div className="cj-card">
                        <span className="cj-card-icon">🧩</span>
                        <div className="cj-card-info">
                            <span className="cj-number">60+</span>
                            <span className="cj-label">LeetCode Problems Solved</span>
                        </div>
                    </div>

                    <div className="cj-card">
                        <span className="cj-card-icon">📦</span>
                        <div className="cj-card-info">
                            <span className="cj-number">15+</span>
                            <span className="cj-label">Open Source Repositories</span>
                        </div>
                    </div>
                </div>

                {/* Interactive GitHub Heatmap Board */}
                <div className="heatmap-container">
                    <div className="heatmap-header">
                        <div className="heatmap-title-group">
                            <span className="heatmap-title">⌘ GitHub Contribution Graph</span>
                            <span className="heatmap-count">272 contributions in the last year</span>
                        </div>
                        <a href="https://github.com/Ish200565" target="_blank" rel="noopener noreferrer" className="github-btn">
                            Visit @Ish200565 ↗
                        </a>
                    </div>

                    <div className="heatmap-months">
                        {months.map((m, i) => (
                            <span key={i}>{m}</span>
                        ))}
                    </div>

                    <div className="heatmap-grid">
                        {heatmapData.map((week, wIndex) => (
                            <div className="heatmap-week" key={wIndex}>
                                {week.map((level, dIndex) => (
                                    <span 
                                        key={dIndex} 
                                        className={`heatmap-cell level-${level}`}
                                        title={`Contributions recorded`}
                                    />
                                ))}
                            </div>
                        ))}
                    </div>

                    <div className="heatmap-footer">
                        <span className="legend-label">Less</span>
                        <div className="legend-cells">
                            <span className="heatmap-cell level-0" />
                            <span className="heatmap-cell level-1" />
                            <span className="heatmap-cell level-2" />
                            <span className="heatmap-cell level-3" />
                            <span className="heatmap-cell level-4" />
                        </div>
                        <span className="legend-label">More</span>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default CodingJourney;

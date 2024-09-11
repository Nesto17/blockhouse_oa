'use client';

import { useState } from 'react';
import { Chart } from 'react-google-charts';

import Styles from './dashboard.module.css';

const Charts = ({ chartsData }) => {
    const [selectedIndex, setSelectedIndex] = useState(0);

    return (
        <div className={Styles.page}>
            <div className={Styles.selectionContainer}>
                <h5 className={Styles.selectionTitle}>Select Chart Types:</h5>
                {chartsData.map((chart, i) => (
                    <div
                        className={`${Styles.selectionItem} ${
                            selectedIndex === i && Styles.selectedItem
                        }`}
                        onClick={() => setSelectedIndex(i)}
                    >
                        {chart.icon}
                        <span>{chart.title}</span>
                    </div>
                ))}
            </div>
            <div className={Styles.chartContainer}>
                <h2 className={Styles.chartTitle}>{chartsData[selectedIndex].title}</h2>
                <Chart
                    chartType={chartsData[selectedIndex].type}
                    // width="95%"
                    height="400px"
                    data={chartsData[selectedIndex].data}
                />
            </div>
        </div>
    );
};

export default Charts;

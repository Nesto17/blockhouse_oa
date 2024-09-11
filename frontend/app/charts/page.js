import Styles from './dashboard.module.css';

const API_URL = process.env.API_URL;

async function getCandlestickData() {
    const res = await fetch(`${API_URL}/api/candlestick-data/`);
    const data = await res.json();
    return data;
}

async function getLineChartData() {
    const res = await fetch(`${API_URL}/api/line-chart-data/`);
    const data = await res.json();
    return data;
}

async function getBarChartData() {
    const res = await fetch(`${API_URL}/api/bar-chart-data/`);
    const data = await res.json();
    return data;
}

async function getPieChartData() {
    const res = await fetch(`${API_URL}/api/pie-chart-data/`);
    const data = await res.json();
    return data;
}

export default async function DashboardPage() {
    const candlestickData = await getCandlestickData();

    return (
        <div className={Styles.page}>
            <div className={Styles.selectionContainer}></div>
            <div className={Styles.chartContainer}>
                <h2 className={Styles.chartTitle}></h2>
                <div className={Styles.chartFigure}></div>
            </div>
        </div>
    );
}

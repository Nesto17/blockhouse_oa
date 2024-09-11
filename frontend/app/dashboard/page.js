import CandlestickChartIcon from '@mui/icons-material/CandlestickChart';
import ShowChartIcon from '@mui/icons-material/ShowChart';
import BarChartIcon from '@mui/icons-material/BarChart';
import PieChartIcon from '@mui/icons-material/PieChart';

import Charts from './Charts';

const API_URL = process.env.API_URL;

async function getCandlestickData() {
    const res = await fetch(`${API_URL}/api/candlestick-data/`, { cache: 'no-store' });
    const data = await res.json();
    return data;
}

async function getLineChartData() {
    const res = await fetch(`${API_URL}/api/line-chart-data/`, { cache: 'no-store' });
    const data = await res.json();
    return data;
}

async function getBarChartData() {
    const res = await fetch(`${API_URL}/api/bar-chart-data/`, { cache: 'no-store' });
    const data = await res.json();
    return data;
}

async function getPieChartData() {
    const res = await fetch(`${API_URL}/api/pie-chart-data/`, { cache: 'no-store' });
    const data = await res.json();
    return data;
}

export default async function DashboardPage() {
    const chartsData = [
        {
            type: 'CandlestickChart',
            title: 'Candlestick',
            data: await getCandlestickData(),
            icon: <CandlestickChartIcon />
        },
        {
            type: 'Line',
            title: 'Line Chart',
            data: await getLineChartData(),
            icon: <ShowChartIcon />
        },
        {
            type: 'BarChart',
            title: 'Bar Chart',
            data: await getBarChartData(),
            icon: <BarChartIcon />
        },
        {
            type: 'PieChart',
            title: 'Pie Chart',
            data: await getPieChartData(),
            icon: <PieChartIcon />
        },
    ];

    return (
        <Charts chartsData={chartsData} />
        // <div className={Styles.page}>
        //     <div className={Styles.selectionContainer}></div>
        //     <div className={Styles.chartContainer}>
        //         <h2 className={Styles.chartTitle}></h2>
        //         <div className={Styles.chartFigure}></div>
        //     </div>
        // </div>
    );
}

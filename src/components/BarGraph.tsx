import UsageData from '@/app/types/UsageData';
import { BarChart } from '@mui/x-charts/BarChart';

interface BarGraphProps {
    data: UsageData;
    title: string;
    description: string;
}

export default function BarGraph(props: BarGraphProps) {
    const totalKwhValues = props.data.days.map((day) => {
        return day.totalKwh
    })

    const dates = props.data.days.map((day) => {
        return day.date.split("-").pop()
    })


    return (
        <>
            <BarChart
                xAxis={[{ scaleType: 'band', data: dates }]}
                series={[{ data: totalKwhValues }]}
                width={700}
                height={300}
            />
        </>

    );
}

'use client'
import SummaryTable from "@/components/SummaryTable";
import styles from "./page.module.css";
import { Title } from '@mantine/core';
import { testData } from "./testData";
import BarGraph from "@/components/BarGraph";

export default function Dashboard() {
    return <main className={styles.main}>
        <Title order={1}>Electricity Usage</Title>
        <div className="february-data" style={{ backgroundColor: 'white', borderRadius: '20px', padding: '30px', width: '100%' }}>
            <Title order={2} size="h4">{`${testData.startDate} to ${testData.endDate}`}</Title>
            <SummaryTable usageData={testData} />
        </div>
        <div className="top" style={{ display: 'flex', justifyContent: 'center', flexDirection: 'column', backgroundColor: 'white', borderRadius: '20px', padding: '30px', marginTop: '30px', width: '100%' }}>
            <h2>February electricity usage in 2021</h2>
            <BarGraph data={testData} title="title" description="description" />
        </div>
        <div className="middle">

        </div>
        <div className="bottom">

        </div>
    </main>
}

// in a given period, show: total cost, total usage kWh, daily avg cost, daily avg usage
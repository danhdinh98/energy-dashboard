'use client'
import SummaryTable from "@/components/SummaryTable";
import styles from "./page.module.css";
import { Title } from '@mantine/core';
import { testData } from "./testData";
import BarGraph from "@/components/BarGraph";

export default function Dashboard() {
    return <main className={styles.main}>
        <Title order={1}>Electricity Usage</Title>
        <Title order={2} size="h4">{`${testData.startDate} to ${testData.endDate}`}</Title>
        <SummaryTable usageData={testData} />
        <BarGraph data={testData} title="title" description="description" />
    </main>
}

// in a given period, show: total cost, total usage kWh, daily avg cost, daily avg usage
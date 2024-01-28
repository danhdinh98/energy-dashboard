import SummaryTable from "@/components/SummaryTable";
import styles from "./page.module.css";
import { Title } from '@mantine/core';

export default function Dashboard() {
    return <main className={styles.main}>
        <Title order={1}>Electricity Usage</Title>
        <Title order={2} size="h4">28th of January to 15 February 2024</Title>
        <SummaryTable />
    </main>
}
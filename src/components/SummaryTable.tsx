'use client';

import UsageData from "@/app/types/UsageData";
import { Table } from "@mantine/core";

interface SummaryTableProps {
    usageData: UsageData;
}

export default function SummaryTable(props: SummaryTableProps) {
    const totalCostCents = props.usageData.totalKwh * props.usageData.conversionCentsPerKwh;
    const totalCostDollars = totalCostCents / 100;
    return (
        <Table withTableBorder={true} borderColor="#FF9C9C" withColumnBorders={true}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>{"Total Electricity Usage (kWh)"}</Table.Th>
                    <Table.Th>{"Daily Average Usage (kWh)"}</Table.Th>
                    <Table.Th>{"Conversion in Cents Per kWh (c/kWh)"}</Table.Th>
                    <Table.Th>{"Total Cost ($AUD)"}</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td>{`${props.usageData.totalKwh}`}</Table.Td>
                    <Table.Td>{`${props.usageData.averageDailyKwh}`}</Table.Td>
                    <Table.Td>{`${props.usageData.conversionCentsPerKwh}`}</Table.Td>
                    <Table.Td>{`$${totalCostDollars}`}</Table.Td>
                </Table.Tr>
            </Table.Tbody>
        </Table>
    );
}
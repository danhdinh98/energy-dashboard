'use client';

import UsageData from "@/app/types/UsageData";
import roundTwoDec from "@/util/roundtwodec";
import { Table } from "@mantine/core";

interface SummaryTableProps {
    usageData: UsageData;
}

export default function SummaryTable(props: SummaryTableProps) {
    const totalCostCents = props.usageData.totalKwh * props.usageData.conversionCentsPerKwh;
    const totalCostDollars = totalCostCents / 100;
    const roundedCost = roundTwoDec(totalCostDollars)
    const roundedTotalKwh = roundTwoDec(props.usageData.totalKwh)
    const roundedAverageDailyKwh = roundTwoDec(props.usageData.averageDailyKwh)
    const roundedConversionCentsPerKwh = roundTwoDec(props.usageData.conversionCentsPerKwh)
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
                    <Table.Td>{`${roundedTotalKwh}`}</Table.Td>
                    <Table.Td>{`${roundedAverageDailyKwh}`}</Table.Td>
                    <Table.Td>{`${roundedConversionCentsPerKwh}`}</Table.Td>
                    <Table.Td>{`$${roundedCost}`}</Table.Td>
                </Table.Tr>
            </Table.Tbody>
        </Table>
    );
}
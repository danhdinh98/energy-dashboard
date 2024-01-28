'use client';

import { Table } from "@mantine/core";

export default function SummaryTable() {
    return (
        <Table withTableBorder={true} borderColor="#FF9C9C" withColumnBorders={true}>
            <Table.Thead>
                <Table.Tr>
                    <Table.Th>Electricity Usage</Table.Th>
                    <Table.Th>Daily Average</Table.Th>
                </Table.Tr>
            </Table.Thead>
            <Table.Tbody>
                <Table.Tr>
                    <Table.Td>$54.05</Table.Td>
                    <Table.Td>$4.50</Table.Td>
                </Table.Tr>
            </Table.Tbody>
        </Table>
    );
}
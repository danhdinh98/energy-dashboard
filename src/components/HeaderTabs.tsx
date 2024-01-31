'use client';

import { useMantineTheme } from '@mantine/core';
import Link from 'next/link';
import {
    Container,
    Tabs,
} from '@mantine/core';
import classes from './HeaderTabs.module.css';

const tabs = [
    { label: 'Home', route: '/' },
    { label: 'Dashboard', route: '/dashboard' },
];

export function HeaderTabs() {
    const theme = useMantineTheme();
    const items = tabs.map((tab) => (
        <Link href={tab.route} style={{ textDecoration: 'none', color: 'black' }}>
            <Tabs.Tab value={tab.label} key={tab.label}>
                {tab.label}
            </Tabs.Tab>
        </Link>

    ));

    return (
        <div className={classes.header} style={{ background: theme.colors.orange[4] }} >
            <Container size="md"  >
                <Tabs
                    defaultValue="Home"
                    variant="outline"
                    visibleFrom="sm"
                    classNames={{
                        root: classes.tabs,
                        list: classes.tabsList,
                        tab: classes.tab,
                    }}
                >
                    <Tabs.List>{items}</Tabs.List>
                </Tabs>
            </Container>
        </div >
    );
}
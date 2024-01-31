'use client';

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
    const items = tabs.map((tab) => (
        <Link href={tab.route} style={{ textDecoration: 'none', color: 'black' }}>
            <Tabs.Tab value={tab.label} key={tab.label}>
                {tab.label}
            </Tabs.Tab>
        </Link>

    ));

    return (
        <div className={classes.header}>
            <Container size="md">
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
        </div>
    );
}
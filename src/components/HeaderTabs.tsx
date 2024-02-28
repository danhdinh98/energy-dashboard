'use client';
import Link from 'next/link';

export function HeaderTabs() {
    return (
        <div style={{ position: 'relative', zIndex: '999', display: 'flex', justifyContent: 'space-between', background: 'linear-gradient(90deg, rgba(0,198,141,1) 0%, rgba(10,179,169,1) 27%, rgba(28,193,156,0.6601234243697479) 77%)', height: '80px', alignItems: 'center', }}>
            <div style={{ display: 'flex' }}></div>
            <div style={{ display: 'flex' }}>
                <Link href={'/'} style={{ textDecoration: 'none', color: 'black', marginRight: '30px', color: 'white', fontFamily: 'sans-serif' }}>
                    {'Home'}
                </Link >
                <Link href={'/dashboard'} style={{ textDecoration: 'none', color: 'black', marginRight: '30px', color: 'white', fontFamily: 'sans-serif' }}>
                    {'Dashboard'}
                </Link >
                <Link href={'/billing'} style={{ textDecoration: 'none', color: 'black', marginRight: '30px', color: 'white', fontFamily: 'sans-serif' }}>
                    {'Billing'}
                </Link >


            </div>
        </div >
    );
}
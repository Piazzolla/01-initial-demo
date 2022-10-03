import Head from 'next/head'
import Link from 'next/link'
import React from 'react'
import { DarkLayout } from '../components/layouts/DarkLayout'
import { MainLayout } from '../components/layouts/MainLayout'
import { Navbar } from '../components/Navbar'

export default function AboutPage() {
    return (
        <>
            <h1>About</h1>
            <h1 className={'title'}>
                {/* Ir a  <a href="/">Home</a> */}
                Ir a <Link href="/">Home</Link>
            </h1>

            <p className={'description'}>
                Get started by editing{' '}
                <code className={'code'}>pages/index.js</code>
            </p>
        </>
    )
}

AboutPage.getLayout = function getLayout(page) {
    return (
        <MainLayout>
            <DarkLayout>
                { page }
            </DarkLayout>
        </MainLayout>
    )
}

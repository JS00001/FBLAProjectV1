import React from "react";
import Head from "next/head";
import Navbar from "../components/Navbar";
import Sidebar from "../components/Sidebar";
import Empty from "../components/Empty";
import Page from '../components/Page';
import { useSelector } from 'react-redux';


export default function Home() {

    const activeReducer = useSelector(state => state.activeReducer);

    return (
        <div className="flex flex-col h-screen select-none">
            <Head>
                <title>Athens Attractions</title>
            </Head>

            <Navbar />
            
            <div className="flex flex-row h-full overflow-hidden">
                <Sidebar />
                <div className="flex-1">
                    {!Object.keys(activeReducer).length && <Empty/>}
                    {Object.keys(activeReducer).length && <Page data={activeReducer}/>}
                </div>
            </div>
        </div>
    );
}

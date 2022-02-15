import React from "react";
import Head from "next/head";
import { useSelector } from 'react-redux';

import Taskbar from "../components/Navigation/Taskbar";
import Navbar from "../components/Navigation/Navbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Empty from "../components/Empty";
import Page from '../components/Page';


export default function Home() {

    const activeReducer = useSelector(state => state.activeReducer);

    const [theme, setTheme] = React.useState('light');

    return (
        <html className={theme}>

            <div className="flex flex-col h-screen select-none dark:bg-gray-900">
                <Head>
                    <title>Athens Attractions</title>
                </Head>

                <Taskbar />

                <Navbar updateTheme={() => setTheme(theme == "dark" ? "light" : "dark")}/>
                
                <div className="flex flex-row h-full overflow-hidden">
                    <Sidebar />
                    <div className="flex-1">
                        {!Object.keys(activeReducer).length && <Empty/>}
                        {Object.keys(activeReducer).length && <Page data={activeReducer}/>}
                    </div>
                </div>
            </div>

        </html>
    );
}

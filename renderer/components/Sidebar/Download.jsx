import React from 'react';
import fetch from 'node-fetch';
import RateModal from '../Modals/RateModal';
import DownloadModal from '../Modals/DownloadModal';
import { Button, Loading } from '@nextui-org/react';


export default function Download({ data }) {

    const [url, setUrl] = React.useState('');
    const [loading, setLoading] = React.useState(false);

    /* Modals Open/Closed */
    const [downloaded, setDownloaded] = React.useState(false);
    const [rateLimited, setRateLimited] = React.useState(false);


    /* Open rate limit modal when rate limit occurs on request*/
    const updateRateModal = () => {
        setRateLimited(!rateLimited);
    }


    /* Open download modal when download occurs */
    const updateDownloadModal = () => {
        setDownloaded(!downloaded);
    }


    /* Download Data as a PDF */
    const download = () => {
        setLoading(true);

        let config = {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
        };

        fetch('https://static.jsenyitko.tech/pdf', config)
        .then(async res => {     
            if (res.ok) {
                const document = await res.text();
                setUrl(document);
                setLoading(false);
                setDownloaded(true);
            } else {
                setLoading(false);
                updateRateModal();
            }
        })          
    }

    return (
        <>
            <DownloadModal open={downloaded} onClose={updateDownloadModal} url={url}/>
            <RateModal open={rateLimited} onClose={updateRateModal}/>
            <Button css={{width: '100%'}} onClick={download} disabled={loading}>
                {loading && <Loading color="white" size="sm" />}
                {!loading && 'Export Locations'}
            </Button>
        </>
    )
}

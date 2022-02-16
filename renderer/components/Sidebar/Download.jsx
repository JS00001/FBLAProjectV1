import React from 'react';
import fetch from 'node-fetch';
import RateModal from '../Modals/RateModal';
import { saveAs } from "file-saver";
import { Button, Loading } from '@nextui-org/react';


export default function Download({ data }) {

    const [loading, setLoading] = React.useState(false);
    const [rateLimited, setRateLimited] = React.useState(false);


    /* Open rate limit modal when rate limit occurs on request*/
    const updateModal = () => {
        setRateLimited(!rateLimited);
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
                saveAs(document, 'locations.pdf');
                setLoading(false);
            } else {
                setLoading(false);
                updateModal();
            }
        })          
    }

    return (
        <>
            <RateModal open={rateLimited} onClose={updateModal}/>
            <Button css={{width: '100%'}} onClick={download} disabled={loading}>
                {loading && <Loading color="white" size="sm" />}
                {!loading && 'Export Locations'}
            </Button>
        </>
    )
}

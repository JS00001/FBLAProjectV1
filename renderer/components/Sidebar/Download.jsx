import React from 'react';
import request from 'request';

import { saveAs } from "file-saver";
import { Button, Loading } from '@nextui-org/react';


export default function Download({data}) {

    const [loading, setLoading] = React.useState(false);

    /* Download Data as a PDF */
    const download = () => {
        setLoading(true);
        var options = {
            method: 'GET',
            url: 'https://static.jsenyitko.tech/pdf',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ data })
          };

          request(options, (error, response) => {
            if (error) throw new Error(error);
            
            saveAs(response.body, 'locations.pdf');
            setLoading(false);
          });
          
    }

    return (
        <Button css={{width: '100%'}} onClick={download} disabled={loading}>
            {loading && <Loading color="white" size="sm" />}
            {!loading && 'Download Results'}
        </Button>
    )
}

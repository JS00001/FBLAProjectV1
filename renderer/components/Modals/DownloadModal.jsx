import { Button, Modal } from '@nextui-org/react';
import { saveAs } from 'file-saver';


export default function HelpMenu({ open, onClose, url}) {

    /* Download PDF as a file */
    const download = () => {
        saveAs(url, 'location.pdf');
    }


    /* Copy link to clipboard */
    const copy = () => {
        navigator.clipboard.writeText(url);
    }

    return (
        <Modal
            open={open}
            closeButton
            onClose={onClose}
        >
            <Modal.Header>
                <span className='text-xl font-semibold'>Success</span>
            </Modal.Header>
            <Modal.Body>
                <div className='text-center p-5'>
                    <span className='text-sm leading-tight text-gray-500'>
                        Your data has been uploaded to the cloud. Download the exported PDF, or copy the link.
                    </span>
                    <div className='bg-gray-100 p-4 text-gray-800 rounded-md mt-4'>
                        {url}
                    </div>
                </div>
            </Modal.Body>
            <Modal.Footer>
                <div className='flex justify-between w-full'>
                    <Button css={{width: '100%', margin: 4}} size="sm" ghost onClick={copy}>
                        Copy URL
                    </Button>
                    <Button size="sm" css={{width: '100%', margin: 4}} onClick={download}>
                        Download
                    </Button>
                </div>
            </Modal.Footer>
        </Modal>
    )
}
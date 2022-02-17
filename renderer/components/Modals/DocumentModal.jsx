import Store from 'electron-store';
import { saveAs } from 'file-saver';
import { RiFileCopyLine } from 'react-icons/ri';
import { RiDownloadCloud2Line } from 'react-icons/ri';
import { Button, Modal, Collapse } from '@nextui-org/react';


export default function DocumentModal({ open, onClose }) {

    const store = new Store();


    /* Clear saved documents */
    const clear = () => {
        store.clear();
        onClose();
    }

    return (
        <Modal
            width='600px'
            open={open}
            closeButton
            onClose={onClose}
        >
            <Modal.Header>
                <span className='text-xl font-semibold'>Saved Documents</span>
            </Modal.Header>
            <Modal.Body>
                <div className='p-5 max-h-96'>
                    {store.get('documents') && store.get('documents').map((data, index) => {
                        return <DataPoint data={data} />
                    })}
                </div>
            </Modal.Body>
            <Modal.Footer>
                <Button css={{width: '100%'}} onClick={clear}>
                    Clear Store
                </Button>
            </Modal.Footer>
        </Modal>
    )
}

function DataPoint({ data: { document, date, pdfstring } }) {
    
    /* Copy document url to clipboard*/
    const copy = () => {
        navigator.clipboard.writeText(document);
    }


    /* Download Data as a PDF */
    const download = () => {
        saveAs(document, 'locations.pdf');
    }

    return (
        <div className='flex justify-between mt-4 bg-gray-100 p-4 rounded-lg'>
            <a className='w-full' onClick={() => copy(document)}>
                <span className='text-xs mr-4'>{date}</span>
                <span className='text-gray-800 text-sm font-medium'>{pdfstring}</span>
            </a>
            
            <div className='flex items-center gap-2 text-gray-400'>
                <span onClick={download} className='hover:text-gray-300'>
                    <RiDownloadCloud2Line size={23}/>
                </span>
                <span onClick={copy} className='hover:text-gray-300'>
                    <RiFileCopyLine  size={23}/>
                </span>
            </div>
        </div>
    )
}
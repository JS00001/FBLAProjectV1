import Store from 'electron-store';
import { Button, Modal } from '@nextui-org/react';


export default function DocumentModal({ open, onClose }) {

    const store = new Store();


    /* Clear saved documents */
    const clear = () => {
        store.clear();
        onClose();
    }


    /* Copy document url to clipboard*/
    const copy = url => {
        navigator.clipboard.writeText(url);
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
                    {store.get('documents') && store.get('documents').map(({ document, date, pdfstring }, index) => {
                        return (
                            <div className='bg-gray-100 p-4 rounded-md mt-4 hover:bg-blue-100' key={index} onClick={() => copy(document)}>
                               <span className='text-xs mr-4'>{date}</span>
                               <span className='text-gray-800 font-medium'>{pdfstring}</span>
                            </div>
                        )
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
import { Modal } from '@nextui-org/react';
import { RiCloseCircleLine } from 'react-icons/ri';


export default function RateMenu({ open, onClose }) {
    return (
        <Modal 
            width='500px'
            open={open}
            closeButton
            onClose={onClose}
        >
            <Modal.Body>
                <div className='flex justify-center text-center items-center flex-col'>
                    <RiCloseCircleLine size={100} color='FF6363'/>
                    <span className='font-bold text-2xl text-gray-700 pt-5'>
                        You are being rate limited.
                    </span>
                    <span className=' text-gray-500 font-medium tracking-tighter py-5'>
                        You have reached the maximum number of reports per minute. Please try again in a minute.
                    </span>
                </div>
            </Modal.Body>
        </Modal>
    )
}
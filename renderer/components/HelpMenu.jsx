import { Modal, Text, Collapse } from '@nextui-org/react';


export default function HelpMenu({open, onClose}) {
    return (
        <Modal 
            width='500px'
            open={open}
            closeButton
            onClose={onClose}
        >
            <Modal.Header>
                <span className='text-xl font-semibold'>Help Menu</span>
            </Modal.Header>
            <Modal.Body>
                <Collapse.Group splitted>
                    <Collapse title={<h4>How Do I Filter Results?</h4>}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    <Collapse title={<h4>How Do I Reset Filters</h4>}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                    <Collapse title={<h4>Am I Able To Export Locations?</h4>}>
                        <Text>
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim
                            ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut
                            aliquip ex ea commodo consequat.
                        </Text>
                    </Collapse>
                </Collapse.Group>
            </Modal.Body>
        </Modal>
    )
}
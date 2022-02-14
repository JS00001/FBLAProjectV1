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
                <span className='text-xl font-semibold'>Help</span>
            </Modal.Header>
            <Modal.Body>
                <Collapse.Group splitted>
                    <Collapse title={<h4>How Do I Filter Results?</h4>}>
                        <Text>
                            Filtering was created with the user experience in mind. To filter 
                            through locations, the user can select options from the various dropdowns.
                            The more filters that are selected, the less locations there will be.
                        </Text>
                    </Collapse>
                    <Collapse title={<h4>How Do I Reset Filters</h4>}>
                        <Text>
                            The user is able to reset filters by selecting the placeholder option.
                            Open the dropdown and then select the topmost value in order to remove the 
                            previously selected filter. 
                        </Text>
                    </Collapse>
                    <Collapse title={<h4>Am I Able To Export Locations?</h4>}>
                        <Text>
                            Coming soon...
                        </Text>
                    </Collapse>
                </Collapse.Group>
            </Modal.Body>
        </Modal>
    )
}
import React, { useCallback, useState } from "react";
import { Page, Modal, Frame, Button, Layout, TextField } from "@shopify/polaris"
import { Form } from "@remix-run/react";
import { useActionData, useSubmit } from "@remix-run/react";
import { ActionFunction } from "@remix-run/node";


type CreateCampaingFormProps = {
    activate: boolean;
    setActivate: React.Dispatch<React.SetStateAction<boolean>>;
}


const CreateCampaingForm:React.FC<CreateCampaingFormProps> = ({ activate, setActivate }) => {

   

    const handleChange = useCallback(()=> setActivate(!activate),[activate])

    const activator = <Button onClick={handleChange}>Create New</Button>

    const [value, setValue] = useState("default");

    const handleChangeText = useCallback((newValue: string)=> setValue(newValue),[])

    const submit = useSubmit()

    

    return (<Page>
        <Frame>
            <Modal activator={activator}
            open={activate}
            onClose={handleChange}
            title="Create a new Email Campaing"
            primaryAction={{
                content:"Send"
            }}
            secondaryActions={[{
                content: "Finish Later",
                onAction: () => {}
            }]}
            >
            <Modal.Section>
                <Form>
                    <Layout>
                        <Layout.Section>
                        <TextField label="Campaing Name" 
                        value={value}
                        onChange={handleChangeText}
                        autoComplete="off"/>
                        <TextField label="Corporation" 
                        value={value}
                        onChange={handleChangeText}
                        autoComplete="off"/>
                        <TextField label="From" 
                        value={value}
                        onChange={handleChangeText}
                        autoComplete="off"/>
                        <TextField label="Email Subject" 
                        value={value}
                        onChange={handleChangeText}
                        autoComplete="off"/>
                        <TextField label="Content" 
                        value={value}
                        onChange={handleChangeText}
                        autoComplete="off"/>
                        <Button submit>Send</Button>
                        </Layout.Section>
                    </Layout>
                </Form>
            </Modal.Section>
            </Modal>
        </Frame>
    </Page>);
};

export default CreateCampaingForm
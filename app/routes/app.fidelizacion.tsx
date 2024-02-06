import { Page, Text, Frame, Button, InlineStack, Layout, Divider } from "@shopify/polaris";
import { SettingsIcon } from "@shopify/polaris-icons"
import React from "react";
import EmailTemplete from "~/component/Email Templete";
import IndexFiltersWithFilteringModeExample from "~/component/SelectorProductos";

type Props = {};

const FidelizacionPage = (props: Props) => {
    return <Page fullWidth title="Fidelización" pagination={{hasPrevious:true, previousURL:"/app/dashboard"}}>
        <Layout>
        <Layout.Section>
            <InlineStack align="space-between">
                <Text variant="headingLg" fontWeight="medium" as={"h2"} >Fidelización </Text>
                <Button icon={SettingsIcon} variant="plain" size="large"></Button>
            </InlineStack>
        </Layout.Section>
        <Layout.Section>
            <EmailTemplete></EmailTemplete>
        </Layout.Section>
        <Layout.Section>
            <Divider borderColor="transparent" borderWidth="100"></Divider>
        </Layout.Section>
    </Layout>
    </Page>
};

export default FidelizacionPage;
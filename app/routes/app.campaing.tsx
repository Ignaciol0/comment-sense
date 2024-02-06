import { InlineGrid, Layout, Page, Text, Button, LegacyCard, Tabs } from "@shopify/polaris"
import React, { useCallback, useState } from "react";
import { tabs } from "~/utils/tabs";
import CreateCampaingForm from "./app.createcampaingform";


type Props = {};



const dashboardPage = (props: Props) => {
    const [ selected, setSelected ] = useState(0)
    const [activate, setActivate] = useState(true);
    const handleTabChange = useCallback((selectedTabIndex: number) => setSelected(selectedTabIndex), [])
    
   

    return <Page>
        <Layout>
            <Layout.Section>
                <InlineGrid columns={2}>
                    <Text variant="heading3xl" as="h2">Campaings</Text>
                </InlineGrid>
            </Layout.Section>
            <Layout.Section>
                <LegacyCard>
                    <Tabs tabs={tabs} selected={selected} onSelect={handleTabChange}>
                            <LegacyCard.Section>
                                {tabs[selected].content}
                                {tabs[selected].component}
                            </LegacyCard.Section>
                    </Tabs>
                </LegacyCard>
            </Layout.Section>
            <Layout.Section>
                <CreateCampaingForm activate={activate} setActivate={ setActivate }/>
            </Layout.Section>
        </Layout>
    </Page>
};

export default dashboardPage;
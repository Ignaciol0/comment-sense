import { Button, Form, Icon, InlineGrid, Layout, Page, TextField, Text, InlineStack, Label, Frame, Box } from "@shopify/polaris";
import { SettingsIcon } from "@shopify/polaris-icons"
import dynamic from 'next/dynamic';

const LineChart = dynamic(() => import('@shopify/polaris-viz').then((module) => module.LineChart), { ssr: false });

import React from "react"; 
import IndexFiltersWithFilteringModeExample from "~/component/SelectorProductos";

type Props = {};

const Billing = (props: Props) => {

  const TotalReviews = 279

  const NewReviews = "+" + 24


  return <Page
  fullWidth
  title="Dashboard"
  pagination={{hasNext:true, nextURL:'/app/fidelizacion'}}>
    <Layout>
        <Layout.Section>
            <InlineStack align="space-between">
            <InlineStack blockAlign="center" gap="400">
                <Text variant="headingLg" fontWeight="medium" as={"h2"} >Reseñas Totales: </Text>
                <InlineStack blockAlign="baseline">
                    <Text variant="heading2xl" as={"h2"} children={TotalReviews}></Text>
                    <p style={{ fontSize: '14px', fontWeight: 'bold', color: 'green' }}>{NewReviews}</p>
                </InlineStack>
            </InlineStack>
                <Button icon={SettingsIcon} variant="plain" size="large"></Button>
            </InlineStack>
                <LineChart  
                    data={[{"data": [{"value": 12,"key": "1"},{"value": 17,"key": "2"},{"value": 24,"key": "3"},{"value": 34,"key": "4"},{"value": 32,"key": "5"},{"value": 31,"key": "6"},{"value": 36,"key": "7"},{"value": 28,"key": "8"},{"value": 23,"key": "9"},{"value": 19,"key": "10"},{"value": 15,"key": "11"},{"value": 14,"key": "12"},{"value": 13,"key": "13"},{"value": 10,"key": "14"}]}]} 
                    theme="Light" xAxisOptions={{ labelFormatter: (x) => {return `Día ${x}`}}} yAxisOptions={{"fixedWidth": 20}} >
                </LineChart>
                <Button>Analisis Generalizado</Button>
        </Layout.Section>
        <Layout.Section>
            <IndexFiltersWithFilteringModeExample/>
        </Layout.Section>
    </Layout>
  </Page>;
};

export default Billing;
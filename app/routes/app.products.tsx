import { Button, Form, Icon, InlineGrid, Layout, Page, TextField, Text, InlineStack, Label, Frame, Box, MediaCard } from "@shopify/polaris";
import { SettingsIcon } from "@shopify/polaris-icons"
import dynamic from 'next/dynamic';
import { useContext } from "react";
import { Context } from '~/Context/UserContext';
import ExportDropdown from "~/component/ExportDropdown";

const LineChart = dynamic(() => import('@shopify/polaris-viz').then((module) => module.LineChart), { ssr: false });


type Props = {};

const Billing = (props:Props) => {
  const {product, setProduct} = useContext(Context)
  const productReview = product['productReview']
  const productTitle = product['productTitle']
  const productImage = product['productImage']
  const TotalReviews = 279

  const NewReviews = "+" + 24


  return <Page
  fullWidth
  title="Product Overview"
  pagination={{hasNext:true, nextURL:'/app/fidelizacion'}}>
    <Layout>
        <Layout.Section>
            <InlineStack align="space-between">
            <InlineStack blockAlign="center" gap="400">
                <Text variant="headingLg" fontWeight="medium" as={"h2"} >Producto </Text>
            </InlineStack>
            <ExportDropdown></ExportDropdown>
            </InlineStack>
        </Layout.Section>
        <Layout.Section>
            <MediaCard  title={productTitle}primaryAction={{content: 'Ver más',onAction: () => {},}}description={productReview} portrait={true}><img alt="" width="100%" height="200"style={{objectFit: 'cover', objectPosition: 'center',}}src={productImage}/></MediaCard>
        </Layout.Section>
        <Layout.Section>
                <LineChart  
                    data={[{"data": [{"value": 12,"key": "1"},{"value": 17,"key": "2"},{"value": 24,"key": "3"},{"value": 34,"key": "4"},{"value": 32,"key": "5"},{"value": 31,"key": "6"},{"value": 36,"key": "7"},{"value": 28,"key": "8"},{"value": 23,"key": "9"},{"value": 19,"key": "10"},{"value": 15,"key": "11"},{"value": 14,"key": "12"},{"value": 13,"key": "13"},{"value": 10,"key": "14"}]}]} 
                    theme="Light" xAxisOptions={{ labelFormatter: (x) => {return `Día ${x}`}}} yAxisOptions={{"fixedWidth": 20}} >
                </LineChart>
        </Layout.Section>
    </Layout>
  </Page>;
};

export default Billing;
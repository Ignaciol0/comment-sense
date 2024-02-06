import {Bleed, Box, InlineStack, Layout, Scrollable, Select, Text} from '@shopify/polaris';
import {useState, useCallback} from 'react';
import AmazonReviewEmail from '~/Email Templates/AmazonTemplete';
import DropZoneWithImageFileUpload from './FIle Upload';

function EmailTemplete() {
  const [selectedMail, setSelectedMail] = useState('Post-Compra');

  const handleSelectChangeMail = useCallback(
    (value: string) => setSelectedMail(value),
    [],
  );
  const [selectedDiscount, setSelectedDiscount] = useState('20%');

  const handleSelectChangeDiscount = useCallback(
    (value: string) => setSelectedDiscount(value),
    [],
  );
  const [selectedFrequency, setSelectedFrequency] = useState('6 meses');

  const handleSelectChangeFrequency = useCallback(
    (value: string) => setSelectedFrequency(value),
    [],
  );

  const options_mail = [
    {label: 'Post-Compra', value: '0m'},
    {label: '6 Meses Después', value: '6m'},
    {label: '1 año Después', value: '1a'},
    {label: '2 años Después', value: '2a'},
    {label: 'Tras la tercera compra', value: '3'},
    {label: 'Tras la quinta compra', value: '5'},
    {label: 'Comprador recurrente (+5 compras)', value: '+5'},
  ];
  const options_discount = [
    {label: '15%', value: '15'},
    {label: '20%', value: '20'},
    {label: '25%', value: '25'},
    {label: '30%', value: '30'},
  ]
  const options_frequencia = [
    {label: 'cada 3 meses', value: '3m'},
    {label: 'cada 6 meses', value: "6m"},
    {label: 'cada año', value: "1a"},
    {label: 'cada 2 años', value: "2a"},
  ]

  return (
    <Layout.Section>
        <InlineStack blockAlign='center' gap="200">
          <Text as={'h2'} alignment='center'>Objetivo del Email:</Text>
          <Select options={options_mail} onChange={handleSelectChangeMail} value={selectedMail} label={undefined} />
        </InlineStack>
      <InlineStack align='center'>
        <Scrollable style={{height:"350px"}} horizontal={false}>
        <AmazonReviewEmail></AmazonReviewEmail>
        </Scrollable>
      </InlineStack>
      <InlineStack gap="600" align='center'>
          <Select options={options_discount} onChange={handleSelectChangeDiscount} value={selectedDiscount} label="Descuento" />
          <Select options={options_frequencia} onChange={handleSelectChangeFrequency} value={selectedFrequency} label="Frecuencia" />
          <DropZoneWithImageFileUpload></DropZoneWithImageFileUpload>
      </InlineStack>
    </Layout.Section>
  );
}

export default EmailTemplete 
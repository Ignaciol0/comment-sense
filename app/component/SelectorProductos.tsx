import {
  TextField,
  IndexTable,
  LegacyCard,
  IndexFilters,
  useSetIndexFiltersMode,
  IndexFiltersMode,
  useIndexResourceState,
  Text,
  ChoiceList,
  RangeSlider,
  Badge,
  MediaCard,
  InlineStack,
  Layout,
} from '@shopify/polaris';
import {useState, useCallback, useContext} from 'react';
import { Context } from '~/Context/UserContext';


function IndexFiltersWithFilteringModeExample() {
  const {product, setProduct} = useContext(Context)
  const onHandleCancel = () => {};
  const {mode, setMode} = useSetIndexFiltersMode(IndexFiltersMode.Filtering);
  const [queryValue, setQueryValue] = useState('');
  
  const handleQueryChange = useCallback(
    (value: string) => setQueryValue(value),
    [],
  );
  


  var orders = [
    {
      id: '1020',
      productTitle: "Very Cool Watch",
      productReview: "275 reseñas",
      productImage: "https://images.unsplash.com/photo-1522312346375-d1a52e2b99b3?q=80&w=1294&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: '1019',
      productTitle: "Cool Watch",
      productReview: "10 reseñas",
      productImage: "https://images.unsplash.com/photo-1524805444758-089113d48a6d?q=80&w=1288&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
    {
      id: '1018',
      productTitle: "Still Cool Watch",
      productReview: "0 reseñas",
      productImage: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=1999&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
    },
  ];
  if(queryValue != ""){
  orders = orders.sort(function(element) {
    if(element['productTitle'].toLowerCase().includes(queryValue.toLowerCase()))
      {return -1}
    
    return 1
  }
  )}

  const rowMarkup = orders.map(
    ({productTitle, productReview, productImage}) => {
      if(queryValue == "" || productTitle.toLowerCase().includes(queryValue.toLowerCase()))
        return(<Layout.Section variant='oneThird'>
                 <MediaCard  title={productTitle}primaryAction={{content: 'Ver más',onAction: ()=>{setProduct({"productTitle": productTitle,"productImage": productImage, "productReview": productReview})}, url:"../products"}}description={productReview} portrait={true}><img alt="" width="100%" height="200"style={{objectFit: 'cover', objectPosition: 'center',}}src={productImage}/></MediaCard>
               </Layout.Section>)
      return(<Layout.Section variant='oneThird'></Layout.Section>)
    })

  return (
    <LegacyCard>
      <IndexFilters
        queryValue={queryValue}
        queryPlaceholder="Searching in all"
        onQueryChange={handleQueryChange}
        onQueryClear={() => setQueryValue('')}
        mode={mode}
        setMode={setMode} tabs={[]} filters={[]} cancelAction={{
          onAction: onHandleCancel,
          disabled: false,
          loading: false,
        }} onClearAll={function (): void {
          throw new Error('Function not implemented.');
        } } selected={0}      />
      <Layout>
        {rowMarkup}
      </Layout>
    </LegacyCard>
  );

}


export default IndexFiltersWithFilteringModeExample;
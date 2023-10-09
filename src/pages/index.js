import Link from 'next/link';
import Image from 'next/image';
import { Flex, Box, Text, Button, extendTheme } from '@chakra-ui/react';
import { fetchAPI } from '../utils/fetchAPI';
import Property from '../components/Property';
import Banner from '../components/Banner';


export default function Home({ propertiesForSale, propertiesForRent }) {
  // const theme = extendTheme();
  // console.log(theme);
  return (
    <Box mt={8} mb={8}>
      <Banner 
        purpose={'RENT A HOME'}
        title1="Rental Homes for"
        title2="Everyone"
        desc1="Explore Homes"
        desc2="and more"
        buttonText="Explore Renting"
        linkName="/search?purpose=for-rent"
        imgURL="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
      />
      {/* <Flex>
        <Property property={prop1} key={prop1.id} />
      </Flex> */}
      <Flex wrap="wrap" justify="center" gap={8}>
        {propertiesForRent.map((property) => <Property property={property} key={property.id} />)}
      </Flex>

      <Banner 
        purpose={'BUY A HOME'}
        title1="Find, Buy & Own Your"
        title2="Deam Home"
        desc1="Explore Homes"
        desc2="and more"
        buttonText="Explore Buying"
        linkName="/search?purpose=for-sale"
        imgURL="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
      />
      <Flex wrap="wrap" justify="center" gap={8}>
        {propertiesForSale.map((property) => <Property property={property} key={property.id} />)} 
      </Flex>
    </Box>
  )
}


export async function getStaticProps() {
  try {
    // Use Promise.all to fetch the data in parallel
    const [propertyForSale, propertyForRent] = await Promise.all([
      fetchAPI({purpose: "for-sale", hitsPerPage: "9"}),
      fetchAPI({purpose: "for-rent", hitsPerPage: "9"}),
    ]);

    return {
      props: {
        propertiesForSale: propertyForSale?.hits,
        propertiesForRent: propertyForRent?.hits
      }
      
    }
  } catch (error) { 
    console.error("Error fetching data:", error);
    return {
      props: {
        propertiesForSale: [],
        propertiesForRent: []
      }
    };
  }
}

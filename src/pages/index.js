import { Flex, Box } from '@chakra-ui/react';
import Banner from '../components/Banner';
import Property from '../components/Property';
import { fetchList } from '../utils/fetchList';

export default function Home({ propertiesForSale, propertiesForRent }) {
  return (
    <Flex direction="column" mb={8} gap={12}>
      <Box>
        <Banner
          imgURL="https://bayut-production.s3.eu-central-1.amazonaws.com/image/145426814/33973352624c48628e41f2ec460faba4"
          purpose="RENT A HOME"
          title1="Rental Homes for"
          title2="Everyone"
          desc="Explore Homes and more"
          buttonText="Explore Renting"
          redirectLink="/search?purpose=for-rent"
        />
        <Flex wrap="wrap" justify="center" gap={8}>
          {propertiesForRent.map((property) => <Property key={property.id} property={property} />)}
        </Flex>
      </Box>
      <Box>
        <Banner
          imgURL="https://bayut-production.s3.eu-central-1.amazonaws.com/image/110993385/6a070e8e1bae4f7d8c1429bc303d2008"
          purpose="BUY A HOME"
          title1="Find, Buy & Own"
          title2="Your Dream Home"
          desc="Explore Homes and more"
          buttonText="Explore Buying"
          redirectLink="/search?purpose=for-sale"
        />
        <Flex wrap="wrap" justify="center" gap={8}>
          {propertiesForSale.map((property) => <Property property={property} key={property.id} />)}
        </Flex>
      </Box>
    </Flex>
  )
}

export async function getStaticProps() {
  try {
    // Use Promise.all to fetch the data in parallel
    const [propertyForSale, propertyForRent] = await Promise.all([
      fetchList({ purpose: "for-sale", hitsPerPage: "9" }),
      fetchList({ purpose: "for-rent", hitsPerPage: "9" }),
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

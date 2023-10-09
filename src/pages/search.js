import { useState } from 'react';
import { useRouter } from 'next/router';
import Image from 'next/image';
import { Flex, Box, Text, Icon } from '@chakra-ui/react';
import { BsFilter } from 'react-icons/bs';
import SearchFilters from '../components/SearchFilters';
import Property from '../components/Property';
import NoResultImage from '../assets/images/noresult.svg';
import { fetchAPI } from '../utils/fetchAPI';
import { getFilterValues } from '@/utils/filterData';

export default function Search({ properties })  {
  const [searchFilters, setSearchFilters] = useState(false);
  const {query} = useRouter();
 

  return (
    <Box>
      <Flex cursor="pointer" 
            bgColor="gray.100" 
            borderBottomWidth="1px" 
            borderBottomColor="gray.200" 
            p={2} 
            fontWeight="black"
            fontSize="lg"
            justify="center"
            align="center"
            onClick={() => setSearchFilters(!searchFilters)}
      >
        <Text>Search Property By Filters</Text>
        <Icon as={BsFilter} pl={2} w="max"></Icon>
      </Flex>

      {searchFilters && <SearchFilters />}

      <Text fontSize="2xl" p={4} fontWeight="bold">
        Properties {query.purpose}
      </Text>

      <Flex wrap="wrap" justify="center" gap={8}>
        {properties.map((property) => <Property property={property} key={property.id} />)}
      </Flex>

      {properties.length === 0 && (
        <Flex direction="column" justify="center" align="center" mt={5} mb={5}>
          <Image src={NoResultImage} alt="No Result"></Image>
          <Text fontSize="2xl" mt={3}>No Results Found</Text>
        </Flex>
      )}
    </Box>
  )
}

export async function getServerSideProps({ query }) {
  try {  
    const {
      purpose = "for-rent",
      rentFrequency = "yearly",
      priceMin = "0",
      priceMax = "500000",
      sort = "price-desc",
      areaMax = "35000",
      roomsMin = "0",
      bathsMin = "0",
      furnishingStatus = "furnished",
      categoryExternalID = "4",   
      locationExternalIDs = "5002",     
      hitsPerPage = "15"
    } = query;

    const queryParams = {
      purpose,
      rentFrequency,
      priceMin,
      priceMax,
      sort,
      areaMax,
      roomsMin,
      bathsMin,
      furnishingStatus,
      categoryExternalID,
      locationExternalIDs,    
      hitsPerPage
    };
    // console.log(queryParams);
    const data = await fetchAPI(queryParams);
    return {
      props: {
        properties: data?.hits,
      }
    }
  } catch (error) { 
    console.error("Error fetching data:", error);
    return {
      props: {
        properties: [],
      }
    };
  }
}


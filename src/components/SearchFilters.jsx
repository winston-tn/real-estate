import { useEffect, useState } from 'react';
import { Flex, Select, Box, Text, Input, Spinner, Icon, Button } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { MdCancel } from 'react-icons/md';
import Image from 'next/image';
import { filterOptions, getFilterValues } from '../utils/filterData';

const SearchFilters = () => {
  const [filters, setFilters] = useState(filterOptions);
  const router = useRouter();
  
  const searchProperties = (filterValues) => { 
      const { pathname, query } = router;
      const values = getFilterValues(filterValues);
      values.forEach((item) => {
        if (item.value && filterValues?.[item.name]) {
          query[item.name] = item.value;
        }
      })
      router.push({pathname, query});
  }

  return (
    <Flex bgColor="gray.180" p={4} justify="center" wrap="wrap">
      {filters.map((filter) => (
        <Box key={filter.queryName}>
          <Select onChange={(e) => searchProperties({[filter.queryName] : e.target.value})}
                  placeholder={filter.placeholder}
                  w="fit-content"
                  p={2} 
          >
            {filter?.items?.map((item) => <option value={item.value} key={item.value}>{item.name}</option>)}
          </Select>
        </Box>
      ))}
    </Flex>
  )
}

export default SearchFilters;


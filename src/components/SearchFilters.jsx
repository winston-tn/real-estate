import { useState } from 'react';
import { Flex, Select, Box, Button, ButtonGroup } from '@chakra-ui/react';
import { useRouter } from 'next/router';
import { filterOptions, getFilterValues } from '../utils/filterData';

const SearchFilters = () => {
  const router = useRouter();
  const filters = [...filterOptions];
  const [selectedFilters, setSelectedFilters] = useState({});

  const handleFilterChange = (filterName, selectedValue) => {
    setSelectedFilters((prevFilters) => ({
      ...prevFilters,
      [filterName]: selectedValue,
    }));
  };

  const searchProperties = () => {
    const { pathname, query } = router;
    const values = getFilterValues(selectedFilters);
    values.forEach((item) => {
      if (item.value && selectedFilters?.[item.name]) {
        query[item.name] = item.value;
      }
    })
    router.push({ pathname, query });
  }

  const clearFilters = () => {
    const {pathname} = router;
    setSelectedFilters({});
    router.push({pathname});
  }

  return (
    <Flex direction="column" align="center">
      <Flex bgColor="gray.180" p={4} justify="center" wrap="wrap">
        {filters.map((filter) => (
          <Box key={filter.queryName}>
            <Select 
              onChange={(e) => handleFilterChange([filter.queryName], e.target.value )}
              placeholder={filter.placeholder}
              value={selectedFilters[filter.queryName] || ""}
              w="max-content"
              p={2}
            >
              {filter?.items?.map((item) => <option value={item.value} key={item.value}>{item.name}</option>)}
            </Select>
          </Box>
        ))}
      </Flex>
      <ButtonGroup spacing={10}>
        <Button onClick={searchProperties}>Submit</Button>
        <Button onClick={clearFilters}>Clear</Button>
      </ButtonGroup>
    </Flex>
  )
}

export default SearchFilters;


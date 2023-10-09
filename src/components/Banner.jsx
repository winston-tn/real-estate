import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';


const Banner = ({ imgURL, purpose, title1, title2, desc1, desc2, linkName, buttonText }) => (
  <Flex wrap="wrap" justify="center" align="center" m={10} gap={4}>     {/**in rem */}
    <Image src={imgURL} width={500} height={300} alt="Banner"/>             {/**in pixel */}
    <Box>
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br/>{title2}</Text>
      <Text color="gray.700" pt={3} pb={2}>{desc1}<br />{desc2}</Text>     
      <Button as={Link} fontSize="xl" bgColor="blue.400" color="white" href={linkName}>{buttonText}</Button>
    </Box>
  </Flex>
)

export default Banner;

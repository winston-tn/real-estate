import { Flex, Box, Text, Button } from '@chakra-ui/react';
import Image from 'next/image';
import Link from 'next/link';

const Banner = ({ imgURL, purpose, title1, title2, desc, buttonText, redirectLink }) => (
  <Flex wrap="wrap" justify="center" align="center" m={10} gap={4}>         {/**in rem */}
    <Image 
      src={imgURL} 
      alt="Banner" 
      width={600} 
      height={200} 
      style={{width:"600px", height:"400px", objectFit: "contain"}}
    />             
    <Box>
      <Text color="gray.500" fontSize="sm" fontWeight="medium">{purpose}</Text>
      <Text fontSize="3xl" fontWeight="bold">{title1}<br />{title2}</Text>
      <Text color="gray.700" pt={3} pb={3}>{desc}</Text>
      <Button as={Link} href={redirectLink} bgColor="blue.400" fontSize="xl" color="white">{buttonText}</Button>
    </Box>
  </Flex>
)

export default Banner;

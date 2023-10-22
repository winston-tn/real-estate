import { Box, Flex, Text, Avatar, Spacer } from '@chakra-ui/react';
import { FaBed, FaBath } from 'react-icons/fa';
import { BsGridFill } from 'react-icons/bs';
import { GoVerified } from 'react-icons/go';
import millify from 'millify';
import { fetchDetail } from '../../utils/fetchDetail';
import PhotoSlider from '../../components/PhotoSlider';

export default function PropertyDetail({ propertyDetail: { price, rentFrequency, rooms, title, baths, area, agency, isVerified, description, type, purpose, furnishingStatus, amenities, photos } }) {
  return (
    <Flex direction="column" m="auto" align="center" p={4} maxW="container.lg">
      {photos && <PhotoSlider images={photos} />}
      <Box w="full" mt={4}>
        <Flex align="center">
          <Box mr={3} color="green.400">
            {isVerified && <GoVerified />}
          </Box>
          <Text fontSize="lg" fontWeight="bold">AED {millify(price)}{rentFrequency && `/${rentFrequency}`}</Text>
          <Spacer />
          <Avatar size="sm" src={agency?.logo?.url} />
        </Flex>
        <Flex align="center" justify="space-between" w="2xs" color="blue.400">
          {rooms} <FaBed /> | {baths} <FaBath /> | {millify(area)} sqft <BsGridFill />
        </Flex>
        <Text fontSize="lg" fontWeight="bold">{title}</Text>
        <Text color="gray.600">{description}</Text>
        <Flex mt={4} wrap="wrap" textTransform="uppercase">
          <Flex justify="space-between" w="50%" borderWidth="2px" borderColor="gray.100" p={3}>
            <Text>Type</Text>
            <Text fontWeight="bold">{type}</Text>
          </Flex>
          <Flex justify="space-between" w="50%" borderWidth="2px" borderColor="gray.100" p={3}>
            <Text>Purpose</Text>
            <Text fontWeight="bold">{purpose}</Text>
          </Flex>
          {furnishingStatus && (
            <Flex justify="space-between" w="50%" borderWidth="2px" borderColor="gray.100" p={3}>
              <Text>Furnishing Status</Text>
              <Text fontWeight="bold">{furnishingStatus}</Text>
            </Flex>
          )}
        </Flex>
        <Box>
          {amenities && (<Text mt={4} fontSize="2xl" fontWeight="black">Amenities</Text>)}
          <Flex wrap="wrap">
            {amenities.map((item) => (
              item.amenities.map((amenity) => (
                <Text
                  fontWeight="bold"
                  color="blue.400"
                  m={1}
                  p={2}
                  bgColor="gray.200"
                  borderRadius={5}
                  key={amenity.text}
                >
                  {amenity.text}
                </Text>
              ))
            ))}
          </Flex>
        </Box>
      </Box>
    </Flex>
  )
}

export async function getServerSideProps({ params: { id } }) {
  try {
    const data = await fetchDetail(id);
    return {
      props: {
        propertyDetail: data
      }
    }

  } catch (error) {
    console.error("Error fetching data:", error);
    return {
      props: {
        propertyDetail: [],
      }
    };
  }
}

import { Flex } from '@chakra-ui/react';
import Image from 'next/image';
import LoadIcon from '../assets/images/loader.svg';

const Loading = () => (
  <Flex justify="center" align="center" >
    <Image
      src={LoadIcon}
      width={100}
      height={100}
      alt="load-icon"
    />
  </Flex>
)

export default Loading;

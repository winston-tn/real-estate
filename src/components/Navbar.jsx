import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer} from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { BsSearch } from 'react-icons/bs';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p={2} borderBottomWidth="2px" borderBottomColor="gray.100">
    <Box fontSize="3xl" color="blue.400" fontWeight="bold">
      <Link href="/">Realtor</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} variant="outlined" color="red.400"></MenuButton>
        <MenuList>
          <MenuItem as={Link} href="/" icon={<FcHome />}>Home</MenuItem>
          <MenuItem as={Link} href="/search" icon={<BsSearch />}>Search</MenuItem>
          <MenuItem as={Link} href="/search?purpose=for-sale" icon={<FcAbout />}>Sale Property</MenuItem>
          <MenuItem as={Link} href="/search?purpose=for-rent" icon={<FiKey />}>Rent Property</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  </Flex>

)

export default Navbar;


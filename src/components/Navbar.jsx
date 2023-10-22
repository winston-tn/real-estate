import Link from 'next/link';
import { Menu, MenuButton, MenuList, MenuItem, IconButton, Flex, Box, Spacer } from '@chakra-ui/react';
import { FcMenu, FcHome, FcAbout } from 'react-icons/fc';
import { FiKey } from 'react-icons/fi';

const Navbar = () => (
  <Flex p={2} borderBottomWidth="2px" borderBottomColor="gray.100">
    <Box color="blue.400" fontSize="3xl" fontWeight="bold">
      <Link href="/">Realtor</Link>
    </Box>
    <Spacer />
    <Box>
      <Menu>
        <MenuButton as={IconButton} icon={<FcMenu />} size="lg" variant="ghost" />
        <MenuList>
          <MenuItem as={Link} href="/" icon={<FcHome />}>Home</MenuItem>
          <MenuItem as={Link} href="/search?purpose=for-sale" icon={<FcAbout />}>Sale Property</MenuItem>
          <MenuItem as={Link} href="/search?purpose=for-rent" icon={<FiKey />}>Rent Property</MenuItem>
        </MenuList>
      </Menu>
    </Box>
  </Flex>
)

export default Navbar;


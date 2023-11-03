import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/logo.webp';
import SearchInputs from './SearchInputs';

const NavBar = () => {
  return (
    <HStack padding='10px'>
      <Image src={logo} alt='logo' boxSize='60px' />
      <SearchInputs />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

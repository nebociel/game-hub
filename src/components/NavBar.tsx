import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/logo.webp';
import SearchInputs from './SearchInputs';

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Image src={logo} alt='logo' boxSize='60px' />
      <SearchInputs />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

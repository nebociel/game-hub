import { HStack, Image } from '@chakra-ui/react';
import ColorModeSwitch from './ColorModeSwitch';
import logo from '../assets/logo.webp';
import SearchInputs from './SearchInputs';
import { Link } from 'react-router-dom';

// interface Props {
//   onSearch: (searchText: string) => void;
// }

const NavBar = () => {
  return (
    <HStack justifyContent='space-between' padding='10px'>
      <Link to='/'>
        <Image src={logo} alt='logo' boxSize='60px' objectFit='cover' />
      </Link>
      <SearchInputs />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;

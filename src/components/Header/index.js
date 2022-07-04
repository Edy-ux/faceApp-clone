import React, { useContext } from 'react';
import * as C from './styles';
import { SiFacebook, SiNintendogamecube, SiMessenger } from 'react-icons/si';
import { FiSearch, FiMenu } from 'react-icons/fi';
import sim from '../../images/sim.jpg'
import {
  MdOndemandVideo,
  MdHome,
  MdGroups,
  MdNotifications,
} from 'react-icons/md';
import { FaStore, FaCaretDown } from 'react-icons/fa';
import { CgMenuGridO } from 'react-icons/cg';
import HeaderIcon from '../HeaderIcon';
import { AuthContext } from '../../contexts/auth';

const Header = () => {
  const { user, signOut } = useContext(AuthContext);

  return (
    <C.Container>
      <C.Content>
        <C.Section className="section1">
         <C.ImageSim src={sim} alt='Profile_image'/>
          <C.DivSearch>
            <FiSearch />
            <C.Input placeholder="Pesquisar no Facebook" />
          </C.DivSearch>
        </C.Section>
       <C.Section className="section2">
          <HeaderIcon Icon={MdHome} active title='Home'/>
          <HeaderIcon Icon={MdOndemandVideo} title='Video' />
          <HeaderIcon Icon={FaStore} title='MarketPlace'/>
          <HeaderIcon Icon={MdGroups} title='Grupos' />
          <HeaderIcon Icon={SiNintendogamecube}  title='Jogos' display="web" />
          <HeaderIcon Icon={FiMenu} display="mobile" />
        </C.Section>
        <C.Section className="section3">
          <C.Div>
            <C.Image src={user.avatarUrl} onClick={signOut} />
            <C.Label>{user.name.split(' ')[0]}</C.Label>
          </C.Div>
          <HeaderIcon Icon={CgMenuGridO} section="section3" />
          <HeaderIcon Icon={SiMessenger} section="section3" />
          <HeaderIcon Icon={MdNotifications} section="section3" />
          <HeaderIcon Icon={FaCaretDown} section="section3" />
        </C.Section> 
      </C.Content>
    </C.Container>
  );
};

export default Header;

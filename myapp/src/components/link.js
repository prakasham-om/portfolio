import { FaHome, FaUserAlt, FaCog, FaBriefcase } from 'react-icons/fa';

const links = [
  { to: '/', text: 'Home', icon: <FaHome /> },
  { to: '/profile', text: 'Profile', icon: <FaUserAlt /> },
  { to: '/settings', text: 'Settings', icon: <FaCog /> },
  { to: '/portfolio', text: 'Portfolio', icon: <FaBriefcase /> },
];

export default links;

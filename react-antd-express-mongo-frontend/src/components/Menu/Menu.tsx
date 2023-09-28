import { Link } from 'react-router-dom';
import { useMemo } from 'react';

const Menu: React.FC = () => {
  const items = useMemo(
    () => [
      { to: '/', label: 'Home' },
      { to: '/build', label: 'Build' },
      { to: '/login', label: 'Login' },
    ],
    []
  );

  return (
    <ul className="menu">
      {items.map((item) => (
        <li>
          <Link to={item.to}>{item.label}</Link>
        </li>
      ))}
    </ul>
  );
};

export default Menu;

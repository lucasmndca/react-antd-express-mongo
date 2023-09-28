import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { useState } from 'react';
import Menu from '../Menu/Menu';

export default function AppLayout(props: React.PropsWithChildren) {
  const [authenticated, setAuthenticated] = useState(true);

  const layoutStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
  };

  const headerStyle: React.CSSProperties = {
    textAlign: 'center',
    color: '#fff',
    backgroundColor: '#001529',
    padding: 16,
    gap: 16,
    width: '100%',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'center',
  };

  const contentStyle: React.CSSProperties = {
    textAlign: 'center',
    flex: 1,
    lineHeight: '120px',
    color: '#fff',
    backgroundColor: authenticated ? '#fff' : '#001529',
  };

  return (
    <Layout style={layoutStyle}>
      {authenticated ? (
        <Header style={headerStyle}>
          <img src="/logo.png" width={84} alt="" />
          <Menu />
        </Header>
      ) : null}
      <Content style={contentStyle}>{props.children}</Content>
    </Layout>
  );
}

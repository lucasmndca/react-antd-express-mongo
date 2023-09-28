import { Layout } from 'antd';
import { Content, Header } from 'antd/es/layout/layout';
import { useState } from 'react';

const layoutStyle: React.CSSProperties = {
    minHeight: '100vh',
    display: 'flex',
    flexDirection: 'column',
}

const headerStyle: React.CSSProperties = {
  textAlign: 'center',
  color: '#fff',
  height: 64,
  paddingInline: 50,
  lineHeight: '64px',
  backgroundColor: '#7dbcea',
};

const contentStyle: React.CSSProperties = {
  textAlign: 'center',
  flex: 1,
  lineHeight: '120px',
  color: '#fff',
  backgroundColor: '#108ee9',
};

export default function AppLayout(props: React.PropsWithChildren) {
  const [authenticated, setAuthenticates] = useState(false);
  return (
    <Layout style={layoutStyle}>
      {authenticated ? <Header style={headerStyle}>Header</Header> : null}
      <Content style={contentStyle}>{props.children}</Content>
    </Layout>
  );
}

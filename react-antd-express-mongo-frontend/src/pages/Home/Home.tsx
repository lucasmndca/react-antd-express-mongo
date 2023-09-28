import { useState } from 'react';
import { Col, Input, Row, Space } from 'antd';
import { SearchOutlined } from '@ant-design/icons';
import PageHeader from '../../components/PageHeader/PageHeader';

const HomePage: React.FC = () => {
  const [myCars, setMyCars] = useState([]);
  return (
    <>
      <PageHeader title="Lucas" subtitle="Welcome back," />
      <Space direction="vertical" className="page-container">
        <Row>
          <Col span={24}>
            <Input
              size="large"
              placeholder="Search my garage..."
              prefix={<SearchOutlined />}
            />
          </Col>
        </Row>
        {myCars && myCars.length ? (
          <Row>
            <Col span={12}></Col>
          </Row>
        ) : (
          <p>There are no cars in your garage.</p>
        )}
      </Space>
    </>
  );
};

export default HomePage;

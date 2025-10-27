'use client';

import React, { useState, useEffect } from 'react';
import { Descriptions, List, Typography, Card, Row, Col } from 'antd';

const { Title, Text } = Typography;

async function getStudentData(id) {
  const userResponse = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`);
  const postsResponse = await fetch(`https://jsonplaceholder.typicode.com/posts?userId=${id}`);

  const user = await userResponse.json();
  const posts = await postsResponse.json();

  return { user, posts };
}

export default function StudentDetail({ params }) {
  const { id } = React.use(params);
  const [user, setUser] = useState(null);
  const [posts, setPosts] = useState([]); 

  useEffect(() => {
    getStudentData(id).then(({ user, posts }) => {
      setUser(user);
      setPosts(posts);
    });
  }, [id]);

  return (
    <Row gutter={[24, 24]}>
      <Col xs={24} lg={10}>
        <Title level={2}>Student Details</Title>
        <Card>
          <Descriptions bordered column={1} size="small">
            <Descriptions.Item label="Name">{user.name}</Descriptions.Item>
            <Descriptions.Item label="Email">{user.email}</Descriptions.Item>
            <Descriptions.Item label="Phone">{user.phone}</Descriptions.Item>
            <Descriptions.Item label="City">{user.address?.city}</Descriptions.Item>
          </Descriptions>
        </Card>
      </Col>

      <Col xs={24} lg={14}>
        <Title level={2}>Posts by {user.name}</Title>
        <List
          bordered
          dataSource={posts}
          renderItem={(post) => (
            <List.Item>
              <List.Item.Meta
                title={<Text strong>{post.title}</Text>}
                description={post.body}
              />
            </List.Item>
          )}
        />
      </Col>
    </Row>
  );
}

'use client';

import { Typography } from 'antd';

const { Title, Paragraph } = Typography;

export default function About() {
  return (
    <div>
      <Title level={2}>About This Project (App Router)</Title>
      <Paragraph>
        This is a Next.js application for Assignment 23 using the App Router.
      </Paragraph>
      <Paragraph>
        It integrates Ant Design and demonstrates fetching static data
        (student list) and mixed data (static user + dynamic posts) on
        server components.
      </Paragraph>
    </div>
  );
}

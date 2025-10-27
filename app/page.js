// app/page.js
'use client';

import { Typography } from 'antd';

export default function Home() {
  return (
    <div>
      <Typography.Title level={1}>
        Welcome to the Student Portal
      </Typography.Title>
      <Typography.Paragraph>
        Use the Students link in the navigation to see the list.
      </Typography.Paragraph>
      <Typography.Paragraph>
        This app uses the Next.js App Router. The student list is static,
        and the student details are loaded dynamically.
      </Typography.Paragraph>
    </div>
  );
}

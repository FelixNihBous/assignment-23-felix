'use client';

import { Table, Button } from 'antd';
import Link from 'next/link';

export default function StudentsTable({ students }) {
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
    },
    {
      title: 'City',
      dataIndex: 'address',
      render: (address) => address?.city, // Get city from address object
    },
    {
      title: 'Details',
      render: (record) => (
        <Link href={`/students/${record.id}`}>
          <Button type="primary">View</Button>
        </Link>
      ),
    },
  ];

  return <Table dataSource={students} columns={columns} rowKey="id" />;
}

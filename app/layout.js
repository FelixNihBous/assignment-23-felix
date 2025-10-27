'use client';

import { Inter } from 'next/font/google';
import { Layout, Menu } from 'antd';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import './globals.css';

// Import the global Ant Design styles
import 'antd/dist/reset.css';

const inter = Inter({ subsets: ['latin'] });

const { Header, Content, Footer } = Layout;

const navItems = [
  { key: '/', label: <Link href="/">Home</Link> },
  { key: '/students', label: <Link href="/students">Students</Link> },
];

export default function RootLayout({ children }) {
  const pathname = usePathname();

  const selectedKey = pathname.startsWith('/students') ? '/students' : pathname;

  return (
    <html lang="en">
      <body className={inter.className}>
        <Layout style={{ minHeight: '100vh' }}>
          <Header>
            <Menu
              theme="dark"
              mode="horizontal"
              selectedKeys={[selectedKey]}
              items={navItems}
              style={{ flex: 1 }}
            />
          </Header>
          <Content style={{ padding: '24px 48px' }}>
            <div style={{ background: '#fff', padding: 24, minHeight: 380 }}>
              {children}
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Assignment 23 ©2025
          </Footer>
        </Layout>
      </body>
    </html>
  );
}

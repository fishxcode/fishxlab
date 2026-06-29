import { Provider } from '@/components/provider';
import type { Metadata } from 'next';
import './global.css';

export const metadata: Metadata = {
  title: 'fishxlab',
  description: 'fishxlab Pro Canvas 创作工作台文档',
};

export default function Layout({ children }: LayoutProps<'/'>) {
  return (
    <html lang="zh-CN" suppressHydrationWarning>
      <body className="flex flex-col min-h-screen">
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

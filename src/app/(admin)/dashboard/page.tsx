import React from 'react';
import Header from '@/app/components/header';

export interface PageProps {
  children: React.ReactNode;
}

const Page = ({}: PageProps) => {
  return (
    <>
      <Header>Dashboard</Header>
    </>
  );
};

export default Page;

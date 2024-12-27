'use client';

import { useRouter } from 'next/navigation';
import PromotionFormModal from '@/app/components/promotion-form-modal';

export interface PageProps {
  params: { id: string };
}

export default function Page({ params }: PageProps) {
  const router = useRouter();
  return (
    <PromotionFormModal
      // @ts-ignore: Suppressing type mismatch for 'params'
      companyId={params.id}
      show={true}
      onClose={() => router.back()}
    />
  );
}

'use client';

import { HealthAndWellness } from '@/components/features/home/health-section';
import { Sport } from '@/components/features/home/sport-section';
import { Beauty } from '@/components/features/home/beauty-section';

export default function ClientSections() {
  return (
    <>
      <HealthAndWellness />
      <Sport />
      <Beauty />
    </>
  );
} 
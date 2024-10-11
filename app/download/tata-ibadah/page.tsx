import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function TataIbadah() {
  const worshipGuides = [
    {
      title: "Sunday Worship Guide - May 21, 2023",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      title: "Special Service Guide - Easter 2023",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      title: "Youth Service Guide - May 14, 2023",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Worship Guide</h1>
      <p className="mb-4">Download our latest worship guides to follow along during the service.</p>
      <div className="space-y-4">
        {worshipGuides.map((guide, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <span>{guide.title}</span>
            <Link href={guide.url} target="_blank" rel="noopener noreferrer" download>
              <Button>Download</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
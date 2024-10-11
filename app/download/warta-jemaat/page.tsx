import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function WartaJemaat() {
  const bulletins = [
    {
      title: "May 2023 Bulletin",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      title: "April 2023 Bulletin",
      url: "https://www.africau.edu/images/default/sample.pdf"
    },
    {
      title: "March 2023 Bulletin",
      url: "https://www.clickdimensions.com/links/TestPDFfile.pdf"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Congregation Bulletin</h1>
      <p className="mb-4">Stay updated with our latest congregation bulletins. Click to download.</p>
      <div className="space-y-4">
        {bulletins.map((bulletin, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <span>{bulletin.title}</span>
            <Link href={bulletin.url} target="_blank" rel="noopener noreferrer" download>
              <Button>Download</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
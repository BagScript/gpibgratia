import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Formulir() {
  const forms = [
    {
      title: "Membership Application Form",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      title: "Baptism Registration Form",
      url: "https://www.africau.edu/images/default/sample.pdf"
    },
    {
      title: "Volunteer Sign-up Form",
      url: "https://www.clickdimensions.com/links/TestPDFfile.pdf"
    },
    {
      title: "Prayer Request Form",
      url: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Forms</h1>
      <p className="mb-4">Download various church-related forms here.</p>
      <div className="space-y-4">
        {forms.map((form, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <span>{form.title}</span>
            <Link href={form.url} target="_blank" rel="noopener noreferrer" download>
              <Button>Download</Button>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
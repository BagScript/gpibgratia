import React from 'react';
import { Button } from '@/components/ui/button';
import Link from 'next/link';

export default function Khotbah() {
  const sermons = [
    {
      title: '"Faith in Action" - May 21, 2023',
      audioUrl: "https://file-examples.com/storage/fe8c7eef0c6364f6c9504cc/2017/11/file_example_MP3_700KB.mp3",
      transcriptUrl: "https://www.w3.org/WAI/ER/tests/xhtml/testfiles/resources/pdf/dummy.pdf"
    },
    {
      title: '"The Power of Prayer" - May 14, 2023',
      audioUrl: "https://file-examples.com/storage/fe8c7eef0c6364f6c9504cc/2017/11/file_example_MP3_1MG.mp3",
      transcriptUrl: "https://www.africau.edu/images/default/sample.pdf"
    },
    {
      title: '"Living with Purpose" - May 7, 2023',
      audioUrl: "https://file-examples.com/storage/fe8c7eef0c6364f6c9504cc/2017/11/file_example_MP3_2MG.mp3",
      transcriptUrl: "https://www.clickdimensions.com/links/TestPDFfile.pdf"
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Sermons</h1>
      <p className="mb-4">Download our recent sermon recordings and transcripts.</p>
      <div className="space-y-4">
        {sermons.map((sermon, index) => (
          <div key={index} className="flex items-center justify-between p-4 bg-gray-100 rounded-lg">
            <span>{sermon.title}</span>
            <div>
              <Link href={sermon.audioUrl} target="_blank" rel="noopener noreferrer" download>
                <Button className="mr-2">Audio</Button>
              </Link>
              <Link href={sermon.transcriptUrl} target="_blank" rel="noopener noreferrer" download>
                <Button>Transcript</Button>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
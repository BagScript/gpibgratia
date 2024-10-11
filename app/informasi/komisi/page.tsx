import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Komisi() {
  const committees = [
    { name: 'Worship Committee', description: 'Responsible for planning and organizing worship services' },
    { name: 'Education Committee', description: 'Oversees Sunday School and Bible study programs' },
    { name: 'Outreach Committee', description: 'Coordinates evangelism and community service activities' },
    { name: 'Finance Committee', description: 'Manages church finances and budgeting' },
    { name: 'Building and Maintenance Committee', description: 'Maintains church facilities and plans improvements' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Church Committees</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {committees.map((committee, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{committee.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{committee.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
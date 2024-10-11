import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Pelkat() {
  const pelkatGroups = [
    { name: 'Pelkat Kaum Bapak', description: 'Men\'s Fellowship Group' },
    { name: 'Pelkat Kaum Ibu', description: 'Women\'s Fellowship Group' },
    { name: 'Pelkat Pemuda', description: 'Youth Fellowship Group' },
    { name: 'Pelkat Remaja', description: 'Teenagers Fellowship Group' },
    { name: 'Pelkat Anak', description: 'Children\'s Fellowship Group' },
    { name: 'Pelkat Lansia', description: 'Elderly Fellowship Group' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Pelkat (Fellowship Groups)</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {pelkatGroups.map((group, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{group.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{group.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
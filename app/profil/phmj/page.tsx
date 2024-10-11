import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function PHMJ() {
  const phmjMembers = [
    { name: 'Rev. John Doe', role: 'Senior Pastor' },
    { name: 'Elder Jane Smith', role: 'Head Elder' },
    { name: 'Deacon Mike Johnson', role: 'Head Deacon' },
    { name: 'Mrs. Sarah Brown', role: 'Treasurer' },
    { name: 'Mr. David Lee', role: 'Secretary' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">PHMJ (Church Leadership Council)</h1>
      <p className="mb-6">The PHMJ (Pengurus Harian Majelis Jemaat) is our church's leadership council, responsible for the spiritual and administrative oversight of our congregation.</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {phmjMembers.map((member, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{member.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{member.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

export default function Koordinator() {
  const coordinators = [
    { name: 'John Doe', role: 'Senior Pastor' },
    { name: 'Jane Smith', role: 'Youth Ministry Coordinator' },
    { name: 'Mike Johnson', role: 'Worship Leader' },
    { name: 'Sarah Brown', role: 'Children\'s Ministry Coordinator' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Ministry Coordinators</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {coordinators.map((coordinator, index) => (
          <Card key={index}>
            <CardHeader>
              <CardTitle>{coordinator.name}</CardTitle>
            </CardHeader>
            <CardContent>
              <p>{coordinator.role}</p>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}
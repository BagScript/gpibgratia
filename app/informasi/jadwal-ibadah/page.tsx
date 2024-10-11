import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table';

export default function JadwalIbadah() {
  const worshipSchedule = [
    { day: 'Sunday', time: '09:00 AM', service: 'Main Service' },
    { day: 'Sunday', time: '11:00 AM', service: 'Youth Service' },
    { day: 'Wednesday', time: '07:00 PM', service: 'Prayer Meeting' },
    { day: 'Friday', time: '07:30 PM', service: 'Bible Study' },
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Worship Schedule</h1>
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead>Day</TableHead>
            <TableHead>Time</TableHead>
            <TableHead>Service</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {worshipSchedule.map((schedule, index) => (
            <TableRow key={index}>
              <TableCell>{schedule.day}</TableCell>
              <TableCell>{schedule.time}</TableCell>
              <TableCell>{schedule.service}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
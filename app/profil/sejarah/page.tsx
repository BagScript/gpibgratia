import React from 'react';

export default function Sejarah() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Our History</h1>
      <div className="space-y-4">
        <p>BPIB Gratia was founded in [year] by a group of dedicated believers who saw the need for a Christ-centered community in our area. From humble beginnings in a small rented space, our church has grown to become a vibrant congregation serving hundreds of families.</p>
        <p>Over the years, we've faced challenges and celebrated numerous milestones. Some key events in our history include:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>[Year]: Church founding</li>
          <li>[Year]: First building purchased</li>
          <li>[Year]: Launch of our community outreach program</li>
          <li>[Year]: Expansion of our youth ministry</li>
          <li>[Year]: Celebration of our 25th anniversary</li>
        </ul>
        <p>Throughout our journey, we've remained committed to our core values of faith, love, and service. We look forward to continuing God's work in our community for many years to come.</p>
      </div>
    </div>
  );
}
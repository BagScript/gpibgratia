import React from 'react';

export default function VisiMisi() {
  return (
    <main className="mt-10">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6">Vision & Mission</h1>
        <div className="space-y-6">
          <section>
            <h2 className="text-2xl font-semibold mb-3">Our Vision</h2>
            <p>
              To be a Christ-centered community that transforms lives and
              impacts the world with God's love.
            </p>
          </section>
          <section>
            <h2 className="text-2xl font-semibold mb-3">Our Mission</h2>
            <ul className="list-disc list-inside space-y-2">
              <li>Worship God in spirit and truth</li>
              <li>Grow in faith and knowledge of Christ</li>
              <li>Serve others with compassion and love</li>
              <li>Share the Gospel with our community and beyond</li>
              <li>Foster a welcoming and inclusive church family</li>
            </ul>
          </section>
        </div>
      </div>
    </main>
  );
}

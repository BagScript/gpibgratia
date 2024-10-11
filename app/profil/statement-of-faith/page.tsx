import React from 'react';

export default function StatementOfFaith() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold mb-6">Statement of Faith</h1>
      <div className="space-y-4">
        <p>At BPIB Gratia, we believe:</p>
        <ul className="list-disc list-inside space-y-2">
          <li>In one God, eternally existing in three persons: Father, Son, and Holy Spirit.</li>
          <li>In the deity of our Lord Jesus Christ, His virgin birth, His sinless life, His miracles, His atoning death, His bodily resurrection, His ascension to the right hand of the Father, and His personal return in power and glory.</li>
          <li>That the Bible is the inspired, infallible, and authoritative Word of God.</li>
          <li>That salvation is by grace through faith in Jesus Christ alone.</li>
          <li>In the present ministry of the Holy Spirit by whose indwelling the Christian is enabled to live a godly life.</li>
          <li>In the resurrection of both the saved and the lost; those who are saved unto the resurrection of life, and those who are lost unto the resurrection of damnation.</li>
          <li>In the spiritual unity of believers in our Lord Jesus Christ.</li>
        </ul>
        <p>This statement of faith does not exhaust the extent of our beliefs. The Bible itself, as the inspired and infallible Word of God, speaks with final authority concerning truth, morality, and the proper conduct of mankind, and is the sole and final source of all that we believe.</p>
      </div>
    </div>
  );
}
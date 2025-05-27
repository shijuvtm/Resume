
import React from 'react';

export default function AnatomySection() {
  return (
    <div className="anatomy-section">
 <img src="/body.jpg" 
alt="Human Anatomy"  style={{ height: '400px', width: '400px', border: '2px solid black' }}
 /> <ul>

        <li style={{ color: 'green' }}>Healthy Heart</li>
        <li style={{ color: 'red' }}>Lungs</li>
        <li>Teeth</li>
        <li>Bone</li>
      </ul>
    </div>
  );
}

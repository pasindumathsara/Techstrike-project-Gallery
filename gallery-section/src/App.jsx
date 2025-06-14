import React, { useState } from 'react';
import Header from './components/Header';


const events = [
  { title: 'Robotics Workshop', year: 2023 },
  { title: 'AI Meetup', year: 2023 },
  { title: 'Coding Competition', year: 2022 },
  { title: 'Tech Talk', year: 2022 },
  { title: 'Hardware Hackathon', year: 2021 },
  { title: 'Software Showcase', year: 2021 },
];

const App = () => {
  const [search, setSearch] = useState('');

  return (
    <div className="min-h-screen bg-[#0f111a] text-white font-sans">
      <Header />

      
     
    </div>
  );
};

export default App;

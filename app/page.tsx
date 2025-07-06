
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGoogle, FaSearch } from 'react-icons/fa';

const games = [
  { title: 'Fortnite', image: 'https://cdn2.unrealengine.com/Fortnite%2Ffn-mobile-2560x1440-2560x1440-0d2f07c06cda.jpg', link: 'https://www.fortnite.com/', price: 'free' },
  { title: 'GTA V', image: 'https://cdn1.epicgames.com/offer/0bd06f1924ef44559d8bba1d0ec6f4e1/EGS_GrandTheftAutoV_RockstarGames_S1_2560x1440-c55aaffae15d2f6d9a20f1a6c8d9a1e6', link: 'https://store.steampowered.com/app/271590/', price: 'paid' },
  { title: 'Valorant', image: 'https://images.contentstack.io/v3/assets/bltb6530b271fddd0b1/blt15933e8f122ccdc1/5eec602d1c3dd00bfb53b2bb/VALORANT_YR1_EP3_KeyArt.jpg', link: 'https://playvalorant.com/', price: 'free' },
];

export default function Home() {
  const [tab, setTab] = useState('free');
  const [search, setSearch] = useState('');

  const filtered = games.filter(g => g.price === tab && g.title.toLowerCase().includes(search.toLowerCase()));

  return (
    <main className='min-h-screen bg-black text-white p-4'>
      <header className='flex items-center justify-between mb-6'>
        <h1 className='text-2xl font-bold'>🎮 Game Hub</h1>
        <div className='flex gap-2'>
          <button className='bg-neutral-800 px-4 py-2 rounded-full hover:bg-neutral-700'>Créer un compte</button>
          <button className='flex items-center gap-2 bg-blue-600 px-4 py-2 rounded-full hover:bg-blue-500'><FaGoogle /> Google</button>
        </div>
      </header>

      <div className='flex items-center gap-2 mb-4'>
        <button onClick={() => setTab('free')} className={`px-4 py-2 rounded-full ${tab === 'free' ? 'bg-green-600' : 'bg-neutral-800'}`}>Gratuits</button>
        <button onClick={() => setTab('paid')} className={`px-4 py-2 rounded-full ${tab === 'paid' ? 'bg-yellow-600' : 'bg-neutral-800'}`}>Payants</button>
        <div className='flex items-center bg-neutral-800 px-3 py-2 rounded-full w-full max-w-sm ml-auto'>
          <FaSearch className='mr-2' />
          <input placeholder='Recherche...' className='bg-transparent w-full focus:outline-none' value={search} onChange={e => setSearch(e.target.value)} />
        </div>
      </div>

      <section className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4'>
        {filtered.map((g, i) => (
          <motion.a href={g.link} target='_blank' key={i} whileHover={{ scale: 1.05 }} className='block bg-neutral-900 rounded-xl overflow-hidden shadow-md'>
            <img src={g.image} alt={g.title} className='w-full h-40 object-cover' />
            <div className='p-4'>
              <h3 className='text-lg font-semibold'>{g.title}</h3>
              <p className='text-sm text-neutral-400'>{g.price === 'free' ? 'Gratuit' : 'Payant'}</p>
            </div>
          </motion.a>
        ))}
      </section>
    </main>
  );
}

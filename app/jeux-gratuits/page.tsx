import Image from 'next/image';
import Link from 'next/link';
import { jeuxGratuits } from '@/jeux-gratuits';

export default function JeuxGratuits() {
  return (
    <main className="p-6 text-white bg-black min-h-screen">
      <h1 className="text-3xl font-bold mb-4">Jeux Gratuits – Sans Téléchargement</h1>
      <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {jeuxGratuits.map((jeu) => (
          <div key={jeu.id} className="bg-gray-800 p-4 rounded-xl shadow-lg hover:scale-105 transition-transform duration-300">
            <Image
              src={jeu.image}
              alt={jeu.title}
              width={300}
              height={180}
              className="rounded-md object-cover w-full h-[180px]"
            />
            <h2 className="text-xl font-semibold mt-3">{jeu.title}</h2>
            <p className="text-sm text-gray-400">{jeu.device}</p>
            {jeu.noDownload && (
              <p className="text-green-400 text-xs font-bold">Sans téléchargement</p>
            )}
            <Link href={jeu.url} target="_blank">
              <button className="mt-3 bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg w-full">
                Jouer
              </button>
            </Link>
          </div>
        ))}
      </div>
    </main>
  );
}

export const metadata = {
  title: 'GameHub',
  description: 'Jeux gratuits et payants',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="fr">
      <body>{children}</body>
    </html>
  );
}

import './globals.css';

export const metadata = {
  title: '15-Minute Dumbbell Training Plan',
  description:
    'Structured full-body workout schedule optimised for a pair of 5 kg dumbbells and a tight schedule.',
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

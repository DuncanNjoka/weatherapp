export const metadata = {
  title: 'Weather App',
  description: 'A weather application using OpenWeatherMap API',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </head>
      <body>
        <main className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
          <div className="container mx-auto py-8 px-4">
            <h1 className="text-3xl font-bold text-center text-blue-700 mb-10">Weather App</h1>
            {children}
          </div>
        </main>
      </body>
    </html>
  );
} 
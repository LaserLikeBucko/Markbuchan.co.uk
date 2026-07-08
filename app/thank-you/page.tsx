export default function ThankYou() {
  return (
    <main className="min-h-screen bg-[#ffff00] flex flex-col items-center justify-center px-6 text-center">
      <h1 className="font-bold text-4xl md:text-5xl text-[#111110] mb-4" style={{ fontFamily: 'Bebas Neue' }}>
        Thank you. It's yours.
      </h1>
      <p className="text-lg text-[#111110] mb-8 max-w-md">
        Your copy of The Hidden Gap is ready. Click below to download.
      </p>
      <a
        href="/downloads/The-Hidden-Gap-Mark-Buchan-19062026EPUB.epub"
        download
        className="bg-[#111110] text-[#ffff00] font-bold px-8 py-4 mb-6 inline-block hover:bg-[#ff3131] transition-colors"
      >
        Download EPUB
      </a>
      <p className="text-sm text-[#111110]">
        Problem with your download? Email{' '}
        <a href="mailto:iam@markbuchan.co.uk" className="underline">
          iam@markbuchan.co.uk
        </a>
      </p>
    </main>
  );
}
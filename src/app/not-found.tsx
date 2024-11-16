/** 투트랙으로 html을 나누고 RootLayout을 fragment로만 구성했기 때문에 html이 필수적으로 들어가야 함 */

export default function NotFound() {
  return (
    <html className="grid min-h-full place-items-center bg-white px-6 py-24 sm:py-32 lg:px-8">
      <body className="text-center">
        <p className="text-base font-semibold text-indigo-600">404</p>
        <h1 className="mt-4 text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl">Page not found</h1>
        <p className="mt-6 text-base leading-7 text-gray-600">Sorry, we couldn’t find the page you’re looking for.</p>
        <div className="mt-10 flex items-center justify-center gap-x-6">
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a
            href="/"
            className="rounded-md bg-indigo-600 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
          >
            Go back home
          </a>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages */}
          <a href="/" className="text-sm font-semibold text-gray-900">
            Contact support <span aria-hidden="true">&rarr;</span>
          </a>
        </div>
      </body>
    </html>
  );
}

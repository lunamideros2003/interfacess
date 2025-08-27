import Image from 'next/image';

export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#f7f6f4] p-4">
      <div className="flex w-full max-w-4xl overflow-hidden rounded-[40px] shadow-2xl">
        <div className="relative hidden w-1/2 items-center justify-center bg-[#f7f6f4] md:flex">
          <div className="relative h-[450px] w-[450px] overflow-visible">
            <div className="absolute inset-0 z-10 rounded-full bg-white [border-image:linear-gradient(to_right,rgba(0,0,0,0.2),rgba(0,0,0,0.2))_1] after:absolute after:inset-[-12px] after:rounded-full after:border-[12px] after:border-white after:content-['']">
              <Image
                src="/raton.jpg"
                alt="Jerry el ratón"
                layout="fill"
                objectFit="contain"
                className="rounded-full"
              />
            </div>
          </div>
        </div>
        <div className="flex w-full flex-col justify-center bg-white p-12 md:w-1/2">
          <div className="self-end text-sm text-gray-500">
            Don't have an account?{' '}
            <a href="#" className="font-bold text-black">
              Sign up
            </a>
          </div>
          <h1 className="my-8 text-4xl font-bold text-black">Sign in</h1>
          <div className="mb-6 flex space-x-4">
            <button className="flex-1 rounded-xl border border-gray-300 py-3 text-sm font-semibold hover:bg-gray-100">
              <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 533.5 544.3">
                  <path fill="#4285f4" d="M533.5 278.4c0-18.5-1.5-37-4.7-55H272v104h147c-6.3 34-25.5 62.8-54.3 82v68h87.7c51.4-47.3 80.8-117.1 80.8-199z"/>
                  <path fill="#34a853" d="M272 544.3c73.7 0 135.6-24.5 180.8-66.9l-87.7-68c-24.4 16.4-55.7 25.9-93.1 25.9-71.6 0-132.2-48.3-153.9-113.2H28.4v70.9c45.3 89.7 138.5 151.3 243.6 151.3z"/>
                  <path fill="#fbbc05" d="M118.1 322.1c-10.7-31.9-10.7-66.4 0-98.3V153H28.4c-38.2 76.1-38.2 166.2 0 242.3z"/>
                  <path fill="#ea4335" d="M272 107.7c39.9-.6 78.3 14 107.5 40.9l80.2-80.2C407.6 24.6 343.3 0 272 0 166.9 0 73.7 61.6 28.4 151.3l89.7 70.9C139.8 156 200.4 107.7 272 107.7z"/>
                </svg>
              </div>
            </button>
            <button className="flex-1 rounded-xl border border-gray-300 py-3 text-sm font-semibold hover:bg-gray-100">
              <div className="flex items-center justify-center space-x-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 16 16" aria-label="Apple">
                  <path d="M11.182.008c-.034-.038-1.259.015-2.325 1.172-1.066 1.156-.902 2.482-.878 2.516s1.52.087 2.475-1.258.762-2.391.728-2.43m3.314 11.733c-.048-.096-2.325-1.234-2.113-3.422s1.675-2.789 1.698-2.854-.597-.79-1.254-1.157a3.7 3.7 0 0 0-1.563-.434c-.108-.003-.483-.095-1.254.116-.508.139-1.653.589-1.968.607-.316.018-1.256-.522-2.267-.665-.647-.125-1.333.131-1.824.328-.49.196-1.422.754-2.074 2.237-.652 1.482-.311 3.83-.067 4.56s.625 1.924 1.273 2.796c.576.984 1.34 1.667 1.659 1.899s1.219.386 1.843.067c.502-.308 1.408-.485 1.766-.472.357.013 1.061.154 1.782.539.571.197 1.111.115 1.652-.105.541-.221 1.324-1.059 2.238-2.758q.52-1.185.473-1.282"/>
                </svg>
              </div>
            </button>
          </div>
          <div className="my-4 text-center text-gray-400">
            Or continue with email address
          </div>
          <div className="space-y-4">
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="3" y="5" width="18" height="14" rx="2" ry="2"/>
                  <polyline points="3,7 12,13 21,7"/>
                </svg>
              </div>
              <input
                type="email"
                placeholder="tam@ullil.net"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none placeholder:text-gray-600"
              />
            </div>
            <div className="relative">
              <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" fill="none" stroke="#6b7280" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <rect x="5" y="11" width="14" height="8" rx="2" ry="2"></rect>
                  <path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
                </svg>
              </div>
              <input
                type="password"
                placeholder="************"
                className="w-full rounded-xl border border-gray-300 bg-gray-50 py-3 pl-10 pr-4 text-sm focus:border-blue-500 focus:outline-none placeholder:text-gray-600"
              />
            </div>
            <button className="w-full rounded-xl bg-blue-600 py-3 text-white transition-colors hover:bg-blue-700">
              Start trading
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
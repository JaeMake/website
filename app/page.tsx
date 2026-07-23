import { BirdIcon } from 'lucide-react';

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-3xl flex-col items-center justify-between bg-white dark:bg-black sm:items-start">
        <BirdIcon size={48} />
        <div className="flex flex-col items-center gap-6 text-center sm:items-start sm:text-left">
          <h1 className="max-w-xs text-3xl font-semibold leading-10 tracking-tight text-black dark:text-zinc-50">
            Welcome to <span className="bg-clip-text text-transparent bg-linear-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90%">JaeMake</span>
          </h1>
          <p className="max-w-md text-lg leading-8 text-zinc-600 dark:text-zinc-400">
            This is just a demo and placeholder
          </p>
        </div>
        <button type="button" className="btn preset-outlined-surface-500">Meet the Creators</button>
      </main>
    </div>
  );
}

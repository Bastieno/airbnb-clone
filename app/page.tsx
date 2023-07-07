'use client'
import useScrollDirection from './hooks/useScrollDirection';

function HeaderContent() {
  return (
    <header>
      <h1>Fixed Header</h1>
    </header>
  );
}

function ActionContent() {
  const scrollDir = useScrollDirection();
  const show = scrollDir === 'up' ? 'show' : '';

  return (
    <div
      className={`action-content text-sm p-5 text-white bg-[#333] ${show}`}
    >
      Fixed Action Content
    </div>
  );
}

function PageContent() {
  return (
    <main>
      <div className='content'>
        <h2>Scrollable Body Content</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Phasellus
          ullamcorper elit vel tellus venenatis, eget mattis dolor posuere.
          Praesent sed fermentum turpis, et semper elit.
        </p>
      </div>
    </main>
  );
}

export default function Home() {
  return (
    <>
      <HeaderContent/>
      <PageContent />
      <ActionContent />
    </>
  );
}

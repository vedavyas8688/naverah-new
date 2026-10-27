import { useEffect, useRef } from 'react';

export function PropertyNavigationSection({ tab, setTab, tabs }) {
  const navigationRef = useRef(null);
  const linkRefs = useRef(new Map());

  useEffect(() => {
    const navigation = navigationRef.current;
    const activeLink = linkRefs.current.get(tab);
    if (!navigation || !activeLink) return;

    const left = activeLink.offsetLeft - (navigation.clientWidth - activeLink.offsetWidth) / 2;
    navigation.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
  }, [tab]);

  const handleNavigation = (event, name) => {
    event.preventDefault();
    const id = name.toLowerCase().replaceAll(' ', '-');
    const section = document.getElementById(id);
    if (!section) return;

    setTab(name);
    section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    window.history.replaceState(null, '', `#${id}`);
  };

  return (
    <nav className="property-tabs" aria-label="Property sections">
      <div ref={navigationRef} className="shell flex overflow-x-auto gap-9">
        {tabs.map((t) => (
          <a
            href={'#' + t.toLowerCase().replace(' ', '-')}
            className={tab === t ? 'active' : ''}
            aria-current={tab === t ? 'location' : undefined}
            ref={(node) => {
              if (node) linkRefs.current.set(t, node);
              else linkRefs.current.delete(t);
            }}
            onClick={(event) => handleNavigation(event, t)}
            key={t}
          >
            {t}
          </a>
        ))}
      </div>
    </nav>
  );
}

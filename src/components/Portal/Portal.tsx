'use client';
import * as React from 'react';
import { ReactNode } from 'react';
import { createPortal } from 'react-dom';

function Portal({ children }: { children: ReactNode }) {
  console.log('Let\s go party')
  console.log(children)
  const [ host, setHost ] = React.useState<HTMLElement | null>(null);
  React.useEffect(() => {
    const rootDiv = document.createElement('div');
    rootDiv.setAttribute('data-react-portal-host', '');
    document.body.appendChild(rootDiv);
    setHost(rootDiv);

    return () => rootDiv.remove();
  }, []);
  return host && createPortal(children, host);
}

export default Portal;

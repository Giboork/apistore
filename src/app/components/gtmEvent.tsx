'use client'

import {useEffect} from 'react'

export default function GtmEventClient(props: any) {
  useEffect(() => {
      if (typeof window !== "undefined") {
          const win = window as any
          const url = win.location.href;
          let title = document.title;
          win.dataLayer.push({
              event: 'pageView',
              url,
              title,
              type: props.customEvent.type
          });
  }

  }, []);

  return <div></div>
}

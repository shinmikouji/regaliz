---
to: components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>/index.tsx
---

import React from 'react';

export type <%= h.changeCase.pascal(component_name) %>Props = {

}

export const <%= h.changeCase.pascal(component_name) %>: React.FC<<%= h.changeCase.pascal(component_name) %>Props> = ({}) => {
  return (
    <></>
  )
}
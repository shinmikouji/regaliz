---
to: components/<%= atomic %>/<%= h.changeCase.pascal(component_name) %>/index.tsx
---

import { VFC } from 'react';

export type <%= h.changeCase.pascal(component_name) %>Props = {

}

export const <%= h.changeCase.pascal(component_name) %>: React.VFC<<%= h.changeCase.pascal(component_name) %>Props> = ({}) => {
  return (
    <></>
  )
}
import React from 'react';
import Link from 'next/link';
import s from './index.module.scss';

export type HeaderProps = {
  title: string;
  href: string;
}

const items = [
  {
    id: 1,
    title: "CREDO",
    href: "/credo"
  },
  {
    id: 2,
    title: "BUSINESS",
    href: "/business"
  },{
    id: 3,
    title: "COMPANY",
    href: "/company"
  },{
    id: 4,
    title: "NEWS",
    href: "/news"
  }
]

export const Header: React.FC<HeaderProps> = ({}) => {
  return (
    <div className={s['o-header']}>
      <div className={s['o-header__logo']}></div>
      <ul className={s['o-header__nav']}>
        {items.map((item) => (
          <li>
            <Link href={item.href}>{item.title}</Link>
          </li>
        ))}
      </ul>
    </div>
  )
}
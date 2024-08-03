import { ComponentProps } from 'react'
import { Friend, SocialProfile } from 'src/components'
import {
  bryanLiu,
  dwayneJohnson,
  github,
  instagram,
  jeffZhao,
  jodiJang,
  linkedin,
  youtube,
} from './b64'

type Profile = ComponentProps<typeof SocialProfile>

export const profiles: Profile[] = [
  {
    label: 'Medium',
    url: 'https://medium.com/@dhiransh.works',
    src: github,
  },
  {
    label: 'YouTube',
    url: 'https://www.youtube.com/@dhiranshsaxena',
    src: youtube,
  },
  {
    label: 'LinkedIn',
    url: 'https://www.linkedin.com/in/dhiransh-saxena/',
    src: linkedin,
  },
  {
    label: 'Instagram',
    url: 'https://www.instagram.com/dhiransh.java',
    src: instagram,
  },
]

type Friends = ComponentProps<typeof Friend>[]

export const friends: Friends = [
  {
    src: dwayneJohnson,
    name: 'Ryan Reynolds',
    label: 'Twin Brother',
    url: 'https://www.google.com/search?q=ryan+reynolds',
  },
  {
    src: jodiJang,
    name: 'Wanda Maximoff',
    label: 'Wifey',
    url: 'https://www.google.com/search?q=wanda+maximoff',
  },
  {
    src: bryanLiu,
    name: 'Lionel Messi',
    label: 'First Love',
    url: 'https://www.google.com/search?q=lionel+messi',
  },
  {
    src: jeffZhao,
    name: 'Reptiles',
    label: 'Nemesis',
    url: 'https://www.google.com/search?q=reptiles',
  },
]

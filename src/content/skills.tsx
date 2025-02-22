import { Skill } from 'src/types'

export const HISTORY_LENGTH = 18

const pad = (arr: number[]) =>
  new Array(HISTORY_LENGTH - arr.length).fill(0).concat(arr)

export const skills = [
  {
    symbol: 'TS',
    name: 'TypeScript',
    type: 'LANGUAGE',
    category: 'FRONTEND',
    history: [0, 0, 8, 20, 34, 55, 58, 70, 85, 91, 89, 93, 95, 93, 70, 73],
  },
  {
    symbol: 'JS',
    name: 'JavaScript',
    type: 'LANGUAGE',
    category: 'FRONTEND',
    history: [10, 20, 20, 35, 56, 57, 58, 72, 71, 70, 77, 78, 76, 74],
  },
  {
    symbol: 'PY',
    name: 'Python',
    type: 'LANGUAGE',
    category: 'BACKEND',
    history: [4, 8, 22, 35, 50, 48, 45, 50, 73, 71, 78, 81, 76, 83, 87],
  },
  // {
  //   symbol: 'RUBY',
  //   name: 'Ruby',
  //   type: 'LANGUAGE',
  //   category: 'BACKEND',
  //   history: [0, 0, 0, 0, 0, 0, 2, 46, 67, 61, 78, 67, 66, 59],
  // },
  {
    symbol: 'DART',
    name: 'Dart',
    type: 'LANGUAGE',
    category: 'MOBILE',
    history: [10, 13, 18, 24, 31, 42, 47, 50, 43, 61, 73, 82, 88, 91],
  },
  {
    symbol: 'GO',
    name: 'Go',
    type: 'LANGUAGE',
    category: 'BACKEND',
    history: [0, 0, 0, 0, 0, 0, 0, 0, 0, 8, 12, 15, 13, 21],
  },
  // {
  //   symbol: 'EX',
  //   name: 'Elixir',
  //   type: 'LANGUAGE',
  //   category: 'BACKEND',
  //   history: [0, 0, 12, 35, 45, 42, 38, 36, 34, 32, 30, 28, 27, 26, 25],
  // },
  {
    symbol: 'C',
    name: 'C',
    type: 'LANGUAGE',
    category: 'BACKEND',
    history: [0, 2, 34, 46, 42, 40, 38, 45, 56, 52, 50, 48, 51, 46, 41],
  },
  {
    symbol: 'CPP',
    name: 'C++',
    type: 'LANGUAGE',
    category: 'BACKEND',
    history: [0, 0, 11, 13, 8, 6, 21, 24, 20, 18, 26, 31, 32, 56, 47, 39],
  },
  {
    symbol: 'JAVA',
    name: 'Java',
    type: 'LANGUAGE',
    category: 'BACKEND',
    history: [0, 0, 32, 37, 42, 40, 38, 35, 50, 47, 44, 40, 37, 50, 72],
  },
  {
    symbol: 'REACT',
    name: 'React',
    type: 'FRAMEWORK',
    category: 'FRONTEND',
    history: [
      1, 10, 40, 37, 32, 55, 50, 80, 78, 73, 92, 91, 95, 96, 85, 72, 81,
    ],
  },
  // {
  //   symbol: 'RN',
  //   name: 'React Native',
  //   type: 'FRAMEWORK',
  //   category: 'MOBILE',
  //   history: [0, 0, 0, 5, 32, 50, 67, 53, 52, 50, 48, 74, 70, 86, 89],
  // },
  {
    symbol: 'FLTR',
    name: 'Flutter',
    type: 'FRAMEWORK',
    category: 'MOBILE',
    history: [0, 0, 0, 10, 26, 47, 42, 46, 51, 57, 63, 68, 77, 81, 79, 89],
  },
  {
    category: 'FRONTEND',
    name: 'NextJS',
    symbol: 'NEXT',
    type: 'FRAMEWORK',
    history: [0, 49, 52, 63, 72, 70, 71, 72, 73, 76, 71, 70],
  },
  // {
  //   category: 'FRONTEND',
  //   name: 'Vue',
  //   symbol: 'VUE',
  //   type: 'FRAMEWORK',
  //   history: [0, 8, 14, 25, 30, 29, 28, 31, 31, 28, 28, 27, 36, 20],
  // },
  {
    category: 'BACKEND',
    name: 'Express',
    symbol: 'EXP',
    type: 'FRAMEWORK',
    history: [0, 4, 32, 25, 29, 24, 50, 56, 54, 52, 62, 66, 72, 59, 52],
  },
  // {
  //   category: 'BACKEND',
  //   name: 'Prisma',
  //   symbol: 'PSMA',
  //   type: 'FRAMEWORK',
  //   history: [0, 34, 50, 57, 65, 60, 55],
  // },
  // {
  //   category: 'BACKEND',
  //   name: 'NestJS',
  //   symbol: 'NEST',
  //   type: 'FRAMEWORK',
  //   history: [0, 10, 32, 45, 60, 80, 82, 86, 84, 80, 75],
  // },
  // {
  //   category: 'BACKEND',
  //   name: 'Ruby on Rails',
  //   symbol: 'ROR',
  //   type: 'FRAMEWORK',
  //   history: [0, 0, 0, 0, 0, 0, 2, 46, 67, 61, 78, 68, 67, 65, 60, 49],
  // },
  // {
  //   category: 'BACKEND',
  //   name: 'Phoenix',
  //   symbol: 'PHX',
  //   type: 'FRAMEWORK',
  //   history: [0, 0, 12, 35, 45, 42, 38, 36, 34, 32, 30, 28, 27, 29, 25],
  // },
  {
    category: 'BACKEND',
    name: 'Django',
    symbol: 'Django',
    type: 'FRAMEWORK',
    history: [1, 5, 14, 20, 18, 16, 31, 35, 47, 54, 62, 70, 75, 78, 84],
  },
  {
    category: 'BACKEND',
    name: 'Flask',
    symbol: 'FLASK',
    type: 'FRAMEWORK',
    history: [1, 5, 22, 20, 18, 16, 37, 35, 40, 39, 38, 70, 60, 55, 47],
  },
  {
    category: 'ML',
    name: 'PyTorch',
    symbol: 'PTCH',
    type: 'FRAMEWORK',
    history: [1, 3, 6, 12, 10, 22, 20, 19, 14, 17, 19, 22, 60, 55, 60],
  },
  {
    category: 'ML',
    name: 'Tensorflow',
    symbol: 'TF',
    type: 'FRAMEWORK',
    history: [4, 14, 18, 25, 30, 29, 28, 26, 30, 35, 43, 56],
  },
  {
    category: 'ML',
    name: 'Scikit Learn',
    symbol: 'SKL',
    type: 'FRAMEWORK',
    history: [35, 42, 49, 39, 35, 34, 34, 33, 34, 32, 37, 32, 33],
  },
  {
    category: 'DATA',
    name: 'PySpark',
    symbol: 'PSPK',
    type: 'FRAMEWORK',
    history: [20, 43, 56, 54, 50, 47, 45, 43, 46, 44, 35, 21],
  },
  {
    category: 'ML',
    name: 'Numpy',
    symbol: 'NP',
    type: 'FRAMEWORK',
    history: [3, 50, 43, 38, 36, 33, 33, 32, 36, 40, 45, 70],
  },
  // {
  //   category: 'INFRA',
  //   name: 'CDK',
  //   symbol: 'CDK',
  //   type: 'CLOUD',
  //   history: [4, 30, 64, 60, 54, 65, 67, 71, 60],
  // },
  // {
  //   category: 'INFRA',
  //   name: 'EKS',
  //   symbol: 'EKS',
  //   type: 'CLOUD',
  //   history: [1, 4, 12, 18, 16, 31, 34, 40, 50, 45],
  // },
  {
    category: 'INFRA',
    name: 'Lambda',
    symbol: <>&lambda;</>,
    type: 'CLOUD',
    history: [10, 23, 32, 37, 36, 31, 24, 17],
  },
  {
    category: 'INFRA',
    name: 'S3',
    symbol: 'S3',
    type: 'CLOUD',
    history: [20, 42, 65, 62, 68, 70, 67, 60, 55],
  },
  // {
  //   category: 'INFRA',
  //   name: 'DynamoDB',
  //   symbol: 'DNDB',
  //   type: 'CLOUD',
  //   history: [5, 32, 52, 49, 42, 38, 37, 40, 42],
  // },
  {
    category: 'INFRA',
    name: 'RDS',
    symbol: 'RDS',
    type: 'CLOUD',
    history: [12, 20, 41, 63, 55, 63, 67, 68, 71],
  },
  {
    category: 'INFRA',
    name: 'GCP',
    symbol: 'GCP',
    type: 'CLOUD',
    history: [3, 14, 17, 24, 22, 32, 30, 28, 34, 38, 42, 40, 38, 42],
  },
  {
    category: 'INFRA',
    name: 'AWS',
    symbol: 'AWS',
    type: 'CLOUD',
    history: [3, 14, 17, 24, 22, 32, 36, 41, 47, 51, 57, 64, 66, 69],
  },
  {
    category: 'INFRA',
    name: 'Cloud SQL',
    symbol: 'CSQL',
    type: 'CLOUD',
    history: [4, 13, 25, 35, 32, 28, 20, 22, 20, 26, 20, 16, 11],
  },
  // {
  //   category: 'DATA',
  //   name: 'Athena',
  //   symbol: 'ATNA',
  //   type: 'CLOUD',
  //   history: [1, 27, 36, 42, 40, 39, 37, 32],
  // },
  // {
  //   category: 'DATA',
  //   name: 'Redshift',
  //   symbol: 'RSFT',
  //   type: 'CLOUD',
  //   history: [3, 20, 42, 63, 58, 52, 50, 48, 40],
  // },
  // {
  //   category: 'INFRA',
  //   name: 'Helm',
  //   symbol: 'HELM',
  //   type: 'TOOL',
  //   history: [1, 20, 24, 22, 21, 25, 20, 19, 18, 17, 17, 16, 15, 14],
  // },
  {
    category: 'INFRA',
    name: 'Kubernetes',
    symbol: 'K8S',
    type: 'TOOL',
    history: [1, 12, 14, 18, 19, 32, 31, 34, 39, 42, 39, 41, 37, 33, 29, 24],
  },
  {
    category: 'DATABASE',
    name: 'PostgreSQL',
    symbol: 'PSQL',
    type: 'TOOL',
    history: [10, 21, 24, 22, 26, 30, 32, 40, 45, 57, 64, 71, 76, 81],
  },
  {
    category: 'DATABASE',
    name: 'MySQL',
    symbol: 'MSQL',
    type: 'TOOL',
    history: [8, 25, 30, 35, 50, 56, 54, 57, 53, 52, 46, 39, 33, 27],
  },
  {
    category: 'DATABASE',
    name: 'MongoDB',
    symbol: 'MDB',
    type: 'TOOL',
    history: [14, 45, 60, 67, 64, 62, 56, 48, 56, 62, 68, 71, 74],
  },
  {
    category: 'DATABASE',
    name: 'Redis',
    symbol: 'REDIS',
    type: 'TOOL',
    history: [9, 14, 17, 21, 25, 23, 20, 16],
  },
  {
    category: 'DEVOPS',
    name: 'GitHub Actions',
    symbol: 'GHA',
    type: 'TOOL',
    history: [30, 42, 56, 73, 70, 58, 62, 64, 67, 69, 71, 74, 76],
  },
  // {
  //   category: 'DEVOPS',
  //   name: 'Travis CI',
  //   symbol: 'TCI',
  //   type: 'TOOL',
  //   history: [35, 32, 40, 49, 47, 46, 44, 42, 40, 38, 35, 34, 33, 31],
  // },
  {
    category: 'INFRA',
    name: 'Docker',
    symbol: 'D',
    type: 'TOOL',
    history: [3, 7, 11, 13, 17, 21, 26, 31, 35, 29, 23, 17, 13, 11],
  },
  {
    category: 'PROTOCOL',
    name: 'GraphQL',
    symbol: 'GQL',
    type: 'TOOL',
    history: [20, 31, 37, 42, 46, 52, 60, 62, 71, 72, 74, 75, 76, 82, 85, 90],
  },
  // {
  //   category: 'PROTOCOL',
  //   name: 'gRPC',
  //   symbol: 'GRPC',
  //   type: 'TOOL',
  //   history: [1, 18, 22, 21, 43],
  // },
  {
    category: 'BACKEND',
    name: 'Kotlin',
    symbol: 'KT',
    type: 'LANGUAGE',
    history: [24, 35, 46, 54, 67, 59, 51, 41],
  },
  // {
  //   category: 'BACKEND',
  //   name: 'PHP',
  //   symbol: 'PHP',
  //   type: 'LANGUAGE',
  //   history: [34, 46, 70, 74],
  // },
].map((skill) => ({
  ...skill,
  history: pad(skill.history.map((value) => value + Math.random() * 3)),
}))

skills.sort((a, b) => b.history.at(-1) - a.history.at(-1))

export const skillsMap: Record<
  string,
  Skill & { data: { x: string; y: number }[] }
> = {}

export const languages: Skill[] = [],
  frameworks: Skill[] = [],
  services: Skill[] = [],
  tools: Skill[] = [],
  frontend: Skill[] = [],
  backend: Skill[] = [],
  infra: Skill[] = [],
  dataML: Skill[] = [],
  frontendData: { x: number; y: number }[] = [],
  backendData: { x: number; y: number }[] = [],
  infraData: { x: number; y: number }[] = [],
  dataMLData: { x: number; y: number }[] = []

skills.forEach((skill) => {
  switch (skill.type) {
    case 'LANGUAGE':
      languages.push(skill)
      break
    case 'FRAMEWORK':
      frameworks.push(skill)
      break
    case 'CLOUD':
      services.push(skill)
      break
    case 'TOOL':
      tools.push(skill)
      break
  }

  switch (skill.category) {
    case 'FRONTEND':
    case 'MOBILE':
      frontend.push(skill)
      break
    case 'BACKEND':
    case 'PROTOCOL':
    case 'DATABASE':
      backend.push(skill)
      break
    case 'INFRA':
      infra.push(skill)
      break
    case 'DATA':
    case 'ML':
      dataML.push(skill)
      break
  }

  if (skill.name === 'Python') dataML.push(skill)
  if (
    skill.name === 'NextJS' ||
    skill.name === 'TypeScript' ||
    skill.name === 'JavaScript'
  )
    backend.push(skill)
  if (skill.name === 'Go') infra.push(skill)

  skillsMap[skill.name] = {
    ...skill,
    data: skill.history.map((y, i) => ({
      y,
      x: `${2018 + Math.floor((8 + i * 4) / 12)}-${((8 + i * 4) % 12)
        .toString()
        .padStart(2, '0')}-01`,
    })),
  }
})

for (let i = 0; i < HISTORY_LENGTH; i++) {
  let curr = 0
  frontend.forEach(({ history }) => (curr += history.at(i)))
  frontendData.push({ y: curr / frontend.length, x: i })

  curr = 0
  backend.forEach(({ history }) => (curr += history.at(i)))
  backendData.push({ y: curr / backend.length, x: i })

  curr = 0
  infra.forEach(({ history }) => (curr += history.at(i)))
  infraData.push({ y: curr / infra.length, x: i })

  curr = 0
  dataML.forEach(({ history }) => (curr += history.at(i)))
  dataMLData.push({ y: curr / dataML.length, x: i })
}

export const frontendDataRaw = skills
  .filter(({ category }) => category === 'FRONTEND')
  .map(({ history, name }) => ({
    id: name,
    data: history.map((y, x) => ({ x, y })),
  }))
  .reverse()

export const backendDataRaw = skills
  .filter(({ category }) => category === 'BACKEND')
  .map(({ history, name }) => ({
    id: name,
    data: history.map((y, x) => ({ x, y })),
  }))
  .reverse()

export const infraDataRaw = skills
  .filter(({ category }) => category === 'INFRA')
  .map(({ history, name }) => ({
    id: name,
    data: history.map((y, x) => ({ x, y })),
  }))
  .reverse()

export const dataMLDataRaw = dataML
  .map(({ history, name }) => ({
    id: name,
    data: history.map((y, x) => ({ x, y })),
  }))
  .reverse()

export const databaseDataRaw = skills
  .filter(({ category }) => category === 'DATABASE')
  .map(({ history, name }) => ({
    id: name,
    data: history.map((y, x) => ({ x, y })),
  }))
  .reverse()

export const protocolDataRaw = skills
  .filter(({ category }) => category === 'PROTOCOL')
  .map(({ history, name }) => ({
    id: name,
    data: history.map((y, x) => ({ x, y })),
  }))
  .reverse()

export const mobileDataRaw = skills
  .filter(({ category }) => category === 'MOBILE')
  .map(({ history, name }) => ({
    id: name,
    data: history.map((y, x) => ({ x, y })),
  }))
  .reverse()

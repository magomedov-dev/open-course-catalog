/**
 * КОНФИГ КАТАЛОГА КУРСОВ
 * ------------------------------------------------------------
 * Чтобы добавить курс — допишите объект в массив courses (ниже).
 * Чтобы добавить категорию — допишите её в categories и укажите
 * ключ в categoryOrder (порядок в этом массиве = порядок на сайте).
 *
 * Поля курса:
 *   id       — уникальный идентификатор (латиница, без пробелов)
 *   code     — код курса, напр. "CS161"
 *   title    — полное название курса
 *   org      — университет / источник
 *   level    — уровень, напр. "Начальный", "Средний", "Продвинутый"
 *   category — ключ категории из объекта categories
 *   url      — прямая ссылка на курс
 * ------------------------------------------------------------
 */

window.CATALOG_CONFIG = {
  categoryOrder: [
    "programming",
    "algorithms",
    "systems",
    "databases",
    "networks",
    "ml",
    "security",
    "aieng",
    "meta",
  ],

  categories: {
    programming: { name: "Основы программирования", color: "#4A7A96" },
    algorithms: { name: "Алгоритмы и структуры данных", color: "#B9893F" },
    systems: { name: "Системы и архитектура", color: "#A15C38" },
    databases: { name: "Базы данных", color: "#3E7C74" },
    networks: { name: "Сети", color: "#6B5B95" },
    ml: { name: "Машинное обучение и AI", color: "#A23B3B" },
    security: { name: "Кибербезопасность", color: "#45516B" },
    aieng: { name: "AI-инженерия и Software Eng", color: "#6E7F4F" },
    meta: { name: "Курируемые программы", color: "#8C7A5C" },
  },

  courses: [
    {
      id: "cs50",
      code: "CS50",
      title: "Введение в информатику",
      org: "Harvard",
      level: "Начальный",
      category: "programming",
      url: "https://cs50.harvard.edu/x/",
    },
    {
      id: "cs106a",
      code: "CS106A",
      title: "Programming Methodology",
      org: "Stanford",
      level: "Начальный",
      category: "programming",
      url: "https://cs106a.stanford.edu/",
    },
    {
      id: "cs61a",
      code: "CS61A",
      title: "Structure and Interpretation of Computer Programs",
      org: "UC Berkeley",
      level: "Начальный–средний",
      category: "programming",
      url: "https://cs61a.org/",
    },

    {
      id: "cs61b",
      code: "CS61B",
      title: "Data Structures",
      org: "UC Berkeley",
      level: "Средний",
      category: "algorithms",
      url: "https://sp26.datastructur.es/",
    },
    {
      id: "mit6006",
      code: "6.006",
      title: "Introduction to Algorithms",
      org: "MIT",
      level: "Средний",
      category: "algorithms",
      url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
    },

    {
      id: "cs61c",
      code: "CS61C",
      title: "Great Ideas in Computer Architecture",
      org: "UC Berkeley",
      level: "Средний",
      category: "systems",
      url: "https://inst.eecs.berkeley.edu/~cs61c/",
    },
    {
      id: "mit6002",
      code: "6.002",
      title: "Circuits and Electronics",
      org: "MIT",
      level: "Средний",
      category: "systems",
      url: "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/",
    },
    {
      id: "mit601sc",
      code: "6.01SC",
      title: "Introduction to EE & CS",
      org: "MIT",
      level: "Начальный–средний",
      category: "systems",
      url: "https://ocw.mit.edu/courses/6-01sc-introduction-to-electrical-engineering-and-computer-science-i-spring-2011/",
    },

    {
      id: "cmu15445",
      code: "15-445",
      title: "Database Systems",
      org: "CMU",
      level: "Продвинутый",
      category: "databases",
      url: "https://15445.courses.cs.cmu.edu/",
    },

    {
      id: "cs144",
      code: "CS144",
      title: "Introduction to Computer Networking",
      org: "Stanford",
      level: "Продвинутый",
      category: "networks",
      url: "https://cs144.github.io/",
    },

    {
      id: "cs229",
      code: "CS229",
      title: "Machine Learning",
      org: "Stanford",
      level: "Продвинутый",
      category: "ml",
      url: "https://cs229.stanford.edu/",
    },
    {
      id: "cs231n",
      code: "CS231n",
      title: "Deep Learning for Computer Vision",
      org: "Stanford",
      level: "Продвинутый",
      category: "ml",
      url: "https://cs231n.stanford.edu/",
    },
    {
      id: "cs188",
      code: "CS188",
      title: "Introduction to Artificial Intelligence",
      org: "UC Berkeley",
      level: "Средний–продвинутый",
      category: "ml",
      url: "https://inst.eecs.berkeley.edu/~cs188/",
    },
    {
      id: "fastai",
      code: "fast.ai",
      title: "Practical Deep Learning for Coders",
      org: "fast.ai / USF",
      level: "Средний",
      category: "ml",
      url: "https://course.fast.ai/",
    },

    {
      id: "mit6858",
      code: "6.858",
      title: "Computer Systems Security",
      org: "MIT",
      level: "Продвинутый",
      category: "security",
      url: "https://ocw.mit.edu/courses/6-858-computer-systems-security-fall-2014/",
    },

    {
      id: "cs146s",
      code: "CS146S",
      title: "The Modern Software Developer",
      org: "Stanford",
      level: "Продвинутый",
      category: "aieng",
      url: "https://github.com/mihail911/modern-software-dev-assignments",
    },

    {
      id: "ossu",
      code: "OSSU",
      title: "Полный учебный план по Computer Science",
      org: "Open Source Society University",
      level: "Все уровни",
      category: "meta",
      url: "https://github.com/ossu/computer-science",
    },
  ],
};

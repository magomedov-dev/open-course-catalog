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
    "os",
    "compilers",
    "databases",
    "networks",
    "distributed",
    "ml",
    "math",
    "security",
    "aieng",
    "physics",
    "meta",
  ],

  categories: {
    programming: { name: "Основы программирования", color: "#4A7A96" },
    algorithms: { name: "Алгоритмы и структуры данных", color: "#B9893F" },
    systems: { name: "Системы и архитектура", color: "#A15C38" },
    os: { name: "Операционные системы", color: "#5C8A8A" },
    compilers: { name: "Трансляторы и ЯП", color: "#6B8E7B" },
    databases: { name: "Базы данных", color: "#3E7C74" },
    networks: { name: "Сети", color: "#6B5B95" },
    distributed: { name: "Распределённые системы", color: "#8B5E3C" },
    ml: { name: "Машинное обучение и AI", color: "#A23B3B" },
    math: { name: "Математика", color: "#7B68AE" },
    security: { name: "Кибербезопасность", color: "#45516B" },
    aieng: { name: "AI-инженерия и Software Eng", color: "#6E7F4F" },
    physics: { name: "Физика", color: "#5A7D9A" },
    meta: { name: "Курируемые программы", color: "#8C7A5C" },
  },

  courses: [
    // ======================
    // ОСНОВЫ ПРОГРАММИРОВАНИЯ
    // ======================

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
      title: "Методология программирования",
      org: "Stanford",
      level: "Начальный",
      category: "programming",
      url: "https://cs106a.stanford.edu/",
    },
    {
      id: "cs106b",
      code: "CS106B",
      title: "Абстракции программирования",
      org: "Stanford",
      level: "Средний",
      category: "programming",
      url: "https://web.stanford.edu/class/archive/cs/cs106b/",
    },
    {
      id: "cs61a",
      code: "CS61A",
      title: "Структуры и интерпретации компьютерных программ",
      org: "UC Berkeley",
      level: "Начальный–средний",
      category: "programming",
      url: "https://cs61a.org/",
    },
    {
      id: "mit60001",
      code: "6.0001",
      title: "Введение в информатику и программирование на Python",
      org: "MIT",
      level: "Начальный",
      category: "programming",
      url: "https://ocw.mit.edu/courses/6-0001-introduction-to-computer-science-and-programming-in-python-fall-2016/",
    },

    // ======================
    // АЛГОРИТМЫ И СТРУКТУРЫ ДАННЫХ
    // ======================

    {
      id: "cs61b",
      code: "CS61B",
      title: "Структуры данных",
      org: "UC Berkeley",
      level: "Средний",
      category: "algorithms",
      url: "https://sp26.datastructur.es/",
    },
    {
      id: "mit6006",
      code: "6.006",
      title: "Введение в алгоритмы",
      org: "MIT",
      level: "Средний",
      category: "algorithms",
      url: "https://ocw.mit.edu/courses/6-006-introduction-to-algorithms-spring-2020/",
    },
    {
      id: "mit-algo-yt",
      code: "6.006 (видео)",
      title: "Введение в алгоритмы (видеолекции)",
      org: "MIT / YouTube",
      level: "Средний",
      category: "algorithms",
      url: "https://www.youtube.com/watch?v=oFVYVzlvk9c&list=PLUl4u3cNGP63EdVPNLG3ToM6LaEUuStEY&index=13",
    },
    {
      id: "princeton-algs1",
      code: "Algorithms I",
      title: "Алгоритмы, часть I",
      org: "Princeton",
      level: "Средний",
      category: "algorithms",
      url: "https://algs4.cs.princeton.edu/home/",
    },
    {
      id: "princeton-algs2",
      code: "Algorithms II",
      title: "Алгоритмы, часть II",
      org: "Princeton",
      level: "Продвинутый",
      category: "algorithms",
      url: "https://algs4.cs.princeton.edu/home/",
    },
    {
      id: "cs170",
      code: "CS170",
      title: "Эффективные алгоритмы и неразрешимые задачи",
      org: "UC Berkeley",
      level: "Продвинутый",
      category: "algorithms",
      url: "https://cs170.org/",
    },

    // ======================
    // СИСТЕМЫ И АРХИТЕКТУРА
    // ======================

    {
      id: "cs61c",
      code: "CS61C",
      title: "Великие идеи компьютерной архитектуры",
      org: "UC Berkeley",
      level: "Средний",
      category: "systems",
      url: "https://inst.eecs.berkeley.edu/~cs61c/",
    },
    {
      id: "mit6002",
      code: "6.002",
      title: "Схемы и электроника",
      org: "MIT",
      level: "Средний",
      category: "systems",
      url: "https://ocw.mit.edu/courses/6-002-circuits-and-electronics-spring-2007/",
    },
    {
      id: "mit601sc",
      code: "6.01SC",
      title: "Введение в электротехнику и информатику",
      org: "MIT",
      level: "Начальный–средний",
      category: "systems",
      url: "https://ocw.mit.edu/courses/6-01sc-introduction-to-electrical-engineering-and-computer-science-i-spring-2011/",
    },
    {
      id: "nand2tetris",
      code: "Nand2Tetris",
      title: "От Nand до Тетриса",
      org: "nand2tetris.org",
      level: "Средний",
      category: "systems",
      url: "https://www.nand2tetris.org",
    },
    {
      id: "comp-sys-yt",
      code: "Computer Systems",
      title: "Компьютерные системы (видеолекции)",
      org: "YouTube",
      level: "Средний",
      category: "systems",
      url: "https://www.youtube.com/watch?v=Keducx5bp-g&list=PL0j-r-omG7i0-mnsxN5T4UcVS1Di0isqf&index=17",
    },
    {
      id: "onurmutlu",
      code: "Onur Mutlu",
      title: "Лекции по компьютерной архитектуре",
      org: "YouTube / Onur Mutlu",
      level: "Средний–продвинутый",
      category: "systems",
      url: "https://www.youtube.com/@OnurMutluLectures/courses",
    },

    // ======================
    // ОПЕРАЦИОННЫЕ СИСТЕМЫ
    // ======================

    {
      id: "ostep",
      code: "OSTEP",
      title: "Операционные системы: три простых части",
      org: "UW-Madison / Remzi Arpaci-Dusseau",
      level: "Средний",
      category: "os",
      url: "https://pages.cs.wisc.edu/~remzi/OSTEP/",
    },
    {
      id: "cs537",
      code: "CS 537",
      title: "Операционные системы",
      org: "UW-Madison",
      level: "Продвинутый",
      category: "os",
      url: "https://pages.cs.wisc.edu/~remzi/Classes/537/Fall2021/",
    },
    {
      id: "mit6s081",
      code: "6.S081",
      title: "Инженерия операционных систем",
      org: "MIT",
      level: "Продвинутый",
      category: "os",
      url: "https://pdos.csail.mit.edu/6.S081/2021/schedule.html",
    },
    {
      id: "cs162",
      code: "CS162",
      title: "Операционные системы и системное программирование",
      org: "UC Berkeley",
      level: "Продвинутый",
      category: "os",
      url: "https://cs162.org/",
    },

    // ======================
    // ТРАНСЛЯТОРЫ И ЯЗЫКИ ПРОГРАММИРОВАНИЯ
    // ======================

    {
      id: "cornell-cs6120",
      code: "CS 6120",
      title: "Самостоятельный курс магистратуры",
      org: "Cornell",
      level: "Продвинутый",
      category: "compilers",
      url: "https://www.cs.cornell.edu/courses/cs6120/2025fa/self-guided/",
    },
    {
      id: "cornell-cs4120",
      code: "CS 4120",
      title: "Введение в трансляторы",
      org: "Cornell",
      level: "Средний",
      category: "compilers",
      url: "https://www.cs.cornell.edu/courses/cs4120/2026sp/notes/",
    },
    {
      id: "cmu-compiler",
      code: "15-411",
      title: "Проектирование трансляторов",
      org: "CMU",
      level: "Продвинутый",
      category: "compilers",
      url: "https://www.cs.cmu.edu/~411/",
    },

    // ======================
    // БАЗЫ ДАННЫХ
    // ======================

    {
      id: "cmu15445",
      code: "15-445",
      title: "Системы баз данных",
      org: "CMU",
      level: "Продвинутый",
      category: "databases",
      url: "https://15445.courses.cs.cmu.edu/",
    },
    {
      id: "cmu15445-fall2024",
      code: "15-445 (задания)",
      title: "Системы баз данных (задания)",
      org: "CMU",
      level: "Продвинутый",
      category: "databases",
      url: "https://15445.courses.cs.cmu.edu/fall2024/assignments.html",
    },
    {
      id: "db-yt",
      code: "DB Systems (видео)",
      title: "Системы баз данных (видеолекции)",
      org: "YouTube",
      level: "Средний",
      category: "databases",
      url: "https://www.youtube.com/watch?v=niLwbfE3V9Q&list=PLSE8ODhjZXjYDBpQnSymaectKjxCy6BYq&index=20",
    },
    {
      id: "stanford-db",
      code: "DB",
      title: "Базы данных",
      org: "Stanford",
      level: "Средний",
      category: "databases",
      url: "https://online.stanford.edu/courses/soe-ydatabases-databases",
    },

    // ======================
    // СЕТИ
    // ======================

    {
      id: "cs144",
      code: "CS144",
      title: "Введение в компьютерные сети",
      org: "Stanford",
      level: "Продвинутый",
      category: "networks",
      url: "https://cs144.github.io/",
    },
    {
      id: "wireshark",
      code: "Wireshark Labs",
      title: "Лабораторные по сетям (Wireshark)",
      org: "UMass / Kurose & Ross",
      level: "Средний",
      category: "networks",
      url: "http://gaia.cs.umass.edu/kurose_ross/wireshark.php",
    },
    {
      id: "cs168",
      code: "CS168",
      title: "Введение в интернет",
      org: "UC Berkeley",
      level: "Средний",
      category: "networks",
      url: "https://cs168.io/",
    },

    // ======================
    // РАСПРЕДЕЛЁННЫЕ СИСТЕМЫ
    // ======================

    {
      id: "mit6824",
      code: "6.824",
      title: "Распределённые системы",
      org: "MIT",
      level: "Продвинутый",
      category: "distributed",
      url: "https://pdos.csail.mit.edu/6.824/schedule.html",
    },
    {
      id: "dist-yt",
      code: "Распределённые системы (видео)",
      title: "Распределённые системы (видеолекции)",
      org: "YouTube",
      level: "Средний",
      category: "distributed",
      url: "https://www.youtube.com/watch?v=UEAMfLPZZhE&list=PLeKd45zvjcDFUEv_ohr_HdUFe97RItdiB",
    },
    {
      id: "cs244b",
      code: "CS244B",
      title: "Распределённые системы",
      org: "Stanford",
      level: "Продвинутый",
      category: "distributed",
      url: "https://web.stanford.edu/class/cs244b/",
    },

    // ======================
    // МАШИННОЕ ОБУЧЕНИЕ И AI
    // ======================

    {
      id: "cs229",
      code: "CS229",
      title: "Машинное обучение",
      org: "Stanford",
      level: "Продвинутый",
      category: "ml",
      url: "https://cs229.stanford.edu/",
    },
    {
      id: "cs231n",
      code: "CS231n",
      title: "Глубокое обучение для компьютерного зрения",
      org: "Stanford",
      level: "Продвинутый",
      category: "ml",
      url: "https://cs231n.stanford.edu/",
    },
    {
      id: "cs188",
      code: "CS188",
      title: "Введение в искусственный интеллект",
      org: "UC Berkeley",
      level: "Средний–продвинутый",
      category: "ml",
      url: "https://inst.eecs.berkeley.edu/~cs188/",
    },
    {
      id: "fastai",
      code: "fast.ai",
      title: "Практическое глубокое обучение для программистов",
      org: "fast.ai / USF",
      level: "Средний",
      category: "ml",
      url: "https://course.fast.ai/",
    },
    {
      id: "cs224n",
      code: "CS224N",
      title: "Обработка естественного языка с глубоким обучением",
      org: "Stanford",
      level: "Продвинутый",
      category: "ml",
      url: "https://web.stanford.edu/class/cs224n/",
    },
    {
      id: "cs25",
      code: "CS25",
      title: "Трансформеры",
      org: "Stanford",
      level: "Продвинутый",
      category: "ml",
      url: "https://web.stanford.edu/class/cs25/",
    },
    {
      id: "cs236",
      code: "CS236",
      title: "Глубокие генеративные модели",
      org: "Stanford",
      level: "Продвинутый",
      category: "ml",
      url: "https://deepgenerativemodels.github.io/",
    },
    {
      id: "berkeley-dl",
      code: "CS182",
      title: "Глубокие нейронные сети",
      org: "UC Berkeley",
      level: "Продвинутый",
      category: "ml",
      url: "https://cs182sp21.github.io/",
    },

    // ======================
    // МАТЕМАТИКА
    // ======================

    {
      id: "mit1801",
      code: "18.01",
      title: "Математический анализ (одна переменная)",
      org: "MIT",
      level: "Начальный",
      category: "math",
      url: "https://ocw.mit.edu/courses/18-01-single-variable-calculus-fall-2006/",
    },
    {
      id: "mit1802",
      code: "18.02",
      title: "Математический анализ (множественные переменные)",
      org: "MIT",
      level: "Средний",
      category: "math",
      url: "https://ocw.mit.edu/courses/18-02-multivariable-calculus-fall-2007/",
    },
    {
      id: "mit1806",
      code: "18.06",
      title: "Линейная алгебра",
      org: "MIT",
      level: "Средний",
      category: "math",
      url: "https://ocw.mit.edu/courses/18-06-linear-algebra-spring-2010/",
    },
    {
      id: "mit18065",
      code: "18.065",
      title: "Методы матриц в анализе данных",
      org: "MIT",
      level: "Продвинутый",
      category: "math",
      url: "https://ocw.mit.edu/courses/18-065-matrix-methods-in-data-analysis-signal-processing-and-machine-learning-fall-2018/",
    },
    {
      id: "boyd-linalg",
      code: "VMLS",
      title: "Введение в прикладную линейную алгебру",
      org: "Stanford / Stephen Boyd",
      level: "Средний",
      category: "math",
      url: "https://web.stanford.edu/~boyd/vmls/",
    },
    {
      id: "mit6042",
      code: "6.042",
      title: "Математика для информатики",
      org: "MIT",
      level: "Средний",
      category: "math",
      url: "https://courses.csail.mit.edu/6.042/spring18/mcs.pdf",
    },
    {
      id: "mit-course18",
      code: "Course 18",
      title: "Математика",
      org: "MIT / mitsoul.org",
      level: "Все уровни",
      category: "math",
      url: "https://mitsoul.org/courses/mit/course-18/",
    },
    {
      id: "stat110",
      code: "Stat 110",
      title: "Теория вероятностей",
      org: "Harvard",
      level: "Средний",
      category: "math",
      url: "https://stat110.hsites.harvard.edu",
    },
    {
      id: "3b1b",
      code: "3Blue1Brown",
      title: "Математика (визуальные лекции)",
      org: "3Blue1Brown",
      level: "Все уровни",
      category: "math",
      url: "https://www.3blue1brown.com/#lessons",
    },
    {
      id: "khanacademy",
      code: "Khan Academy",
      title: "Математика",
      org: "Khan Academy",
      level: "Начальный",
      category: "math",
      url: "https://www.khanacademy.org",
    },
    {
      id: "mathacademy",
      code: "Math Academy",
      title: "Математика для взрослых",
      org: "Math Academy",
      level: "Все уровни",
      category: "math",
      url: "https://mathacademy.com/adult-students",
    },
    {
      id: "mathacademy-courses",
      code: "Math Academy (курсы)",
      title: "Курсы математики",
      org: "Math Academy",
      level: "Все уровни",
      category: "math",
      url: "https://mathacademy.com/courses",
    },
    {
      id: "stanford-playlist",
      code: "Stanford Playlist",
      title: "Плейлист курсов Стэнфорда",
      org: "Stanford / YouTube",
      level: "Все уровни",
      category: "math",
      url: "https://www.youtube.com/watch?v=2MuDZIAzBMY&list=PLoROMvodv4rOpr_A7B9SriE_iZmkanvUg",
    },
    {
      id: "eigensteve",
      code: "Eigensteve",
      title: "Математика и инженерия (плейлисты)",
      org: "YouTube / Steve Brunton",
      level: "Средний",
      category: "math",
      url: "https://www.youtube.com/@Eigensteve/playlists",
    },
    {
      id: "drtrefor",
      code: "DrTrefor",
      title: "Математика и наука (плейлисты)",
      org: "YouTube / DrTrefor",
      level: "Все уровни",
      category: "math",
      url: "https://www.youtube.com/@DrTrefor/playlists",
    },

    // ======================
    // КИБЕРБЕЗОПАСНОСТЬ
    // ======================

    {
      id: "mit6858",
      code: "6.858",
      title: "Безопасность компьютерных систем",
      org: "MIT",
      level: "Продвинутый",
      category: "security",
      url: "https://ocw.mit.edu/courses/6-858-computer-systems-security-fall-2014/",
    },
    {
      id: "pwncollege",
      code: "pwn.college",
      title: "Кибербезопасность",
      org: "pwn.college",
      level: "Все уровни",
      category: "security",
      url: "https://pwn.college/",
    },
    {
      id: "cs253",
      code: "CS 253",
      title: "Безопасность веб-приложений",
      org: "Stanford",
      level: "Продвинутый",
      category: "security",
      url: "https://web.stanford.edu/class/cs253/",
    },
    {
      id: "mit61600",
      code: "6.1600",
      title: "Прикладная криптография",
      org: "MIT",
      level: "Продвинутый",
      category: "security",
      url: "https://61600.csail.mit.edu/2023/",
    },
    {
      id: "cs155",
      code: "CS155",
      title: "Безопасность компьютеров и сетей",
      org: "Stanford",
      level: "Продвинутый",
      category: "security",
      url: "https://cs155.stanford.edu/",
    },
    {
      id: "cs161-sec",
      code: "CS161",
      title: "Безопасность компьютеров",
      org: "UC Berkeley",
      level: "Продвинутый",
      category: "security",
      url: "https://sp25.cs161.org/",
    },

    // ======================
    // AI-ИНЖЕНЕРИЯ И РАЗРАБОТКА ПО
    // ======================

    {
      id: "cs146s",
      code: "CS146S",
      title: "Современный разработчик ПО",
      org: "Stanford",
      level: "Продвинутый",
      category: "aieng",
      url: "https://github.com/mihail911/modern-software-dev-assignments",
    },
    {
      id: "modernswdev",
      code: "Modern Software Dev",
      title: "Современный разработчик ПО",
      org: "themodernsoftware.dev",
      level: "Средний",
      category: "aieng",
      url: "https://themodernsoftware.dev",
    },

    // ======================
    // ФИЗИКА
    // ======================

    {
      id: "mit801",
      code: "8.01",
      title: "Классическая механика",
      org: "MIT",
      level: "Начальный",
      category: "physics",
      url: "https://ocw.mit.edu/courses/8-01sc-classical-mechanics-fall-2016/",
    },
    {
      id: "mit802",
      code: "8.02",
      title: "Электричество и магнетизм",
      org: "MIT",
      level: "Средний",
      category: "physics",
      url: "https://ocw.mit.edu/courses/8-02sc-physics-ii-electricity-and-magnetism-fall-2010/",
    },
    {
      id: "physicsgraph",
      code: "Physics Graph",
      title: "Физика (визуально)",
      org: "physicsgraph.com",
      level: "Все уровни",
      category: "physics",
      url: "https://physicsgraph.com",
    },

    // ======================
    // КУРИРУЕМЫЕ ПРОГРАММЫ
    // ======================

    {
      id: "ossu",
      code: "OSSU",
      title: "Полный учебный план по Computer Science",
      org: "Open Source Society University",
      level: "Все уровни",
      category: "meta",
      url: "https://github.com/ossu/computer-science",
    },
    {
      id: "30papers",
      code: "30 Papers",
      title: "30 статей",
      org: "30papers.com",
      level: "Все уровни",
      category: "meta",
      url: "https://30papers.com",
    },
  ],
};

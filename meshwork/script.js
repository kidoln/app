const content = {
  zh: {
    metaTitle: "MeshWork｜本地优先的 AI 知识创作工作台",
    metaDescription:
      "MeshWork 面向 macOS，把本地 Markdown、AI 讨论和 Git 共享放在一个 Apple 原生知识工作台里。",
    nav: {
      studio: "Kido Studio",
      features: "能力",
      workflow: "工作流",
      ai: "AI",
      sharing: "共享",
      manual: "手册",
    },
    hero: {
      eyebrow: "面向 macOS 的 Apple 原生应用",
      title: "本地优先的 AI 知识创作工作台",
      subtitle:
        "MeshWork 把 Markdown 笔记、讨论、AI 助手和 Git 共享放在同一个工作区里。资料先留在本地，需要协作时再把明确的知识库或共享空间同步出去。",
      primary: "阅读操作手册",
      secondary: "了解工作流",
      pointOne: "本地 Markdown",
      pointTwo: "AI 参与讨论",
      pointThree: "Git 原生共享",
    },
    intro: {
      kicker: "What it is",
      title: "先把材料整理清楚，再让 AI 和团队参与进来。",
      body: "MeshWork 的主页应该先回答一个简单问题：它不是聊天软件，也不是只放文件的笔记本。它是一个围绕知识创作组织起来的本地工作台，把写作、资料、讨论、AI 引用和版本历史放在同一份上下文里。",
    },
    features: {
      kicker: "Core Capabilities",
      title: "围绕知识创作，而不是围绕消息流。",
      body: "页面内容按用户真实关心的顺序组织：文件在哪、怎么写、怎么关联、怎么搜索、什么时候共享。",
      native: {
        title: "Apple 原生工作区",
        body: "主窗口、侧边栏、编辑器和系统交互都优先使用 macOS 原生体验，减少网页式操作负担。",
        pointOne: "系统窗口和键盘交互",
        pointTwo: "清晰的三栏知识工作区",
        pointThree: "界面缩放和密度设置",
      },
      files: {
        title: "开放的本地文件",
        body: "笔记和附件以本地知识库为起点，Markdown 可以直接访问、备份、迁移，也能离开应用继续保留。",
      },
      editor: {
        title: "面向创作的编辑器",
        body: "支持双栏和所见即所得写作，PlantUML、Mermaid、Graphviz 与数学公式可以直接进入文档。",
      },
      links: {
        title: "链接形成知识网络",
        body: "WikiLink、反链和话题分支把单篇笔记放回上下文，讨论结论也能回流成可引用的知识。",
      },
      search: {
        title: "中文友好的检索",
        body: "全局搜索支持拼音匹配，AI 也可以使用本地搜索、章节读取、链接分析等工具查找证据。",
      },
    },
    workflow: {
      kicker: "Workflow",
      title: "从私人材料到共享知识，有清楚的边界。",
      body: "MeshWork 的核心工作流不是把所有东西都同步到云端，而是先保留私人材料，再在需要时创建有边界的共享空间。",
      private: {
        title: "整理私人知识库",
        body: "草稿、摘录、附件和早期想法先留在自己的本地知识库里。",
      },
      discuss: {
        title: "围绕材料发起讨论",
        body: "把问题放进讨论区，邀请成员或 AI 智能体从不同角度分析。",
      },
      write: {
        title: "把结论写回文档",
        body: "确认后的共识、证据和下一步行动沉淀为可长期维护的笔记。",
      },
      share: {
        title: "用 Git 共享边界内内容",
        body: "私有知识库和共享空间分别绑定 Git 远端，提交、拉取、推送都发生在明确边界内。",
      },
    },
    ai: {
      kicker: "AI in context",
      title: "AI 不只回答问题，它要能读懂你的知识库。",
      body: "MeshWork 给 AI 提供受控的本地工具：搜索文档、读取章节、查看链接和反链、理解目录结构。需要写入、同步或发布时，仍由人确认。",
      toolOne: "BM25 本地搜索",
      toolTwo: "按章节读取",
      toolThree: "WikiLink 分析",
      toolFour: "受控命令集合",
    },
    sharing: {
      kicker: "Git-native sharing",
      title: "协作可以开放，数据边界必须清楚。",
      body: "MeshWork 使用标准 Git 远端做同步与版本历史。你可以选择 GitHub、Gitee、GitLab 或自建服务，也可以让不同项目拥有不同的共享边界。",
      boundaryOne: "私有知识库",
      boundaryTwo: "共享空间",
      boundaryThree: "标准 Git 远端",
    },
    documents: {
      kicker: "Document system",
      title: "常用材料都能进入知识库。",
      body: "主页不需要罗列所有细节，但应该让用户知道 MeshWork 能处理真实工作中的文档、图表和网络环境。",
      markdown: {
        title: "Markdown",
        body: "开放格式保存笔记，适合长期维护、版本管理和迁移。",
      },
      diagram: {
        title: "图表与公式",
        body: "PlantUML、Mermaid、Graphviz 和数学公式直接渲染。",
      },
      office: {
        title: "PDF 与 Word",
        body: "PDFKit 原生查看，Word 只读预览，扫描 PDF 可用 Apple Vision OCR。",
      },
      proxy: {
        title: "独立代理",
        body: "AI、网络搜索和 Git 可分别配置代理，适配不同网络环境。",
      },
    },
    story: {
      kicker: "Scenarios",
      title: "给创造者和小团队使用。",
      body: "无论是面对面讨论，还是异步推进项目，MeshWork 都把过程、材料和结论留在同一个知识空间里。",
      sceneOne: "会议室里的讨论可以即时整理成可引用的笔记。",
      sceneTwo: "远程团队可以异步留下问题、证据和 AI 总结。",
    },
    footer: {
      note: "Local-first creative workspace for notes, discussions, AI participation, and Git-native sharing.",
      privacy: "隐私政策",
    },
    images: {
      heroPoster: "images/poster_zh.png",
      knowledgePoster: "images/poster_2_zh.png",
      sharingPoster: "images/poster_3_zh.png",
    },
    alt: {
      heroPoster: "MeshWork 中文产品图，展示 macOS 原生讨论与笔记界面",
      knowledgePoster: "MeshWork 中文产品图，展示讨论结果连接到知识图谱",
      sharingPoster: "MeshWork 中文产品图，展示通过 GitHub 共享知识",
    },
  },
  en: {
    metaTitle: "MeshWork | Local-first AI knowledge workspace",
    metaDescription:
      "MeshWork brings local Markdown, AI discussion, and Git sharing into one Apple-native knowledge workspace.",
    nav: {
      studio: "Kido Studio",
      features: "Features",
      workflow: "Workflow",
      ai: "AI",
      sharing: "Sharing",
      manual: "Manual",
    },
    hero: {
      eyebrow: "Apple-native app for macOS",
      title: "A local-first AI workspace for knowledge creation",
      subtitle:
        "MeshWork brings Markdown notes, discussion, AI assistance, and Git sharing into one workspace. Your materials start local; selected libraries or shared spaces sync only when collaboration needs them.",
      primary: "Read manual",
      secondary: "See workflow",
      pointOne: "Local Markdown",
      pointTwo: "AI in discussion",
      pointThree: "Git-native sharing",
    },
    intro: {
      kicker: "What it is",
      title: "Organize your materials first. Bring in AI and teammates when it helps.",
      body: "MeshWork is not a chat app, and it is not just a folder of notes. It is a local workspace organized around knowledge creation, keeping writing, sources, discussion, AI references, and version history in the same context.",
    },
    features: {
      kicker: "Core Capabilities",
      title: "Built around knowledge creation, not a message stream.",
      body: "The page now follows the order users care about: where files live, how writing works, how notes connect, how search works, and when sharing begins.",
      native: {
        title: "Apple-native workspace",
        body: "Windows, sidebars, editors, and system interactions follow macOS conventions instead of web-app ceremony.",
        pointOne: "System windows and keyboard behavior",
        pointTwo: "Clear three-column knowledge workspace",
        pointThree: "Interface scale and density controls",
      },
      files: {
        title: "Open local files",
        body: "Notes and assets start in a local knowledge base. Markdown stays accessible, portable, backed up, and useful beyond the app.",
      },
      editor: {
        title: "Editor for creation",
        body: "Two-pane and WYSIWYG writing are supported, with PlantUML, Mermaid, Graphviz, and math rendering inside documents.",
      },
      links: {
        title: "Links form a knowledge network",
        body: "WikiLinks, backlinks, and topic branches put each note back into context. Discussion conclusions can become reusable knowledge.",
      },
      search: {
        title: "Search that understands Chinese workflows",
        body: "Global search supports Pinyin matching, and AI can use local search, section reading, and link analysis to find evidence.",
      },
    },
    workflow: {
      kicker: "Workflow",
      title: "Private materials and shared knowledge have clear boundaries.",
      body: "MeshWork does not push everything to a cloud by default. You keep private material local, then create bounded shared spaces when a project needs collaboration.",
      private: {
        title: "Organize a private library",
        body: "Drafts, clippings, assets, and early ideas stay in your local knowledge base.",
      },
      discuss: {
        title: "Discuss around source material",
        body: "Put questions into a discussion and invite teammates or AI agents to analyze them from different angles.",
      },
      write: {
        title: "Write conclusions back",
        body: "Confirmed decisions, evidence, and next steps become notes you can maintain over time.",
      },
      share: {
        title: "Share bounded content with Git",
        body: "Private libraries and shared spaces bind to Git remotes separately, so commit, pull, and push stay inside a clear boundary.",
      },
    },
    ai: {
      kicker: "AI in context",
      title: "AI should understand your knowledge base, not just answer a prompt.",
      body: "MeshWork gives AI controlled local tools: search documents, read sections, inspect links and backlinks, and understand the folder structure. Writing, syncing, and publishing still require human confirmation.",
      toolOne: "BM25 local search",
      toolTwo: "Section reading",
      toolThree: "WikiLink analysis",
      toolFour: "Controlled command set",
    },
    sharing: {
      kicker: "Git-native sharing",
      title: "Collaboration can be open. Data boundaries must be clear.",
      body: "MeshWork uses standard Git remotes for sync and version history. Choose GitHub, Gitee, GitLab, or a self-hosted service, and keep different projects in different boundaries.",
      boundaryOne: "Private library",
      boundaryTwo: "Shared space",
      boundaryThree: "Standard Git remote",
    },
    documents: {
      kicker: "Document system",
      title: "Real working materials can enter the knowledge base.",
      body: "The homepage does not need every detail, but it should make clear that MeshWork handles everyday documents, diagrams, and network environments.",
      markdown: {
        title: "Markdown",
        body: "Open-format notes are ready for long-term maintenance, versioning, and migration.",
      },
      diagram: {
        title: "Diagrams and math",
        body: "PlantUML, Mermaid, Graphviz, and math formulas render directly in documents.",
      },
      office: {
        title: "PDF and Word",
        body: "PDFKit viewing, read-only Word preview, and Apple Vision OCR for scanned PDFs.",
      },
      proxy: {
        title: "Separate proxies",
        body: "AI, web search, and Git can each use separate proxy settings for different networks.",
      },
    },
    story: {
      kicker: "Scenarios",
      title: "For creators and small teams.",
      body: "Whether a team is meeting in person or moving asynchronously, MeshWork keeps process, material, and conclusions in one knowledge space.",
      sceneOne: "Meeting-room discussions can become referenceable notes immediately.",
      sceneTwo: "Remote teams can leave questions, evidence, and AI summaries asynchronously.",
    },
    footer: {
      note: "Local-first creative workspace for notes, discussions, AI participation, and Git-native sharing.",
      privacy: "Privacy Policy",
    },
    images: {
      heroPoster: "images/poster_en.png",
      knowledgePoster: "images/poster_2_en.png",
      sharingPoster: "images/poster_3_en.png",
    },
    alt: {
      heroPoster:
        "MeshWork English product image showing a native macOS discussion and note interface",
      knowledgePoster:
        "MeshWork English product image showing discussions becoming a knowledge graph",
      sharingPoster:
        "MeshWork English product image showing GitHub-based knowledge sharing",
    },
  },
};

const html = document.documentElement;
const metaDescription = document.querySelector('meta[name="description"]');
const langButtons = document.querySelectorAll("[data-lang]");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const imageNodes = document.querySelectorAll("[data-image-key]");
const languageKey = "meshwork-site-language";

function resolvePath(dictionary, path) {
  return path.split(".").reduce((value, key) => value?.[key], dictionary) ?? "";
}

function browserPreferredLanguage() {
  try {
    const savedLanguage = localStorage.getItem(languageKey);
    if (savedLanguage) {
      return savedLanguage;
    }
    const languages = navigator.languages?.length
      ? navigator.languages
      : [navigator.language];
    return languages.some((language) =>
      language?.toLowerCase().startsWith("zh"),
    )
      ? "zh"
      : "en";
  } catch {
    return "en";
  }
}

function normalizedLanguage(language) {
  return language === "zh" ? "zh" : "en";
}

function setLanguage(language, options = {}) {
  const normalized = normalizedLanguage(language);
  const dictionary = content[normalized];

  if (options.persist) {
    localStorage.setItem(languageKey, normalized);
  }

  html.lang = normalized === "zh" ? "zh-CN" : "en";
  document.title = dictionary.metaTitle;
  metaDescription.setAttribute("content", dictionary.metaDescription);

  translatableNodes.forEach((node) => {
    node.textContent = resolvePath(dictionary, node.dataset.i18n);
  });

  imageNodes.forEach((image) => {
    const key = image.dataset.imageKey;
    image.src = dictionary.images[key];
    image.alt = dictionary.alt[key];
  });

  document.querySelectorAll("source[data-src-zh]").forEach((source) => {
    source.srcset = source.dataset[normalized === "zh" ? "srcZh" : "srcEn"];
  });

  langButtons.forEach((button) => {
    button.classList.toggle("is-active", button.dataset.lang === normalized);
    button.setAttribute(
      "aria-pressed",
      String(button.dataset.lang === normalized),
    );
  });

  document.querySelectorAll('a[href^="manual"]').forEach((link) => {
    const currentHref = link.getAttribute("href");
    link.setAttribute(
      "href",
      normalized === "en"
        ? currentHref.replace("manual.html", "manual-en.html")
        : currentHref.replace("manual-en.html", "manual.html"),
    );
  });
}

langButtons.forEach((button) => {
  button.addEventListener("click", () =>
    setLanguage(button.dataset.lang, { persist: true }),
  );
});

const revealObserver = new IntersectionObserver(
  (entries) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add("is-visible");
        revealObserver.unobserve(entry.target);
      }
    });
  },
  { threshold: 0.12 },
);

document
  .querySelectorAll("[data-reveal]")
  .forEach((node) => revealObserver.observe(node));

setLanguage(browserPreferredLanguage());

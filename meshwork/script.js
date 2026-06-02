const content = {
  zh: {
    metaTitle: "MeshWork｜本地优先的创作工作台",
    metaDescription:
      "MeshWork 面向 macOS 和 iOS，把本地 Markdown、讨论、AI 助手和 Git 共享放在一个工作台里。",
    nav: {
      studio: "Kido Studio",
      principles: "核心理念",
      highlights: "功能亮点",
      flow: "工作流",
      gallery: "知识库",
      comparison: "产品对比",
      roadmap: "产品 Next",
      pricing: "版本边界",
      manual: "操作手册",
    },
    hero: {
      eyebrow: "面向 macOS 与 iOS",
      title: "把笔记、讨论和 AI\n放进一个本地工作台",
      subtitle:
        "MeshWork 用本地 Markdown 保存资料，用讨论区整理问题，用 AI 助手参与分析；需要协作时，再通过 Git 把指定知识库或共享空间同步出去。",
      primary: "看核心能力",
      secondary: "阅读操作手册",
      pointOne: "Local-first",
      pointTwo: "AI in discussion",
      pointThree: "Git-native sharing",
    },
    graph: {
      private: "私有知识库",
      discussion: "异步讨论",
      ai: "AI 助手",
      git: "Git 共享",
      markdown: "Markdown",
      noteOneTitle: "Insight",
      noteOne: "讨论里可以邀请 AI，把分歧摊开讲清楚。",
      noteTwoTitle: "Ownership",
      noteTwo: "文件在本地，边界由你决定。",
    },
    intro: {
      kicker: "Product Philosophy",
      title: "先整理自己的材料，\n需要时再共享。",
      body: "MeshWork 从个人知识库开始：文档、附件和讨论都保存在本地。项目需要协作时，再创建共享空间，把公共文档、讨论和 Git 同步放到明确的资源边界里。AI 可以在文档右侧或讨论区帮你分析、追问和总结；写入、共享、同步都需要人的确认。",
    },
    principles: {
      kicker: "Principles",
      title: "四条工作原则。",
      local: {
        title: "本地优先",
        body: "笔记、附件和讨论以本地文件为起点，能直接访问，也能在离开应用后继续保留。",
      },
      git: {
        title: "Git 原生同步",
        body: "Git 提供版本历史、同步、恢复和共享能力。界面把 commit、branch、merge 等细节翻译成可理解的状态。",
      },
      ai: {
        title: "AI 可以参与过程",
        body: "AI 可以进入文档和讨论，补充观点、追问分歧、整理结论，并引用已有知识。它提供建议；最终写入和发布由人确认。",
      },
      apple: {
        title: "Apple 原生体验",
        body: "当前应用以 macOS 原生体验为主线，使用系统窗口、控件和交互习惯，并保留开放格式、可迁移和可扩展的底层结构。",
      },
    },
    highlights: {
      kicker: "Feature Highlights",
      title: "当前最重要的能力，\n都围绕知识创作展开。",
      body: "MeshWork 把文档、讨论、AI 工具和 Git 同步放在同一份材料周围。写作、讨论、检索、共享都回到同一个目标：把想法整理成可长期维护的知识。",
      editor: {
        title: "双栏与所见即所得编辑",
        body: "文档编辑同时支持双栏工作区和所见即所得体验，既保留结构化 Markdown 的开放性，也让创作过程接近最终阅读效果。",
        tagOne: "双栏编辑",
        tagTwo: "WYSIWYG",
      },
      rendering: {
        title: "PlantUML、Mermaid 与公式渲染",
        body: "渲染层支持 PlantUML、Mermaid、Graphviz 等图形表达，也支持数学公式，让时序图、架构图、流程图、关系图和推导内容都能直接进入文档。三种图表样式在深色模式下会通过 SVG 反转匹配算法自动适配，保持线条、填充和文字清晰可读。",
        tagOne: "PlantUML",
        tagTwo: "Mermaid",
        tagThree: "Graphviz",
        tagFour: "深色图表匹配",
      },
      links: {
        title: "WikiLink 文件引用",
        body: "文档内可以通过 WikiLink 引用其他文件并快速跳转，让笔记从孤立页面变成可导航、可回溯的知识网络。",
      },
      discussion: {
        title: "多人讨论与多 AI 智能体",
        body: "讨论区支持多人围绕同一份材料持续讨论，也可以引入多个 AI 智能体作为参与者，从不同角度追问、分析和总结。",
      },
      commands: {
        title: "对话命令",
        body: "在讨论中直接使用 @ 提及智能体或成员、# 引用知识库文件、/ 触发自定义命令。对话、材料和操作在同一个输入框里完成。",
        atExample: "@智能体名 或 @成员名 — 提及某人参与对话",
        hashExample: "#文件名 — 引用知识库中的文档内容",
        slashExample: "/命令名 — 执行预定义的自定义命令",
      },
      shell: {
        title: "受控虚拟 Shell",
        body: "AI 工具运行在 MeshWork 定义的受控命令集合中，可读取目录、搜索文档、查看 Git 状态和分段读取内容。它给模型熟悉的操作入口，同时避免任意 shell 命令越过应用边界。",
      },
      knowledgeTools: {
        title: "面向知识库的 AI 检索工具",
        body: "AI 可以使用本地 BM25 文档搜索、读取大纲、按标题或行号分段阅读，并结合链接关系理解材料。需要证据时，先定位文档，再读取相关片段，减少凭空回答。",
        tools: [
          { name: "search_documents", desc: "BM25 本地搜索" },
          { name: "read_document_section", desc: "按章节读取" },
          { name: "read_outline", desc: "提取大纲结构" },
          { name: "get_links", desc: "文档链接分析" },
          { name: "get_backlinks", desc: "反向链接查询" },
          { name: "get_related_documents", desc: "相关文档推荐" },
          { name: "grep", desc: "全文检索" },
          { name: "find", desc: "文件查找" },
          { name: "ls", desc: "目录浏览" },
          { name: "cat", desc: "文件读取" },
          { name: "tree", desc: "树形结构" },
          { name: "summary", desc: "文档摘要" },
        ],
      },
      search: {
        title: "全局拼音搜索",
        body: "产品中的搜索功能都支持拼音搜索。查找中文内容时，不需要频繁切换输入法，用拼音也能快速定位文档、讨论和知识条目。",
      },
      git: {
        title: "Git 同步与隐私边界",
        body: "Git 只绑定真实数据边界：私有知识库或某个共享空间。未绑定远端时可以本地使用；绑定远端后再通过同步按钮提交、拉取和推送。",
      },
      proxy: {
        title: "中国大陆用户友好",
        body: "AI 接口、网络搜索和 Git 访问均支持独立代理配置。每个服务都可以单独选择代理或直连，适配不同网络环境。",
        tagOne: "AI 代理",
        tagTwo: "搜索代理",
        tagThree: "Git 代理",
      },
    },
    flow: {
      kicker: "Thinking Loop",
      title: "从私有笔记到团队讨论，\n再回到知识库。",
      body: "工作台是一个组合视图：你的私有知识库长期独立存在；每个共享空间拥有自己的公共知识库、讨论区与 Git 边界。",
      private: "私有知识库",
      shared: "共享空间",
      discussion: "讨论区",
      git: "Git 历史",
      privateTitle: "先私有，后共享",
      privateBody: "把尚未成型的材料留在自己的知识库中，等待它变得值得分享。",
      sharedTitle: "共享空间承载团队项目",
      sharedBody:
        "公共知识库保存定稿，讨论区处理分歧和过程，私人材料留在自己的知识库。",
      discussionTitle: "讨论可以回流为文档",
      discussionBody:
        "AI 和成员一起围绕材料讨论，确认后的结论整理成可引用、可版本化的文档。",
    },
    experience: {
      kicker: "Creative Workspace",
      title: "把问题放进讨论，\n把结论写回文档。",
      body: "MeshWork 把讨论和知识库放在一起。你可以把文档片段放入讨论，请 AI 和团队成员一起分析，再把确认后的结论保存回笔记。",
      caption: "像聊天一样发起讨论，像写笔记一样保留结论。",
    },
    sharing: {
      kicker: "Git-native Sharing",
      title: "通过 Git 共享，\n数据仍由你掌控。",
      body: "私有知识库和共享空间都有自己的数据边界。需要协作时，把对应资源绑定到标准 Git 远端；同类资源可以放在不同分支，避免私人材料进入团队空间。",
      caption: "通过 GitHub、Gitee、GitLab 或自建 Git 服务共享知识库。",
    },
    knowledge: {
      kicker: "Knowledge Graph",
      title: "讨论后的结论，\n回到知识库。",
      body: "讨论不必停留在聊天记录里。AI 和成员围绕材料整理出的结论，可以继续连接到文档、引用和知识图谱，成为后续创作可复用的上下文。",
      caption: "讨论结果连接到知识图谱。",
    },
    comparison: {
      kicker: "Product Comparison",
      title: "与同类产品的差异",
      body: "MeshWork 同时处理讨论和笔记。协作基于本地文件和标准 Git 远端，数据边界从创建资源开始就分清楚。",
      chatTitle: "通用聊天软件",
      chatDesc:
        "钉钉、飞书等通用聊天软件通过在群聊中添加智能机器人来实现 AI 辅助功能。机器人可以参与讨论、总结内容并生成文档。数据存储在平台服务器上，依赖外部服务，隐私由平台掌控。",
      notesTitle: "传统笔记软件",
      notesDesc:
        "Obsidian 等传统笔记软件可以通过插件支持 AI，产品重心仍是单人笔记。多人协作能力有限，AI 通常无法进入团队讨论，更适合个人知识管理。",
      table: {
        feature: "功能特性",
        chatApps: "聊天软件",
        noteApps: "笔记软件",
        privacy: "数据隐私",
        collaboration: "多人协作",
        aiDiscussion: "AI 参与讨论",
        dataControl: "数据控制",
        openSource: "开放格式",
        platform: "平台支持",
        localFirst: "本地优先 ✓",
        cloudBased: "云端存储 ✗",
        gitNative: "Git 原生 ✓",
        realtime: "实时协同 ✓",
        limited: "功能受限 ✗",
        multiAgent: "多 AI 智能体 ✓",
        botBased: "机器人模式 ○",
        singleUser: "单人模式 ✗",
        fullControl: "完全掌控 ✓",
        platformControl: "平台掌控 ✗",
        openFormat: "Markdown ✓",
        closedFormat: "封闭格式 ✗",
        appleOnly: "Apple 生态",
        crossPlatform: "跨平台",
      },
    },
    roadmap: {
      kicker: "Product Roadmap",
      title: "下一步：用 Obsidian 插件补齐跨平台。",
      body: "MeshWork 原生应用继续优先服务 Apple 生态。下一步计划通过 Obsidian 插件，把开放 Markdown、AI 讨论和 Git 同步工作流带给 Windows 和 Linux 用户。",
      pluginTitle: "Obsidian 插件",
      pluginBody:
        "面向 Windows 和 Linux 用户，计划提供 AI 讨论参与、知识库检索、文档引用和 Git 同步等 MeshWork 核心能力。",
      nativeTitle: "Apple 原生优先",
      nativeBody:
        "macOS 原生应用仍是体验基准，继续优先打磨系统窗口、原生控件、键盘交互、字体缩放、密度设置和沙箱边界。",
    },
    pricing: {
      kicker: "Editions",
      title: "版本边界先清楚，价格以后再确定。",
      body: "当前项目保留 Free、Creator、Studio 三个功能边界：Free 面向本地知识库，Creator 增加文档 AI，Studio 增加共享空间和协作能力。正式价格以未来发布版本为准。",
      table: {
        feature: "功能",
        free: "Free 免费版",
        creator: "Creator 创作者",
        studio: "Studio 工作室",
        creatorPrice: "待定",
        studioPrice: "待定",
      },
      features: {
        privateKnowledgeBase: {
          name: "私有知识库",
          free: "✓ 完整功能",
          creator: "✓ 完整功能",
          studio: "✓ 完整功能",
        },
        documentAssistant: {
          name: "文档 AI 辅助",
          free: "—",
          creator: "✓ AI 写作、分析与总结",
          studio: "✓ AI 写作、分析与总结",
        },
        sharedSpace: {
          name: "共享空间",
          free: "—",
          creator: "—",
          studio: "✓ 团队协作与讨论",
        },
      },
    },
    footer: {
      note: "Local-first creative workspace for notes, discussions, AI participation, and Git-native sharing.",
      privacy: "隐私政策",
    },
    images: {
      heroPoster: "images/poster_2_zh.png",
      workspacePoster: "images/poster_zh.png",
      githubPoster: "images/poster_3_zh.png",
      graphPoster: "images/poster_2_zh.png",
    },
    alt: {
      heroPoster: "MeshWork 中文产品海报，展示团队围绕知识图谱与 AI 进行讨论",
      workspacePoster: "MeshWork 中文产品海报，展示 macOS 原生讨论与笔记界面",
      githubPoster: "MeshWork 中文产品海报，展示通过 GitHub 共享知识",
      graphPoster: "MeshWork 中文产品海报，展示讨论结果连接到知识图谱",
    },
  },
  en: {
    metaTitle: "MeshWork | Local-first creative workspace",
    metaDescription:
      "MeshWork brings local Markdown, discussions, AI assistance, and Git sharing into one Apple-native workspace.",
    nav: {
      studio: "Kido Studio",
      principles: "Principles",
      highlights: "Highlights",
      flow: "Workflow",
      gallery: "Knowledge",
      comparison: "Compare",
      roadmap: "Next",
      pricing: "Editions",
      manual: "Manual",
    },
    hero: {
      eyebrow: "Built for the Apple ecosystem",
      title: "Bring notes, discussion,\nand AI into a local workspace",
      subtitle:
        "Built for macOS and iOS, MeshWork keeps Markdown files local, gives discussions a place to develop, brings AI into analysis, and syncs selected libraries or shared spaces through Git when collaboration is needed.",
      primary: "See core features",
      secondary: "Read manual",
      pointOne: "Local-first",
      pointTwo: "AI in discussion",
      pointThree: "Git-native sharing",
    },
    graph: {
      private: "Private library",
      discussion: "Async discussion",
      ai: "AI assistant",
      git: "Git sharing",
      markdown: "Markdown",
      noteOneTitle: "Insight",
      noteOne: "Invite AI into a discussion and make disagreements easier to examine.",
      noteTwoTitle: "Ownership",
      noteTwo: "Files stay local. Boundaries stay yours.",
    },
    intro: {
      kicker: "Product Philosophy",
      title: "Start with your own materials. Share when the project needs it.",
      body: "MeshWork starts with a private library. Documents, assets, and discussions stay local by default. When a project needs collaboration, create a shared space with its own public library, discussions, and Git sync. AI can help in the document sidebar or discussion area; writing, sharing, and syncing still require human confirmation.",
    },
    principles: {
      kicker: "Principles",
      title: "Four working principles.",
      local: {
        title: "Local-first",
        body: "Notes, assets, and discussions start as local files you can directly access and keep beyond the app.",
      },
      git: {
        title: "Git-native, without the noise",
        body: "Git provides history, sync, recovery, and sharing. The interface translates commits, branches, and merges into clear state.",
      },
      ai: {
        title: "AI can join the process",
        body: "AI can join documents and discussions, add perspectives, ask about disagreements, organize conclusions, and reference existing knowledge. It suggests; people confirm final writing and publishing.",
      },
      apple: {
        title: "Native Apple experience",
        body: "The current app focuses on a native macOS experience with system windows, controls, and interaction patterns while keeping the underlying structure open, portable, and extensible.",
      },
    },
    highlights: {
      kicker: "Feature Highlights",
      title: "The important features are built around knowledge creation.",
      body: "Documents, discussions, AI tools, and Git sync work around the same materials. Writing, discussing, searching, and sharing all support one goal: turning ideas into maintainable knowledge.",
      editor: {
        title: "Two-pane and WYSIWYG editing",
        body: "The editor supports both a two-pane workspace and WYSIWYG writing, keeping Markdown open while making the writing flow close to the final reading experience.",
        tagOne: "Two-pane",
        tagTwo: "WYSIWYG",
      },
      rendering: {
        title: "PlantUML, Mermaid, and formula rendering",
        body: "The rendering layer supports visual formats such as PlantUML, Mermaid, and Graphviz, plus mathematical formulas, so sequence diagrams, architecture diagrams, flows, relationships, and derivations can live directly inside documents. All three diagram styles use SVG inversion matching in dark mode to keep lines, fills, and labels readable.",
        tagOne: "PlantUML",
        tagTwo: "Mermaid",
        tagThree: "Graphviz",
        tagFour: "Dark diagram matching",
      },
      links: {
        title: "WikiLink file references",
        body: "Documents can reference other files with WikiLinks and jump between them quickly, turning notes from isolated pages into a navigable knowledge network.",
      },
      discussion: {
        title: "Multi-person and multi-agent discussion",
        body: "Discussion spaces support ongoing collaboration around the same material, with multiple AI agents joining as participants to question, analyze, and summarize from different angles.",
      },
      commands: {
        title: "Conversation commands",
        body: "Use @ to mention agents or members, # to reference knowledge files, and / to trigger custom commands. Conversations, source material, and actions stay in one input flow.",
        atExample:
          "@agent or @member — Mention someone to join the conversation",
        hashExample:
          "#filename — Reference document content from the knowledge base",
        slashExample: "/command — Execute predefined custom commands",
      },
      shell: {
        title: "Controlled virtual Shell",
        body: "AI tools run through a MeshWork-defined command set for browsing folders, searching documents, checking Git state, and reading content in sections. Models get familiar operations without arbitrary shell access.",
      },
      knowledgeTools: {
        title: "AI retrieval tools for knowledge bases",
        body: "Agents can use local BM25 document search, read outlines, inspect sections by heading or line range, and follow links. When an answer needs evidence, the workflow starts from local materials instead of guesswork.",
        tools: [
          { name: "search_documents", desc: "BM25 local search" },
          { name: "read_document_section", desc: "read by section" },
          { name: "read_outline", desc: "extract outline" },
          { name: "get_links", desc: "link analysis" },
          { name: "get_backlinks", desc: "backlink query" },
          { name: "get_related_documents", desc: "related docs" },
          { name: "grep", desc: "full-text search" },
          { name: "find", desc: "file discovery" },
          { name: "ls", desc: "directory browse" },
          { name: "cat", desc: "file read" },
          { name: "tree", desc: "tree structure" },
          { name: "summary", desc: "document summary" },
        ],
      },
      search: {
        title: "Pinyin-aware search",
        body: "Search across the product supports Pinyin matching, so Chinese documents, discussions, and knowledge items can be found quickly without constantly switching input methods.",
      },
      git: {
        title: "Git sync with privacy boundaries",
        body: "Git binds only to real data boundaries: a private library or one shared space. You can stay local, then bind a remote and use the sync button to commit, pull, and push when sharing is needed.",
      },
      proxy: {
        title: "Friendly for users in mainland China",
        body: "AI APIs, web search, and Git access each support separate proxy settings. Choose a proxy or direct connection per service to match different network environments.",
        tagOne: "AI Proxy",
        tagTwo: "Search Proxy",
        tagThree: "Git Proxy",
      },
    },
    flow: {
      kicker: "Thinking Loop",
      title: "Private knowledge, shared spaces, and discussions form one loop.",
      body: "The workbench is a composed view: your private library stays independent, while each shared space owns its public knowledge base, discussions, and Git boundary.",
      private: "Private library",
      shared: "Shared space",
      discussion: "Discussion",
      git: "Git history",
      privateTitle: "Private first, shared when ready",
      privateBody:
        "Keep early material in your own library until it is mature enough to share.",
      sharedTitle: "Shared spaces carry team projects",
      sharedBody:
        "The public library preserves decisions, the discussion area creates alignment, and private material stays outside the boundary.",
      discussionTitle: "Discussions flow back into documents",
      discussionBody:
        "AI and teammates discuss source material together, then confirmed conclusions become referenceable, versioned documents.",
    },
    experience: {
      kicker: "Creative Workspace",
      title: "Put questions into discussion. Write conclusions back to documents.",
      body: "MeshWork keeps discussions and the knowledge base together. Drop document fragments into a topic, ask AI and teammates to analyze them, then save confirmed conclusions back into notes.",
      caption: "Start discussions like chat, keep conclusions like notes.",
    },
    sharing: {
      kicker: "Git-native Sharing",
      title: "Share through Git and keep ownership of your data.",
      body: "Private libraries and shared spaces keep clear data boundaries. When collaboration is needed, bind the resource to a standard Git remote; resources of the same type can stay isolated through separate branches.",
      caption:
        "Share knowledge through GitHub, Gitee, GitLab, or a self-hosted Git service.",
    },
    knowledge: {
      kicker: "Knowledge Graph",
      title: "Discussion results return to the knowledge base.",
      body: "A discussion can continue beyond a chat log. Conclusions shaped by AI and teammates can stay connected to documents, references, and knowledge maps as reusable context for future work.",
      caption: "Discussion results connect to knowledge maps.",
    },
    comparison: {
      kicker: "Product Comparison",
      title: "How MeshWork is different",
      body: "MeshWork handles both discussion and notes. Collaboration runs on local files and standard Git remotes, with data boundaries defined from the start.",
      chatTitle: "General Chat Apps",
      chatDesc:
        "General chat apps like DingTalk and Feishu implement AI features through smart bots in group chats. Bots can participate in discussions, summarize content, and generate documents. Data stays on platform servers, relies on external services, and is controlled by the platform.",
      notesTitle: "Traditional Note Apps",
      notesDesc:
        "Traditional note-taking apps like Obsidian support AI through plugins and are primarily designed for individual use. Multi-person collaboration is limited, and AI usually cannot participate in team discussions. They fit personal knowledge management better than shared project work.",
      table: {
        feature: "Features",
        chatApps: "Chat Apps",
        noteApps: "Note Apps",
        privacy: "Data Privacy",
        collaboration: "Collaboration",
        aiDiscussion: "AI in Discussion",
        dataControl: "Data Control",
        openSource: "Open Format",
        platform: "Platform",
        localFirst: "Local-first ✓",
        cloudBased: "Cloud-based ✗",
        gitNative: "Git-native ✓",
        realtime: "Real-time ✓",
        limited: "Limited ✗",
        multiAgent: "Multi-agent ✓",
        botBased: "Bot-based ○",
        singleUser: "Single-user ✗",
        fullControl: "Full control ✓",
        platformControl: "Platform control ✗",
        openFormat: "Markdown ✓",
        closedFormat: "Closed format ✗",
        appleOnly: "Apple only",
        crossPlatform: "Cross-platform",
      },
    },
    roadmap: {
      kicker: "Product Roadmap",
      title: "Next: an Obsidian plugin for cross-platform reach.",
      body: "The native MeshWork app continues to prioritize the Apple ecosystem. The next planned step is an Obsidian plugin that brings open Markdown, AI discussion, and Git sync workflows to Windows and Linux users.",
      pluginTitle: "Obsidian Plugin",
      pluginBody:
        "Planned for Windows and Linux users, bringing core MeshWork capabilities such as AI discussion participation, knowledge-base retrieval, document references, and Git sync.",
      nativeTitle: "Apple-first native app",
      nativeBody:
        "The macOS native app remains the experience baseline, with continued work on system windows, native controls, keyboard interactions, font scaling, density settings, and sandbox boundaries.",
    },
    pricing: {
      kicker: "Editions",
      title: "Clear edition boundaries first. Final pricing later.",
      body: "The project currently keeps three edition boundaries: Free for local private libraries, Creator for document AI, and Studio for shared spaces and collaboration. Final pricing depends on a future release.",
      table: {
        feature: "Features",
        free: "Free",
        creator: "Creator",
        studio: "Studio",
        creatorPrice: "TBD",
        studioPrice: "TBD",
      },
      features: {
        privateKnowledgeBase: {
          name: "Private knowledge base",
          free: "✓ Full features",
          creator: "✓ Full features",
          studio: "✓ Full features",
        },
        documentAssistant: {
          name: "Document AI assistance",
          free: "—",
          creator: "✓ AI writing, analysis & summary",
          studio: "✓ AI writing, analysis & summary",
        },
        sharedSpace: {
          name: "Shared spaces",
          free: "—",
          creator: "—",
          studio: "✓ Team collaboration & discussion",
        },
      },
    },
    footer: {
      note: "Local-first creative workspace for notes, discussions, AI participation, and Git-native sharing.",
      privacy: "Privacy Policy",
    },
    images: {
      heroPoster: "images/poster_2_en.png",
      workspacePoster: "images/poster_en.png",
      githubPoster: "images/poster_3_en.png",
      graphPoster: "images/poster_2_en.png",
    },
    alt: {
      heroPoster:
        "MeshWork English product poster showing a team discussing with AI around a knowledge graph",
      workspacePoster:
        "MeshWork English product poster showing a native macOS discussion and note interface",
      githubPoster:
        "MeshWork English product poster showing GitHub-based knowledge sharing",
      graphPoster:
        "MeshWork English product poster showing discussions becoming a knowledge graph",
    },
  },
};

const html = document.documentElement;
const metaDescription = document.querySelector('meta[name="description"]');
const langButtons = document.querySelectorAll("[data-lang]");
const translatableNodes = document.querySelectorAll("[data-i18n]");
const imageNodes = document.querySelectorAll("[data-image-key]");
const languageKey = "meshwork-site-language";
let currentLanguage = browserPreferredLanguage();

function resolvePath(dictionary, path) {
  return path.split(".").reduce((value, key) => value?.[key], dictionary) ?? "";
}

function browserPreferredLanguage() {
  try {
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
  currentLanguage = normalized;
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

  // Update manual links to point to the correct language version
  document.querySelectorAll('a[href^="manual"]').forEach((link) => {
    const currentHref = link.getAttribute("href");
    if (normalized === "en") {
      // Change to English version
      link.setAttribute(
        "href",
        currentHref.replace("manual.html", "manual-en.html"),
      );
    } else {
      // Change to Chinese version
      link.setAttribute(
        "href",
        currentHref.replace("manual-en.html", "manual.html"),
      );
    }
  });

  // Update knowledge tools grid
  const toolsGrid = document.querySelector(".highlight-tools-grid");
  if (toolsGrid) {
    const tools = dictionary.highlights.knowledgeTools.tools;
    toolsGrid.innerHTML = tools
      .map(
        (tool) => `
      <div class="highlight-tool-item">
        <code>${tool.name}</code>
        <span>${tool.desc}</span>
      </div>
    `,
      )
      .join("");
  }
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
  { threshold: 0.16 },
);

document
  .querySelectorAll("[data-reveal]")
  .forEach((node) => revealObserver.observe(node));

const canvas = document.querySelector(".starfield");
const context = canvas.getContext("2d");
const reduceMotion = window.matchMedia(
  "(prefers-reduced-motion: reduce)",
).matches;
let stars = [];
let animationFrame = 0;

function resizeCanvas() {
  const ratio = Math.min(window.devicePixelRatio || 1, 2);
  canvas.width = Math.floor(window.innerWidth * ratio);
  canvas.height = Math.floor(window.innerHeight * ratio);
  canvas.style.width = `${window.innerWidth}px`;
  canvas.style.height = `${window.innerHeight}px`;
  context.setTransform(ratio, 0, 0, ratio, 0, 0);
  stars = Array.from(
    { length: Math.min(150, Math.floor(window.innerWidth / 9)) },
    () => ({
      x: Math.random() * window.innerWidth,
      y: Math.random() * window.innerHeight,
      radius: Math.random() * 1.4 + 0.3,
      speed: Math.random() * 0.24 + 0.04,
      phase: Math.random() * Math.PI * 2,
      hue: Math.random() > 0.55 ? "255, 117, 202" : "255, 210, 150",
    }),
  );
}

function drawStars(time = 0) {
  context.clearRect(0, 0, window.innerWidth, window.innerHeight);
  stars.forEach((star) => {
    const alpha = 0.32 + Math.sin(time * 0.0016 + star.phase) * 0.24;
    context.beginPath();
    context.fillStyle = `rgba(${star.hue}, ${Math.max(0.12, alpha)})`;
    context.arc(star.x, star.y, star.radius, 0, Math.PI * 2);
    context.fill();

    if (!reduceMotion) {
      star.y += star.speed;
      if (star.y > window.innerHeight + 6) {
        star.y = -6;
        star.x = Math.random() * window.innerWidth;
      }
    }
  });

  if (!reduceMotion) {
    animationFrame = requestAnimationFrame(drawStars);
  }
}

window.addEventListener("resize", () => {
  cancelAnimationFrame(animationFrame);
  resizeCanvas();
  drawStars();
});

resizeCanvas();
drawStars();
setLanguage(currentLanguage);

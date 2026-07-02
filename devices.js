// ─── DEVICE DATA ──────────────────────────────────────────────────────────
// All device models, specs, and pricing live in this file.
//
// To update a price:      edit the `price` field (the "from" price) and any
//                         prices shown in `upgradeOptions` labels.
// To add a system:        copy an existing entry, give it a unique key/id,
//                         and fill in every field (see README "Customising
//                         devices" for the schema).
// To remove a system:     delete its entry — scoring and rendering adapt
//                         automatically.
//
// Prices are Australian MSRP (inc. GST), sourced from everymac.com
// "Original Prices in Australia" pages (update published April 2026).
// Last updated: July 2026.
// ──────────────────────────────────────────────────────────────────────────

const devices = {
  neo: {
    id: 'neo',
    name: 'MacBook Neo',
    shortName: 'Neo',
    tagline: 'The perfect everyday laptop',
    price: 'A$899',
    shopUrl: 'https://www.apple.com/au/shop/buy-mac/macbook-neo',
    color: '#34c759',
    colorBg: '#ecfdf3',
    colorDark: '#4ade80',
    icon: '💚',
    weights: { everyday: 2, creative: 0.3, development: 0.2, data: 0.2, ai: 0, power: 0, portability: 2, desktop: -0.5, multiDisplay: -0.5, budgetConscious: 2.5, largeScreen: -2 },
    specs: { chip: 'A18 Pro', cores: '6-core CPU, 5-core GPU', memory: '8 GB', storage: '256 / 512 GB', battery: '~16 hrs', display: '13" Liquid Retina', ports: '2x USB-C (1x USB 3, 1x USB 2)', wireless: 'Wi-Fi 6E, Bluetooth 6' },
    pros: ['Most affordable Mac ever', 'Lightweight aluminium build', 'Full macOS experience', 'Handles all core Office tasks', 'Great battery for light use'],
    cons: ['8 GB RAM only - no upgrade path', 'No Thunderbolt support', 'No backlit keyboard', 'Single 4K external display only', 'Smaller battery than Air/Pro'],
    useCases: ['Email & calendar', 'Documents & writing', 'Web browsing', 'Video calls', 'Light scripting', 'Travel secondary device'],
    matrix: [
      ['Device management & security', 'yes'], ['Office apps & email', 'yes'], ['Web browsing (10-15 tabs)', 'yes'],
      ['Video calls (Teams/Zoom)', 'yes'], ['Photo editing', 'limited'], ['Graphic design', 'limited'],
      ['Video editing', 'no'], ['Xcode', 'limited'], ['VS Code', 'yes'],
      ['Docker / containers', 'no'], ['Local LLM / AI', 'no'], ['Heavy multitasking', 'no'],
      ['Virtual machines', 'no'], ['External displays', 'limited']
    ],
    notes: 'The MacBook Neo is a fanless design - sustained high workloads may cause CPU throttling. Dual-display output requires DisplayLink drivers and a compatible USB-C dock. Single-threaded performance exceeds M2, but multi-threaded sits around M1 level.',
    upgradeOptions: {
      storage: [
        { label: '256 GB (base) — A$899', note: 'Fine for most light users who rely on cloud storage' },
        { label: '512 GB — A$1099', note: 'Recommended if you keep projects or media stored locally' }
      ]
    },
    upgradeNote: 'RAM is fixed at 8 GB and cannot be upgraded — this is the only configurable option on the Neo.'
  },
  air: {
    id: 'air',
    name: 'MacBook Air',
    shortName: 'Air',
    tagline: 'Versatile device for most workloads',
    price: 'A$1799',
    shopUrl: 'https://www.apple.com/au/shop/buy-mac/macbook-air',
    color: '#0071e3',
    colorBg: '#e8f4fd',
    colorDark: '#60a5fa',
    icon: '💙',
    weights: { everyday: 1.5, creative: 1.5, development: 1, data: 0.8, ai: 0.5, power: 0.5, portability: 1.5, desktop: 0, multiDisplay: 0.5, budgetConscious: 0.5, largeScreen: 0.5 },
    specs: { chip: 'Apple M5', cores: '10-core CPU, up to 10-core GPU', memory: '16 / 24 / 32 GB', storage: '512 GB - 4 TB', battery: '~18 hrs', display: '13.6" or 15.3" Liquid Retina', ports: '2x Thunderbolt 4, headphone jack', wireless: 'Wi-Fi 7, Bluetooth 6' },
    pros: ['Excellent M5 performance', 'Lightweight and portable', '16 GB RAM standard', 'Thunderbolt 4 connectivity', 'Up to 18 hours battery life'],
    cons: ['Fanless - may throttle under sustained load', 'No Pro/Max CPU options', 'Limited to 2 external displays', 'No nano-texture display option'],
    useCases: ['General office & productivity', 'Photo & video editing', 'Medium development work', 'Xcode & local dev environments', 'Presentations & design', 'Field work & travel'],
    matrix: [
      ['Device management & security', 'yes'], ['Office apps & email', 'yes'], ['Web browsing (10-15 tabs)', 'yes'],
      ['Video calls (Teams/Zoom)', 'yes'], ['Photo editing', 'yes'], ['Graphic design', 'yes'],
      ['Video editing', 'yes'], ['Xcode', 'yes'], ['VS Code', 'yes'],
      ['Docker / containers', 'limited'], ['Local LLM / AI', 'limited'], ['Heavy multitasking', 'limited'],
      ['Virtual machines', 'limited'], ['External displays', 'yes']
    ],
    notes: 'The MacBook Air is fanless - while M5 performance is excellent, sustained heavy workloads (compiling, rendering, long VM sessions) may cause thermal throttling. Virtual machines and containers are supported for light use. Consider the Pro if these are daily activities.',
    upgradeOptions: {
      display: [
        { label: '13.6" — from A$1799', note: 'Base model has an 8-core GPU; 10-core GPU configs from A$2099' },
        { label: '15.3" — from A$2199', note: 'All 15" configs include the 10-core GPU' }
      ],
      ram: [
        { label: '16 GB (base)', note: 'Handles everyday tasks and moderate multitasking comfortably' },
        { label: '24 GB', note: 'Better for heavier multitasking, light VMs, or sustained creative work' },
        { label: '32 GB', note: 'High-end config — may outperform a base MacBook Pro M5 for many workloads' }
      ],
      storage: [
        { label: '512 GB (base)', note: 'Good starting point alongside cloud storage' },
        { label: '1 TB', note: 'Recommended for most users' },
        { label: '2 TB', note: 'For larger local project libraries or media' },
        { label: '4 TB', note: 'Maximum — for extensive offline media or data' }
      ]
    },
    upgradeNote: 'A maxed-out Air (32 GB RAM) may outperform a base MacBook Pro M5 (24 GB) for many everyday workloads. Worth comparing before stepping up to a Pro.'
  },
  pro: {
    id: 'pro',
    name: 'MacBook Pro',
    shortName: 'Pro',
    tagline: 'Additional power for demanding workloads',
    price: 'A$2499',
    shopUrl: 'https://www.apple.com/au/shop/buy-mac/macbook-pro',
    color: '#a855f7',
    colorBg: '#f3e8ff',
    colorDark: '#c084fc',
    icon: '💜',
    weights: { everyday: 0.5, creative: 2, development: 2, data: 2, ai: 2, power: 2, portability: 1, desktop: 0.5, multiDisplay: 1.5, budgetConscious: -0.5, largeScreen: 1.5 },
    specs: { chip: 'M5 / M5 Pro / M5 Max', cores: 'Up to 18-core CPU, 40-core GPU', memory: '24 - 128 GB', storage: '1 TB - 8 TB', battery: '~24 hrs', display: '14" or 16" Liquid Retina XDR', ports: '3x Thunderbolt 5, HDMI, SD, MagSafe', wireless: 'Wi-Fi 7, Bluetooth 6' },
    pros: ['Pro and Max chip performance', 'Up to 128 GB unified memory', 'Thunderbolt 5 connectivity', 'XDR display with nano-texture option', 'Active cooling - no throttling', 'Up to 4 external displays (Max)'],
    cons: ['Significantly more expensive', 'Heavier than Air/Neo', 'Overkill for basic office tasks'],
    useCases: ['Heavy development & CI', 'Video production & 3D', 'Local AI / LLM workflows', 'Large dataset analysis', 'Virtual machines & containers', 'Multi-display workstations'],
    matrix: [
      ['Device management & security', 'yes'], ['Office apps & email', 'yes'], ['Web browsing (10-15 tabs)', 'yes'],
      ['Video calls (Teams/Zoom)', 'yes'], ['Photo editing', 'yes'], ['Graphic design', 'yes'],
      ['Video editing', 'yes'], ['Xcode', 'yes'], ['VS Code', 'yes'],
      ['Docker / containers', 'yes'], ['Local LLM / AI', 'yes'], ['Heavy multitasking', 'yes'],
      ['Virtual machines', 'limited'], ['External displays', 'yes']
    ],
    notes: 'The MacBook Pro features active cooling so it can sustain peak performance under heavy load without throttling. Virtual machines and containers are supported for frequent use. The M5 Max variant supports up to 128 GB unified memory for the most demanding AI and data workflows.',
    upgradeOptions: {
      display: [
        { label: '14" — from A$2499', note: 'Available with M5, M5 Pro, or M5 Max' },
        { label: '16" — from A$4299', note: 'M5 Pro or M5 Max only' }
      ],
      cpu: [
        { label: 'M5 (base) — from A$2499', note: '10-core CPU, 10-core GPU — solid for most development, creative, and productivity tasks' },
        { label: 'M5 Pro — from A$3499', note: '15- or 18-core CPU — recommended for heavy compilation, sustained rendering, or local AI' },
        { label: 'M5 Max — from A$5799', note: '18-core CPU, up to 40-core GPU — for the most demanding compute and GPU workloads' }
      ],
      ram: [
        { label: '24 GB (M5 base)', note: 'Standard — solid for development, creative work, and multitasking' },
        { label: '24 or 48 GB (M5 Pro)', note: '48 GB recommended for large datasets, long compiles, or persistent VMs' },
        { label: '48, 96 or 128 GB (M5 Max)', note: 'For AI/ML workflows, very large models, or extreme memory pressure' }
      ],
      storage: [
        { label: '1 TB (base)', note: 'Minimum for most Pro users' },
        { label: '2 TB', note: 'Recommended for video editors and developers with large repos' },
        { label: '4 TB', note: 'For large media libraries or local data stores' },
        { label: '8 TB', note: 'Maximum — for specialised high-storage workloads' }
      ]
    },
    upgradeNote: 'Chip tier (M5 → M5 Pro → M5 Max) has the biggest impact on sustained performance. A high-end MacBook Air (32 GB) may match or exceed a base M5 Pro for many tasks — worth comparing before ordering.'
  },
  studio: {
    id: 'studio',
    name: 'Mac Studio',
    shortName: 'Studio',
    tagline: 'Desktop Mac for the heaviest workloads',
    price: 'A$3499',
    shopUrl: 'https://www.apple.com/au/shop/buy-mac/mac-studio',
    color: '#f97316',
    colorBg: '#fff7ed',
    colorDark: '#fb923c',
    icon: '🧡',
    weights: { everyday: 0.2, creative: 1, development: 1.5, data: 2.5, ai: 3, power: 3, portability: -2, desktop: 3, multiDisplay: 2, budgetConscious: -0.5, largeScreen: 0 },
    specs: { chip: 'M4 Max / M3 Ultra', cores: 'Up to 32-core CPU, 80-core GPU', memory: '36 - 256 GB', storage: '512 GB - 16 TB', battery: 'N/A - desktop', display: 'BYO - supports multiple displays', ports: '6x Thunderbolt, 2x USB-C, USB-A, HDMI, SD, Ethernet', wireless: 'Wi-Fi 6E, Bluetooth 5.3' },
    pros: ['Ultra chip performance', 'Up to 256 GB unified memory', 'Extensive port selection', 'Continuous heavy workloads', 'Quiet desktop form factor'],
    cons: ['Not portable', 'Expensive', 'Requires external display, keyboard, mouse'],
    useCases: ['CI/CD & automation servers', 'Ongoing VM & container hosting', 'AI/ML training & inference', 'Heavy 3D rendering', '8K video production', 'Multi-stream workflows'],
    matrix: [
      ['Device management & security', 'yes'], ['Office apps & email', 'yes'], ['Web browsing (10-15 tabs)', 'yes'],
      ['Video calls (Teams/Zoom)', 'yes'], ['Photo editing', 'yes'], ['Graphic design', 'yes'],
      ['Video editing', 'yes'], ['Xcode', 'yes'], ['VS Code', 'yes'],
      ['Docker / containers', 'yes'], ['Local LLM / AI', 'yes'], ['Heavy multitasking', 'yes'],
      ['Virtual machines', 'yes'], ['External displays', 'yes']
    ],
    notes: 'The Mac Studio is designed for ongoing, unattended heavy workloads - CI pipelines, automation, persistent VMs, and local AI training. It uses active cooling in a compact desktop enclosure. The M3 Ultra variant offers the highest memory and GPU core count in any Mac.',
    upgradeOptions: {
      cpu: [
        { label: 'M4 Max (base) — A$3499', note: '14-core CPU, 32-core GPU — powerful for most professional workflows' },
        { label: 'M4 Max — A$4249', note: '16-core CPU, 40-core GPU — powerful for most professional workflows' },
        { label: 'M3 Ultra — A$6999', note: '28-core CPU, 60-core GPU — for AI training, 8K production, and maximum throughput' },
        { label: 'M3 Ultra — A$9249', note: '32-core CPU, 80-core GPU — for AI training, 8K production, and maximum throughput' }
      ],
      ram: [
        { label: '36 GB (M4 Max Base CPU)', note: 'Base — handles most professional workflows' },
        { label: '48, 64, 128 GB (M4 Max)', note: 'handles moderate AI inference and data pipeline tasks' },
        { label: '96, 256 GB (M3 Ultra)', note: 'For large model inference, persistent VMs, or heavy data pipelines' }
      ],
      storage: [
        { label: '512 GB (M4 Max base)', note: 'Use alongside network storage or for a dedicated single-purpose role' },
        { label: '1 TB', note: 'Good general starting point' },
        { label: '2 TB', note: 'Recommended for most Studio workloads' },
        { label: '4 TB', note: 'For large local datasets or media archives' },
        { label: '8 TB', note: 'Maximum — for high-throughput local storage needs' },
        { label: '16 TB (M3 Ultra)', note: 'Mega — The most storage' }
      ]
    },
    upgradeNote: 'RAM and storage are fixed at purchase — plan ahead. Chip tier (M4 Max vs M3 Ultra) determines your memory ceiling and maximum GPU performance.'
  },
  mini: {
    id: 'mini',
    name: 'Mac mini',
    shortName: 'mini',
    tagline: 'The most affordable desktop Mac',
    price: 'A$999',
    shopUrl: 'https://www.apple.com/au/shop/buy-mac/mac-mini',
    color: '#06b6d4',
    colorBg: '#ecfeff',
    colorDark: '#22d3ee',
    icon: '🩵',
    weights: { everyday: 1.2, creative: 0.8, development: 1.2, data: 1, ai: 0.8, power: 1, portability: -2, desktop: 2.5, multiDisplay: 1, budgetConscious: 1.5, largeScreen: 0 },
    specs: { chip: 'M4 / M4 Pro', cores: 'Up to 14-core CPU, 20-core GPU', memory: '16 - 64 GB', storage: '256 GB - 8 TB', battery: 'N/A - desktop', display: 'BYO - up to 3 displays', ports: '3x Thunderbolt (4/5), 2x USB-C, HDMI, Ethernet, headphone', wireless: 'Wi-Fi 6E, Bluetooth 5.3' },
    pros: ['Most affordable desktop Mac', 'M4 Pro option for serious power', 'Compact and quiet', 'Extensive port selection', 'Great performance per dollar'],
    cons: ['Not portable', 'Requires external display, keyboard, mouse', 'RAM and storage fixed at purchase'],
    useCases: ['Desktop productivity', 'Software development', 'Home/office server', 'Light CI & automation', 'Photo & video editing', 'Data analysis'],
    matrix: [
      ['Device management & security', 'yes'], ['Office apps & email', 'yes'], ['Web browsing (10-15 tabs)', 'yes'],
      ['Video calls (Teams/Zoom)', 'yes'], ['Photo editing', 'yes'], ['Graphic design', 'yes'],
      ['Video editing', 'yes'], ['Xcode', 'yes'], ['VS Code', 'yes'],
      ['Docker / containers', 'yes'], ['Local LLM / AI', 'limited'], ['Heavy multitasking', 'yes'],
      ['Virtual machines', 'yes'], ['External displays', 'yes']
    ],
    notes: 'The Mac mini pairs desktop performance with the lowest entry price of any Mac. The M4 Pro configuration adds Thunderbolt 5 and enough cores for sustained development, rendering, and container workloads. You supply your own display, keyboard, and mouse.',
    upgradeOptions: {
      cpu: [
        { label: 'M4 — from A$999', note: '10-core CPU, 10-core GPU — strong for everyday and moderate pro work' },
        { label: 'M4 Pro — A$2199', note: '12-core CPU, 16-core GPU — for heavier development and creative workloads' },
        { label: 'M4 Pro — A$2499', note: '14-core CPU, 20-core GPU — top configuration for sustained compute' }
      ],
      storage: [
        { label: '256 GB (base) — A$999', note: 'Fine alongside cloud or network storage' },
        { label: '512 GB — A$1299', note: 'Comfortable for most users' },
        { label: '1 TB — A$1599', note: 'Recommended for local projects and media' },
        { label: '2 TB - 8 TB', note: 'For large local datasets or media libraries' }
      ]
    },
    upgradeNote: 'RAM and storage are fixed at purchase. Stepping up to M4 Pro also upgrades Thunderbolt 4 to Thunderbolt 5.'
  },
  imac: {
    id: 'imac',
    name: 'iMac',
    shortName: 'iMac',
    tagline: 'All-in-one desktop with a built-in display',
    price: 'A$1999',
    shopUrl: 'https://www.apple.com/au/shop/buy-mac/imac',
    color: '#ec4899',
    colorBg: '#fdf2f8',
    colorDark: '#f472b6',
    icon: '🩷',
    weights: { everyday: 1.5, creative: 1.2, development: 0.6, data: 0.6, ai: 0.3, power: 0.5, portability: -1.5, desktop: 2, multiDisplay: -0.5, budgetConscious: 0.8, largeScreen: 1 },
    specs: { chip: 'Apple M4', cores: 'Up to 10-core CPU, 10-core GPU', memory: '16 / 24 / 32 GB', storage: '256 GB - 2 TB', battery: 'N/A - desktop', display: '24" 4.5K Retina (built-in)', ports: 'Up to 4x Thunderbolt 4, headphone', wireless: 'Wi-Fi 6E, Bluetooth 5.3' },
    pros: ['All-in-one — display included', 'Vibrant 24" 4.5K screen', 'Colour-matched keyboard & mouse included', 'Clean, cable-light desk setup', 'Silent under everyday use'],
    cons: ['Display not reusable or upgradable', 'M4 only — no Pro/Max option', 'Not portable', 'Limited to 32 GB RAM'],
    useCases: ['Family & home office', 'Everyday productivity', 'Photo & light video editing', 'Web & content creation', 'Reception & shared workstations', 'Education'],
    matrix: [
      ['Device management & security', 'yes'], ['Office apps & email', 'yes'], ['Web browsing (10-15 tabs)', 'yes'],
      ['Video calls (Teams/Zoom)', 'yes'], ['Photo editing', 'yes'], ['Graphic design', 'yes'],
      ['Video editing', 'yes'], ['Xcode', 'yes'], ['VS Code', 'yes'],
      ['Docker / containers', 'limited'], ['Local LLM / AI', 'no'], ['Heavy multitasking', 'limited'],
      ['Virtual machines', 'limited'], ['External displays', 'yes']
    ],
    notes: 'The 24" iMac is an all-in-one desktop with a built-in 4.5K Retina display, so there is nothing extra to buy. It uses the standard M4 chip (no Pro/Max option), making it ideal for everyday productivity and creative work rather than the heaviest compute or AI workloads.',
    upgradeOptions: {
      cpu: [
        { label: 'M4 8-core — A$1999', note: '8-core GPU, 2 Thunderbolt ports — everyday productivity' },
        { label: 'M4 10-core — from A$2399', note: '10-core GPU, 4 Thunderbolt ports, Gigabit Ethernet option' }
      ],
      ram: [
        { label: '16 GB (base)', note: 'Handles everyday tasks and light creative work' },
        { label: '24 GB', note: 'Better for multitasking and photo/video editing' },
        { label: '32 GB', note: 'Maximum — for heavier creative workloads' }
      ],
      storage: [
        { label: '256 GB (base)', note: 'Fine with cloud storage' },
        { label: '512 GB', note: 'Recommended for most users' },
        { label: '1 TB - 2 TB', note: 'For local media and project libraries' }
      ]
    },
    upgradeNote: 'The entry model has 2 Thunderbolt ports; the 10-core GPU config adds 4 ports and a Gigabit Ethernet option. RAM tops out at 32 GB.'
  }
};

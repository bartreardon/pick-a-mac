# Mac Picker

An interactive, single-file web quiz that helps users find the right Mac for their needs. Answer a series of questions about how you work and the quiz recommends the best device, with specs, pros/cons, upgrade options, and a runner-up suggestion.

## Usage

Everything is self contained. Open `pick-a-mac.html` directly in any browser or host on any web server.

<img width="462" height="483" alt="image" src="https://github.com/user-attachments/assets/b1050564-8090-4588-9707-dc40c13cda28" />

## How it works

The quiz asks single-choice questions covering topics like primary role, app usage, multitasking load, media editing, AI tool usage, external displays, portability, and budget. Each answer carries **signals** — weighted dimensions that contribute to per-device scores. When all questions are answered the device with the highest accumulated score is recommended, alongside:

- **Key specifications**

  <img width="473" height="238" alt="image" src="https://github.com/user-attachments/assets/d83ea8e0-9fc4-4d1f-8d8d-57501589a49c" />

- **Recommended use cases**

  <img width="452" height="117" alt="image" src="https://github.com/user-attachments/assets/51e72ec2-e8ed-45c6-b699-69eab2d58cdf" />

- **Pros and cons**

  <img width="467" height="207" alt="image" src="https://github.com/user-attachments/assets/265c23ee-67ea-44a1-bfd6-190c35f957fd" />

- **A capability matrix across common tasks**

  <img width="525" height="574" alt="image" src="https://github.com/user-attachments/assets/766597fb-eadb-491c-bedb-e483c1d8bcea" />

- **A score graph showing how all devices ranked**

  <img width="491" height="213" alt="image" src="https://github.com/user-attachments/assets/6d499a03-df86-4be6-a843-a205de92aa16" />

- **Upgrade/configuration options (chip, RAM, storage)**

  <img width="524" height="284" alt="image" src="https://github.com/user-attachments/assets/a93d6fff-4816-41b5-b836-24e7fde372e5" />

- **A runner-up suggestion**

  <img width="469" height="97" alt="image" src="https://github.com/user-attachments/assets/413819eb-69c1-437e-99fe-e9eb739d7e3f" />



## Configuration

All configurable options are in the `CONFIG` block at the top of `pick-a-mac.html`:

| Property | Description | Default |
|---|---|---|
| `debug` | Shows a live scoring panel during the quiz | `false` |
| `title` | Main heading text | `'What Mac is right for you?'` |
| `subtitle` | Subheading text | `'Answer a few quick questions…'` |
| `logoUrl` | URL for the header logo image | Apple logo (Wikimedia) |
| `logoAlt` | Alt text for the logo | `'Apple'` |
| `bannerGradient` | CSS gradient or colour for the header banner | Gold-to-purple gradient |
| `appleCareSuffix` | Text appended to prices in parentheses — set to `''` to omit | `''` |

### Debug mode

Set `debug: true` to show a live scoring panel during the quiz, displaying real-time per-device scores as the user answers. The results page also gains a final score breakdown with the winner, runner-up, and score gap.

---

## Customising questions

Questions are defined in the `questions` array (around line 722 in the file). Each entry looks like this:

```js
{
  id: 'role',
  text: 'Which best describes your primary role?',
  hint: 'Pick the closest match to your day-to-day work',
  options: [
    {
      label: 'Administrative / Support',
      desc:  'Email, documents, scheduling, coordination',
      value: 'admin',
      signals: { everyday: 3, budgetConscious: 1 }
    },
    // …more options
  ]
}
```

| Field | Required | Description |
|---|---|---|
| `id` | Yes | Unique string identifier for the question |
| `text` | Yes | The question shown to the user |
| `hint` | No | Helper text shown below the question |
| `options` | Yes | Array of answer choices (see below) |

Each option in the `options` array:

| Field | Required | Description |
|---|---|---|
| `label` | Yes | Short display text for the choice |
| `desc` | No | Longer description shown below the label |
| `value` | Yes | Internal identifier for this answer |
| `signals` | Yes | Object mapping signal dimensions to numeric strength values |

### Adding a question

Add a new entry to the `questions` array. Choose signal dimensions that already exist on devices (see [Signal dimensions](#signal-dimensions) below), or add a new dimension and give each device a corresponding weight for it.

### Removing a question

Delete the entry from the `questions` array. No other changes are needed — the scoring system iterates over whatever questions are present.

---

## Customising devices

Devices are defined in the `devices` object (around line 820 in the file). Each key is the device's `id`. A full device entry looks like this:

```js
{
  id:        'air',
  name:      'MacBook Air',
  shortName: 'Air',
  tagline:   'The best laptop for most people',
  price:     '$1,099',
  shopUrl:   'https://www.apple.com/shop/buy-mac/macbook-air',
  color:     '#0071e3',
  colorBg:   '#e8f4fd',
  colorDark: '#60a5fa',
  icon:      '💙',
  weights: {
    everyday: 1.5, creative: 1.5, development: 1.2, data: 1,
    ai: 0.5, power: 0.8, portability: 1.5, desktop: -0.5,
    multiDisplay: 0.5, budgetConscious: 1, largeScreen: 0
  },
  specs: {
    chip:     'Apple M5',
    cores:    '8-core CPU, 10-core GPU',
    memory:   '16 / 24 / 32 GB',
    storage:  '512 GB – 2 TB',
    battery:  '~18 hrs',
    display:  '13" or 15" Liquid Retina',
    ports:    '2x Thunderbolt 4, MagSafe, 3.5mm',
    wireless: 'Wi-Fi 6E, Bluetooth 5.3'
  },
  pros:     ['Best-in-class battery life', 'Fanless — completely silent', /* … */],
  cons:     ['No fan means sustained loads may throttle', /* … */],
  useCases: ['General productivity', 'Photo & light video editing', /* … */],
  matrix: [
    ['Device management & security', 'yes'],
    ['Office apps & email',          'yes'],
    ['Video editing',                'limited'],
    ['Local LLM / AI',               'limited'],
    // …more rows — valid statuses: 'yes' | 'limited' | 'no'
  ],
  notes: 'Optional freeform text shown on the results page.',
  upgradeOptions: {
    ram: [
      { label: '16 GB (base)', note: 'Handles everyday tasks comfortably' },
      { label: '24 GB',        note: 'Better for heavier multitasking' },
      { label: '32 GB',        note: 'High-end config' }
    ],
    storage: [
      { label: '512 GB (base)', note: 'Good starting point' },
      { label: '1 TB',          note: 'Recommended for most users' }
    ]
  },
  upgradeNote: 'Freeform text about the upgrade path shown below the options.'
}
```

| Field | Required | Description |
|---|---|---|
| `id` | Yes | Unique string key — must match the key used in the `devices` object |
| `name` | Yes | Full product name |
| `shortName` | Yes | Abbreviated name used in compact UI |
| `tagline` | Yes | One-line description shown on the results card |
| `price` | Yes | Display price string |
| `shopUrl` | Yes | Link to the product page |
| `color` | Yes | Brand accent colour (hex) |
| `colorBg` | Yes | Light background tint of the accent colour |
| `colorDark` | Yes | Darker shade used for score graphs |
| `icon` | Yes | Emoji used as a device icon |
| `weights` | Yes | Per-signal-dimension multipliers used in scoring (see below) |
| `specs` | Yes | Key/value pairs displayed in the specs grid |
| `pros` | Yes | Array of strength strings |
| `cons` | Yes | Array of weakness strings |
| `useCases` | Yes | Array of recommended use-case tags |
| `matrix` | Yes | Array of `[task, status]` pairs; status is `'yes'`, `'limited'`, or `'no'` |
| `notes` | No | Freeform contextual notes shown on the results page |
| `upgradeOptions` | No | Object of upgrade categories (`ram`, `storage`, `cpu`), each an array of options with `label` and `note` |
| `upgradeNote` | No | Freeform text shown below the upgrade options table |

### Adding a device

1. Add a new entry to the `devices` object with a unique `id`.
2. Provide all required fields. Give the device a `weights` object covering every signal dimension used by questions — set unused dimensions to `0`.
3. The device will automatically appear in scoring, the results graph, and the runner-up suggestion.

### Removing a device

Delete the entry from the `devices` object. The scoring and results rendering iterate over whatever devices are present, so no other changes are required.

---

## Signal dimensions

Signals are the bridge between questions and devices. A question answer declares which signals it triggers and at what strength; each device declares how much it values each signal via `weights`. The final device score is the sum of `signal_strength × device_weight` across all answered questions.

The signal dimensions currently in use:

| Dimension | Meaning |
|---|---|
| `everyday` | Light everyday tasks (email, documents, browsing) |
| `creative` | Creative/media work (design, photo, video) |
| `development` | Software development, DevOps, containers |
| `data` | Data analysis, large datasets, scientific computing |
| `ai` | Running local LLM/AI models |
| `power` | General need for high compute performance |
| `portability` | Mobile/travel use — lighter and longer battery |
| `desktop` | Stationary workstation preference |
| `multiDisplay` | Multiple external displays |
| `budgetConscious` | Cost sensitivity |
| `largeScreen` | Preference for a larger screen |

To introduce a new signal dimension, add it to the relevant answer options' `signals` objects and add a corresponding weight entry to every device's `weights` object.

---

## Devices

The quiz currently recommends:

- MacBook Neo
- MacBook Air
- MacBook Pro
- Mac Studio

## Technical notes

- Single HTML file — no dependencies, frameworks, or build tools
- Vanilla HTML, CSS, and JavaScript
- Fully client-side; works offline once downloaded

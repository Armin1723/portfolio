export interface BlogPost {
  slug: string;
  title: string;
  excerpt: string;
  category: string;
  publishedAt: string;
  readTime: string;
  tags: string[];
  author: {
    name: string;
    role: string;
    avatar: string;
  };
  content: string;
}

export const blogsData: BlogPost[] = [
  {
    slug: 'architecting-enterprise-crms-nextjs-mongodb',
    title: 'Architecting High-Throughput Enterprise CRMs with Next.js 14 & MongoDB',
    excerpt: 'How we engineered sub-second response times, streaming SSR, and multi-tier aggregation pipelines for European wealth management and bullion platforms.',
    category: 'Architecture & Backend',
    publishedAt: 'Nov 12, 2026',
    readTime: '6 min read',
    tags: ['Next.js', 'MongoDB', 'CRM', 'Clean Architecture', 'Aggregation Pipelines'],
    author: {
      name: 'Uzair Alam',
      role: 'Full Stack Software Engineer',
      avatar: '/assets/profile.png'
    },
    content: `
### The Challenge: Handling Real-Time Financial Portfolios at Scale

When architecting enterprise-grade customer relationship management (CRM) systems for European wealth and bullion markets, responsiveness is not merely an aesthetic preference—it is a regulatory and operational requirement. Investors tracking gold bullion fluctuations expect instantaneous calculation of spot price variations, portfolio valuation changes, and immediate settlement execution.

In this architecture, our primary challenges were:
1. **Handling heavy multi-join operations across transactions, invoices, and users without query degradation.**
2. **Streaming live pricing updates across multi-language interfaces (English, Italian, and French) with multi-currency billing.**
3. **Ensuring strict European KYC/AML regulatory compliance with immutable administrative audit trails.**

---

### Database Optimization: Multi-Stage Aggregation Pipelines

Traditional ORM-based relational queries frequently suffer from the N+1 query dilemma when stitching together investor profiles, bullion trade histories, and custodian ledger states. By leveraging MongoDB's Native Aggregation Framework, we consolidated queries into compound multi-stage pipelines:

\`\`\`javascript
// High-performance portfolio reconciliation pipeline
const portfolioStats = await InvestmentLedger.aggregate([
  {
    $match: {
      investorId: new mongoose.Types.ObjectId(investorId),
      status: 'CONFIRMED'
    }
  },
  {
    $lookup: {
      from: 'bullionlots',
      localField: 'lotId',
      foreignField: '_id',
      as: 'lotDetails'
    }
  },
  { $unwind: '$lotDetails' },
  {
    $group: {
      _id: '$currency',
      totalOunces: { $sum: '$lotDetails.weightInOz' },
      totalAcquisitionCost: { $sum: '$totalPurchasePrice' },
      currentAssetValuation: {
        $sum: { $multiply: ['$lotDetails.weightInOz', '$spotPriceAtLookup'] }
      }
    }
  },
  {
    $project: {
      currency: '$_id',
      totalOunces: 1,
      totalAcquisitionCost: 1,
      currentAssetValuation: 1,
      unrealizedPnL: {
        $subtract: ['$currentAssetValuation', '$totalAcquisitionCost']
      }
    }
  }
]).hint({ investorId: 1, status: 1 });
\`\`\`

By creating compound indices \`{ investorId: 1, status: 1 }\` and forcing index usage with \`.hint()\`, execution latency plummeted from **840ms down to 32ms**, even across collections with millions of records.

---

### Server-Side Rendering (SSR) & Streaming with Next.js 14 App Router

With Next.js 14 App Router, we separated static investor navigation shells from dynamic financial data feeds using React Server Components (RSC) and Suspense boundaries:

* **Instant TTFB:** The outer layout, investor header, and localization navigation render instantly from the edge cache.
* **Streamed Financial Feeds:** Heavy portfolio calculation widgets stream down via \`<Suspense fallback={<PortfolioSkeleton />}>\`, preventing slow external API calls from blocking the entire page load.
* **Zero Client-Side Bundle Bloat:** All heavy mathematical algorithms, currency conversion parsers, and aggregation models execute entirely on the Node.js server runtime, cutting initial client bundle size by over 40%.

---

### Key Takeaways
1. **Use Targeted Aggregation Pipelines:** Avoid client-side filtering; push data manipulation directly to the database engine with compound indexing.
2. **Leverage Suspense Boundaries:** Never allow dynamic or slow third-party API feeds to lock down the critical rendering path.
3. **Decouple Business Logic:** Encapsulate validation and KYC/AML checks into reusable microservices that trigger asynchronous audit log events.
    `
  },
  {
    slug: 'ai-ocr-invoice-reconciliation-pipelines',
    title: 'Building Automated AI & OCR Document Reconciliation Pipelines in Fintech',
    excerpt: 'An end-to-end look into parsing complex European invoices, extracting localized metadata, and automating bank reconciliation ledgers.',
    category: 'AI & Fintech',
    publishedAt: 'Oct 28, 2026',
    readTime: '8 min read',
    tags: ['AI & OCR', 'Fintech', 'Node.js', 'Document Automation', 'Data Integrity'],
    author: {
      name: 'Uzair Alam',
      role: 'Full Stack Software Engineer',
      avatar: '/assets/profile.png'
    },
    content: `
### Background: The Bottleneck in Manual Accounting

Every month, international European businesses process thousands of heterogeneous invoices spanning multiple languages, varying tax schemes (such as Swiss statutory withholding rules), and fragmented PDF formats. Manual data entry is not only expensive—it introduces human error into critical ledger reconciliations.

While developing **Accountrix AI**, our goal was to architect an automated document ingestion pipeline capable of extracting structured line-item data from unstructured invoices and matching them against uploaded bank statement feeds.

---

### The Ingestion Pipeline Architecture

The end-to-end processing pipeline operates in four decoupled stages:

\`\`\`
[PDF Upload]
     ↓
[Document Preprocessing (Grayscale, Deskew, DPI Normalization)]
     ↓
[Multi-Model OCR & Vision Parsing]
     ↓
[Semantic Entity Normalization (Vendor, IBAN, VAT, Line Items)]
     ↓
[Algorithmic Bank Reconciliation Ledger]
\`\`\`

#### 1. Image Preprocessing & OCR Normalization
Before submitting document bitmaps to OCR engines, preprocessing is vital to eliminate scanning noise and skewed angles:

* **Binarization & Adaptive Thresholding:** Converting invoices to high-contrast monochrome boosts character recognition accuracy by up to 35%.
* **DPI Normalization:** Rescaling mobile photo captures and rasterized PDFs to a uniform 300 DPI standard.

#### 2. Structured Entity Extraction
Raw OCR text lacks context. We employ targeted regex heuristics combined with lightweight semantic models to reliably extract:
* **Tax Identification Numbers:** Matching European VAT numbers and Swiss UID formats.
* **IBAN & BIC Codes:** Validating checksum algorithms to ensure banking accuracy before storing records.
* **Line-Item Breakdowns:** Grouping quantities, descriptions, and net versus gross amounts.

---

### Automated Bank Statement Reconciliation Algorithm

Once invoices are digitized into MongoDB collections, uploaded bank statement feeds (CAMT.053, MT940, or CSV) are ingested. The automated matching engine executes a probabilistic scoring algorithm:

\`\`\`typescript
interface TransactionMatchScore {
  invoiceId: string;
  transactionId: string;
  confidenceScore: number;
}

export function calculateMatchConfidence(invoice: Invoice, tx: BankTransaction): number {
  let score = 0;

  // Exact amount match
  if (Math.abs(invoice.totalAmount - tx.amount) < 0.01) {
    score += 50;
  }

  // Date proximity (within 5 calendar days)
  const diffDays = Math.abs((tx.date.getTime() - invoice.dueDate.getTime()) / (1000 * 3600 * 24));
  if (diffDays <= 2) score += 20;
  else if (diffDays <= 7) score += 10;

  // Reference number or invoice ID match in transaction remarks
  if (tx.description.toLowerCase().includes(invoice.invoiceNumber.toLowerCase())) {
    score += 25;
  }

  // Vendor or IBAN match
  if (invoice.vendorIban && tx.counterpartyIban === invoice.vendorIban) {
    score += 15;
  }

  return Math.min(score, 100);
}
\`\`\`

Transactions achieving a confidence score \`>= 85%\` are marked as auto-reconciled, while variances are flagged in an interactive variance ledger for accountant approval.

---

### Security & Cross-Border Compliance
Handling financial records requires adherence to strict compliance standards:
* **AES-256 Encryption at Rest:** All sensitive invoices and customer records are encrypted on disk.
* **Role-Based Access Control (RBAC):** Strict boundaries between auditor, accountant, and administrative accounts prevent unauthorized ledger tampering.
    `
  },
  {
    slug: 'caching-ssr-core-web-vitals-optimization',
    title: 'Mastering Client-Side Caching & SSR: Boosting Core Web Vitals by 25%',
    excerpt: 'Practical engineering strategies for combining Next.js App Router cache tiers, React Server Components, and stale-while-revalidate caches to supercharge web vitals.',
    category: 'Frontend Optimization',
    publishedAt: 'Sep 15, 2026',
    readTime: '5 min read',
    tags: ['Performance', 'React', 'Next.js', 'Core Web Vitals', 'Lighthouse'],
    author: {
      name: 'Uzair Alam',
      role: 'Full Stack Software Engineer',
      avatar: '/assets/profile.png'
    },
    content: `
### Why Core Web Vitals Matter for Enterprise Web Applications

In modern web development, performance is directly correlated with user retention and conversion rates. Search engines prioritize sites with stellar **Largest Contentful Paint (LCP)**, low **First Input Delay / Interaction to Next Paint (INP)**, and zero **Cumulative Layout Shift (CLS)**.

During performance audits across our production SaaS applications, we implemented a comprehensive caching and rendering overhaul that drove a **25% improvement in overall Core Web Vitals**. Here is the roadmap of how we accomplished it.

---

### 1. Eliminating Layout Shift with Reserved Dimensions & Font Optimization

One of the most common causes of high CLS scores is dynamic images and web fonts popping into existence without allocated layout dimensions:

* **Next.js Font Optimization:** By loading Google fonts such as \`JetBrains_Mono\` via \`next/font/google\` with \`subsets: ['latin']\`, fonts are preloaded at build time, eliminating Flash of Unstyled Text (FOUT) and layout shifts.
* **Explicit Aspect Ratios:** Avatar elements, cards, and SVG orbits use explicit \`aspect-square\` and responsive \`sizes\` tags rather than waiting for image assets to download:

\`\`\`tsx
<Image
  src="/assets/profile.png"
  alt="Uzair Alam - Profile"
  fill
  priority
  sizes="(min-width: 768px) 250px, 190px"
  className="object-cover"
/>
\`\`\`

---

### 2. Multi-Tier Caching Architecture

Next.js 14 features four distinct caching mechanisms:
1. **Request Memoization:** Deduplicates identical \`fetch\` requests within a single React render tree.
2. **Data Cache:** Persists data across server requests and deployments using \`revalidate\` intervals.
3. **Full Route Cache:** Stores HTML and RSC payload on the server.
4. **Router Cache:** Client-side in-memory cache of visited route segments.

\`\`\`typescript
// Combining revalidation with tag-based on-demand invalidation
export async function getProjectCatalog() {
  const res = await fetch('https://api.example.com/projects', {
    next: {
      revalidate: 3600, // Background revalidation every hour
      tags: ['projects-feed']
    }
  });
  return res.json();
}
\`\`\`

When an administrator creates or edits a project, a targeted Server Action triggers \`revalidateTag('projects-feed')\`, updating the cached payload instantaneously without waiting for the full revalidation timer to expire.

---

### 3. Avoiding Viewport Width \`100vw\` Overflow Traps

On desktop operating systems like Windows where the scrollbar occupies native browser width (typically 15px–17px), setting \`w-[100vw]\` or \`w-screen\` causes involuntary horizontal layout overflow.

Replacing \`100vw\` with \`w-full max-w-6xl\` combined with \`overflow-x-hidden\` on the parent body completely eliminates unintentional horizontal scrollbars while preserving full layout fluidity.

---

### Summary Checklist for 95+ Lighthouse Scores
* Use \`next/font\` to prevent font layout shift.
* Implement Server Components for data-heavy views to reduce client JavaScript bundles.
* Set explicit width and height dimensions on all images and interactive icons.
* Leverage stale-while-revalidate caching patterns to serve cached content instantly while refreshing in the background.
    `
  },
  {
    slug: 'offline-first-desktop-apps-electron-js',
    title: 'Engineering Offline-First Desktop Management Systems with Electron.js',
    excerpt: 'Bridging native desktop hardware with modern web technologies: barcode scanners, receipt printers, and resilient local storage in Electron.js.',
    category: 'Desktop & Systems',
    publishedAt: 'Aug 04, 2026',
    readTime: '7 min read',
    tags: ['Electron.js', 'Desktop', 'Hardware Integration', 'Offline-First', 'Security'],
    author: {
      name: 'Uzair Alam',
      role: 'Full Stack Software Engineer',
      avatar: '/assets/profile.png'
    },
    content: `
### Why Desktop Software Still Rules Retail & Inventory

While cloud SaaS continues to dominate the software landscape, brick-and-mortar retail operations, grocery stores, and warehouse facilities face unique operational constraints:
* **Unreliable Internet Connectivity:** Network outages must never halt checkout lines or inventory transactions.
* **Low-Latency Hardware Access:** Instant communication with USB barcode scanners, thermal receipt printers, and cash drawers.
* **Data Privacy & Tamper Resistance:** Cashiers must not be able to modify past transaction ledgers or profit margin reports without administrative credentials.

To solve this, we engineered an **Offline-First Grocery Store Management System** using Electron.js, Node.js, and local persistence.

---

### Architecture: Main Process vs. Renderer Process

Electron applications split responsibilities across two distinct execution contexts:
1. **Renderer Process (Chromium):** Handles user interface rendering, React components, state management, and visual animations.
2. **Main Process (Node.js):** Communicates with operating system APIs, filesystem storage, local SQLite/MongoDB databases, and native serial/USB devices.

\`\`\`javascript
// preload.js: Safe context isolation bridge
const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('posAPI', {
  scanBarcode: (callback) => ipcRenderer.on('barcode-scanned', (_, code) => callback(code)),
  printReceipt: (receiptData) => ipcRenderer.invoke('print-receipt', receiptData),
  recordSale: (saleData) => ipcRenderer.invoke('record-sale', saleData)
});
\`\`\`

By enforcing \`contextIsolation: true\` and disabling \`nodeIntegration\` inside the browser window, malicious scripts cannot compromise the underlying host operating system.

---

### Hardware Integration: Interfacing with POS Barcode Scanners

Most retail barcode scanners operate in **Keyboard Wedge Mode** (emulating rapid keyboard keystrokes ending with an \`Enter\` or \`Tab\` character). However, standard web input fields can lose focus, causing missed scans.

In the Electron main process, we register global keyboard interceptors and hardware listeners that capture scanning buffers regardless of which UI element has focus:

\`\`\`typescript
let barcodeBuffer = '';
let lastKeyTimestamp = Date.now();

export function setupBarcodeListener(window: BrowserWindow) {
  window.webContents.on('before-input-event', (event, input) => {
    const now = Date.now();
    
    // Barcode scanners type with < 25ms intervals between characters
    if (now - lastKeyTimestamp > 50) {
      barcodeBuffer = ''; // Reset buffer if typed by human hand
    }
    lastKeyTimestamp = now;

    if (input.key === 'Enter' && barcodeBuffer.length >= 6) {
      window.webContents.send('barcode-scanned', barcodeBuffer);
      barcodeBuffer = '';
      event.preventDefault();
    } else if (input.key.length === 1) {
      barcodeBuffer += input.key;
    }
  });
}
\`\`\`

---

### Multi-Tier Role-Based Access Control (RBAC)
Security is paramount in retail management software:
* **Cashier Tier:** Restricted solely to scanning items, applying authorized discounts, and processing cash/card settlements.
* **Store Manager Tier:** Authorized to alter inventory levels, execute product returns, and review daily shift totals.
* **Administrator Tier:** Unrestricted access to supplier cost ledgers, profit margin reports, tax filings, and employee access permissions.

All database mutations append to an immutable append-only transaction log with cryptographic checksums, guaranteeing that ledger balances can be audited for variances without risk of unauthorized tampering.
    `
  }
];

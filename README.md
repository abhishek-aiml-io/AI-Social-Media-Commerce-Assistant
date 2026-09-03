# AI Social Media Commerce Assistant

An intelligent, localized growth-and-checkout workflow tool designed for modern indie merchants. This application bridges the gap between creative marketing generation and financial conversion by automating product copywriting, translation, contextual checkout simulations, and growth performance metrics in a singular unified console.

🚀 **Built for the Razorpay AI Buildathon 2026** (AI Growth & Agentic Commerce Track)

---
🚀 **Live Demo:** [Click here to view the live app](https://commerse-ai.netlify.app/)


## 🌟 Key Features

- **Automated Omnichannel Asset Generation:** Ingests product telemetry and simulates processing assets tailored for Instagram (with hyper-contextual hashtags), professional LinkedIn distribution, and high-converting transactional email newsletters.
- **Dynamic Multilingual Localization Switcher:** Solves deep-market access friction by shifting marketing copy layers instantly between English, Hindi, Hinglish, and Tamil.
- **Razorpay Sandbox Gateway Simulation:** A high-fidelity frontend replica of the Razorpay Checkout overlay, complete with mock field validations, loaders, and state management hooks to capture merchant transaction intent.
- **Unified Growth & ROI Analytics Console:** Provides structural feedback loop dashboards tracing AI-Driven Sales, checkout funnel conversion velocity, and automated chat retention metrics.
- **Embedded Merchant Care Bot Workspace:** An interactive support sidebar enabling contextual product-centric user testing simulations.

---

## 🛠️ Architecture & Core Tech Stack

- **Frontend Core Framework:** React 18 (TypeScript)
- **Style Compilation & Utility Layouts:** Tailwind CSS
- **Bundler & Build Pipeline:** Vite
- **Icon Ecosystem:** Lucide React
- **Code Optimization & Linters:** ESLint

---

## 📁 Repository File Structure

```text
project/
├── src/
│   ├── components/            # Isolated UI Elements
│   │   ├── ChatbotWidget.tsx  # Interactive automated customer canvas
│   │   ├── MarketInsights.tsx # Competitor pricing visualization metrics
│   │   ├── PaymentModal.tsx   # Razorpay Checkout component overlay
│   │   ├── ResultsPanel.tsx   # Multi-channel asset layout engine
│   │   ├── Sidebar.tsx        # Dashboard navigational framework
│   │   ├── StoreMetrics.tsx   # Merchant ROI analytical cards
│   │   └── UploadArea.tsx     # Local asset drag-and-drop workspace
│   ├── lib/
│   │   └── generation.ts      # Multi-language mock translation matrix mapping
│   ├── types.ts               # Strict type bindings
│   ├── App.tsx                # Master dashboard orchestration framework
│   └── main.tsx               # DOM entry rendering controller
```

---

## ⚙️ How to Run Locally on Your Mac

To spin up this development environment locally, you will need **Node.js** installed on your macOS system. Follow these quick terminal steps:

1. **Extract and Open the directory:**
   ```bash
   cd /path/to/your/unzipped/project
   ```

2. **Install all necessary project packages:**
   ```bash
   npm install
   ```

3. **Launch the Vite reactive local server:**
   ```bash
   npm run dev
   ```

4. **Access the application dashboard:**
   Open your browser and navigate to `http://localhost:3001`

---

## 💡 AI Prototyping Strategy (Proof of Work Disclosure)

In alignment with the core values of the Razorpay AI Buildathon, this codebase was rapidly developed using state-of-the-art AI pair programming methodologies.

**What AI accelerated**

- Scaffolding the Vite + React 18 + TypeScript + Tailwind console
- Component boundaries (`UploadArea`, `ResultsPanel`, `PaymentModal`, `StoreMetrics`, `MarketInsights`, `ChatbotWidget`, `Sidebar`)
- Mock localization matrix in `src/lib/generation.ts` (English, Hindi, Hinglish, Tamil)
- Razorpay Checkout overlay UX: fields, loaders, and client-side validation states
- Growth KPI copy and dashboard card structure

**What remains human-owned**

- Product thesis: localized growth → simulated checkout intent → ROI feedback loop
- Track fit for **AI Growth & Agentic Commerce**
- Demo narrative, locale quality, and merchant-care bot behavior
- Confirmation that checkout is **sandbox/mock only** (no live Razorpay charges or secret keys)

**How to inspect the work**

1. Walk `src/App.tsx` as the session orchestrator.
2. Trace asset generation and locale switching through `src/lib/generation.ts` and `ResultsPanel.tsx`.
3. Open `PaymentModal.tsx` to see mock validation and transaction-intent capture.
4. Use `ChatbotWidget.tsx` plus `StoreMetrics.tsx` / `MarketInsights.tsx` for care-bot and funnel metrics.

Judges should treat this as an **AI-assisted prototype with a human product and architecture lock**, not as an unattended code dump.

---

## 💳 Sandbox disclaimer

`PaymentModal` is a frontend replica of Razorpay Checkout. Validations and loaders are mock. Successful overlay states record **merchant transaction intent** for the analytics console and do **not** settle live payments.

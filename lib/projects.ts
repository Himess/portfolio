export type Project = {
  slug: string;
  name: string;
  tagline: string;
  summary: string;
  year: string;
  status: "Live" | "Deployed" | "Audited" | "Shipped" | "Research";
  stack: string[];
  links: {
    repo?: string;
    site?: string;
    video?: string;
    docs?: string;
  };
  featured: boolean;
  award?: string;
  awardLink?: string;
  highlights: string[];
  problem: string;
  approach: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "ghostlend",
    name: "GhostLend",
    tagline: "Confidential lending & leverage, computed on ciphertext",
    summary:
      "Borrow, leverage, and net lending positions with the amounts, the debt, and even the leverage ratio encrypted end-to-end. Built on Zama FHEVM, live on Sepolia — no plaintext position ever touches the chain.",
    year: "2026",
    status: "Live",
    stack: ["Solidity", "FHE (fhEVM)", "ERC-7984", "Chainlink", "TypeScript", "Next.js"],
    links: {
      repo: "https://github.com/Himess/ghostlend",
      site: "https://ghostlend.vercel.app",
      docs: "https://ghostlend-deck.vercel.app",
      video: "https://www.youtube.com/watch?v=Rz0Mgozh0Xc",
    },
    featured: true,
    award: "Zama Developer Program — Builder Track Winner",
    awardLink:
      "https://www.zama.org/post/announcing-the-developer-program-mainnet-season-3-winners",
    highlights: [
      "Zama Developer Program Mainnet Season 3 — Builder Track Winner, 2nd place",
      "7 verified contracts on Sepolia, 91% coverage (core 97%)",
      "Confidential borrow against shielded collateral",
      "Encrypted leverage — even the leverage ratio stays hidden",
      "Liquidation that reveals a single bit (healthy / not)",
      "GhostGate netting — only the batch net crosses the public boundary",
      "Built on open ERC-7984 confidential-token primitives",
    ],
    problem:
      "Every lending position opened on-chain is a public broadcast: size, debt, liquidation price, and leverage are all readable by anyone with an RPC endpoint. The supply side of confidential DeFi already exists — shield a deposit, earn encrypted yield — but the moment you borrow against it, you go completely naked. The credit half of the stack was missing.",
    approach:
      "GhostLend is that credit layer, computed entirely on ciphertext. Balances, debt, and health factors live as FHE-encrypted values under Zama's Protocol; the pool runs borrow, repay, and an encrypted margin check without ever decrypting a position. Leverage loops a confidential collateral position so the ratio itself stays private. Liquidation reveals exactly one bit — healthy or not — through a single gated decryption, never the underlying numbers. A GhostGate netting gateway batches deposit and withdraw intents so only the net movement crosses to the public vault.",
    outcome:
      "Live on Sepolia across seven verified contracts at 91% coverage (97% on the core pool), with a working demo and a pitch deck. Demonstrates that the one primitive on-chain lending never hid — your position — can run end-to-end encrypted while liquidation and solvency stay publicly verifiable.",
  },
  {
    slug: "ghostrail",
    name: "GhostRail",
    tagline: "Confidential lending on Circle's Arc",
    summary:
      "A confidential lending layer for Arc: supply into public Morpho/Aave-style venues across USDC, ETH, BTC, EURC, and tokenized treasury while keeping your position private — only the net of each batch ever touches the public venue. Plain Solidity, USDC-native, live on Arc testnet, architected for Arc's TEE Privacy Sector.",
    year: "2026",
    status: "Live",
    stack: ["Solidity", "Arc", "Circle CCTP", "USDC", "x402", "TypeScript"],
    links: {
      repo: "https://github.com/Himess/ghostrail",
      site: "https://ghostrail.xyz",
      docs: "https://ghostrail-deck.vercel.app",
      video: "https://www.youtube.com/watch?v=EIdetHzyqWs",
    },
    featured: true,
    highlights: [
      "Live on Arc testnet, USDC-native, plain Solidity",
      "Batch netting — only the net of each batch crosses the public venue",
      "Multi-asset markets: USDC, ETH, BTC, EURC, tokenized treasury",
      "Real Circle rails: USDC + CCTP bridge (Base/Ethereum/Arbitrum → Arc) + EURC market",
      "Confidential x402 / agent-payments module alongside",
      "Architected for Arc's TEE Privacy Sector — confidentiality activates when APS ships",
    ],
    problem:
      "Public lending venues broadcast every position: size, collateral, health factor, liquidation price. Supplying into Morpho/Aave-style markets on a public chain means your whole book is readable by anyone. Arc introduces a TEE privacy sector, but nothing yet lets a lender earn venue yield while keeping the position itself private.",
    approach:
      "GhostRail is a confidential lending layer on Arc. Positions live behind a confidential boundary and a netting gateway batches intents so only the net of each batch is ever posted to the underlying public venue. It integrates real Circle rails — Arc-testnet USDC, a CCTP bridge (burn→attestation→mint from Base/Ethereum/Arbitrum Sepolia), and an EURC market — across USDC, ETH, BTC, EURC, and tokenized-treasury markets, with a confidential x402 / agent-payments module alongside. It is honest by design about Arc testnet: protocol logic and Circle integrations are live, while the confidentiality is notional until Arc's TEE Privacy Sector (APS) activates.",
    outcome:
      "Live on Arc testnet with real USDC, a working CCTP bridge, and an EURC market, plus a landing site, deck, and demo. Applies proven confidential-DeFi patterns — netting, the two-speed public boundary, honest boundary tables — to Arc's TEE substrate, ready for confidentiality to switch on when APS ships.",
  },
  {
    slug: "marc",
    name: "MARC Protocol",
    tagline: "The privacy layer for agent payments",
    summary:
      "FHE-encrypted tokens, agent identity, and escrow-based commerce for autonomous AI agents. Eight contracts on Sepolia, ten integration plugins, three ERC standards (7984, 8004, 8183).",
    year: "2026",
    status: "Live",
    stack: ["Solidity", "FHE (fhEVM)", "x402", "MPP", "TypeScript", "Next.js"],
    links: {
      repo: "https://github.com/marc-protocol/marc",
      site: "https://marcprotocol.com",
      docs: "https://docs.marcprotocol.com",
      video: "https://www.youtube.com/watch?v=utipPnFrzOY",
    },
    featured: true,
    award: "Zama Developer Program — Builder Track Winner",
    awardLink: "https://x.com/zama/status/2037196963163046327",
    highlights: [
      "Zama Mainnet Season 1 Builder Track winner",
      "1,100+ tests, deep-audited, CI green",
      "ERC-7984 confidential token (FHE-encrypted cUSDC)",
      "ERC-8004 agent identity and reputation",
      "ERC-8183 FHE escrow with encrypted budgets",
      "Ten plugins: x402, MPP, MCP, A2A, AgentKit, Virtuals, OpenClaw, ElizaOS, LangChain, CrewAI",
    ],
    problem:
      "Autonomous AI agents transacting on-chain leak their entire spending history. Existing payment rails expose balance, counterparties, and intent to any observer, which breaks competitive agents, private treasuries, and confidential B2B flows.",
    approach:
      "MARC is a protocol-agnostic privacy layer on top of x402 and MPP, powered by fully homomorphic encryption. Balances, transfer amounts, and agent identities stay encrypted at rest; escrow, identity, and reputation primitives compose as plugins. Payments settle in a single transaction via Zama's operator pattern. Three ERC standards anchor interop: ERC-7984 for confidential tokens, ERC-8004 for agent identity, ERC-8183 for encrypted escrow with hook callbacks.",
    outcome:
      "Winner of the Zama Mainnet Season 1 Builder Track. Eight production contracts live on Sepolia with 1,100+ passing tests. Landing, app, and docs deployed at marcprotocol.com. Fee-based revenue model and no token, so the protocol stays credibly neutral.",
  },
  {
    slug: "mixvm",
    name: "MixVM",
    tagline: "Cross-chain private USDC",
    summary:
      "Zero-knowledge privacy pool for USDC with LayerZero V2 messaging and Circle CCTP V2 bridging. Poseidon + Merkle + Groth16 proofs plus ECDH stealth addresses.",
    year: "2026",
    status: "Deployed",
    stack: ["Solidity", "Circom", "Groth16", "LayerZero V2", "CCTP V2"],
    links: {
      repo: "https://github.com/Himess/mixvm",
    },
    featured: true,
    highlights: [
      "v10.2 shipped end-to-end",
      "Groth16 proofs over a Poseidon Merkle tree",
      "LayerZero V2 cross-chain messaging",
      "Circle CCTP V2 USDC bridging",
      "ECDH stealth-address recipients",
    ],
    problem:
      "Cross-chain USDC moves in the open. Mixing pools exist per-chain, but none compose cleanly with CCTP or preserve privacy across hops. Either you get privacy on one chain or liquidity across many.",
    approach:
      "A shielded pool keyed on a Poseidon-hashed Merkle tree of commitments. Deposits generate a note. Withdrawals prove membership in Groth16 without revealing which leaf. LayerZero V2 carries the nullifier proofs across chains, CCTP V2 moves the underlying USDC, and ECDH derives one-time addresses for recipients so even the sender cannot link deposit and withdrawal.",
    outcome:
      "v10.2 shipped end-to-end across deposits, shielded transfers, cross-chain routing, and stealth withdrawals.",
  },
  {
    slug: "roil",
    name: "Roil",
    tagline: "Privacy treasury on Canton Network",
    summary:
      "Feature-complete privacy treasury with a custom wallet (Passkey, Google, Email), treasury swap AMM, whitelist, DCA, and governance, all on Canton's privacy-by-default ledger.",
    year: "2026",
    status: "Live",
    stack: ["Daml", "Canton", "Next.js", "TypeScript", "Passkeys"],
    links: {
      repo: "https://github.com/Himess/roil-finance",
      site: "https://roil.app",
      video: "https://www.youtube.com/watch?v=_MagWXLwyiw",
    },
    featured: true,
    highlights: [
      "10 Daml contracts, 79 on-ledger tests, CI green",
      "Passkey / Google / Email custom wallet, no MetaMask",
      "Treasury swap AMM with oracle pricing and 0.5% spread",
      "Whitelist, DCA, rewards, portfolio, governance",
      "Public and private repos split to protect the UI",
    ],
    problem:
      "Canton Network has no MetaMask, no Uniswap, and no shared public liquidity. Every app ships its own wallet and its own exchange. For a privacy-first treasury that is a feature, but it means building the whole stack.",
    approach:
      "Ten Daml contracts cover the primitives: portfolio, DCA, reward tracking, transfer preapproval, treasury, whitelist, and governance. The frontend ships a custom wallet with Passkey, Google, and Email as entry points so onboarding stays web-native. A small oracle-priced AMM with a tight spread supplies liquidity for the beta.",
    outcome:
      "Feature-complete and deployed at roil.app. Validator application prepared for the Canton Foundation. Team is in DEX partnership talks.",
  },
  {
    slug: "privagent",
    name: "PrivAgent",
    tagline: "Privacy-preserving x402 on Base mainnet",
    summary:
      "Production x402 payment protocol with privacy features, live on Base mainnet. ERC-8021 builder-code attribution, 282 tests, end-to-end verified.",
    year: "2026",
    status: "Live",
    stack: ["Solidity", "x402", "Base", "TypeScript", "Next.js"],
    links: {
      repo: "https://github.com/Himess/privagent",
      site: "https://privagent.vercel.app",
      video: "https://www.youtube.com/watch?v=02f8n-92c74",
    },
    featured: true,
    highlights: [
      "v4.4.2 live on Base mainnet (chain 8453)",
      "282 tests, end-to-end verified",
      "ERC-8021 builder-code attribution",
      "MIT licensed",
    ],
    problem:
      "x402 payments work, but every agent paying on-chain leaves a public audit trail. A treasury routing thousands of microtransactions through x402 ends up publishing its full vendor list.",
    approach:
      "PrivAgent adds a privacy pool in front of an x402 facilitator. Payments settle through the pool instead of the agent's hot wallet, and ERC-8021 provides clean builder-code attribution so the original app still gets credit for the flow.",
    outcome:
      "Pool live at 0x02Ee3eCDb9791dad9a169A5C4F52Fc53318bEf2D on Base. 282 passing tests, docs at privagent.vercel.app.",
  },
  {
    slug: "pendex",
    name: "Pendex",
    tagline: "FHE-powered dark pool for pre-IPO leveraged trading",
    summary:
      "Zama Developer Program winning dark pool. Encrypted order book for pre-IPO equity with leverage, cleared on-chain without revealing positions.",
    year: "2026",
    status: "Shipped",
    stack: ["Solidity", "fhEVM", "FHE", "TypeScript"],
    links: {
      repo: "https://github.com/Himess/Pendex",
      site: "https://pendex.vercel.app",
      video: "https://www.youtube.com/watch?v=6oEpE62Udng",
    },
    featured: true,
    award: "Zama Developer Program — Builder Track Winner",
    highlights: [
      "Zama Developer Program December 2025 winner",
      "FHE-encrypted order book",
      "Leveraged positions on pre-IPO names",
      "On-chain matching without position leakage",
    ],
    problem:
      "Dark pools exist in TradFi for a reason: size disclosure moves price against you. On-chain order books leak every bid and size, which is why institutional flow never moved there.",
    approach:
      "Orders and balances live encrypted under fhEVM. Matching happens over ciphertexts, so the contract clears a trade without either side ever learning the other's size or the book's full depth. Leverage is enforced by an encrypted margin check.",
    outcome:
      "Winning entry in the Zama Developer Program. Demonstrates that FHE is practical for the one primitive TradFi explicitly hides: large-size matching.",
  },
  {
    slug: "citypulse",
    name: "CityPulse",
    tagline: "Per-API nanopayment monetization for municipal traffic",
    summary:
      "Submission-ready Circle × Arc hackathon entry. Per-API nanopayments for municipal traffic data, 3D MapLibre navigation, and an 80-vehicle Istanbul fleet simulation.",
    year: "2026",
    status: "Shipped",
    stack: ["Next.js", "Solidity", "Arc", "Circle Nanopayments", "MapLibre"],
    links: {
      repo: "https://github.com/Himess/citypulse",
      site: "https://citypulse-v2.vercel.app",
    },
    featured: true,
    highlights: [
      "Circle × Arc Nanopayments hackathon entry",
      "Route and Parking contracts, 36k+ transactions",
      "3D MapLibre navigation, 80-vehicle Istanbul simulation",
      "Circle Gateway, Wallets, and Bridge Kit integration",
    ],
    problem:
      "Municipal traffic APIs are valuable but priced for enterprise. A developer running a single trip-planning prototype has no way to pay $0.0001 for one route call because the billing rails do not exist below a cent.",
    approach:
      "Each API call carries an x402-style receipt settled through Circle's Nanopayments primitive. Two contracts, Route and Parking, sit behind the gateway. Circle Wallets and Bridge Kit handle balance plumbing. A 3D MapLibre frontend with an 80-vehicle Istanbul simulation demonstrates the flow at realistic load.",
    outcome:
      "V2 live at citypulse-v2.vercel.app. Route contract has processed 36,000+ transactions. Submission-ready for the Per-API Monetization Engine track.",
  },
  {
    slug: "sealtender",
    name: "SealTender",
    tagline: "FHE-encrypted sealed-bid procurement",
    summary:
      "Sealed-bid procurement protocol on Zama fhEVM. Bids stay encrypted end-to-end, the tender contract compares them homomorphically, and only the winner is revealed.",
    year: "2026",
    status: "Shipped",
    stack: ["Solidity", "fhEVM", "FHE", "TypeScript"],
    links: {
      repo: "https://github.com/Himess/sealtender",
      site: "https://sealtender.vercel.app",
      docs: "https://sealtender.vercel.app/slides.html",
      video: "https://www.youtube.com/watch?v=dfQuYuebii4",
    },
    featured: false,
    highlights: [
      "End-to-end encrypted bids under fhEVM",
      "Homomorphic comparison of sealed offers",
      "Only the winning bid is ever disclosed",
    ],
    problem:
      "Procurement auctions leak bids. When every bidder can see the others' offers, collusion is trivial and price discovery collapses. Traditional sealed-bid processes require a trusted auctioneer, which is the exact assumption chains are supposed to remove.",
    approach:
      "Bids live as ciphertexts under fhEVM. The tender contract uses FHE.min and FHE.select to pick a winner over encrypted values. No party, including the contract operator, sees losing bids. The winner is decrypted and announced; everyone else stays sealed forever.",
    outcome:
      "Shipped. A full sealed-bid procurement flow fits into a small contract, with no trusted auctioneer required.",
  },
  {
    slug: "zk-proof-service",
    name: "ZK Proof Service",
    tagline: "Groth16 proof generation, billed per proof",
    summary:
      "Pay-per-proof ZK service gated by Tempo MPP. Submit a circuit, pay the fee, get the proof back. Turns heavy cryptographic infra into an API call.",
    year: "2026",
    status: "Live",
    stack: ["TypeScript", "Groth16", "Tempo MPP", "Rust"],
    links: {
      repo: "https://github.com/Himess/zk-proof-service",
    },
    featured: false,
    highlights: [
      "Pay-per-Groth16-proof billing",
      "Tempo MPP settlement",
      "Submit circuit, get proof back",
    ],
    problem:
      "Running a Groth16 prover is slow, expensive, and needs GPUs. Small teams that generate one proof a day cannot justify the infra, and there is no clean way to pay someone else for a single proof.",
    approach:
      "A prover service behind an MPP paywall. The caller submits a witness and circuit, pays the fee in a single settlement, and receives the proof. Pricing scales with circuit complexity.",
    outcome:
      "Live. Turns one of the most resource-hungry pieces of ZK infrastructure into a metered API.",
  },
  {
    slug: "fheidentity",
    name: "FHE Identity",
    tagline: "Privacy-preserving identity on Zama fhEVM",
    summary:
      "Encrypted-attribute identity protocol powered by Zama fhEVM. Prove facts about yourself (age, residency, credentials) without revealing the underlying data.",
    year: "2026",
    status: "Shipped",
    stack: ["Solidity", "fhEVM", "FHE", "TypeScript"],
    links: {
      repo: "https://github.com/Himess/fheidentity",
    },
    featured: false,
    highlights: [
      "Attributes stored as ciphertexts",
      "Selective-disclosure predicates on encrypted data",
      "No trusted issuer required after registration",
    ],
    problem:
      "On-chain identity is either fully public (ENS, your address everywhere) or locked inside off-chain KYC providers. There is nothing in between that lets you prove a single attribute without revealing your whole profile.",
    approach:
      "Attributes live encrypted on-chain under fhEVM. Verifiers run predicates homomorphically: check age > 18 without learning the birthdate, check residency without learning the address. Disclosure is explicit and per-predicate.",
    outcome:
      "Shipped. Demonstrates selective disclosure as a default, not an add-on.",
  },
  {
    slug: "x402-miden",
    name: "x402 on Miden",
    tagline: "Full stack x402 for Miden's ZK-native execution",
    summary:
      "Five-repo stack bringing x402 payments to Miden: Rust chain support, TypeScript SDK, Express / Hono middleware, agent SDK, and CLI scaffolding.",
    year: "2026",
    status: "Shipped",
    stack: ["Rust", "TypeScript", "Miden", "x402", "Express"],
    links: {
      repo: "https://github.com/Himess/x402-miden",
    },
    featured: false,
    highlights: [
      "x402-chain-miden (Rust): chain primitives",
      "x402-miden: TypeScript SDK",
      "x402-miden-middleware: one-line paywall for Express and Hono",
      "x402-miden-agent-sdk: agent client",
      "x402-miden-cli: project scaffolding",
    ],
    problem:
      "x402 is Ethereum-shaped. Running it on Miden, where execution is ZK-native and privacy is the default, needs the whole stack rebuilt rather than ported.",
    approach:
      "Five coordinated repos. Rust chain support for Miden primitives, a TypeScript SDK that speaks x402 over Miden notes, middleware for the common web frameworks, an agent SDK for the client side, and a CLI that scaffolds a new project in one command.",
    outcome:
      "Full coverage from chain primitives to developer-facing CLI. A Miden app can sell a paid endpoint with a single middleware line.",
  },
  {
    slug: "fhevm-bootcamp",
    name: "FHEVM Bootcamp",
    tagline: "4-week curriculum for Zama fhEVM",
    summary:
      "Production-ready 4-week bootcamp with 20 modules, 38 Sepolia-deployed contracts, 360 tests, a code playground, 215 quiz questions, and instructor grading rubrics.",
    year: "2026",
    status: "Shipped",
    stack: ["Solidity", "fhEVM", "Next.js", "TypeScript"],
    links: {
      repo: "https://github.com/Himess/fhevm-bootcamp",
      site: "https://fhevm-bootcamp-demo.vercel.app",
    },
    featured: false,
    highlights: [
      "20 modules across 4 weeks",
      "38 contracts deployed to Sepolia",
      "360 tests, 215 quiz questions",
      "Interactive code playground",
      "Instructor guides and grading rubrics",
    ],
    problem:
      "Writing a first FHE contract is a wall. Tutorials cover individual primitives, but there is no structured path from zero to a production dApp, and no way to run a cohort of new developers through it.",
    approach:
      "A full 4-week curriculum. 20 modules cover the patterns a working fhEVM dev actually uses: encrypted balances, votes, auctions, confidential transfers, ACL, and decryption flows. 38 contracts ship to Sepolia so learners can compare their output to a reference. 215 quiz questions and instructor rubrics make it runnable as a real cohort.",
    outcome:
      "Shipped. A training track you can hand to a developer who has never touched FHE and expect production work by week four.",
  },
  {
    slug: "fhevm-skill",
    name: "FHEVM Skill",
    tagline: "Production skill for building fhEVM dApps",
    summary:
      "Code-complete Claude skill for the Zama Developer Program. 23 files, ~6,000 lines, 738+ tests, 19+ dApps validated at a 9/10 average score.",
    year: "2026",
    status: "Shipped",
    stack: ["Solidity", "@fhevm/solidity", "Hardhat", "TypeScript"],
    links: {
      repo: "https://github.com/Himess/fhevm-skill",
    },
    featured: false,
    highlights: [
      "Zama Developer Program Season 2 submission",
      "23 files, ~6,000 lines, 738+ tests",
      "19+ dApps validated at a 9/10 average",
      "Built on @fhevm/solidity ^0.11.1",
    ],
    problem:
      "Writing production fhEVM contracts is hard. Not because the primitives are exotic, but because the patterns are undocumented. Most tutorials show one toy contract. No one shows the twenty patterns a working dApp actually uses.",
    approach:
      "A Claude skill that encodes the patterns: encrypted balance, encrypted voting, encrypted auction, confidential transfer, access-controlled decryption. Each pattern ships with tests. A validation harness scores the dApps the skill produces against the same rubric.",
    outcome:
      "Code-complete: 23 files, roughly 6,000 lines, 738+ passing tests, and an average 9/10 across 19+ generated dApps.",
  },
  {
    slug: "opaque",
    name: "OPAQUE",
    tagline: "FHE prediction market with multi-outcome BTC",
    summary:
      "FHE-backed prediction market supporting multi-outcome markets and hourly BTC resolution, wrapped in a Polymarket-style UI.",
    year: "2026",
    status: "Deployed",
    stack: ["Solidity", "fhEVM", "Next.js", "TypeScript"],
    links: {
      repo: "https://github.com/Himess/opaque",
      site: "https://opaque-market.vercel.app",
    },
    featured: false,
    highlights: [
      "V3 deployed, 500+ tests",
      "Multi-outcome markets",
      "Hourly BTC settlement",
      "Polymarket-style UI",
      "Permissionless matching via FHE.select",
    ],
    problem:
      "Prediction markets leak positions in real time. A whale building a side is public the moment they place the order, which moves the line against them and thins the book.",
    approach:
      "Positions and shares live as FHE ciphertexts. The market clears, settles, and pays out without revealing individual exposures. Only the aggregated price surface is public. Matching is permissionless through FHE.select.",
    outcome:
      "V3 deployed on Sepolia. 500+ tests cover multi-outcome markets, hourly BTC settlement, and the full Polymarket-style flow.",
  },
  {
    slug: "privagent-miden",
    name: "PrivAgent Miden",
    tagline: "Trustless atomic agent payments on Miden",
    summary:
      "Atomic agent-to-agent payments built on Miden's native SWAP notes. Trustless settlement without a bridge or escrow contract.",
    year: "2026",
    status: "Shipped",
    stack: ["Rust", "Miden"],
    links: {
      repo: "https://github.com/Himess/privagent-miden",
    },
    featured: false,
    highlights: [
      "Atomic swap using Miden native SWAP notes",
      "No escrow contract, no bridge",
      "Trustless agent-to-agent settlement",
    ],
    problem:
      "Two agents swapping assets across accounts normally need either an escrow contract or a trusted intermediary. Miden's note model removes both, but the primitive has to be wired up correctly.",
    approach:
      "Use Miden's native SWAP note as the settlement primitive. Each agent publishes a note, the network matches them atomically, and either both sides transfer or neither does.",
    outcome:
      "Shipped. The cleanest path from two agents holding balances to a completed trustless trade.",
  },
  {
    slug: "arcpay",
    name: "ArcPay",
    tagline: "SDK for agentic commerce on Arc",
    summary:
      "Complete TypeScript SDK for agentic commerce on Arc: AI-powered payments, escrow, streaming, stealth addresses, and 28 modules for autonomous financial agents.",
    year: "2026",
    status: "Shipped",
    stack: ["TypeScript", "Solidity", "Arc", "x402"],
    links: {
      repo: "https://github.com/Himess/arcpay",
      site: "https://website-beige-six-15.vercel.app",
    },
    featured: false,
    highlights: [
      "28 modules for agentic commerce",
      "Payments, escrow, streaming, stealth in one SDK",
      "Arc-native, composable with x402",
    ],
    problem:
      "Every agent-commerce project rebuilds the same four primitives (pay, escrow, stream, stealth) against subtly different interfaces. There is no shared SDK for Arc.",
    approach:
      "One TypeScript SDK, 28 modules, that wraps all four primitives behind a uniform agent-facing API. Drop it in, pick the flow, and it composes cleanly with existing x402 facilitators.",
    outcome:
      "Shipped and pinned on GitHub. Acts as the reference client library for Arc-side agent flows.",
  },
  {
    slug: "mppx-arc",
    name: "mppx-arc",
    tagline: "MPP payment method for Arc Chain",
    summary:
      "Code-complete MPP (Machine Payments Protocol) implementation for Arc with USDC-native charge and session support. Contract deployed and verified on Arc Testnet.",
    year: "2026",
    status: "Shipped",
    stack: ["Solidity", "Arc", "TypeScript"],
    links: {
      repo: "https://github.com/Himess/mppx-arc",
    },
    featured: false,
    highlights: [
      "ArcStreamChannel deployed on Arc Testnet",
      "57 tests passing",
      "USDC-native charge and session support",
      "CC0 spec, MIT SDK",
    ],
    problem:
      "x402 handles one-shot payments well. Streaming (paying per second of use) is a different primitive, and Arc had no reference implementation.",
    approach:
      "A streaming-channel contract shaped like MPP, ported to Arc. Contract deployed and verified at 0x805aCAD6064CBfABac71a021c3ab432920925533. Licensing is split: CC0 for the spec, MIT for the SDK, so anyone can extend it without friction.",
    outcome:
      "Contract live and verified. 57-test suite passing. Ready for an upstream PR and an Arc forum post.",
  },
  {
    slug: "ai-agent-nft",
    name: "AI Agent NFT",
    tagline: "Autonomous NFT: ERC-721 + 8004 + 6551 + 2981",
    summary:
      "Autonomous NFT agent that composes four ERCs with a Sonnet 4.6 and Haiku 4.5 intelligence loop and a live Twitter / X presence.",
    year: "2026",
    status: "Shipped",
    stack: ["Solidity", "TypeScript", "Claude API", "Twitter API"],
    links: {
      repo: "https://github.com/Himess/ai-agent-nft",
    },
    featured: false,
    highlights: [
      "154 tests, 96.77% coverage",
      "ERC-721 + 8004 + 6551 + 2981 stack",
      "Sonnet 4.6 and Haiku 4.5 intelligence loop",
      "Revenue split: 50% agent, 20% / 30% founders",
    ],
    problem:
      "NFTs sit still. ERC-6551 lets a token own assets and ERC-8004 lets it hold identity, but nobody has composed the two with a live LLM loop and a revenue split that treats the agent as a peer.",
    approach:
      "Compose the four ERCs into one agent. ERC-721 is the token, ERC-6551 gives it a wallet, ERC-8004 gives it identity, ERC-2981 handles royalties. Behind that, a Sonnet 4.6 and Haiku 4.5 loop runs the agent's behavior and posts to X. Revenue splits cleanly three ways on-chain.",
    outcome:
      "Contracts and agent loop complete. 154 tests, 96.77% coverage. Sepolia deploy next.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

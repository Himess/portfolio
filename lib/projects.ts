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
  highlights: string[];
  problem: string;
  approach: string;
  outcome: string;
};

export const projects: Project[] = [
  {
    slug: "marc",
    name: "MARC Protocol",
    tagline: "The privacy layer for agent payments",
    summary:
      "FHE-encrypted tokens, agent identity, and escrow-based commerce for autonomous AI agents. Seven contracts, ten plugins, three ERC standards.",
    year: "2026",
    status: "Audited",
    stack: ["Solidity", "FHE", "x402", "TypeScript", "Next.js"],
    links: {
      repo: "https://github.com/Himess/fhe-x402",
    },
    featured: true,
    highlights: [
      "879 tests, deep-audited",
      "FHE-encrypted balances via Zama fhEVM",
      "x402 payment rails for agent commerce",
      "Escrow, streaming, stealth addresses",
    ],
    problem:
      "Autonomous AI agents transacting on-chain leak their entire spending history. Existing payment rails expose balance, counterparties, and intent to any observer — which breaks competitive agents, private treasuries, and confidential B2B flows.",
    approach:
      "MARC introduces a privacy layer on top of x402 using fully homomorphic encryption. Balances, transfer amounts, and agent identities are encrypted at rest; escrow, streaming, and stealth-address primitives are composed as plugins. Three ERC standards anchor interop — one for agent identity, one for confidential transfers, one for encrypted escrow.",
    outcome:
      "Seven production contracts with 879 passing tests and a deep security audit. Ten plugins cover the common commerce flows an agent runs — one-shot payment, subscription, streaming, escrow release, dispute resolution.",
  },
  {
    slug: "mixvm",
    name: "MixVM",
    tagline: "Cross-chain private USDC",
    summary:
      "Zero-knowledge privacy pool for USDC with LayerZero V2 messaging and Circle CCTP V2 bridging. Poseidon + Merkle + Groth16 + ECDH stealth addresses.",
    year: "2026",
    status: "Deployed",
    stack: ["Solidity", "Circom", "Groth16", "LayerZero V2", "CCTP V2"],
    links: {
      repo: "https://github.com/Himess/mixvm",
    },
    featured: true,
    highlights: [
      "v10.2 — full end-to-end working",
      "Groth16 proofs over Poseidon Merkle tree",
      "LayerZero V2 cross-chain messaging",
      "Circle CCTP V2 USDC bridging",
      "ECDH stealth-address recipients",
    ],
    problem:
      "Cross-chain USDC moves in the open. Mixing pools exist per-chain, but none compose cleanly with CCTP or preserve privacy across hops — so either you get privacy on one chain or liquidity across many, not both.",
    approach:
      "A shielded pool keyed on a Poseidon-hashed Merkle tree of commitments. Deposits generate a note; withdrawals prove membership in Groth16 without revealing which leaf. LayerZero V2 messages carry the nullifier proofs across chains; CCTP V2 moves the underlying USDC. Recipients derive a one-time address via ECDH so even the sender does not link deposit and withdrawal.",
    outcome:
      "v10.2 shipped end-to-end across deposits, shielded transfers, cross-chain routing, and stealth withdrawals.",
  },
  {
    slug: "roil",
    name: "Roil",
    tagline: "Privacy treasury on Canton Network",
    summary:
      "Feature-complete privacy treasury with custom wallet (Passkey/Google/Email), treasury swap AMM, whitelist, DCA, and governance — all on Canton's privacy-by-default ledger.",
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
      "Passkey / Google / Email custom wallet — no MetaMask",
      "Treasury swap AMM with oracle pricing + 0.5% spread",
      "Whitelist, DCA, rewards, portfolio, governance",
      "Public and private repos split to protect UI",
    ],
    problem:
      "Canton Network has no MetaMask, no Uniswap, and no shared public liquidity — every app ships its own wallet and its own exchange. For a privacy-first treasury, that is a feature, not a bug, but it means building the whole stack.",
    approach:
      "Ten Daml contracts cover the primitives — portfolio, DCA, reward tracking, transfer preapproval, treasury, whitelist, governance. The frontend ships a custom wallet with Passkey, Google, and Email as entry points so onboarding stays web-native. A small oracle-priced AMM with a tight spread supplies liquidity for the beta.",
    outcome:
      "Feature-complete and deployed at roil.app. Validator application prepared for Canton Foundation; team in DEX partnership talks.",
  },
  {
    slug: "privagent",
    name: "PrivAgent",
    tagline: "Privacy-preserving x402 on Base mainnet",
    summary:
      "Production x402 payment protocol with privacy features, live on Base mainnet. ERC-8021 builder-code attribution, 282 tests, E2E verified.",
    year: "2026",
    status: "Live",
    stack: ["Solidity", "x402", "Base", "TypeScript", "Next.js"],
    links: {
      repo: "https://github.com/Himess/privagent",
      site: "https://privagent.vercel.app",
    },
    featured: true,
    highlights: [
      "v4.4.2 live on Base mainnet (chain 8453)",
      "282 tests, E2E verified",
      "ERC-8021 builder-code attribution",
      "MIT licensed",
    ],
    problem:
      "x402 payments work, but every agent paying on-chain leaves a public audit trail. A treasury routing thousands of microtransactions through x402 ends up publishing its entire vendor list.",
    approach:
      "PrivAgent adds a privacy pool in front of an x402 facilitator. Payments settle through the pool rather than the agent's hot wallet, and ERC-8021 provides clean builder-code attribution so the original app still gets credit for the flow.",
    outcome:
      "Pool live at 0x02Ee3eCDb9791dad9a169A5C4F52Fc53318bEf2D on Base. 282 passing tests, docs at privagent.vercel.app.",
  },
  {
    slug: "pendex",
    name: "Pendex",
    tagline: "FHE-powered dark pool for pre-IPO leveraged trading",
    summary:
      "Zama Developer Program–winning dark pool. Encrypted order book for pre-IPO equity with leverage, cleared on-chain without revealing positions.",
    year: "2026",
    status: "Shipped",
    stack: ["Solidity", "fhEVM", "FHE", "TypeScript"],
    links: {
      repo: "https://github.com/Himess/Pendex",
    },
    featured: true,
    highlights: [
      "Zama Developer Program winner",
      "FHE-encrypted order book",
      "Leveraged positions on pre-IPO names",
      "On-chain matching without position leakage",
    ],
    problem:
      "Dark pools exist in TradFi for a reason — size disclosure moves price against you. On-chain order books leak every bid and size, which is why institutional flow never moved there.",
    approach:
      "Orders and balances live encrypted under fhEVM. Matching happens over ciphertexts, so the contract can clear a trade without either side ever learning the other's size or the book's full depth. Leverage is enforced by an encrypted margin check.",
    outcome:
      "Winning entry in the Zama Developer Program. Demonstrates that FHE is practical for the one primitive TradFi explicitly hides — large-size matching.",
  },
  {
    slug: "citypulse",
    name: "CityPulse",
    tagline: "Per-API nanopayment monetization for municipal traffic",
    summary:
      "Submission-ready Circle × Arc hackathon entry. Per-API nanopayments for municipal traffic data, 3D MapLibre navigation, 80-vehicle Istanbul simulation.",
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
      "Route + Parking contracts, 36k+ transactions",
      "3D MapLibre navigation, 80-vehicle sim",
      "Circle Gateway + Wallets + Bridge Kit integration",
    ],
    problem:
      "Municipal traffic APIs are valuable but priced for enterprise. A developer running a single trip-planning prototype has no way to pay $0.0001 for one route call — the billing rails do not exist below a cent.",
    approach:
      "Each API call carries an x402-style receipt settled through Circle's Nanopayments primitive. Two contracts — Route and Parking — sit behind the gateway; Circle Wallets and Bridge Kit handle the balance plumbing. A 3D MapLibre frontend with an 80-vehicle Istanbul simulation demonstrates the flow at realistic load.",
    outcome:
      "V2 live at citypulse-v2.vercel.app. Route contract has processed 36k+ transactions. Submission-ready for the Per-API Monetization Engine track.",
  },
  {
    slug: "arcpay",
    name: "ArcPay",
    tagline: "SDK for agentic commerce",
    summary:
      "Comprehensive SDK covering AI payments, escrow, streaming, and stealth addresses for agent-driven commerce.",
    year: "2026",
    status: "Shipped",
    stack: ["TypeScript", "Solidity", "x402"],
    links: {
      repo: "https://github.com/Himess/arcpay",
    },
    featured: false,
    highlights: [
      "One SDK for payment, escrow, streaming, stealth",
      "Agent-first API surface",
      "Composable with x402",
    ],
    problem:
      "Every agent-commerce project rebuilds the same four primitives — pay, escrow, stream, stealth — against subtly different interfaces. There is no shared SDK.",
    approach:
      "A single TypeScript SDK that wraps all four primitives behind a uniform agent-facing API. Plug it in, pick the flow, and it composes cleanly with existing x402 facilitators.",
    outcome:
      "Shipped and pinned on GitHub. Used as the client library for the MARC plugin suite.",
  },
  {
    slug: "fhevm-skill",
    name: "FHEVM Skill",
    tagline: "Production skill for building FHEVM dApps",
    summary:
      "Code-complete Claude skill for the Zama Developer Program. 23 files, ~6000 lines, 738+ tests, 19+ dApps validated with a 9/10 average score.",
    year: "2026",
    status: "Shipped",
    stack: ["Solidity", "@fhevm/solidity", "Hardhat", "TypeScript"],
    links: {
      repo: "https://github.com/Himess/fhevm-skill",
    },
    featured: false,
    highlights: [
      "Zama Developer Program Season 2 submission",
      "23 files, ~6000 lines, 738+ tests",
      "19+ dApps validated, 9/10 average",
      "Built on @fhevm/solidity ^0.11.1",
    ],
    problem:
      "Writing production fhEVM contracts is hard — not because the primitives are exotic, but because the patterns are undocumented. Most tutorials show one toy contract; no one shows the twenty patterns a working dApp actually uses.",
    approach:
      "A Claude skill that encodes the patterns: encrypted balance, encrypted voting, encrypted auction, confidential transfer, access-controlled decryption, etc. Each pattern ships with tests. A validation harness scores dApps the skill produces against the same rubric.",
    outcome:
      "Code-complete — 23 files, ~6000 lines, 738+ passing tests. Average 9/10 across 19+ generated dApps.",
  },
  {
    slug: "opaque",
    name: "OPAQUE",
    tagline: "FHE prediction market with multi-outcome BTC",
    summary:
      "FHE-backed prediction market supporting multi-outcome markets and hourly BTC resolution, with a Polymarket-style UI.",
    year: "2026",
    status: "Deployed",
    stack: ["Solidity", "fhEVM", "Next.js", "TypeScript"],
    links: {},
    featured: false,
    highlights: [
      "V3 deployed, 604 tests",
      "Multi-outcome markets",
      "Hourly BTC settlement",
      "Polymarket-style UI",
    ],
    problem:
      "Prediction markets leak positions in real time — a whale building a side is public the moment they place the order, which moves the line against them and thins the book.",
    approach:
      "Positions and shares live as FHE ciphertexts. The market clears, settles, and pays out without revealing individual exposures; only the aggregated price surface is public.",
    outcome:
      "V3 deployed. 604 tests covering multi-outcome markets, hourly BTC settlement, and the full Polymarket-style flow.",
  },
  {
    slug: "privagent-miden",
    name: "PrivAgent Miden",
    tagline: "Trustless atomic agent payments on Miden",
    summary:
      "Atomic agent-to-agent payments built on Miden's native SWAP notes, giving trustless settlement without a bridge or escrow contract.",
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
      "Two agents swapping assets across accounts normally need either an escrow contract or a trusted intermediary. Miden's note model removes both — but the primitive has to be wired up correctly.",
    approach:
      "Use Miden's native SWAP note as the settlement primitive. Each agent publishes a note; the network matches and clears them atomically, so either both sides transfer or neither does.",
    outcome:
      "Shipped. Demonstrates the cleanest possible path from two agents holding balances to a completed trustless trade.",
  },
  {
    slug: "mppx-arc",
    name: "mppx-arc",
    tagline: "MPP streaming payments on Arc Chain",
    summary:
      "Code-complete MPP (multi-payment-protocol) streaming channel for Arc. 57 tests, contract deployed and verified on Arc Testnet.",
    year: "2026",
    status: "Shipped",
    stack: ["Solidity", "Arc", "TypeScript"],
    links: {},
    featured: false,
    highlights: [
      "ArcStreamChannel deployed on Arc Testnet",
      "57 tests passing",
      "CC0 spec + MIT SDK — permissionless",
    ],
    problem:
      "x402 handles one-shot payments well. Streaming — paying per second of use — is a different primitive, and Arc did not have a reference implementation.",
    approach:
      "A streaming-channel contract shaped like MPP on top of Arc. Contract deployed and verified at 0x805aCAD6064CBfABac71a021c3ab432920925533. Licensing split — CC0 for the spec, MIT for the SDK — so others can extend without friction.",
    outcome:
      "Contract live and verified. 57-test suite passing. Ready for a PR upstream and an Arc forum post.",
  },
  {
    slug: "ai-agent-nft",
    name: "AI Agent NFT",
    tagline: "ERC-721 + ERC-8004 + ERC-6551 autonomous agent",
    summary:
      "Autonomous NFT agent combining ERC-721, ERC-8004, ERC-6551, and ERC-2981 with Sonnet 4.6 + Haiku 4.5 intelligence and a Twitter/X presence.",
    year: "2026",
    status: "Shipped",
    stack: ["Solidity", "TypeScript", "Claude API", "Twitter API"],
    links: {},
    featured: false,
    highlights: [
      "154 tests, 96.77% coverage",
      "ERC-721 + 8004 + 6551 + 2981 stack",
      "Sonnet 4.6 + Haiku 4.5 intelligence",
      "Revenue split: 50% agent, 20% / 30% founders",
    ],
    problem:
      "NFTs sit still. ERC-6551 lets a token own assets and ERC-8004 lets it hold identity — but nobody has composed the two with a live LLM loop and a revenue split that treats the agent as a peer.",
    approach:
      "Compose the four ERCs into one agent. ERC-721 is the token, ERC-6551 gives it a wallet, ERC-8004 gives it identity, ERC-2981 handles royalties. Behind that, a Sonnet-4.6 / Haiku-4.5 loop runs the agent's behavior and posts to X. Revenue splits cleanly three ways on-chain.",
    outcome:
      "Contracts and agent loop complete. 154 tests, 96.77% coverage. Sepolia deploy next.",
  },
];

export const featuredProjects = projects.filter((p) => p.featured);
export const allProjects = projects;

export function getProject(slug: string): Project | undefined {
  return projects.find((p) => p.slug === slug);
}

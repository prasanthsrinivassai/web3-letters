export interface Letter {
  day: number;
  slug: string;
  title: string;
  subject: string;
  content: string;
}

export const LETTERS: Letter[] = [
  {
    day: 0,
    slug: "day-0",
    title: "Welcome to the Journey",
    subject: "You're in! Gateway to Web 3.0 starts now",
    content: `
<p>Hey there,</p>
<p>Welcome to <strong>Gateway to Web 3.0</strong> — a 10-letter course on Blockchain & Cryptocurrencies.</p>
<p>Over the next 10 days you'll receive one letter a day, each building on the last. By the end, you'll have a working understanding of how blockchain works, why crypto matters, and where Web3 is headed.</p>
<h2>What's coming</h2>
<ul>
  <li><strong>Day 1</strong> — What is Blockchain?</li>
  <li><strong>Day 2</strong> — How Cryptocurrencies Work</li>
  <li><strong>Day 3</strong> — Bitcoin Deep Dive</li>
  <li><strong>Day 4</strong> — Ethereum & Smart Contracts</li>
  <li><strong>Day 5</strong> — DeFi Explained</li>
  <li><strong>Day 6</strong> — NFTs & Digital Ownership</li>
  <li><strong>Day 7</strong> — Web3 Wallets & Security</li>
  <li><strong>Day 8</strong> — DAOs & Governance</li>
  <li><strong>Day 9</strong> — The Future of Web3</li>
</ul>
<p>Your first letter arrives tomorrow. For now — poke around the portal, join the Discord, and get comfortable.</p>
<p>See you soon,<br/><strong>Enhance 42</strong></p>
    `.trim(),
  },
  {
    day: 1,
    slug: "day-1",
    title: "What is Blockchain?",
    subject: "Letter 1 of 10: What is Blockchain?",
    content: `
<p>A blockchain is a distributed ledger — a database that's shared and synchronized across thousands of computers worldwide, with no single authority controlling it.</p>
<h2>The core idea</h2>
<p>Imagine a Google Doc that everyone can read, but no one can edit once a line is written. That's close to how a blockchain works. Transactions get grouped into "blocks," and each block is cryptographically linked to the one before it, forming a chain.</p>
<h2>Why does this matter?</h2>
<ul>
  <li><strong>Immutability</strong> — Once data is recorded, it cannot be altered without changing every subsequent block across every node. Practically impossible.</li>
  <li><strong>Transparency</strong> — Anyone can audit the entire history of transactions.</li>
  <li><strong>Decentralization</strong> — No single point of failure or control.</li>
</ul>
<h2>How consensus works</h2>
<p>For a new block to be added, the network must agree it's valid. The two main mechanisms are <strong>Proof of Work</strong> (Bitcoin) — where computers race to solve a math puzzle — and <strong>Proof of Stake</strong> (Ethereum post-merge) — where validators put up collateral to earn the right to confirm blocks.</p>
<p>Tomorrow: we zoom out from blockchains to the currencies built on top of them.</p>
    `.trim(),
  },
  {
    day: 2,
    slug: "day-2",
    title: "How Cryptocurrencies Work",
    subject: "Letter 2 of 10: How Cryptocurrencies Work",
    content: `
<p>Cryptocurrencies are digital assets that use cryptography to secure transactions and control the creation of new units. They live on blockchains — no bank required.</p>
<h2>Public & private keys</h2>
<p>Every crypto wallet has two keys. Your <strong>public key</strong> is like your bank account number — share it freely to receive funds. Your <strong>private key</strong> is like your PIN — lose it and you lose your crypto, permanently. There's no password reset.</p>
<h2>How a transaction works</h2>
<ol>
  <li>You sign a transaction with your private key.</li>
  <li>The signature proves you own the funds without revealing the key.</li>
  <li>The transaction broadcasts to the network.</li>
  <li>Miners or validators confirm it and add it to the blockchain.</li>
</ol>
<h2>Supply mechanics</h2>
<p>Unlike fiat currency, most cryptocurrencies have a hard cap. Bitcoin will never exceed 21 million coins. This scarcity is encoded in the protocol — no government or company can change it without consensus from the entire network.</p>
<p>Tomorrow: we go deep on Bitcoin specifically.</p>
    `.trim(),
  },
  {
    day: 3,
    slug: "day-3",
    title: "Bitcoin Deep Dive",
    subject: "Letter 3 of 10: Bitcoin Deep Dive",
    content: `
<p>Bitcoin was the first cryptocurrency, launched in January 2009 by the pseudonymous Satoshi Nakamoto. It solved a problem computer scientists had wrestled with for decades: how do you prevent someone from spending the same digital coin twice without a trusted middleman?</p>
<h2>The halving</h2>
<p>Every ~4 years, the reward miners receive for adding a block is cut in half. This "halving" continues until all 21 million BTC are mined (~2140). It's Bitcoin's built-in inflation control. Each halving has historically preceded a major price cycle.</p>
<h2>The Lightning Network</h2>
<p>Bitcoin's base layer is slow (~7 transactions per second). The Lightning Network is a second-layer protocol that opens payment channels between parties. Transactions happen off-chain instantly and cheaply; only the opening and closing of the channel hits the blockchain.</p>
<h2>Bitcoin as digital gold</h2>
<p>Many holders treat BTC as a store of value — "digital gold" — rather than a currency for daily purchases. Its scarcity, security track record, and decentralization support this narrative. Critics note its volatility undermines the "store of value" claim.</p>
<p>Tomorrow: we move to Ethereum, where programmability changes everything.</p>
    `.trim(),
  },
  {
    day: 4,
    slug: "day-4",
    title: "Ethereum & Smart Contracts",
    subject: "Letter 4 of 10: Ethereum & Smart Contracts",
    content: `
<p>If Bitcoin is digital gold, Ethereum is digital programmable infrastructure. Launched in 2015 by Vitalik Buterin, Ethereum added a crucial feature: <strong>smart contracts</strong>.</p>
<h2>What's a smart contract?</h2>
<p>A smart contract is a program stored on the blockchain that executes automatically when predefined conditions are met. Think of it as a vending machine: insert the right input, get the guaranteed output — no human intermediary needed.</p>
<pre><code>// Simple example: pay out to winner
if (block.timestamp >= deadline && bids[winner] > 0) {
  payable(winner).transfer(highestBid);
}</code></pre>
<h2>The EVM</h2>
<p>The Ethereum Virtual Machine is the runtime environment for smart contracts. Every Ethereum node runs the EVM, ensuring every contract executes identically across the entire network.</p>
<h2>Gas</h2>
<p>Every operation on Ethereum costs "gas" — a fee paid in ETH to compensate validators for computation. Complex contracts cost more gas. During high demand, gas prices spike, which is Ethereum's main scaling challenge.</p>
<p>Tomorrow: DeFi — an entire financial system rebuilt on smart contracts.</p>
    `.trim(),
  },
  {
    day: 5,
    slug: "day-5",
    title: "DeFi Explained",
    subject: "Letter 5 of 10: DeFi Explained",
    content: `
<p>Decentralized Finance (DeFi) is a set of financial services — lending, borrowing, trading, yield farming — rebuilt on smart contracts, open to anyone with an internet connection and a wallet.</p>
<h2>Key primitives</h2>
<p><strong>Decentralized Exchanges (DEXs)</strong> like Uniswap let you trade tokens peer-to-peer using automated market makers (AMMs) instead of order books. Liquidity providers deposit token pairs and earn fees.</p>
<p><strong>Lending protocols</strong> like Aave and Compound let you borrow against crypto collateral or earn interest by supplying assets. Rates adjust algorithmically based on supply and demand.</p>
<p><strong>Stablecoins</strong> like USDC (fiat-backed) and DAI (crypto-collateralized) provide a price-stable asset to move in and out of positions without touching fiat.</p>
<h2>Risks</h2>
<p>Smart contract bugs, oracle manipulation, and liquidation cascades are real. DeFi is still experimental. The rule of thumb: don't put in more than you can afford to lose, and only interact with audited protocols.</p>
<p>Tomorrow: NFTs — ownership and digital scarcity in a new form.</p>
    `.trim(),
  },
  {
    day: 6,
    slug: "day-6",
    title: "NFTs & Digital Ownership",
    subject: "Letter 6 of 10: NFTs & Digital Ownership",
    content: `
<p>Non-fungible tokens (NFTs) are blockchain tokens that represent unique ownership — each one is distinct. A Bitcoin is fungible (one BTC equals any other BTC). An NFT is not: it represents a specific item.</p>
<h2>What they actually prove</h2>
<p>An NFT is a record of ownership on the blockchain. It doesn't necessarily store the image or asset itself — it stores a pointer. The underlying file typically lives on IPFS or a centralized server. This means "owning an NFT" is closer to owning a signed certificate than the physical painting.</p>
<h2>Where they're useful</h2>
<ul>
  <li><strong>Digital art</strong> — Provenance and creator royalties enforced on-chain.</li>
  <li><strong>Gaming</strong> — Items with real scarcity that players can trade outside the game.</li>
  <li><strong>Tickets & memberships</strong> — Unforgeable access tokens.</li>
  <li><strong>Real-world asset tokenization</strong> — Property deeds, invoices, IP rights.</li>
</ul>
<h2>The criticism</h2>
<p>Much of the 2021 hype was speculation, not utility. The question for any NFT is: does the blockchain add real value here, or is it just a new wrapper on an old idea?</p>
<p>Tomorrow: the tools that hold all of this together — wallets and security.</p>
    `.trim(),
  },
  {
    day: 7,
    slug: "day-7",
    title: "Web3 Wallets & Security",
    subject: "Letter 7 of 10: Web3 Wallets & Security",
    content: `
<p>In Web3, your wallet is your identity and your bank account in one. Getting security right is non-negotiable.</p>
<h2>Types of wallets</h2>
<p><strong>Hot wallets</strong> (MetaMask, Phantom, Rainbow) are connected to the internet — convenient for daily use but more exposed to attacks.</p>
<p><strong>Hardware wallets</strong> (Ledger, Trezor) keep your private key on a physical device that never touches the internet. The gold standard for securing significant holdings.</p>
<p><strong>Smart contract wallets</strong> (Safe, Argent) add features like multi-signature approval and social recovery — powerful for teams or power users.</p>
<h2>Seed phrases</h2>
<p>Your seed phrase (12 or 24 words) is the master key to your wallet. Anyone with it can drain everything. Never store it digitally. Write it on paper, consider a metal backup, and store copies in two physical locations.</p>
<h2>The most common attack vectors</h2>
<ul>
  <li>Phishing sites impersonating real dApps</li>
  <li>Malicious contract approvals (always check what you're signing)</li>
  <li>Clipboard hijacking (double-check addresses before sending)</li>
  <li>Fake support on Discord and Telegram</li>
</ul>
<p>Tomorrow: DAOs — new forms of organization built on blockchains.</p>
    `.trim(),
  },
  {
    day: 8,
    slug: "day-8",
    title: "DAOs & Governance",
    subject: "Letter 8 of 10: DAOs & Governance",
    content: `
<p>A Decentralized Autonomous Organization (DAO) is an organization governed by smart contracts and token-based voting rather than a traditional management structure.</p>
<h2>How they work</h2>
<p>Members hold governance tokens. To change something — the protocol's fee structure, treasury allocation, a new partnership — someone submits a proposal. Token holders vote. If the proposal passes, the smart contract executes it automatically.</p>
<h2>Notable examples</h2>
<p><strong>MakerDAO</strong> governs the DAI stablecoin — one of DeFi's most critical pieces of infrastructure. Billions in decisions made by MKR holders.</p>
<p><strong>Uniswap DAO</strong> controls the most-used DEX in DeFi, including a treasury worth hundreds of millions in UNI tokens.</p>
<p><strong>Nouns DAO</strong> auctions one NFT per day, with proceeds flowing to a treasury governed by all Noun holders.</p>
<h2>The hard problems</h2>
<p>Voter apathy is real — most token holders don't vote. Whales (large holders) often dominate decisions. And "code is law" cuts both ways: a bug in a governance contract can be catastrophic. DAOs are promising but still maturing.</p>
<p>Tomorrow: the last letter — where all of this is headed.</p>
    `.trim(),
  },
  {
    day: 9,
    slug: "day-9",
    title: "The Future of Web3",
    subject: "Letter 9 of 10: The Future of Web3",
    content: `
<p>You've made it to the final letter. Let's zoom out and look at where this is all headed.</p>
<h2>The scaling problem — being solved</h2>
<p>Layer 2 networks (Arbitrum, Optimism, Base, zkSync) handle thousands of transactions off-chain then batch them onto Ethereum. Costs have dropped from dollars to fractions of a cent. This makes Web3 apps competitive with Web2 for everyday use.</p>
<h2>Tokenization of real-world assets</h2>
<p>BlackRock, Franklin Templeton, and JPMorgan are actively tokenizing bonds, money market funds, and real estate on public blockchains. This isn't crypto speculation — it's financial infrastructure modernization.</p>
<h2>Identity and data ownership</h2>
<p>Your Web2 identity is scattered across Google, Facebook, and LinkedIn — all of which can ban you and delete your history. Decentralized identity protocols (ENS, Lens, Farcaster) are building user-owned alternatives.</p>
<h2>What to watch</h2>
<ul>
  <li>Ethereum's continued scaling via L2s</li>
  <li>Regulatory clarity in major markets</li>
  <li>AI + crypto intersection (autonomous agents with wallets)</li>
  <li>Stablecoin adoption for payments</li>
</ul>
<h2>Where to go from here</h2>
<p>The best way to learn crypto is to use it. Set up a MetaMask wallet. Bridge a small amount to an L2. Swap a token on Uniswap. Join a DAO discussion. The concepts click much faster once they're real.</p>
<p>Thanks for going through this journey with us. Come find us in the Discord — the conversation continues there.</p>
<p><strong>— Enhance 42</strong></p>
    `.trim(),
  },
];

export function getLetterBySlug(slug: string): Letter | undefined {
  return LETTERS.find((l) => l.slug === slug);
}

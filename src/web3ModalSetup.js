import { createWeb3Modal } from "@web3modal/wagmi/vue";

import { reconnect, http, createConfig } from "@wagmi/core";
import { confluxESpace } from "@wagmi/core/chains";
import { walletConnect, injected } from "@wagmi/connectors";

// 1. Define constants
const projectId = "YOUR_PROJECT_ID";
const metadata = {
  name: "Web3Modal",
  description: "Web3Modal Example",
  url: "https://web3modal.com", // origin must match your domain & subdomain
  icons: ["https://avatars.githubusercontent.com/u/37784886"],
};

const config = createConfig({
  chains: [confluxESpace],
  transports: {
    [confluxESpace.id]: http(),
  },
  connectors: [
    walletConnect({ projectId, metadata, showQrModal: false }),
    injected({ shimDisconnect: true }),
  ],
});

reconnect(config);
// 3. Create modal
createWeb3Modal({
  wagmiConfig: config,
  projectId,
  enableAnalytics: true, // Optional - defaults to your Cloud configuration
  enableOnramp: true, // Optional - false as default
});

const productDescriptions = {
  dayzero: `
    <h3>📘 Day Zero Protocol — Build Yourself Daily</h3>
    <p>A journaling and goal-tracking platform for founders and free thinkers. Future layers include habit agents, reflection prompts, and coaching modules. <strong>Purpose:</strong> To shape the human agent layer of Valtera’s system stack.</p>
  `,
  valteraquant: `
    <h3>📊 Valtera Quant — Infrastructure for Autonomous Finance</h3>
    <p>Quant automation, DCA, and portfolio agents. SDK-first architecture with modular APIs for DAOs, funds, and retail quant ops. <strong>Purpose:</strong> To prove programmable, trustless finance — the capital agent layer of Valtera.</p>
  `,
  supplychainx: `
    <h3>🚚 SupplyChainX — Real-Time Operations at Scale</h3>
    <p>Logistics automation with IoT hooks, data triggers, and live event flows. Designed for coordination in high-stakes environments. <strong>Purpose:</strong> To demonstrate event-driven architecture — the ops layer of Valtera.</p>
  `,
  tradegrid: `
    <h3>📂 TradeGrid — Workflows for Solo Operators & SMEs</h3>
    <p>Smart task automation, invoicing, and scheduling. Agent logic routes jobs and payments based on roles and milestones. <strong>Purpose:</strong> To validate internal automation — the enterprise workflow layer of Valtera.</p>
  `,
  identityprotocol: `
    <h3>🛡️ Identity Protocol — Access, Roles, and Trust</h3>
    <p>Decentralized ID, permission graphs, and compliance-grade audit trails. Powers zero-trust coordination and sovereign identity. <strong>Purpose:</strong> To anchor the trust and access layer of Valtera’s infrastructure.</p>
  `
};

function showProductDetails(id) {
  const detailBox = document.getElementById("product-details");
  detailBox.innerHTML = productDescriptions[id];
  detailBox.classList.remove("hidden");
}
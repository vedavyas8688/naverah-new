const animatedSelectors = [
  '.hero-enter',
  '.hero-visual img',
  '.home-services-section',
  '.journey-steps',
  '.reveal',
]
  .map((selector) => `${selector}:not([data-animated])`)
  .join(',');

// Counter text and removed nodes do not introduce entrance animations.
export function animationRoots(records) {
  const roots = new Set();
  for (const record of records) {
    for (const node of record.addedNodes) {
      if (
        node.nodeType === 1 &&
        node.isConnected &&
        (node.matches(animatedSelectors) || node.querySelector(animatedSelectors))
      )
        roots.add(node);
    }
  }
  return [...roots].filter(
    (node) => ![...roots].some((other) => other !== node && other.contains(node)),
  );
}

export function animationTargets(root, selector) {
  const descendants = Array.from(root.querySelectorAll(selector));
  return root.matches?.(selector) ? [root, ...descendants] : descendants;
}

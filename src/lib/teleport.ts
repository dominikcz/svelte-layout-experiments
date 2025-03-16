export function teleport(node: HTMLElement, selector: string) {
	let teleportContainer: Element | null;

  teleportContainer = document.querySelector(selector);
  if (teleportContainer === null) {
    console.error('teleport target selector not found', selector);
    return;
  }
  teleportContainer.appendChild(node);

  function destroy() {
		if (node.parentNode) {
			node.parentNode.removeChild(node);
		}
	}

	return {
		destroy
	};
}

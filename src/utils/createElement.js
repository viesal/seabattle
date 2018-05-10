export function createElement(container, tagName, className) {
    let element = document.createElement(tagName);
    element.className = (className || '');
    container.appendChild(element);
    return element;
}
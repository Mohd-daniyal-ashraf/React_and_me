const root = document.querySelector(".root");
const reactElement = {
  type: "a",
  props: {
    href: "https://googal.com",
    target: "_blank",
  },
  childern: "Click here",
};

function customRender(reactElement, container) {
  const element = document.createElement(reactElement.type);
  element.innerHTML = reactElement.childern;
  element.setAttribute('href', reactElement.props.href);
  element.setAttribute('target', reactElement.props.target);
  container.appendChild(element);
}

customRender(reactElement, root);

export class HeaderContentModifier {
  modify() {
    const headerElement = document.getElementsByTagName('h1')[0];
    headerElement.innerHTML = 'Hello World';
  }
}

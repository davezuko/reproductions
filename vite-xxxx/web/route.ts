export let route = () => {
  const app = document.querySelector<HTMLDivElement>("#app")!;
  app.innerHTML = `
    <h1>Hello ${location.pathname}</h1>
  `;
};

// to scroll to top of the page
const scrollTop = () => {
  window.scrollTo({ top: 0, behavior: "auto" });
};

const scrollTopSmooth = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};
export { scrollTopSmooth };
export default scrollTop;

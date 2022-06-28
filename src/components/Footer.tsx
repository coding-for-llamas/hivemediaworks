function getFullYear() {
  const d = new Date();
  const n = d.getFullYear();
  return n;
}
const Footer = (): JSX.Element => (
  <footer className="main-footer">
    <div>
      Copyright &copy; {getFullYear()}
    </div>
  </footer>
);

export default Footer;

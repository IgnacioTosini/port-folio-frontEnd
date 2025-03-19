import '../../styles/components/footer/_footer.scss';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer>
      <p>© {currentYear} - Todos los derechos reservados</p>
    </footer>
  );
}
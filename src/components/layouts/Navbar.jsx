import TopHeader from "./TopHeader";
import NavigationMenu from "./NavigationMenu";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50">
      <TopHeader />
      <NavigationMenu />
    </nav>
  );
}

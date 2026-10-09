import chefIcon from "../assets/images/chef-claude-icon.png";

export default function Header() {
  return (
    <header className="header">
      <img src={chefIcon} className="header-icon" alt="Chef Claude logo" />
      <span>Chef Claude</span>
    </header>
  );
}

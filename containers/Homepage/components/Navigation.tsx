import Link from "next/link";
import config from "@/config/siteConfig";
import clsx from "clsx";

/** This is better placed in the main layout, putting it here since there's only one page atm */
const Navigation: React.FC = ({}) => {
  const selected = "Girls"; // Dummy selection
  return (
    <nav className="w-full flex flex-row mt-6 gap-x-16 mb-4">
      {config.nav.map((item, index) => (
        <Link
          key={index}
          href={{ pathname: item.path }}
          prefetch={false}
          legacyBehavior
        >
          <a
            className={clsx(
              "text-base font-bold",
              item.name === selected ? "text-nectar-red" : "text-white"
            )}
          >
            {item.name}
          </a>
        </Link>
      ))}
    </nav>
  );
};

export default Navigation;

import { Button, useMediaQuery } from "@relume_io/relume-ui";
import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useState, type FC, type PropsWithChildren } from "react";
import { navMenuItems } from "../home/constans";
import { CTAButton } from "../home/components/HeroSection";

const useRelume = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const isMobile = useMediaQuery("(max-width: 991px)");
  const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);
  const openOnMobileDropdownMenu = () => {
    setIsDropdownOpen((prev) => !prev);
  };
  const openOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(true);
  };
  const closeOnDesktopDropdownMenu = () => {
    !isMobile && setIsDropdownOpen(false);
  };
  const getMobileOverlayClassNames = clsx(
    "fixed inset-0 z-40 bg-black lg:hidden",
    {
      block: isMobileMenuOpen,
      hidden: !isMobileMenuOpen,
    },
  );
  const NavbarWrapper = isMobile ? motion.div : "div";
  const animateMobileMenu = isMobileMenuOpen ? "open" : "close";
  const animateDropdownMenu = isDropdownOpen ? "open" : "close";
  const animateDropdownMenuIcon = isDropdownOpen ? "rotated" : "initial";
  return {
    toggleMobileMenu,
    openOnDesktopDropdownMenu,
    closeOnDesktopDropdownMenu,
    openOnMobileDropdownMenu,
    getMobileOverlayClassNames,
    animateMobileMenu,
    animateDropdownMenu,
    animateDropdownMenuIcon,
    NavbarWrapper,
  };
};

export function Navbar(props: any) {
  let currentPath = props.currentPath || (typeof window !== "undefined" ? window.location.pathname : "");
  // remove the "/" at the end
  if (currentPath.endsWith("/")) {
    currentPath = currentPath.slice(0, -1);
  }

  const useActive = useRelume();
  return (
    <nav
      id="relume"
      className="z-[999] grid w-full grid-cols-[1fr_max-content_1fr] items-center
      justify-between bg-background-primary px-[5%] md:min-h-18"
    >
      <button
        className="flex size-12 flex-col justify-center lg:hidden"
        onClick={useActive.toggleMobileMenu}
      >
        <span className="my-[3px] h-0.5 w-6 bg-black lg:hidden" />
        <span className="my-[3px] h-0.5 w-6 bg-black lg:hidden" />
        <span className="my-[3px] h-0.5 w-6 bg-black lg:hidden" />
      </button>
      <AnimatePresence>
        <useActive.NavbarWrapper
          initial="closed"
          animate={useActive.animateMobileMenu}
          exit="closed"
          variants={{
            closed: {
              x: "-100%",
              opacity: 1,
              transition: { type: "spring", duration: 0.6, bounce: 0 },
              transitionEnd: {
                opacity: "var(--opacity-closed, 0%)",
                x: "var(--x-closed, -100%)",
              },
            },
            open: {
              x: 0,
              opacity: 1,
              transition: { type: "spring", duration: 0.4, bounce: 0 },
            },
          }}
          className="absolute top-0 left-0 z-50 flex h-dvh w-[90%] flex-col
          border-r border-primary-01 bg-white px-[5%] pb-4 md:w-[80%]
          lg:visible lg:static lg:-ml-4 lg:flex lg:h-auto lg:w-auto lg:flex-row
          lg:border-none lg:px-0 lg:pb-0 lg:[--opacity-closed:100%] lg:[--x-closed:0%]"
        >
          <div className="flex gap-4">
            <RenderMenuItems type_="desktop" menuItems={props.menu.items} currentPath={currentPath} />
          </div>
          <a href="/" className="mt-10 mb-8 flex flex-shrink-0 lg:hidden">
            <img
              src="/logo.png"
              className="h-10 w-auto"
              alt="Logo image"
            />
          </a>
          <div className="mt-6 lg:hidden">
            <Button title="Menu" size="sm" className="w-full">
              <RenderMenuItems type_="mobile" menuItems={props.menu.items} currentPath={currentPath} />
            </Button>
          </div>
        </useActive.NavbarWrapper>
        <motion.div
          initial={{ opacity: 0 }}
          exit={{ opacity: 0 }}
          animate={{ opacity: 0.5 }}
          transition={{ duration: 0.2 }}
          className={useActive.getMobileOverlayClassNames}
          onClick={useActive.toggleMobileMenu}
        />
      </AnimatePresence>
      <a href="/" className="flex min-h-16 flex-shrink-0 items-center">
        <img
          src="/logo.png"
          className="h-10 w-auto"
          alt="Logo image"
        />
      </a>
      <div className="flex min-h-16 items-center justify-end gap-x-4">
        <div>
          {props?.ctaButton.map((button: any, index: number) => (
            <CTAButton href={button.link} key={index} type={button.type}>
              {button.text}
            </CTAButton>))
          }
        </div>
      </div>
    </nav>
  );
}

function clsx(base: string, classes: { [key: string]: boolean }) {
  const dynamicClasses = Object.entries(classes)
    .filter(([_, value]) => value)
    .map(([key]) => key)
    .join(' ');
  return [base, dynamicClasses].filter(Boolean).join(' ');
}

interface AnchorTagProps extends React.AnchorHTMLAttributes<HTMLAnchorElement> {
  active?: boolean;
}
export const AnchorTag: FC<PropsWithChildren<AnchorTagProps>> = ({
  children,
  active = false,
  ...props
}) => {
  return (
    <a {...props} className={`p-3 text-black rounded-lg
    hover:text-primary-01 hover:underline hover:bg-primary-04
    ${active ? "bg-primary-03 text-primary-01" : ""}
    transition-colors duration-200 ease-in-out`}>
      {children}
    </a>
  );

}

interface RenderMenuItemsProps {
  type_: "desktop" | "mobile";
  menuItems: any[];
  currentPath?: string;
}
export const RenderMenuItems: FC<RenderMenuItemsProps> = ({ type_, menuItems, currentPath }) => {
  const getCurrentPath = () => {
    if (typeof window !== "undefined") {
      return window.location.pathname;
    }
    return "";
  };

  return (
    <ul className={`${type_ === "desktop" ? "hidden lg:flex" : "lg:hidden flex flex-col gap-2"}`}>
      {menuItems?.map((item) => (
        <li key={item._key} className="py-2">
          <AnchorTag href={item.href} active={currentPath === item.href}>
            {item.label}
          </AnchorTag>
        </li>
      ))}
    </ul>
  )
}
import React, { useEffect, useState } from "react";
import assets from "../assets/assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [scrolled, setScrolled] = useState(false);
  const [connected, setConnected] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  const handleConnectClick = () => setConnected((prev) => !prev);
  const toggleMenu = () => setMenuOpen((prev) => !prev);

  // ✅ Подсветка активной секции через IntersectionObserver
  useEffect(() => {
    const sectionIds = [
      "home",
      "about",
      "howitworks",
      "tokendesign",
      "yardflywheel",
    ];
    const observerOptions = {
      root: null,
      rootMargin: "-40% 0px -40% 0px",
      threshold: 0.1,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActive(entry.target.id);
        }
      });
    }, observerOptions);

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => {
      sectionIds.forEach((id) => {
        const el = document.getElementById(id);
        if (el) observer.unobserve(el);
      });
    };
  }, []);

  // ✅ Отслеживание прокрутки для изменения фона навигации
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`py-8 sticky top-0 z-50 rounded-b-2xl transition-colors duration-500 ${
        scrolled ? "bg-black/30" : ""
      }`}
    >
      <div className="relative max-w-7xl mx-auto flex items-center justify-between px-4">
        {/* Логотип */}
        <a
          className="flex items-center space-x-2 rounded-3xl bg-[#EFEFF2] hover:bg-[#303030]/75 font-gilroy-semibold text-[#333333] hover:text-[#FBFBFC] transition-colors duration-300 py-2.5 px-3 cursor-pointer"
          href="#"
        >
          <img src={assets.logo} alt="Backyard" className="h-6 w-6" />
          <span>Backyard</span>
        </a>

        {/* Навигация (только на md и выше) */}
        <nav className="hidden md:flex absolute left-1/2 -translate-x-1/2 space-x-1 text-sm rounded-3xl bg-[#EFEFF2] hover:bg-[#303030]/75 transition-colors duration-300 p-1 whitespace-nowrap font-konnect-medium text-[13px]">
          {[
            "Home",
            "About",
            "How it works",
            "Token design",
            "YARD flywheel",
          ].map((label) => {
            const id = label.toLowerCase().replace(/\s+/g, "");
            return (
              <a
                key={label}
                href={`#${id}`}
                onClick={() => setActive(id)}
                className={`rounded-3xl p-[11px] cursor-pointer transition-colors duration-200 ${
                  active === id
                    ? "text-[#FBFBFC] bg-[#303030]"
                    : "text-[#AEB0B1] hover:text-[#FBFBFC] hover:bg-[#303030]"
                }`}
              >
                {label}
              </a>
            );
          })}
        </nav>

        {/* Connect и бургер */}
        <div className="flex items-center space-x-3">
          {/* Кнопка Connect (видна только между md и lg) */}
          <div className="hidden md:block lg:hidden">
            <button
              onClick={handleConnectClick}
              className={`rounded-full text-xs font-konnect-medium py-2 px-4 transition-all duration-300 h-10 ${
                connected
                  ? "bg-[#FBFBFC] text-[#303030]"
                  : "bg-[#303030] text-[#FBFBFC]"
              }`}
            >
              {connected ? (
                <div className="flex items-center justify-between w-full">
                  <span className="pl-1">0x233...ger</span>
                  {assets.connection && (
                    <img
                      src={assets.connection}
                      alt="Connection"
                      className="w-6 h-6 ml-2"
                    />
                  )}
                </div>
              ) : (
                <span className="block text-center w-full">Connect</span>
              )}
            </button>
          </div>

          {/* Бургер-меню (на md и ниже) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMenu}
              className="flex flex-col items-center justify-center space-y-[4px] p-2 border border-[#DEDEE3]/45 rounded-[11px] bg-[#F6F7F8]"
            >
              <span className="block w-[15px] h-[2px] bg-[#525352]"></span>
              <span className="block w-[9px] h-[2px] bg-[#525352]"></span>
              <span className="block w-[15px] h-[2px] bg-[#525352]"></span>
            </button>
          </div>
        </div>

        {/* Открытое бургер-меню */}
        {menuOpen && (
          <div className="absolute top-[70px] right-4 w-[176px] h-[202px] bg-[#f6f7f8] rounded-[11px] border border-[#DEDEE3]/45 z-50 p-4 flex flex-col gap-2 text-sm font-konnect-medium shadow-lg">
            {["home", "about", "howitworks", "tokendesign", "yardflywheel"].map(
              (id) => {
                const label = {
                  home: "Home",
                  about: "About",
                  howitworks: "How it works",
                  tokendesign: "Token design",
                  yardflywheel: "YARD flywheel",
                }[id];

                return (
                  <a
                    key={id}
                    href={`#${id}`}
                    onClick={() => {
                      setActive(id);
                      setMenuOpen(false);
                    }}
                    className={`hover:underline ${
                      active === id ? "text-[#303030]" : "text-[#787878]"
                    }`}
                  >
                    {label}
                  </a>
                );
              }
            )}

            <button
              onClick={handleConnectClick}
              className={`w-full mt-2 rounded-full py-2 text-xs font-konnect-medium transition-all duration-300 ${
                connected
                  ? "bg-[#FBFBFC] text-[#303030]"
                  : "bg-[#303030] text-[#FBFBFC]"
              }`}
            >
              {connected ? "0x233...ger" : "Connect"}
            </button>
          </div>
        )}
      </div>
    </header>
  );
};

export default Navbar;

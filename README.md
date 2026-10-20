# Moderní webová prezentace: Svět 3D tisku

Rozsáhlá, promyšlená a plně responzivní jednostránková (single-page) webová prezentace o 3D tisku vytvořená v moderním sémantickém **HTML5** a **CSS3** s lehkým doplňkovým **JavaScriptem**.

## 🚀 Jak spustit prezentaci
Stačí otevřít soubor `index.html` v libovolném moderním webovém prohlížeči (Google Chrome, Microsoft Edge, Mozilla Firefox, Safari, Brave atd.):
- Ve **VS Code**: Stiskněte klávesu **F5** (nebo přejděte do menu *Spustit -> Spustit ladění*) a stránka se ihned otevře v prohlížeči Chrome nebo Edge.
- V **Průzkumníku Windows**: Poklepejte na soubor `index.html`, nebo na něj klikněte pravým tlačítkem a zvolte *Otevřít v programu* -> váš webový prohlížeč.

Nepotřebujete žádný webový server ani instalaci závislostí – vše funguje okamžitě a offline.

---

## 🛠️ Splněné technické požadavky
- **Fixní horní navigační menu (header):** Zůstává trvale ukotvené v horní části obrazovky s moderním poloprůhledným rozostřeným pozadím (`backdrop-filter: blur(16px)`).
- **Kotevní navigace:** Odkazy v menu směřují přímo na odpovídající ID sekcí (`#domu`, `#o-tisku`, `#tiskarny`, `#software`, `#modely`, `#galerie`).
- **Plynulé odrolování (Smooth scrolling):** V CSS je implementováno pravidlo `scroll-behavior: smooth;` s nastavením `scroll-padding-top` pro přesné dosednutí pod fixní hlavičku.
- **Plná responzivita a moderní vzhled:** Využití CSS Gridu a Flexboxu, CSS proměnných (Design Tokens), tmavého tech vizuálu (Dark Mode), karet s hloubkou a hover efekty.
- **Reálné fotografie:** Všechny obrázky tiskáren, filamentů a výtisků jsou uloženy lokálně ve složce `images/` a fungují 100% offline.
- **Sémantické HTML5:** Využití elementů `<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<footer>`.

---

## 📑 Struktura a obsah prezentace

1. **`#domu` – Hero sekce s fotografií tiskárny**
   - Hlavní nadpis, lákavý podnadpis a akční tlačítka ("Zjistit více", "Srovnání tiskáren", "Galerie výtisků").
   - Vizuální karta s fotografií tiskové trysky a živým indikátorem tiskových teplot.
   - Karta s klíčovými metrikami FDM tisku (minimální vrstva 0.05 mm, teploty 300 °C, rychlost 600 mm/s).

2. **`#o-tisku` – Princip FDM a materiály**
   - Vizuální fotografický banner s cívkami filamentů.
   - Vysvětlení aditivní technologie FDM / FFF (nanášení vrstvu po vrstvě, extruder, hotend, heatbed, G-kód).
   - 4 přehledné kroky tiskového procesu (Model -> Slicing -> Extruze -> Chlazení).
   - Podrobný rozbor materiálů (**PLA**, **PLA+**, **PETG**) s parametry a srovnávací tabulkou.

3. **`#tiskarny` – Prověřené 3D tiskárny s fotografiemi**
   - Karty s reálnými fotografiemi, parametry, rozměry tiskového prostoru, typem extruderu a doporučením:
     - **Creality Ender-3:** Cenově dostupná DIY legenda se širokou komunitou.
     - **Creality CR-10 SE:** Moderní rychlotiskárna (až 600 mm/s) s lineárním vedením a auto-levelingem.
     - **Original Prusa MK4:** Špičkový český pracovní nástroj s Nextruderem a tenzometrickým senzorem pro dokonalou první vrstvu.

4. **`#software` – Modelování a příprava tisku**
   - Vizuální banner pracovní stanice s CAD softwarem.
   - Rozdělená sekce pokrývající obě fáze digitálního workflow:
     - **3D modelování (CAD / Mesh):** Autodesk Fusion 360, Tinkercad, OpenSCAD, Blender.
     - **Slicery (příprava G-kódu):** PrusaSlicer, Creality Print, Ultimaker Cura.
   - Edukativní tip box vysvětlující princip generování perimetrů a infillu (výplně).

5. **`#modely` – Knihovny a archivy 3D modelů**
   - Samostatná plnohodnotná sekce představující 4 největší světové archivy:
     - **Printables.com:** Vlajková loď komunity Prusa s ověřenými tisky a odměnami.
     - **Thingiverse.com:** Nejstarší a největší archiv s miliony volných modelů a remixů.
     - **MakerWorld.com:** Moderní platforma Bambu Lab s tiskem jedním kliknutím a 3D náhledem.
     - **Thangs.com:** Revoluční geometrický AI vyhledávač modelů.
   - Edukativní banner s radami ohledně licencí Creative Commons (CC-BY, CC-NC) a formátů (.3mf, .step, .stl).

6. **`#galerie` – Galerie reálných výtisků z praxe**
   - **3DBenchy:** Legendární kalibrační lodička tiskařů.
   - **3D tisková farma:** Průmyslová hromadná výroba na desítkách FDM tiskáren.
   - **Barevný tisk:** Moderní vícebarevné modely a hračky.
   - **Komplexní skulptury:** Prostorové geometrické struktury s topologickou optimalizací.
   - Plnohodnotná patička (footer) s doplňkovými odkazy na všechny sekce, tlačítkem "Zpět nahoru" a interaktivním panelem s odkazem na online validátor W3C Nu Html Checker.

---

## 📂 Soubory v projektu
- `index.html` – Hlavní sémantická struktura stránky a veškerý textový obsah.
- `style.css` – Kompletní stylování, animace, gridy, flexboxy a responzivní zobrazení.
- `script.js` – Mobilní hamburgerové menu a dynamické zvýraznění aktivní sekce při scrollování (Scroll-Spy).
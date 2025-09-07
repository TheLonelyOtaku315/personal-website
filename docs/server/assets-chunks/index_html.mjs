export default `<!DOCTYPE html><html lang="en"><head>
    <meta charset="utf-8">
    <title>Tonny Zhao - Personal Website</title>
    <base href="/personal-website/">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <!-- <link rel="icon" type="image/x-icon" href="favicon.ico"> -->
    <link rel="icon" type="image/x-icon" href="assets/img/logo.png">
  <link rel="stylesheet" href="styles.css"><style ng-app-id="ng">

.container[_ngcontent-ng-c182244390] {
  z-index: 0;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  height: 100vh;
  width: 100dvw;
  overflow: hidden;
  scrollbar-width: none;
  -ms-overflow-style: none;
  background-color: var(--background-color);
  position: relative;
}
.container[_ngcontent-ng-c182244390]::-webkit-scrollbar {
  display: none;
}
.nav-bar[_ngcontent-ng-c182244390] {
  display: flex;
  background-color: transparent;
  width: fit-content;
  height: 100vh;
  z-index: 1000;
  position: sticky;
  top: 0;
  align-self: flex-start;
}
.webpage[_ngcontent-ng-c182244390] {
  z-index: 1000;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100vh;
  overflow-y: auto;
  scrollbar-width: none;
  -ms-overflow-style: none;
}
.webpage[_ngcontent-ng-c182244390]::-webkit-scrollbar {
  display: none;
}
.background[_ngcontent-ng-c182244390] {
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1;
  height: 100vh;
}
@media (max-width: 800px) {
  .webpage[_ngcontent-ng-c182244390] {
    z-index: 500;
    width: 100%;
    margin-left: 0;
  }
}
.square-glass[_ngcontent-ng-c182244390] {
  background: var(--surface-color);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(7.9px);
  -webkit-backdrop-filter: blur(7.9px);
  border: 1px solid var(--border-color);
  border-radius: 25%;
}
.matrix-container[_ngcontent-ng-c182244390] {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  perspective: 1500px;
  z-index: -1;
  overflow: hidden;
}
.matrix-grid[_ngcontent-ng-c182244390] {
  width: 100%;
  height: 100%;
  background:
    linear-gradient(var(--border-color) 1px, transparent 1px),
    linear-gradient(
      90deg,
      var(--border-color) 1px,
      transparent 1px),
    repeating-linear-gradient(
      45deg,
      rgba(var(--accent-color-rgb), 0.05) 0px 1px,
      transparent 1px 12px),
    repeating-linear-gradient(
      -45deg,
      rgba(var(--accent-color-rgb), 0.05) 0px 1px,
      transparent 1px 12px),
    radial-gradient(
      circle at center,
      var(--background-color) 0%,
      var(--primary-color) 100%);
  background-size:
    28px 28px,
    28px 28px,
    50px 50px,
    50px 50px,
    cover;
  border: 1px solid rgba(var(--accent-color-rgb), 0.1);
  box-shadow: inset 0 0 40px rgba(var(--accent-color-rgb), 0.1), 0 0 60px rgba(var(--accent-color-rgb), 0.15);
  transform-style: preserve-3d;
  transition: all 0.6s ease-in-out;
  position: relative;
}
.matrix-grid[_ngcontent-ng-c182244390]::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(var(--accent-color-rgb), 0.4),
      transparent);
  animation: _ngcontent-ng-c182244390_borderFlow 6s linear infinite;
  pointer-events: none;
  mask: linear-gradient(#fff 0 0) padding-box, linear-gradient(#fff 0 0);
  mask-composite: exclude;
}
.matrix-grid[_ngcontent-ng-c182244390]::after {
  content: "";
  position: absolute;
  top: 50%;
  left: 50%;
  width: 160px;
  height: 160px;
  background:
    radial-gradient(
      circle,
      rgba(var(--accent-color-rgb), 0.15) 0%,
      transparent 70%);
  transform: translate(-50%, -50%);
  animation: _ngcontent-ng-c182244390_pulse 3.5s ease-in-out infinite alternate;
  z-index: 1;
}
@keyframes _ngcontent-ng-c182244390_borderFlow {
  0% {
    background-position: 0% 50%;
  }
  100% {
    background-position: 200% 50%;
  }
}
@keyframes _ngcontent-ng-c182244390_pulse {
  0% {
    transform: translate(-50%, -50%) scale(0.85);
    opacity: 0.2;
  }
  100% {
    transform: translate(-50%, -50%) scale(1.1);
    opacity: 0.5;
  }
}
/*# sourceMappingURL=/personal-website/app.component.css.map */</style><style ng-app-id="ng">@import "https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap";



*[_ngcontent-ng-c830932401] {
  margin: 0;
  padding: 0;
}
html[_ngcontent-ng-c830932401] {
  font-family:
    Poppins,
    "Segoe UI",
    Tahoma,
    Geneva,
    Verdana,
    sans-serif;
  line-height: 1.5rem;
}
body[_ngcontent-ng-c830932401] {
  min-height: 100vh;
  min-height: 100dvh;
  background-color: transparent;
  color: var(--primary-text-color);
  display: grid;
  grid-template-columns: auto 1fr;
}
#sidebar[_ngcontent-ng-c830932401] {
  box-sizing: border-box;
  margin: 32px 0 32px 32px;
  height: calc(100vh - 64px);
  width: 250px;
  padding: 5px 1em;
  background: rgba(var(--surface-color-rgb), 0.1);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  backdrop-filter: blur(4.9px);
  -webkit-backdrop-filter: blur(4.9px);
  border: 2px solid var(--border-color);
  position: sticky;
  top: 0;
  align-self: start;
  transition: 300ms ease-in-out;
  overflow: hidden;
  text-wrap: nowrap;
  display: flex;
  flex-direction: column;
}
#sidebar.close[_ngcontent-ng-c830932401] {
  padding: 5px;
  width: 60px;
}
#sidebar[_ngcontent-ng-c830932401]   ul[_ngcontent-ng-c830932401] {
  list-style: none;
  flex: 1;
}
.logo-container[_ngcontent-ng-c830932401] {
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
}
.brand-text[_ngcontent-ng-c830932401] {
  font-size: 0.9rem;
  font-weight: 600;
  color: var(--primary-text-color);
  opacity: 0.8;
  letter-spacing: 0.5px;
  text-transform: uppercase;
}
.sidebar-separator[_ngcontent-ng-c830932401] {
  width: 80%;
  height: 1px;
  border: none;
  background:
    linear-gradient(
      90deg,
      transparent,
      var(--muted-text-color),
      transparent);
  margin: 1em auto;
  opacity: 0.6;
}
.sidebar-bottom[_ngcontent-ng-c830932401] {
  margin-top: auto;
}
.sidebar-toggle[_ngcontent-ng-c830932401] {
  background: none;
  border: none;
  cursor: pointer;
  padding: 0.5em;
  border-radius: 0.5em;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background-color 0.3s ease;
  min-width: 40px;
  height: 40px;
  width: auto;
}
.sidebar-toggle[_ngcontent-ng-c830932401]:hover {
  background-color: var(--hover-color);
}
.sidebar-toggle[_ngcontent-ng-c830932401]   svg[_ngcontent-ng-c830932401] {
  fill: var(--primary-text-color);
  transition: fill 0.3s ease;
}
.logo[_ngcontent-ng-c830932401] {
  height: 80px;
  width: auto;
  max-width: 100%;
  flex-shrink: 0;
  display: block;
  margin: 0 auto;
  object-fit: contain;
}
.logo.text-logo[_ngcontent-ng-c830932401] {
  font-size: 1.25rem;
  font-weight: bold;
  background:
    linear-gradient(
      135deg,
      var(--accent-color, var(--primary-color)),
      var(--error-color));
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-align: center;
  letter-spacing: -0.015em;
  line-height: 1.2;
  border-radius: 0.5em;
  padding: 0.85em;
  text-decoration: none;
  color: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1em;
  transition: background 0.3s ease, transform 0.3s ease;
  position: relative;
  overflow: hidden;
  width: 100%;
}
.logo.text-logo[_ngcontent-ng-c830932401]::before {
  content: "";
  position: absolute;
  top: 0;
  left: -100%;
  width: 100%;
  height: 100%;
  background:
    linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent);
  transition: left 0.5s ease;
  z-index: 1;
}
.logo.text-logo[_ngcontent-ng-c830932401]:hover::before {
  left: 100%;
}
.logo.text-logo[_ngcontent-ng-c830932401]:hover {
  background-color: var(--hover-color);
  transform: translateY(-1px);
}
#sidebar[_ngcontent-ng-c830932401]   ul[_ngcontent-ng-c830932401]   li.active[_ngcontent-ng-c830932401]   a[_ngcontent-ng-c830932401] {
  color: var(--accent-color);
}
#sidebar[_ngcontent-ng-c830932401]   ul[_ngcontent-ng-c830932401]   li.active[_ngcontent-ng-c830932401]   a[_ngcontent-ng-c830932401]   svg[_ngcontent-ng-c830932401] {
  fill: var(--accent-color);
}
#sidebar[_ngcontent-ng-c830932401]   a[_ngcontent-ng-c830932401], 
#sidebar[_ngcontent-ng-c830932401]   .dropdown-btn[_ngcontent-ng-c830932401], 
#sidebar[_ngcontent-ng-c830932401]   .sidebar-toggle[_ngcontent-ng-c830932401], 
#sidebar[_ngcontent-ng-c830932401]   .theme-toggle[_ngcontent-ng-c830932401] {
  border-radius: 0.5em;
  padding: 0.85em;
  text-decoration: none;
  color: var(--primary-text-color);
  display: flex;
  align-items: center;
  gap: 1em;
}
.dropdown-btn[_ngcontent-ng-c830932401], 
.sidebar-toggle[_ngcontent-ng-c830932401], 
.theme-toggle[_ngcontent-ng-c830932401] {
  width: 100%;
  text-align: left;
  background: none;
  border: none;
  font: inherit;
  cursor: pointer;
}
#sidebar[_ngcontent-ng-c830932401]   svg[_ngcontent-ng-c830932401] {
  flex-shrink: 0;
  fill: var(--primary-text-color);
}
#sidebar[_ngcontent-ng-c830932401]   a[_ngcontent-ng-c830932401]   span[_ngcontent-ng-c830932401], 
#sidebar[_ngcontent-ng-c830932401]   .dropdown-btn[_ngcontent-ng-c830932401]   span[_ngcontent-ng-c830932401], 
#sidebar[_ngcontent-ng-c830932401]   .theme-toggle[_ngcontent-ng-c830932401]   span[_ngcontent-ng-c830932401] {
  flex-grow: 1;
}
#sidebar[_ngcontent-ng-c830932401]   a[_ngcontent-ng-c830932401]:hover, 
#sidebar[_ngcontent-ng-c830932401]   .dropdown-btn[_ngcontent-ng-c830932401]:hover, 
#sidebar[_ngcontent-ng-c830932401]   .sidebar-toggle[_ngcontent-ng-c830932401]:hover, 
#sidebar[_ngcontent-ng-c830932401]   .theme-toggle[_ngcontent-ng-c830932401]:hover {
  background-color: var(--hover-color);
}
#sidebar[_ngcontent-ng-c830932401]   .sub-menu[_ngcontent-ng-c830932401] {
  display: grid;
  grid-template-rows: 0fr;
  transition: 300ms ease-in-out;
}
#sidebar[_ngcontent-ng-c830932401]   .sub-menu[_ngcontent-ng-c830932401]    > div[_ngcontent-ng-c830932401] {
  overflow: hidden;
}
#sidebar[_ngcontent-ng-c830932401]   .sub-menu.show[_ngcontent-ng-c830932401] {
  grid-template-rows: 1fr;
}
.dropdown-btn[_ngcontent-ng-c830932401]   svg[_ngcontent-ng-c830932401] {
  transition: 200ms ease;
}
.rotate[_ngcontent-ng-c830932401]   svg[_ngcontent-ng-c830932401]:last-child {
  rotate: 180deg;
}
#sidebar[_ngcontent-ng-c830932401]   .sub-menu[_ngcontent-ng-c830932401]   a[_ngcontent-ng-c830932401] {
  padding-left: 2em;
}
#toggle-btn[_ngcontent-ng-c830932401] {
  margin-left: auto;
  padding: 1em;
  border: none;
  border-radius: 0.5em;
  background: none;
  cursor: pointer;
}
#toggle-btn[_ngcontent-ng-c830932401]   svg[_ngcontent-ng-c830932401] {
  transition: rotate 150ms ease;
}
#toggle-btn[_ngcontent-ng-c830932401]:hover {
  background-color: var(--hover-color);
}
main[_ngcontent-ng-c830932401] {
  padding: min(30px, 7%);
}
main[_ngcontent-ng-c830932401]   p[_ngcontent-ng-c830932401] {
  color: var(--secondary-text-color);
  margin-top: 5px;
  margin-bottom: 15px;
}
.container[_ngcontent-ng-c830932401] {
  border: 1px solid var(--border-color);
  border-radius: 1em;
  margin-bottom: 20px;
  padding: min(3em, 15%);
}
.container[_ngcontent-ng-c830932401]   h2[_ngcontent-ng-c830932401], 
.container[_ngcontent-ng-c830932401]   p[_ngcontent-ng-c830932401] {
  margin-top: 1em;
}
@media (max-width: 800px) {
  body[_ngcontent-ng-c830932401] {
    grid-template-columns: 1fr;
  }
  main[_ngcontent-ng-c830932401] {
    padding: 2em 1em 60px 1em;
  }
  .container[_ngcontent-ng-c830932401] {
    border: none;
    padding: 0;
  }
  #sidebar[_ngcontent-ng-c830932401] {
    height: 60px;
    width: calc(100% - 60px);
    border-right: none;
    border-top: 1px solid var(--border-color);
    padding: 0;
    position: fixed;
    top: unset;
    bottom: 0;
  }
  #sidebar[_ngcontent-ng-c830932401]    > ul[_ngcontent-ng-c830932401] {
    padding: 0;
    display: grid;
    grid-auto-columns: 60px;
    grid-auto-flow: column;
    align-items: center;
    justify-content: space-around;
    overflow-x: scroll;
  }
  #sidebar[_ngcontent-ng-c830932401]   ul[_ngcontent-ng-c830932401]   li[_ngcontent-ng-c830932401] {
    height: 100%;
  }
  #sidebar[_ngcontent-ng-c830932401]   ul[_ngcontent-ng-c830932401]   a[_ngcontent-ng-c830932401], 
   #sidebar[_ngcontent-ng-c830932401]   ul[_ngcontent-ng-c830932401]   .dropdown-btn[_ngcontent-ng-c830932401], 
   #sidebar[_ngcontent-ng-c830932401]   ul[_ngcontent-ng-c830932401]   .theme-toggle[_ngcontent-ng-c830932401] {
    width: 60px;
    height: 60px;
    padding: 0;
    border-radius: 0;
    justify-content: center;
  }
  #sidebar[_ngcontent-ng-c830932401]   ul[_ngcontent-ng-c830932401]   li[_ngcontent-ng-c830932401]   span[_ngcontent-ng-c830932401], 
   #sidebar[_ngcontent-ng-c830932401]   ul[_ngcontent-ng-c830932401]   li[_ngcontent-ng-c830932401]:first-child, 
   .dropdown-btn[_ngcontent-ng-c830932401]   svg[_ngcontent-ng-c830932401]:last-child, 
   .logo-container[_ngcontent-ng-c830932401], 
   .brand-text[_ngcontent-ng-c830932401], 
   .sidebar-separator[_ngcontent-ng-c830932401], 
   .sidebar-bottom[_ngcontent-ng-c830932401] {
    display: none;
  }
  .sidebar-toggle[_ngcontent-ng-c830932401] {
    width: 60px;
    height: 60px;
    padding: 0;
    border-radius: 0;
    min-width: unset;
  }
  .logo[_ngcontent-ng-c830932401] {
    display: none;
  }
  #sidebar[_ngcontent-ng-c830932401]   ul[_ngcontent-ng-c830932401]   li[_ngcontent-ng-c830932401]   .sub-menu.show[_ngcontent-ng-c830932401] {
    position: fixed;
    bottom: 60px;
    left: 0;
    box-sizing: border-box;
    height: 60px;
    width: calc(100% - 60px);
    background-color: var(--hover-color);
    border-top: 1px solid var(--border-color);
    display: flex;
    justify-content: center;
  }
  #sidebar[_ngcontent-ng-c830932401]   ul[_ngcontent-ng-c830932401]   li[_ngcontent-ng-c830932401]   .sub-menu.show[_ngcontent-ng-c830932401]    > div[_ngcontent-ng-c830932401] {
    overflow-x: auto;
  }
  #sidebar[_ngcontent-ng-c830932401]   ul[_ngcontent-ng-c830932401]   li[_ngcontent-ng-c830932401]   .sub-menu.show[_ngcontent-ng-c830932401]   li[_ngcontent-ng-c830932401] {
    display: inline-flex;
  }
  #sidebar[_ngcontent-ng-c830932401]   ul[_ngcontent-ng-c830932401]   li[_ngcontent-ng-c830932401]   .sub-menu.show[_ngcontent-ng-c830932401]   a[_ngcontent-ng-c830932401] {
    box-sizing: border-box;
    padding: 1em;
    width: calc(100% - 60px);
    justify-content: center;
  }
}
/*# sourceMappingURL=/personal-website/navigation-bar.component.css.map */</style><style ng-app-id="ng">

.box[_ngcontent-ng-c1025075422] {
  align-items: center;
  aspect-ratio: 1 / 1.5;
  display: flex;
  height: auto;
  justify-content: center;
  position: relative;
  transition: 0.5s;
  width: 100%;
  z-index: 1;
}
.box[_ngcontent-ng-c1025075422]::before {
  background: #fff;
  border-radius: 8px;
  content: "";
  height: 100%;
  left: 65px;
  position: absolute;
  text-decoration: none;
  top: 0;
  transform: skewX(15deg);
  transition: 0.5s;
  width: 70%;
}
.box[_ngcontent-ng-c1025075422]::after {
  background: #fff;
  border-radius: 8px;
  content: "";
  filter: blur(30px);
  height: 100%;
  left: 50px;
  position: absolute;
  top: 0;
  transform: skewX(15deg);
  transition: 0.5s;
  width: 50%;
}
.box[_ngcontent-ng-c1025075422]:hover:before, 
.box[_ngcontent-ng-c1025075422]:hover:after {
  transform: skewX(0deg) scaleX(1.3);
}
.box[_ngcontent-ng-c1025075422]:before, 
.box[_ngcontent-ng-c1025075422]:after {
  background:
    linear-gradient(
      315deg,
      var(--accent-color),
      var(--error-color));
}
.box[_ngcontent-ng-c1025075422]   span[_ngcontent-ng-c1025075422] {
  bottom: 0;
  display: block;
  left: 0;
  pointer-events: none;
  position: absolute;
  right: 0;
  top: 0;
  z-index: 5;
}
.box[_ngcontent-ng-c1025075422]   span[_ngcontent-ng-c1025075422]::before {
  animation: animate 2s ease-in-out infinite;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  content: "";
  height: 0;
  left: 0;
  opacity: 0;
  position: absolute;
  top: 0;
  transition: 0.1s;
  width: 0;
}
.box[_ngcontent-ng-c1025075422]   span[_ngcontent-ng-c1025075422]::before {
  height: 50px;
  left: 40px;
  opacity: 1;
  top: -40px;
  width: 50px;
}
.box[_ngcontent-ng-c1025075422]   span[_ngcontent-ng-c1025075422]::after {
  animation-delay: -1s;
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  background: rgba(255, 255, 255, 0.1);
  border-radius: 8px;
  bottom: 0;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  content: "";
  height: 100%;
  opacity: 0;
  position: absolute;
  right: 0;
  transition: 0.5s;
  width: 100%;
}
.box[_ngcontent-ng-c1025075422]   span[_ngcontent-ng-c1025075422]:after {
  bottom: -40px;
  height: 50px;
  opacity: 1;
  right: 40px;
  width: 50px;
}
.box[_ngcontent-ng-c1025075422]   .content[_ngcontent-ng-c1025075422] {
  align-items: center;
  background: rgba(255, 255, 255, 0.05);
  -webkit-backdrop-filter: blur(10px);
  backdrop-filter: blur(10px);
  border-radius: 8px;
  box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  color: #fff;
  display: flex;
  flex-direction: column;
  height: 400px;
  justify-content: space-between;
  padding: 20px 30px;
  position: relative;
  transform: 0.5s;
  width: 300px;
  z-index: 1;
  transform: scale(1);
  transition: transform 0.5s cubic-bezier(0.4, 0, 0.2, 1);
}
.container[_ngcontent-ng-c1025075422] {
  height: fit-content;
  align-items: center;
  display: flex;
  flex-direction: row;
  margin-top: 12px;
  gap: 32px;
  justify-content: center;
}
.glass[_ngcontent-ng-c1025075422] {
  -webkit-backdrop-filter: blur(4.9px);
  align-items: center;
  align-self: start;
  backdrop-filter: blur(4.9px);
  background: rgba(var(--surface-color-rgb), 0.1);
  border: 2px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: fit-content;
  justify-content: space-around;
  margin: 32px;
  overflow: hidden;
  padding: 5rem;
  position: sticky;
  text-wrap: nowrap;
  top: 0;
  transition: 300ms ease-in-out;
  width: calc(100% - 64px);
}
.profile[_ngcontent-ng-c1025075422] {
  align-items: center;
  display: flex;
  flex-direction: column;
  text-align: center;
  width: calc(100% * (1 / 3));
}
@media (max-width: 1150px) {
  .container[_ngcontent-ng-c1025075422] {
    flex-direction: column;
    gap: 16px;
  }
  .glass[_ngcontent-ng-c1025075422] {
    flex-direction: column;
    height: auto;
    text-wrap: wrap;
  }
}
.content[_ngcontent-ng-c1025075422]   .info[_ngcontent-ng-c1025075422] {
  font-weight: 700;
  font-size: 1em;
  color: white;
  display: block;
  text-align: center;
  margin: 1em;
  white-space: normal;
  overflow: visible;
  text-overflow: unset;
}
.content[_ngcontent-ng-c1025075422]   .img[_ngcontent-ng-c1025075422] {
  display: flex;
  border-radius: 25%;
  border-color: var(--border-color);
  align-items: center;
  justify-content: center;
  border-radius: 15px;
  aspect-ratio: 1/1;
}
.content[_ngcontent-ng-c1025075422]   button[_ngcontent-ng-c1025075422] {
  padding: 0.8em 1.7em;
  display: block;
  margin: auto;
  border-radius: 25px;
  border: none;
  font-weight: bold;
  background:
    linear-gradient(
      135deg,
      var(--accent-color) 0%,
      var(--background-color) 100%);
  color: var(--text-color);
  transition:
    background 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    color 0.4s cubic-bezier(0.4, 0, 0.2, 1),
    transform 0.4s cubic-bezier(0.4, 0, 0.2, 1);
}
.content[_ngcontent-ng-c1025075422]   button[_ngcontent-ng-c1025075422]:hover {
  background:
    linear-gradient(
      315deg,
      var(--accent-color) 0%,
      var(--background-color) 100%);
  cursor: pointer;
  color: var(--primary-text-color);
  transform: rotateY(15deg);
}
.text[_ngcontent-ng-c1025075422] {
  width: calc(100% / 2);
}
.welcome-text[_ngcontent-ng-c1025075422] {
  white-space: normal;
  word-break: break-word;
  font-size: 4em;
  font-weight: 800;
  background:
    linear-gradient(
      135deg,
      var(--accent-color) 0%,
      var(--error-color) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0.2em 0 0.1em 0;
}
.intro[_ngcontent-ng-c1025075422] {
  font-size: 1.5em;
  font-weight: 500;
  color: var(--accent-color);
  margin: 1em 0;
  white-space: normal;
  word-break: break-word;
  line-height: 1.4;
  letter-spacing: 0.02em;
  background:
    linear-gradient(
      90deg,
      var(--accent-color),
      var(--error-color));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.anchor[_ngcontent-ng-c1025075422] {
  text-decoration: none;
  color: var(--text-color);
  display: inline-block;
  font-family: sans-serif;
  font-weight: 600;
  border-radius: 50px;
  border: 4px solid var(--error-color);
  padding: 14px 40px;
  overflow: hidden;
  position: relative;
}
.anchor[_ngcontent-ng-c1025075422]:hover {
  color: var(--text-color);
}
.button[_ngcontent-ng-c1025075422]   a[_ngcontent-ng-c1025075422]::before {
  position: absolute;
  content: "";
  z-index: 0;
  background-color: rgba(243, 90, 90, 0.5);
  left: -5px;
  right: -5px;
  bottom: -5px;
  height: 111%;
  transition: all 0.3s ease;
}
.button[_ngcontent-ng-c1025075422]   a[_ngcontent-ng-c1025075422]:hover::before {
  height: 11%;
}
.button[_ngcontent-ng-c1025075422]   p[_ngcontent-ng-c1025075422] {
  all: unset;
  position: relative;
  z-index: 2;
  transition: all 0.3s ease;
}
@media (max-width: 1150px) {
  .welcome-text[_ngcontent-ng-c1025075422] {
    width: 100%;
  }
  .intro[_ngcontent-ng-c1025075422] {
    width: 100%;
  }
  .text[_ngcontent-ng-c1025075422] {
    flex-direction: column;
    width: 100%;
  }
}
.profil-pic[_ngcontent-ng-c1025075422] {
  width: 250px;
  height: 250px;
  object-fit: cover;
  border-radius: 20%;
  border: 4px solid var(--background-color);
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.12);
  display: block;
  background: #fff;
  aspect-ratio: 1/1;
}
/*# sourceMappingURL=/personal-website/welcome-section.component.css.map */</style><style ng-app-id="ng">

.container[_ngcontent-ng-c2234282539] {
  display: flex;
  justify-content: center;
}
.glass[_ngcontent-ng-c2234282539] {
  -webkit-backdrop-filter: blur(4.9px);
  align-items: center;
  align-self: start;
  backdrop-filter: blur(4.9px);
  background: rgba(var(--surface-color-rgb), 0.1);
  border: 2px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  height: fit fit-content;
  justify-content: space-around;
  margin: 32px;
  padding: 5rem;
  position: sticky;
  text-wrap: nowrap;
  top: 0;
  transition: 300ms ease-in-out;
  max-width: calc(100% - 64px);
}
.profile[_ngcontent-ng-c2234282539] {
  align-items: center;
  width: 100%;
}
.glass[_ngcontent-ng-c2234282539] {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2rem;
  width: 100%;
  box-sizing: border-box;
}
.about-me[_ngcontent-ng-c2234282539] {
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: transparent;
  overflow: visible;
}
.marquee[_ngcontent-ng-c2234282539] {
  overflow: hidden;
  width: 100%;
  -webkit-mask-image:
    linear-gradient(
      to right,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%);
  mask-image:
    linear-gradient(
      to right,
      transparent 0%,
      black 10%,
      black 90%,
      transparent 100%);
  padding: 2rem;
}
.marquee_header[_ngcontent-ng-c2234282539] {
  font-size: 4em;
  font-weight: 900;
  margin: 1rem;
  padding-left: 2rem;
  color: var(--primary-text-color);
  text-align: left;
  letter-spacing: 1px;
  background:
    linear-gradient(
      90deg,
      var(--accent-color) 0%,
      var(--error-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.marquee__inner[_ngcontent-ng-c2234282539] {
  display: flex;
  width: max-content;
  animation: _ngcontent-ng-c2234282539_marquee 30s linear infinite;
}
.marquee__inner[_ngcontent-ng-c2234282539]:hover {
  animation-play-state: paused;
}
.marquee__group[_ngcontent-ng-c2234282539] {
  display: flex;
  align-items: center;
  gap: 2rem;
}
.marquee__group[_ngcontent-ng-c2234282539]:first-child::after {
  content: "";
  width: 1rem;
  height: 1px;
  flex-shrink: 0;
}
.marquee__group[_ngcontent-ng-c2234282539]   span[_ngcontent-ng-c2234282539] {
  margin: 0 1.5rem;
  white-space: nowrap;
}
@keyframes _ngcontent-ng-c2234282539_marquee {
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
}
.card[_ngcontent-ng-c2234282539] {
  width: 400px;
  min-width: 400px;
  height: auto;
  background-image:
    linear-gradient(
      163deg,
      var(--accent-color) 0%,
      var(--error-color) 100%);
  border-radius: 20px;
  transition: all 0.3s;
  padding: 4px;
  position: relative;
  aspect-ratio: 1.5 / 1;
  flex-shrink: 0;
}
.card2[_ngcontent-ng-c2234282539] {
  width: 100%;
  height: 100%;
  background-color: var(--surface-color);
  border-radius: 16px;
  transition: all 0.2s;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
}
.card2[_ngcontent-ng-c2234282539]:hover {
  transform: scale(0.98);
  border-radius: 20px;
}
.card[_ngcontent-ng-c2234282539]:hover {
  box-shadow: 0px 0px 30px 1px var(--accent-color);
}
.card-content[_ngcontent-ng-c2234282539] {
  padding: 1.5rem;
  text-align: center;
  color: var(--primary-text-color);
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}
.card-content[_ngcontent-ng-c2234282539]   h3[_ngcontent-ng-c2234282539] {
  font-size: 1.5rem;
  font-weight: 700;
  margin: 0 0 0.5rem 0;
  color: var(--primary-text-color);
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  width: 100%;
}
.card-date[_ngcontent-ng-c2234282539] {
  font-size: 0.8rem;
  font-weight: 600;
  background: var(--secondary-color);
  padding: 4px 12px;
  border-radius: 12px;
  margin-bottom: 0.8rem;
  color: var(--secondary-text-color);
}
.card-content[_ngcontent-ng-c2234282539]   p[_ngcontent-ng-c2234282539] {
  font-size: 0.85rem;
  line-height: 1.4;
  margin: 0 0 0.8rem 0;
  color: var(--secondary-text-color);
  text-align: center;
  word-break: break-word;
  white-space: normal;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
}
.card-tech[_ngcontent-ng-c2234282539] {
  font-size: 0.75rem;
  font-weight: 600;
  padding: 6px 12px;
  border-radius: 12px;
  background: color-mix(in srgb, var(--success-color) 10%, transparent);
  color: var(--success-color);
  border: 1px solid var(--success-color);
}
.project-card-background[_ngcontent-ng-c2234282539] {
  width: 100%;
  max-width: 600px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}
.project-card[_ngcontent-ng-c2234282539] {
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 400px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  background:
    linear-gradient(
      135deg,
      var(--accent-color) 0%,
      var(--error-color) 100%);
}
.project-card[_ngcontent-ng-c2234282539]:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
}
.project-card[_ngcontent-ng-c2234282539] {
  position: relative;
  width: 100%;
  height: 100%;
  max-height: 400px;
  border-radius: 12px;
  overflow: hidden;
  cursor: pointer;
  transition: transform 0.35s ease, box-shadow 0.35s ease;
  box-shadow: 0 12px 30px rgba(0, 0, 0, 0.12);
  background:
    linear-gradient(
      135deg,
      var(--accent-color) 0%,
      var(--error-color) 100%);
}
.project-default[_ngcontent-ng-c2234282539], 
.project-hover[_ngcontent-ng-c2234282539] {
  position: absolute;
  inset: 0;
  padding: 2rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  text-align: center;
  color: var(--primary-text-color);
  transition: all 0.45s cubic-bezier(0.4, 0, 0.2, 1);
}
.project-default[_ngcontent-ng-c2234282539]   h3[_ngcontent-ng-c2234282539] {
  font-size: 2rem;
  font-weight: 800;
  margin: 0 0 1rem 0;
}
.project-date[_ngcontent-ng-c2234282539] {
  font-size: 0.95rem;
  font-weight: 600;
  background: var(--secondary-color);
  padding: 8px 18px;
  border-radius: 20px;
}
.project-hover[_ngcontent-ng-c2234282539] {
  background: rgba(0, 0, 0, 0.35);
  opacity: 0;
  transform: translateY(20px);
  pointer-events: none;
}
.project-hover[_ngcontent-ng-c2234282539]   p[_ngcontent-ng-c2234282539] {
  font-size: 1.15rem;
  line-height: 1.5;
  margin: 0 0 1.2rem 0;
}
.project-tech[_ngcontent-ng-c2234282539] {
  font-size: 0.95rem;
  font-weight: 700;
  padding: 10px 20px;
  border-radius: 20px;
  background: color-mix(in srgb, var(--warning-color) 8%, transparent);
  color: var(--warning-color);
}
.project-card[_ngcontent-ng-c2234282539]:hover {
  transform: translateY(-6px) scale(1.02);
  box-shadow: 0 20px 50px rgba(0, 0, 0, 0.18);
}
.project-card[_ngcontent-ng-c2234282539]:hover   .project-default[_ngcontent-ng-c2234282539] {
  opacity: 0;
  transform: translateY(-20px) scale(0.98);
}
.project-card[_ngcontent-ng-c2234282539]:hover   .project-hover[_ngcontent-ng-c2234282539] {
  opacity: 1;
  transform: translateY(0);
  pointer-events: auto;
}
.project-hover[_ngcontent-ng-c2234282539]   p[_ngcontent-ng-c2234282539] {
  font-size: 1rem;
  white-space: normal;
  word-break: break-word;
}
@media (max-width: 768px) {
  .carousel[_ngcontent-ng-c2234282539] {
    height: 420px;
    max-width: 100%;
    margin: 0 auto 2rem auto;
  }
  .carousel-slide[_ngcontent-ng-c2234282539] {
    padding: 1.5rem;
  }
  .carousel-btn[_ngcontent-ng-c2234282539] {
    width: 36px;
    height: 36px;
  }
  .carousel-btn-prev[_ngcontent-ng-c2234282539] {
    left: 10px;
  }
  .carousel-btn-next[_ngcontent-ng-c2234282539] {
    right: 10px;
  }
  .carousel-indicator[_ngcontent-ng-c2234282539] {
    width: 10px;
    height: 10px;
  }
  .project-default[_ngcontent-ng-c2234282539]   h3[_ngcontent-ng-c2234282539] {
    font-size: 1.6rem;
  }
  .project-hover[_ngcontent-ng-c2234282539]   p[_ngcontent-ng-c2234282539] {
    font-size: 1rem;
  }
}
#about_me[_ngcontent-ng-c2234282539] {
  font-size: 2.5rem;
  font-weight: 900;
  margin-bottom: 2rem;
  color: var(--primary-text-color);
  letter-spacing: 1px;
  background:
    linear-gradient(
      90deg,
      var(--accent-color) 0%,
      var(--error-color) 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
}
.fade-in[_ngcontent-ng-c2234282539] {
  animation: _ngcontent-ng-c2234282539_fadeInUp 0.6s ease-out forwards;
}
.fade-out[_ngcontent-ng-c2234282539] {
  animation: _ngcontent-ng-c2234282539_fadeOutDown 0.6s ease-out forwards;
}
@keyframes _ngcontent-ng-c2234282539_fadeInUp {
  from {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
  }
  to {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
}
@keyframes _ngcontent-ng-c2234282539_fadeOutDown {
  from {
    opacity: 1;
    transform: translateY(0) scale(1);
  }
  to {
    opacity: 0;
    transform: translateY(24px) scale(0.98);
  }
}
/*# sourceMappingURL=/personal-website/about-me-section.component.css.map */</style><style ng-app-id="ng">

.projects-section-container[_ngcontent-ng-c3124859289] {
  -webkit-backdrop-filter: blur(4.9px);
  align-items: center;
  align-self: start;
  backdrop-filter: blur(4.9px);
  background: rgba(var(--surface-color-rgb), 0.1);
  border: 2px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: space-around;
  margin: 32px;
  position: sticky;
  text-wrap: nowrap;
  top: 0;
  transition: 300ms ease-in-out;
  max-width: calc(100% - 64px);
}
.text[_ngcontent-ng-c3124859289] {
  padding: 2rem;
  width: calc(100% - 4rem);
  margin: 2rem;
}
.section-title[_ngcontent-ng-c3124859289] {
  white-space: normal;
  word-break: break-word;
  font-size: 4em;
  padding-left: 2rem;
  font-weight: 800;
  background:
    linear-gradient(
      135deg,
      var(--accent-color) 0%,
      var(--error-color) 100%);
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0.2em 0 0.1em 0;
}
.section-description[_ngcontent-ng-c3124859289] {
  font-size: 1.5em;
  padding-left: 2rem;
  font-weight: 500;
  color: var(--accent-color);
  margin: 1em 0;
  white-space: normal;
  word-break: break-word;
  line-height: 1.4;
  letter-spacing: 0.02em;
  background:
    linear-gradient(
      90deg,
      var(--accent-color),
      var(--error-color));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.project-description[_ngcontent-ng-c3124859289] {
  font-size: 1.25em;
  font-weight: bold;
  color: var(--primary-text-color);
  padding: 0.7em 1em;
  border-radius: 6px;
  margin-bottom: 0.7em;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  transition: background 0.3s, border-color 0.3s;
}
.projects-grid[_ngcontent-ng-c3124859289] {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(24rem, 24rem));
  gap: 1.5rem;
  padding: 1.5rem;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
}
.project-card-background[_ngcontent-ng-c3124859289] {
  background-image:
    linear-gradient(
      163deg,
      var(--accent-color) 0%,
      var(--error-color) 100%);
  border-radius: 12px;
  transition: all 0.3s;
  aspect-ratio: 1.5 / 1;
  padding: 2px;
  width: 24rem;
}
.project-card-background[_ngcontent-ng-c3124859289]:hover {
  box-shadow: 0px 0px 30px 1px var(--accent-color);
}
.project-card[_ngcontent-ng-c3124859289] {
  background-color: var(--surface-color);
  border-radius: 10px;
  color: var(--primary-text-color);
  transition: transform 0.2s, box-shadow 0.2s;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  height: 100%;
  box-sizing: border-box;
  position: relative;
  min-height: 4rem;
}
.project-card[_ngcontent-ng-c3124859289]:hover {
  transform: scale(0.98);
}
.project-default[_ngcontent-ng-c3124859289], 
.project-hover[_ngcontent-ng-c3124859289] {
  margin: 1.5rem;
  transition: opacity 0.4s;
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  display: flex;
  flex-direction: column;
}
.project-default[_ngcontent-ng-c3124859289] {
  align-items: flex-start;
  justify-content: space-between;
}
.project-default[_ngcontent-ng-c3124859289]   h3[_ngcontent-ng-c3124859289] {
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  color: var(--accent-color);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5em;
  word-break: break-word;
  white-space: normal;
}
.project-default[_ngcontent-ng-c3124859289]   .project-date[_ngcontent-ng-c3124859289] {
  font-size: 0.9em;
  font-weight: bold;
  color: var(--secondary-text-color);
  margin-top: auto;
}
.project-hover[_ngcontent-ng-c3124859289] {
  align-items: flex-start;
  justify-content: flex-start;
}
.project-hover[_ngcontent-ng-c3124859289]   p[_ngcontent-ng-c3124859289] {
  font-size: 0.95em;
  margin: 0 0 0.6em 0;
  color: var(--secondary-text-color);
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 4;
  line-clamp: 4;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
  white-space: normal;
}
.project-tech[_ngcontent-ng-c3124859289] {
  margin-top: auto;
  align-self: stretch;
}
.fade-in[_ngcontent-ng-c3124859289] {
  opacity: 1;
  z-index: 2;
  pointer-events: auto;
}
.fade-out[_ngcontent-ng-c3124859289] {
  opacity: 0;
  z-index: 1;
  pointer-events: none;
}
.project-card[_ngcontent-ng-c3124859289]   h3[_ngcontent-ng-c3124859289] {
  margin: 0;
  font-size: 1.5em;
  font-weight: bold;
  color: var(--accent-color);
  display: -webkit-box;
  -webkit-line-clamp: 2;
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  line-height: 1.5em;
}
.project-card[_ngcontent-ng-c3124859289]   p[_ngcontent-ng-c3124859289] {
  font-size: 0.95em;
  margin-bottom: 0.6em;
  color: var(--secondary-text-color);
  line-height: 1.3;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  text-overflow: ellipsis;
  flex-grow: 1;
}
.project-card[_ngcontent-ng-c3124859289]   a[_ngcontent-ng-c3124859289] {
  font-size: 0.7em;
  color: var(--link-color);
  text-decoration: none;
  padding: 0.3rem 0;
  border-radius: 4px;
  text-align: center;
  transition: all 0.2s;
  margin-bottom: 0.4em;
}
.project-card[_ngcontent-ng-c3124859289]   a[_ngcontent-ng-c3124859289]:hover {
  background-color: var(--accent-color);
  color: var(--accent-color);
  transform: translateY(-1px);
}
.project-meta[_ngcontent-ng-c3124859289] {
  margin-top: auto;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  justify-content: flex-end;
}
.project-tech[_ngcontent-ng-c3124859289] {
  display: flex;
  flex-wrap: wrap;
  gap: 0.4rem;
  margin-top: 0.5rem;
}
.tech-badge[_ngcontent-ng-c3124859289] {
  background-color: var(--border-color);
  color: var(--muted-text-color);
  font-size: 1em;
  padding: 0.18em 0.5em;
  border-radius: 5px;
  font-weight: 600;
  letter-spacing: 0.02em;
  box-shadow: 0 1px 4px var(--surface-color);
  transition: background 0.2s, color 0.2s;
  -webkit-user-select: none;
  user-select: none;
}
@media (max-width: 800px) {
  .projects-grid[_ngcontent-ng-c3124859289] {
    grid-template-columns: repeat(auto-fit, minmax(16rem, 1fr));
    gap: clamp(0.7rem, 2vw, 1.2rem);
    padding: clamp(0.7rem, 2vw, 1.2rem);
  }
  .project-card-background[_ngcontent-ng-c3124859289] {
    width: 100%;
    min-width: 16rem;
    max-width: 100%;
  }
}
@media (max-width: 600px) {
  .projects-grid[_ngcontent-ng-c3124859289] {
    grid-template-columns: repeat(auto-fit, minmax(14rem, 1fr));
    gap: 0.7rem;
    padding: 0.7rem;
    overflow-x: auto;
  }
  .project-card-background[_ngcontent-ng-c3124859289] {
    min-width: 14rem;
    max-width: 100%;
  }
}
@media (max-width: 480px) {
  .projects-grid[_ngcontent-ng-c3124859289] {
    grid-template-columns: 1fr;
    gap: 0.5rem;
    padding: 0.5rem;
  }
  .project-card-background[_ngcontent-ng-c3124859289] {
    width: 100%;
    min-width: unset;
    max-width: 100%;
  }
}
/*# sourceMappingURL=/personal-website/projects-section.component.css.map */</style><style ng-app-id="ng">

.contact-section[_ngcontent-ng-c835293001] {
  -webkit-backdrop-filter: blur(4.9px);
  align-items: center;
  align-self: start;
  backdrop-filter: blur(4.9px);
  background: rgba(var(--surface-color-rgb), 0.1);
  border: 2px solid var(--border-color);
  border-radius: 16px;
  box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  height: fit-content;
  justify-content: space-around;
  margin: 32px;
  position: sticky;
  top: 0;
  transition: 300ms ease-in-out;
  max-width: calc(100% - 64px);
}
.text[_ngcontent-ng-c835293001] {
  padding: 2rem;
  width: calc(100% - 4rem);
  margin: 2rem 0;
}
.contact-section[_ngcontent-ng-c835293001]   h2[_ngcontent-ng-c835293001] {
  white-space: normal;
  word-break: break-word;
  font-size: 4em;
  font-weight: 800;
  background:
    linear-gradient(
      90deg,
      var(--accent-color),
      var(--error-color));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
  margin: 0.2em 0 0.1em 0;
}
.section-description[_ngcontent-ng-c835293001] {
  font-size: 1.5em;
  font-weight: 500;
  color: var(--accent-color);
  margin: 1em 0;
  white-space: normal;
  word-break: break-word;
  line-height: 1.4;
  letter-spacing: 0.02em;
  background:
    linear-gradient(
      90deg,
      var(--accent-color),
      var(--error-color));
  -webkit-background-clip: text;
  background-clip: text;
  -webkit-text-fill-color: transparent;
}
.contact-flex[_ngcontent-ng-c835293001] {
  display: flex;
  gap: 2rem;
  align-items: stretch;
  flex-wrap: wrap;
  padding: 1.5rem;
  width: 100%;
  box-sizing: border-box;
  justify-content: center;
}
.contact-info[_ngcontent-ng-c835293001] {
  flex: 1;
  min-width: 300px;
  background: var(--surface-color);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
}
.contact-detail[_ngcontent-ng-c835293001] {
  display: flex;
  align-items: center;
  margin-bottom: 1.2rem;
  padding: 1rem;
  border-radius: 8px;
  transition: all 0.3s ease;
  background: var(--background-color);
  border: 1px solid var(--border-color);
}
.contact-detail[_ngcontent-ng-c835293001]:hover {
  background: var(--hover-color);
  transform: translateX(5px);
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1);
  border-color: var(--accent-color);
}
.contact-icon[_ngcontent-ng-c835293001] {
  width: 24px;
  height: 24px;
  margin-right: 1rem;
  flex-shrink: 0;
  fill: var(--accent-color);
  transition: fill 0.3s ease;
}
.contact-label[_ngcontent-ng-c835293001] {
  font-weight: 600;
  color: var(--primary-text-color);
  margin-right: 0.8rem;
  min-width: 80px;
}
.contact-value[_ngcontent-ng-c835293001] {
  color: var(--secondary-text-color);
  text-decoration: none;
  transition: color 0.3s ease;
  flex: 1;
}
.contact-value[_ngcontent-ng-c835293001]:hover {
  color: var(--accent-color);
}
a.contact-value[_ngcontent-ng-c835293001]:hover {
  text-decoration: underline;
}
.contact-form-wrapper[_ngcontent-ng-c835293001] {
  flex: 1;
  min-width: 300px;
  background: var(--surface-color);
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
  border: 1px solid var(--border-color);
}
.contact-form[_ngcontent-ng-c835293001] {
  display: flex;
  flex-direction: column;
  flex: 1;
  height: 100%;
}
.contact-form[_ngcontent-ng-c835293001]   label[_ngcontent-ng-c835293001] {
  font-weight: 600;
  color: var(--primary-text-color);
  margin-bottom: 0.5rem;
  font-size: 1rem;
  margin-top: 1.5rem;
  flex-shrink: 0;
}
.contact-form[_ngcontent-ng-c835293001]   label[_ngcontent-ng-c835293001]:first-of-type {
  margin-top: 0;
}
.contact-form[_ngcontent-ng-c835293001]   input[_ngcontent-ng-c835293001], 
.contact-form[_ngcontent-ng-c835293001]   textarea[_ngcontent-ng-c835293001] {
  padding: 0.8rem 1rem;
  border: 2px solid var(--border-color);
  border-radius: 8px;
  font-size: 1rem;
  transition: all 0.3s ease;
  font-family: inherit;
  background: var(--background-color);
  color: var(--primary-text-color);
}
.contact-form[_ngcontent-ng-c835293001]   input[_ngcontent-ng-c835293001] {
  flex-shrink: 0;
}
.contact-form[_ngcontent-ng-c835293001]   input.error[_ngcontent-ng-c835293001], 
.contact-form[_ngcontent-ng-c835293001]   textarea.error[_ngcontent-ng-c835293001] {
  border-color: var(--error-color);
  background: rgba(var(--error-color), 0.1);
}
.contact-form[_ngcontent-ng-c835293001]   input[_ngcontent-ng-c835293001]:focus, 
.contact-form[_ngcontent-ng-c835293001]   textarea[_ngcontent-ng-c835293001]:focus {
  outline: none;
  border-color: var(--accent-color);
  background: var(--surface-color);
  box-shadow: 0 0 0 3px rgba(var(--accent-color), 0.1);
}
.contact-form[_ngcontent-ng-c835293001]   input.error[_ngcontent-ng-c835293001]:focus, 
.contact-form[_ngcontent-ng-c835293001]   textarea.error[_ngcontent-ng-c835293001]:focus {
  border-color: var(--error-color);
  box-shadow: 0 0 0 3px rgba(var(--error-color), 0.1);
}
.validation-errors[_ngcontent-ng-c835293001] {
  background: rgba(var(--error-color), 0.1);
  border: 1px solid var(--error-color);
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
}
.validation-errors[_ngcontent-ng-c835293001]   h4[_ngcontent-ng-c835293001] {
  color: var(--error-color);
  margin: 0 0 0.5rem 0;
  font-size: 1rem;
  font-weight: 600;
}
.validation-errors[_ngcontent-ng-c835293001]   ul[_ngcontent-ng-c835293001] {
  margin: 0;
  padding-left: 1.2rem;
  color: var(--error-color);
}
.validation-errors[_ngcontent-ng-c835293001]   li[_ngcontent-ng-c835293001] {
  margin-bottom: 0.3rem;
  font-size: 0.9rem;
}
.submit-message[_ngcontent-ng-c835293001] {
  border-radius: 8px;
  padding: 1rem;
  margin-bottom: 1.5rem;
  text-align: center;
}
.submit-message.success[_ngcontent-ng-c835293001] {
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid #22c55e;
  color: #16a34a;
}
.submit-message.error[_ngcontent-ng-c835293001] {
  background: rgba(var(--error-color), 0.1);
  border: 1px solid var(--error-color);
  color: var(--error-color);
}
.submit-message[_ngcontent-ng-c835293001]   p[_ngcontent-ng-c835293001] {
  margin: 0;
  font-weight: 500;
}
.submit-button[_ngcontent-ng-c835293001] {
  padding: 1rem 2rem;
  background:
    linear-gradient(
      135deg,
      var(--accent-color),
      var(--error-color));
  color: var(--surface-color);
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 1.5rem;
  position: relative;
  min-height: 54px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
}
.submit-button[_ngcontent-ng-c835293001]:hover:not(:disabled) {
  background:
    linear-gradient(
      135deg,
      var(--error-color),
      var(--accent-color));
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(var(--accent-color), 0.3);
}
.submit-button[_ngcontent-ng-c835293001]:disabled {
  background: #6b7280;
  cursor: not-allowed;
  transform: none;
  box-shadow: none;
}
.submit-button[_ngcontent-ng-c835293001]:active:not(:disabled) {
  transform: translateY(0);
}
.loading[_ngcontent-ng-c835293001] {
  display: flex;
  align-items: center;
  gap: 0.5rem;
}
.spinner[_ngcontent-ng-c835293001] {
  width: 16px;
  height: 16px;
  border: 2px solid transparent;
  border-top: 2px solid currentColor;
  border-radius: 50%;
  animation: _ngcontent-ng-c835293001_spin 1s linear infinite;
}
@keyframes _ngcontent-ng-c835293001_spin {
  to {
    transform: rotate(360deg);
  }
}
.contact-form[_ngcontent-ng-c835293001]   input[_ngcontent-ng-c835293001]:disabled, 
.contact-form[_ngcontent-ng-c835293001]   textarea[_ngcontent-ng-c835293001]:disabled {
  background: #f3f4f6;
  color: #6b7280;
  cursor: not-allowed;
  opacity: 0.7;
}
.contact-form[_ngcontent-ng-c835293001]   textarea[_ngcontent-ng-c835293001] {
  resize: vertical;
  min-height: 120px;
  flex: 1;
  height: 100%;
}
.contact-form[_ngcontent-ng-c835293001]   button[_ngcontent-ng-c835293001] {
  padding: 1rem 2rem;
  background:
    linear-gradient(
      135deg,
      var(--accent-color),
      var(--error-color));
  color: var(--surface-color);
  border: none;
  border-radius: 8px;
  font-size: 1.1rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-top: 1.5rem;
}
.contact-form[_ngcontent-ng-c835293001]   button[_ngcontent-ng-c835293001]:hover {
  background:
    linear-gradient(
      135deg,
      var(--error-color),
      var(--accent-color));
  transform: translateY(-2px);
  box-shadow: 0 5px 15px rgba(var(--accent-color), 0.3);
}
.contact-form[_ngcontent-ng-c835293001]   button[_ngcontent-ng-c835293001]:active {
  transform: translateY(0);
}
.button[_ngcontent-ng-c835293001] {
  padding: 0.5rem 1rem;
  border: none;
  outline: none;
  font-size: 1.1rem;
  border-radius: 8px;
  font-weight: 600;
  background:
    linear-gradient(
      135deg,
      var(--accent-color),
      var(--error-color));
  color: var(--surface-color);
  position: relative;
  overflow: hidden;
  cursor: pointer;
  transition: all 0.3s ease;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  display: block;
  width: fit-content;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);
}
.button[_ngcontent-ng-c835293001]   .text[_ngcontent-ng-c835293001] {
  position: relative;
  transition: all 0.3s ease;
  color: var(--surface-color);
  margin: 0;
  padding: 0;
  font-size: inherit;
  font-weight: inherit;
  left: 0;
  top: 0;
}
.svg[_ngcontent-ng-c835293001] {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%) translateY(-20px) rotate(30deg);
  opacity: 0;
  width: 1.5rem;
  height: 1.5rem;
  transition: all 0.3s ease;
}
.svg[_ngcontent-ng-c835293001]   svg[_ngcontent-ng-c835293001] {
  width: 100%;
  height: 100%;
  fill: var(--surface-color);
}
.button[_ngcontent-ng-c835293001]:hover {
  background:
    linear-gradient(
      135deg,
      var(--error-color),
      var(--accent-color));
  transform: translateY(-2px);
  box-shadow: 0 6px 20px rgba(var(--accent-color), 0.3);
}
.button[_ngcontent-ng-c835293001]:hover   .svg[_ngcontent-ng-c835293001] {
  transform: translate(-50%, -50%) translateY(0px) rotate(0deg);
  opacity: 1;
}
.button[_ngcontent-ng-c835293001]:hover   .text[_ngcontent-ng-c835293001] {
  opacity: 0;
}
.button[_ngcontent-ng-c835293001]:active {
  transform: translateY(0);
}
/*# sourceMappingURL=/personal-website/contact-section.component.css.map */</style></head>
  <body class="light-theme"><!--nghm--><script type="text/javascript" id="ng-event-dispatch-contract">(()=>{function p(t,n,r,o,e,i,f,m){return{eventType:t,event:n,targetElement:r,eic:o,timeStamp:e,eia:i,eirp:f,eiack:m}}function u(t){let n=[],r=e=>{n.push(e)};return{c:t,q:n,et:[],etc:[],d:r,h:e=>{r(p(e.type,e,e.target,t,Date.now()))}}}function s(t,n,r){for(let o=0;o<n.length;o++){let e=n[o];(r?t.etc:t.et).push(e),t.c.addEventListener(e,t.h,r)}}function c(t,n,r,o,e=window){let i=u(t);e._ejsas||(e._ejsas={}),e._ejsas[n]=i,s(i,r),s(i,o,!0)}window.__jsaction_bootstrap=c;})();
</script><script>window.__jsaction_bootstrap(document.body,"ng",["click","submit","input","compositionstart","compositionend"],["blur"]);</script>
    <app-root ng-version="19.2.14" _nghost-ng-c182244390="" ngh="1" ng-server-context="ssg"><div _ngcontent-ng-c182244390="" class="container dark-theme" style="display: flex;" ng-reflect-ng-class="dark-theme"><div _ngcontent-ng-c182244390="" class="matrix-container"><div _ngcontent-ng-c182244390="" class="matrix-grid"></div></div><div _ngcontent-ng-c182244390="" class="nav-bar"><app-navigation-bar _ngcontent-ng-c182244390="" _nghost-ng-c830932401="" ngh="0"><nav _ngcontent-ng-c830932401="" id="sidebar"><div _ngcontent-ng-c830932401="" class="logo-container"><img _ngcontent-ng-c830932401="" src="assets/img/logo.png" alt="logo" class="logo"><div _ngcontent-ng-c830932401="" class="brand-text">Portfolio</div></div><hr _ngcontent-ng-c830932401="" class="sidebar-separator"><ul _ngcontent-ng-c830932401=""><li _ngcontent-ng-c830932401="" data-section="welcome"><a _ngcontent-ng-c830932401="" style="cursor: pointer;" jsaction="click:;"><svg _ngcontent-ng-c830932401="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path _ngcontent-ng-c830932401="" d="M240-200h120v-200q0-17 11.5-28.5T400-440h160q17 0 28.5 11.5T600-400v200h120v-360L480-740 240-560v360Zm-80 0v-360q0-19 8.5-36t23.5-28l240-180q21-16 48-16t48 16l240 180q15 11 23.5 28t8.5 36v360q0 33-23.5 56.5T720-120H560q-17 0-28.5-11.5T520-160v-200h-80v200q0 17-11.5 28.5T400-120H240q-33 0-56.5-23.5T160-200Zm320-270Z"></path></svg><span _ngcontent-ng-c830932401="">Home</span></a></li><li _ngcontent-ng-c830932401="" data-section="about_me"><a _ngcontent-ng-c830932401="" style="cursor: pointer;" jsaction="click:;"><svg _ngcontent-ng-c830932401="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path _ngcontent-ng-c830932401="" d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm80 0h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"></path></svg><span _ngcontent-ng-c830932401="">About Me</span></a></li><li _ngcontent-ng-c830932401="" data-section="project"><a _ngcontent-ng-c830932401="" style="cursor: pointer;" jsaction="click:;"><svg _ngcontent-ng-c830932401="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path _ngcontent-ng-c830932401="" d="M120-480v-320q0-17 11.5-28.5T160-840h240q17 0 28.5 11.5T440-800v320q0 17-11.5 28.5T400-440H160q-17 0-28.5-11.5T120-480Zm400 320v-320q0-17 11.5-28.5T560-520h240q17 0 28.5 11.5T840-480v320q0 17-11.5 28.5T800-120H560q-17 0-28.5-11.5T520-160Zm-400 0v-160q0-17 11.5-28.5T160-360h240q17 0 28.5 11.5T440-320v160q0 17-11.5 28.5T400-120H160q-17 0-28.5-11.5T120-160Zm80-360h160v-240H200v240Zm400 320h160v-240H600v240Z"></path></svg><span _ngcontent-ng-c830932401="">Projects</span></a></li><li _ngcontent-ng-c830932401="" data-section="contact"><a _ngcontent-ng-c830932401="" style="cursor: pointer;" jsaction="click:;"><svg _ngcontent-ng-c830932401="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path _ngcontent-ng-c830932401="" d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm360-320L120-720v480h720v-480L480-480Zm0 80 360-240H120l360 240Z"></path></svg><span _ngcontent-ng-c830932401="">Contact Me</span></a></li></ul><div _ngcontent-ng-c830932401="" class="sidebar-bottom"><hr _ngcontent-ng-c830932401="" class="sidebar-separator"><button _ngcontent-ng-c830932401="" class="theme-toggle" jsaction="click:;"><svg _ngcontent-ng-c830932401="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" fill="#e8eaed"><path _ngcontent-ng-c830932401="" d="M480-360q50 0 85-35t35-85q0-50-35-85t-85-35q-50 0-85 35t-35 85q0 50 35 85t85 35Zm0 80q-83 0-141.5-58.5T280-480q0-83 58.5-141.5T480-680q83 0 141.5 58.5T680-480q0 83-58.5 141.5T480-280ZM200-440H40v-80h160v80Zm720 0H760v-80h160v80ZM440-760v-160h80v160h-80Zm0 720v-160h80v160h-80ZM256-650l-101-97 57-59 96 100-52 56Zm492 496-97-101 53-55 101 97-57 59Zm-98-550 97-101 59 57-100 96-56-52ZM154-212l101-97 55 53-97 101-59-57Zm326-268Z"></path></svg><!--bindings={
  "ng-reflect-ng-if": "true"
}--><!--bindings={
  "ng-reflect-ng-if": "false"
}--><span _ngcontent-ng-c830932401="">Dark Mode</span></button></div></nav></app-navigation-bar></div><div _ngcontent-ng-c182244390="" class="webpage"><section _ngcontent-ng-c182244390="" id="welcome"><app-welcome-section _ngcontent-ng-c182244390="" _nghost-ng-c1025075422="" ngh="1"><div _ngcontent-ng-c1025075422="" class="container"><div _ngcontent-ng-c1025075422="" class="glass"><div _ngcontent-ng-c1025075422="" class="text" style="display: flex; flex-direction: column;"><h1 _ngcontent-ng-c1025075422="" class="welcome-text">Hello! Welcome to Tonny Zhao's Portfolio.</h1><p _ngcontent-ng-c1025075422="" class="intro"> My name is Tonny, a student passionate about software development, specializing in front-end technologies like Angular. I enjoy creating responsive, user-friendly web applications. </p></div><section _ngcontent-ng-c1025075422="" class="profile"><div _ngcontent-ng-c1025075422="" class="box"><div _ngcontent-ng-c1025075422="" class="content"><div _ngcontent-ng-c1025075422="" class="img"><img _ngcontent-ng-c1025075422="" src="/assets/img/snorlax.png" alt="Profile Picture" class="profil-pic"></div><p _ngcontent-ng-c1025075422="" class="info">I have my Resume ready for download.</p><div _ngcontent-ng-c1025075422="" class="button"><a _ngcontent-ng-c1025075422="" href="/assets/doc/Tonny-Zhao-CV-Resume.pdf" target="_blank" class="anchor"><p _ngcontent-ng-c1025075422="">Download CV</p></a></div></div></div></section></div></div></app-welcome-section></section><section _ngcontent-ng-c182244390="" id="about_me"><app-about-me-section _ngcontent-ng-c182244390="" _nghost-ng-c2234282539="" ngh="2"><div _ngcontent-ng-c2234282539="" class="container"><div _ngcontent-ng-c2234282539="" class="glass"><section _ngcontent-ng-c2234282539="" class="about-me"><div _ngcontent-ng-c2234282539="" class="marquee"><div _ngcontent-ng-c2234282539="" class="marquee_header">About Me</div><div _ngcontent-ng-c2234282539="" id="timeline" class="marquee__inner"><div _ngcontent-ng-c2234282539="" class="marquee__group"><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">High School Education</h3><div _ngcontent-ng-c2234282539="" class="card-date"> 2015 - 2020 </div><!--bindings={
  "ng-reflect-ng-if": "2015 - 2020"
}--><p _ngcontent-ng-c2234282539="">Graduated with High School Diploma from Calixa-Lavallee High School in Montreal, Canada.</p><div _ngcontent-ng-c2234282539="" class="card-tech">Foundation Studies</div></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">College Education - DEC</h3><div _ngcontent-ng-c2234282539="" class="card-date"> 2020 - 2023 </div><!--bindings={
  "ng-reflect-ng-if": "2020 - 2023"
}--><p _ngcontent-ng-c2234282539="">Completed DEC in Computer Science and Mathematics at Vanier College, focusing on programming fundamentals and data structures.</p><div _ngcontent-ng-c2234282539="" class="card-tech">Java, Data Structures, Object-Oriented Programming</div></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">University Education - Bachelor</h3><div _ngcontent-ng-c2234282539="" class="card-date"> 2023 - 2027 </div><!--bindings={
  "ng-reflect-ng-if": "2023 - 2027"
}--><p _ngcontent-ng-c2234282539="">Currently pursuing Bachelor of Engineering in Computer Engineering at Concordia University. Member of the Co-operative Education Program (C.Edge).</p><div _ngcontent-ng-c2234282539="" class="card-tech">C++, Algorithms, Software Engineering, Computer Graphics</div></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">Professional Experience</h3><div _ngcontent-ng-c2234282539="" class="card-date"> 2017 - 2022 </div><!--bindings={
  "ng-reflect-ng-if": "2017 - 2022"
}--><p _ngcontent-ng-c2234282539="">Gained professional experience through private tutoring (2017-2019) and customer service at Best Buy (2022), developing communication and problem-solving skills.</p><div _ngcontent-ng-c2234282539="" class="card-tech">Customer Service, Team Leadership, Problem Solving</div></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">Recent Projects</h3><div _ngcontent-ng-c2234282539="" class="card-date"> 2022 - Present </div><!--bindings={
  "ng-reflect-ng-if": "2022 - Present"
}--><p _ngcontent-ng-c2234282539="">Developed multiple full-stack applications including ChatHaven (Angular/Node.js), Bluetooth LED Controller (ESP32/C++), and various simulation projects.</p><div _ngcontent-ng-c2234282539="" class="card-tech">Angular, Node.js, MongoDB, ESP32, C++, JavaFX</div></div></div></div><!--ng-container--><!--bindings={
  "ng-reflect-ng-for-of": "[object Object],[object Object"
}--></div><div _ngcontent-ng-c2234282539="" class="marquee__group"><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">High School Education</h3><div _ngcontent-ng-c2234282539="" class="card-date"> 2015 - 2020 </div><!--bindings={
  "ng-reflect-ng-if": "2015 - 2020"
}--><p _ngcontent-ng-c2234282539="">Graduated with High School Diploma from Calixa-Lavallee High School in Montreal, Canada.</p><div _ngcontent-ng-c2234282539="" class="card-tech">Foundation Studies</div></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">College Education - DEC</h3><div _ngcontent-ng-c2234282539="" class="card-date"> 2020 - 2023 </div><!--bindings={
  "ng-reflect-ng-if": "2020 - 2023"
}--><p _ngcontent-ng-c2234282539="">Completed DEC in Computer Science and Mathematics at Vanier College, focusing on programming fundamentals and data structures.</p><div _ngcontent-ng-c2234282539="" class="card-tech">Java, Data Structures, Object-Oriented Programming</div></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">University Education - Bachelor</h3><div _ngcontent-ng-c2234282539="" class="card-date"> 2023 - 2027 </div><!--bindings={
  "ng-reflect-ng-if": "2023 - 2027"
}--><p _ngcontent-ng-c2234282539="">Currently pursuing Bachelor of Engineering in Computer Engineering at Concordia University. Member of the Co-operative Education Program (C.Edge).</p><div _ngcontent-ng-c2234282539="" class="card-tech">C++, Algorithms, Software Engineering, Computer Graphics</div></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">Professional Experience</h3><div _ngcontent-ng-c2234282539="" class="card-date"> 2017 - 2022 </div><!--bindings={
  "ng-reflect-ng-if": "2017 - 2022"
}--><p _ngcontent-ng-c2234282539="">Gained professional experience through private tutoring (2017-2019) and customer service at Best Buy (2022), developing communication and problem-solving skills.</p><div _ngcontent-ng-c2234282539="" class="card-tech">Customer Service, Team Leadership, Problem Solving</div></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">Recent Projects</h3><div _ngcontent-ng-c2234282539="" class="card-date"> 2022 - Present </div><!--bindings={
  "ng-reflect-ng-if": "2022 - Present"
}--><p _ngcontent-ng-c2234282539="">Developed multiple full-stack applications including ChatHaven (Angular/Node.js), Bluetooth LED Controller (ESP32/C++), and various simulation projects.</p><div _ngcontent-ng-c2234282539="" class="card-tech">Angular, Node.js, MongoDB, ESP32, C++, JavaFX</div></div></div></div><!--ng-container--><!--bindings={
  "ng-reflect-ng-for-of": "[object Object],[object Object"
}--></div></div><div _ngcontent-ng-c2234282539="" class="marquee_header">Skills</div><div _ngcontent-ng-c2234282539="" id="skill" class="marquee__inner"><div _ngcontent-ng-c2234282539="" class="marquee__group"><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">Programming Languages</h3><p _ngcontent-ng-c2234282539="">Proficient in Java, C++, JavaScript, TypeScript, Python, and CSS/HTML for web development.</p></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">Full-Stack Development</h3><p _ngcontent-ng-c2234282539="">Experienced in building complete web applications using Angular, Node.js, MongoDB, and integrating various APIs (Gemini, Giphy, LinkPreview).</p></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">Database &amp; Systems</h3><p _ngcontent-ng-c2234282539="">Skilled in MongoDB database management, Linux system setup, and working with embedded systems like ESP32 and Raspberry Pi.</p></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">Development Tools &amp; Methodologies</h3><p _ngcontent-ng-c2234282539="">Proficient with Git/GitHub, Visual Studio Code, Agile methodology, and experienced in collaborative team environments.</p></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">Specialized Skills</h3><p _ngcontent-ng-c2234282539="">Experience with JavaFX development, machine learning (k-NN classifier), hardware programming, serial communication, and Microsoft Office Suite.</p></div></div></div><!--ng-container--><!--bindings={
  "ng-reflect-ng-for-of": "[object Object],[object Object"
}--></div><div _ngcontent-ng-c2234282539="" class="marquee__group"><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">Programming Languages</h3><p _ngcontent-ng-c2234282539="">Proficient in Java, C++, JavaScript, TypeScript, Python, and CSS/HTML for web development.</p></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">Full-Stack Development</h3><p _ngcontent-ng-c2234282539="">Experienced in building complete web applications using Angular, Node.js, MongoDB, and integrating various APIs (Gemini, Giphy, LinkPreview).</p></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">Database &amp; Systems</h3><p _ngcontent-ng-c2234282539="">Skilled in MongoDB database management, Linux system setup, and working with embedded systems like ESP32 and Raspberry Pi.</p></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">Development Tools &amp; Methodologies</h3><p _ngcontent-ng-c2234282539="">Proficient with Git/GitHub, Visual Studio Code, Agile methodology, and experienced in collaborative team environments.</p></div></div></div><!--ng-container--><div _ngcontent-ng-c2234282539="" class="card"><div _ngcontent-ng-c2234282539="" class="card2"><div _ngcontent-ng-c2234282539="" class="card-content"><h3 _ngcontent-ng-c2234282539="">Specialized Skills</h3><p _ngcontent-ng-c2234282539="">Experience with JavaFX development, machine learning (k-NN classifier), hardware programming, serial communication, and Microsoft Office Suite.</p></div></div></div><!--ng-container--><!--bindings={
  "ng-reflect-ng-for-of": "[object Object],[object Object"
}--></div></div></div></section></div></div></app-about-me-section></section><section _ngcontent-ng-c182244390="" id="project"><app-projects-section _ngcontent-ng-c182244390="" _nghost-ng-c3124859289="" ngh="3"><div _ngcontent-ng-c3124859289="" class="projects-section-container"><div _ngcontent-ng-c3124859289="" class="text"><h2 _ngcontent-ng-c3124859289="" class="section-title">Projects</h2><p _ngcontent-ng-c3124859289="" class="section-description"> Explore a selection of my personal and professional projects, showcasing technologies and skills I've worked with. </p></div><div _ngcontent-ng-c3124859289="" class="projects-grid"><div _ngcontent-ng-c3124859289="" class="project-card-background"><div _ngcontent-ng-c3124859289="" class="project-card"><div _ngcontent-ng-c3124859289="" class="project-default fade-in" ng-reflect-ng-class="[object Object]"><h3 _ngcontent-ng-c3124859289="">Upcoming: Personal Portfolio Redesign</h3><span _ngcontent-ng-c3124859289="" class="project-date">Nov 2025</span></div><!--bindings={
  "ng-reflect-ng-if": "false"
}--></div></div><div _ngcontent-ng-c3124859289="" class="project-card-background"><div _ngcontent-ng-c3124859289="" class="project-card"><div _ngcontent-ng-c3124859289="" class="project-default fade-in" ng-reflect-ng-class="[object Object]"><h3 _ngcontent-ng-c3124859289="">COMP353 - Database Systems Project</h3><span _ngcontent-ng-c3124859289="" class="project-date">Jul 2025</span></div><!--bindings={
  "ng-reflect-ng-if": "false"
}--></div></div><div _ngcontent-ng-c3124859289="" class="project-card-background"><div _ngcontent-ng-c3124859289="" class="project-card"><div _ngcontent-ng-c3124859289="" class="project-default fade-in" ng-reflect-ng-class="[object Object]"><h3 _ngcontent-ng-c3124859289="">ChatHaven</h3><span _ngcontent-ng-c3124859289="" class="project-date">Mar 2025</span></div><!--bindings={
  "ng-reflect-ng-if": "false"
}--></div></div><div _ngcontent-ng-c3124859289="" class="project-card-background"><div _ngcontent-ng-c3124859289="" class="project-card"><div _ngcontent-ng-c3124859289="" class="project-default fade-in" ng-reflect-ng-class="[object Object]"><h3 _ngcontent-ng-c3124859289="">COMP 371 - 3D Graphics Programming Project</h3><span _ngcontent-ng-c3124859289="" class="project-date">Mar 2025</span></div><!--bindings={
  "ng-reflect-ng-if": "false"
}--></div></div><div _ngcontent-ng-c3124859289="" class="project-card-background"><div _ngcontent-ng-c3124859289="" class="project-card"><div _ngcontent-ng-c3124859289="" class="project-default fade-in" ng-reflect-ng-class="[object Object]"><h3 _ngcontent-ng-c3124859289="">ESP32 LED Controller</h3><span _ngcontent-ng-c3124859289="" class="project-date">Jan 2025</span></div><!--bindings={
  "ng-reflect-ng-if": "false"
}--></div></div><div _ngcontent-ng-c3124859289="" class="project-card-background"><div _ngcontent-ng-c3124859289="" class="project-card"><div _ngcontent-ng-c3124859289="" class="project-default fade-in" ng-reflect-ng-class="[object Object]"><h3 _ngcontent-ng-c3124859289="">Temperature Converter</h3><span _ngcontent-ng-c3124859289="" class="project-date">Jan 2025</span></div><!--bindings={
  "ng-reflect-ng-if": "false"
}--></div></div><div _ngcontent-ng-c3124859289="" class="project-card-background"><div _ngcontent-ng-c3124859289="" class="project-card"><div _ngcontent-ng-c3124859289="" class="project-default fade-in" ng-reflect-ng-class="[object Object]"><h3 _ngcontent-ng-c3124859289="">Personal Portfolio Website</h3><span _ngcontent-ng-c3124859289="" class="project-date">Dec 2024</span></div><!--bindings={
  "ng-reflect-ng-if": "false"
}--></div></div><div _ngcontent-ng-c3124859289="" class="project-card-background"><div _ngcontent-ng-c3124859289="" class="project-card"><div _ngcontent-ng-c3124859289="" class="project-default fade-in" ng-reflect-ng-class="[object Object]"><h3 _ngcontent-ng-c3124859289="">LeetCode Solutions</h3><span _ngcontent-ng-c3124859289="" class="project-date">Jul 2024</span></div><!--bindings={
  "ng-reflect-ng-if": "false"
}--></div></div><div _ngcontent-ng-c3124859289="" class="project-card-background"><div _ngcontent-ng-c3124859289="" class="project-card"><div _ngcontent-ng-c3124859289="" class="project-default fade-in" ng-reflect-ng-class="[object Object]"><h3 _ngcontent-ng-c3124859289="">k-NN Classifier – Final Project</h3><span _ngcontent-ng-c3124859289="" class="project-date">Apr 2024</span></div><!--bindings={
  "ng-reflect-ng-if": "false"
}--></div></div><div _ngcontent-ng-c3124859289="" class="project-card-background"><div _ngcontent-ng-c3124859289="" class="project-card"><div _ngcontent-ng-c3124859289="" class="project-default fade-in" ng-reflect-ng-class="[object Object]"><h3 _ngcontent-ng-c3124859289="">Electricity &amp; Magnetism Simulation</h3><span _ngcontent-ng-c3124859289="" class="project-date">Dec 2022</span></div><!--bindings={
  "ng-reflect-ng-if": "false"
}--></div></div><div _ngcontent-ng-c3124859289="" class="project-card-background"><div _ngcontent-ng-c3124859289="" class="project-card"><div _ngcontent-ng-c3124859289="" class="project-default fade-in" ng-reflect-ng-class="[object Object]"><h3 _ngcontent-ng-c3124859289="">RetroPie Gaming Console on Raspberry Pi</h3><span _ngcontent-ng-c3124859289="" class="project-date">Oct 2022</span></div><!--bindings={
  "ng-reflect-ng-if": "false"
}--></div></div><!--bindings={
  "ng-reflect-ng-for-of": "[object Object],[object Object"
}--></div></div></app-projects-section></section><section _ngcontent-ng-c182244390="" id="contact"><app-contact-section _ngcontent-ng-c182244390="" _nghost-ng-c835293001="" ngh="4"><section _ngcontent-ng-c835293001="" class="contact-section"><div _ngcontent-ng-c835293001="" class="text"><h2 _ngcontent-ng-c835293001="">Contact Me</h2><p _ngcontent-ng-c835293001="" class="section-description"> Get in touch with me through any of the channels below or send me a message directly. Just provide your name and message! </p></div><div _ngcontent-ng-c835293001="" class="contact-flex"><div _ngcontent-ng-c835293001="" class="contact-info"><div _ngcontent-ng-c835293001="" class="contact-detail"><svg _ngcontent-ng-c835293001="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" class="contact-icon"><path _ngcontent-ng-c835293001="" d="M480-480q-66 0-113-47t-47-113q0-66 47-113t113-47q66 0 113 47t47 113q0 66-47 113t-113 47ZM160-240v-32q0-34 17.5-62.5T224-378q62-31 126-46.5T480-440q66 0 130 15.5T736-378q29 15 46.5 43.5T800-272v32q0 33-23.5 56.5T720-160H240q-33 0-56.5-23.5T160-240Zm80 0h480v-32q0-11-5.5-20T700-306q-54-27-109-40.5T480-360q-56 0-111 13.5T260-306q-9 5-14.5 14t-5.5 20v32Zm240-320q33 0 56.5-23.5T560-640q0-33-23.5-56.5T480-720q-33 0-56.5 23.5T400-640q0 33 23.5 56.5T480-560Zm0-80Zm0 400Z"></path></svg><span _ngcontent-ng-c835293001="" class="contact-label">Name:</span><span _ngcontent-ng-c835293001="" class="contact-value">Tonny Zhao</span></div><div _ngcontent-ng-c835293001="" class="contact-detail"><svg _ngcontent-ng-c835293001="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" class="contact-icon"><path _ngcontent-ng-c835293001="" d="M120-160q-33 0-56.5-23.5T40-240v-480q0-33 23.5-56.5T120-800h720q33 0 56.5 23.5T920-720v480q0 33-23.5 56.5T840-160H120Zm360-320L120-720v480h720v-480L480-480Zm0 80 360-240H120l360 240Z"></path></svg><span _ngcontent-ng-c835293001="" class="contact-label">Email:</span><a _ngcontent-ng-c835293001="" href="mailto:zhaotonny315@gmail.com" class="contact-value">zhaotonny315@gmail.com</a></div><div _ngcontent-ng-c835293001="" class="contact-detail"><svg _ngcontent-ng-c835293001="" xmlns="http://www.w3.org/2000/svg" height="24px" viewBox="0 -960 960 960" width="24px" class="contact-icon"><path _ngcontent-ng-c835293001="" d="M798-120q-125 0-247-54.5T329-329Q229-429 174.5-551T120-798q0-18 12-30t30-12h162q14 0 25 9.5t13 22.5l26 140q2 16-1 27t-11 19l-97 98q20 37 47.5 71.5T387-386q31 31 65 57.5t72 48.5l94-94q9-9 23.5-13.5T670-390l138 28q14 4 23 14.5t9 23.5v162q0 18-12 30t-30 12ZM241-600l66-66-17-94h-89q5 41 14 81t26 79Zm358 358q39 17 79.5 27t81.5 13v-88l-94-19-67 67ZM241-600Zm358 358Z"></path></svg><span _ngcontent-ng-c835293001="" class="contact-label">Phone:</span><span _ngcontent-ng-c835293001="" class="contact-value">579.421.6532</span></div><div _ngcontent-ng-c835293001="" class="contact-detail"><svg _ngcontent-ng-c835293001="" xmlns="http://www.w3.org/2000/svg" viewBox="0 -2 44 44" version="1.1" class="contact-icon"><g _ngcontent-ng-c835293001="" stroke="none" stroke-width="1"><g _ngcontent-ng-c835293001="" transform="translate(-702.000000, -265.000000)"><path _ngcontent-ng-c835293001="" d="M746,305 L736.2754,305 L736.2754,290.9384 C736.2754,287.257796 734.754233,284.74515 731.409219,284.74515 C728.850659,284.74515 727.427799,286.440738 726.765522,288.074854 C726.517168,288.661395 726.555974,289.478453 726.555974,290.295511 L726.555974,305 L716.921919,305 C716.921919,305 717.046096,280.091247 716.921919,277.827047 L726.555974,277.827047 L726.555974,282.091631 C727.125118,280.226996 730.203669,277.565794 735.116416,277.565794 C741.21143,277.565794 746,281.474355 746,289.890824 L746,305 L746,305 Z M707.17921,274.428187 L707.117121,274.428187 C704.0127,274.428187 702,272.350964 702,269.717936 C702,267.033681 704.072201,265 707.238711,265 C710.402634,265 712.348071,267.028559 712.41016,269.710252 C712.41016,272.34328 710.402634,274.428187 707.17921,274.428187 L707.17921,274.428187 L707.17921,274.428187 Z M703.109831,277.827047 L711.685795,277.827047 L711.685795,305 L703.109831,305 L703.109831,277.827047 L703.109831,277.827047 Z"></path></g></g></svg><span _ngcontent-ng-c835293001="" class="contact-label">LinkedIn:</span><a _ngcontent-ng-c835293001="" href="https://www.linkedin.com/in/tonny-zhao/" target="_blank" class="contact-value">linkedin.com/in/tonny-zhao</a></div><div _ngcontent-ng-c835293001="" class="contact-detail"><svg _ngcontent-ng-c835293001="" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 496 512" height="1.6em" class="contact-icon"><path _ngcontent-ng-c835293001="" d="M165.9 397.4c0 2-2.3 3.6-5.2 3.6-3.3.3-5.6-1.3-5.6-3.6 0-2 2.3-3.6 5.2-3.6 3-.3 5.6 1.3 5.6 3.6zm-31.1-4.5c-.7 2 1.3 4.3 4.3 4.9 2.6 1 5.6 0 6.2-2s-1.3-4.3-4.3-5.2c-2.6-.7-5.5.3-6.2 2.3zm44.2-1.7c-2.9.7-4.9 2.6-4.6 4.9.3 2 2.9 3.3 5.9 2.6 2.9-.7 4.9-2.6 4.6-4.6-.3-1.9-3-3.2-5.9-2.9zM244.8 8C106.1 8 0 113.3 0 252c0 110.9 69.8 205.8 169.5 239.2 12.8 2.3 17.3-5.6 17.3-12.1 0-6.2-.3-40.4-.3-61.4 0 0-70 15-84.7-29.8 0 0-11.4-29.1-27.8-36.6 0 0-22.9-15.7 1.6-15.4 0 0 24.9 2 38.6 25.8 21.9 38.6 58.6 27.5 72.9 20.9 2.3-16 8.8-27.1 16-33.7-55.9-6.2-112.3-14.3-112.3-110.5 0-27.5 7.6-41.3 23.6-58.9-2.6-6.5-11.1-33.3 2.6-67.9 20.9-6.5 69 27 69 27 20-5.6 41.5-8.5 62.8-8.5s42.8 2.9 62.8 8.5c0 0 48.1-33.6 69-27 13.7 34.7 5.2 61.4 2.6 67.9 16 17.7 25.8 31.5 25.8 58.9 0 96.5-58.9 104.2-114.8 110.5 9.2 7.9 17 22.9 17 46.4 0 33.7-.3 75.4-.3 83.6 0 6.5 4.6 14.4 17.3 12.1C428.2 457.8 496 362.9 496 252 496 113.3 383.5 8 244.8 8zM97.2 352.9c-1.3 1-1 3.3.7 5.2 1.6 1.6 3.9 2.3 5.2 1 1.3-1 1-3.3-.7-5.2-1.6-1.6-3.9-2.3-5.2-1zm-10.8-8.1c-.7 1.3.3 2.9 2.3 3.9 1.6 1 3.6.7 4.3-.7.7-1.3-.3-2.9-2.3-3.9-2-.6-3.6-.3-4.3.7zm32.4 35.6c-1.6 1.3-1 4.3 1.3 6.2 2.3 2.3 5.2 2.6 6.5 1 1.3-1.3.7-4.3-1.3-6.2-2.2-2.3-5.2-2.6-6.5-1zm-11.4-14.7c-1.6 1-1.6 3.6 0 5.9 1.6 2.3 4.3 3.3 5.6 2.3 1.6-1.3 1.6-3.9 0-6.2-1.4-2.3-4-3.3-5.6-2z"></path></svg><span _ngcontent-ng-c835293001="" class="contact-label">GitHub:</span><a _ngcontent-ng-c835293001="" href="https://github.com/TheLonelyOtaku315" target="_blank" class="contact-value">github.com/TheLonelyOtaku315</a></div></div><div _ngcontent-ng-c835293001="" class="contact-form-wrapper"><form _ngcontent-ng-c835293001="" novalidate="" class="contact-form ng-untouched ng-pristine ng-invalid" jsaction="submit:;"><!--bindings={
  "ng-reflect-ng-if": ""
}--><!--bindings={
  "ng-reflect-ng-if": "false"
}--><label _ngcontent-ng-c835293001="" for="name">Name</label><input _ngcontent-ng-c835293001="" id="name" name="name" type="text" required="" ng-reflect-required="" ng-reflect-name="name" class="ng-untouched ng-pristine ng-invalid" ng-reflect-model="" ng-reflect-is-disabled="false" value="" jsaction="input:;blur:;compositionstart:;compositionend:;"><label _ngcontent-ng-c835293001="" for="message">Message</label><textarea _ngcontent-ng-c835293001="" id="message" name="message" rows="4" required="" ng-reflect-required="" ng-reflect-name="message" class="ng-untouched ng-pristine ng-invalid" ng-reflect-model="" ng-reflect-is-disabled="false" jsaction="input:;blur:;compositionstart:;compositionend:;"></textarea><button _ngcontent-ng-c835293001="" type="submit" class="submit-button"><span _ngcontent-ng-c835293001="">Send Notification</span><!--bindings={
  "ng-reflect-ng-if": "true"
}--><!--bindings={
  "ng-reflect-ng-if": "false"
}--></button></form></div></div></section></app-contact-section></section><footer _ngcontent-ng-c182244390=""><div _ngcontent-ng-c182244390="" class="footer"><p _ngcontent-ng-c182244390="" style="text-align: center;"> © 2023 Tonny Zhao. All rights reserved. </p></div></footer></div></div></app-root>
  <script src="polyfills.js" type="module"></script><script src="main.js" type="module"></script>

<script id="ng-state" type="application/json">{"__nghData__":[{"t":{"34":"t0","35":"t1"},"c":{"34":[{"i":"t0","r":1}],"35":[]}},{},{"t":{"8":"t2","10":"t4","15":"t6","17":"t7"},"c":{"8":[{"i":"t2","r":2,"e":{"0":1},"t":{"6":"t3"},"c":{"6":[{"i":"t3","r":1}]},"x":5}],"10":[{"i":"t4","r":2,"e":{"0":1},"t":{"6":"t5"},"c":{"6":[{"i":"t5","r":1}]},"x":5}],"15":[{"i":"t6","r":2,"e":{"0":1},"x":5}],"17":[{"i":"t7","r":2,"e":{"0":1},"x":5}]}},{"t":{"7":"t8"},"c":{"7":[{"i":"t8","r":1,"t":{"8":"t9"},"c":{"8":[]},"x":11}]}},{"t":{"48":"t10","49":"t11","57":"t12","58":"t13"},"c":{"48":[],"49":[],"57":[{"i":"t12","r":1}],"58":[]}}]}</script></body></html>`;
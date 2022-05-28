import "./asset-styles.css";

export default function NavDesktop(props) {


  return (
    <div className="nav-desktop">
        <section className="upper">
          <div className="logo-sec">
            <img src="" alt="logo" />
            <span className="display-semibold-sm text-dark-blue">Daastan</span>
          </div>
          <div className="search-bar">
            <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M16.5 16.5L12.875 12.875M14.8333 8.16667C14.8333 11.8486 11.8486 14.8333 8.16667 14.8333C4.48477 14.8333 1.5 11.8486 1.5 8.16667C1.5 4.48477 4.48477 1.5 8.16667 1.5C11.8486 1.5 14.8333 4.48477 14.8333 8.16667Z" stroke="#668585" stroke-width="1.66667" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            <input type="text" placeholder="Search titles, authors..." />
          </div>
          <div className="icon-menu"></div>
        </section>
        <div className="hr" style={{width:"100%"}}></div>
        <section className="lower">
          

        </section>
    </div>
  );
}

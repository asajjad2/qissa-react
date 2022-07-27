import NavDesktop from "./Assets/NavDesktop";
import BreadCrumbs from "./Assets/BreadCrumbs";
import Footer from "./Assets/Footer";
import JobPost from "./Assets/JobPost";

import "./Careers.scss";
import navLinks from "./Data/NavLinks";

import JobPosts from "./Data/JobPosts";

export default function Careers(){

  let pathItems = ["Careers"];


  return (
    <div className="careers">

        <NavDesktop navLinks={navLinks}/>

        <div className="ml200">
          <BreadCrumbs  pathItems={pathItems}/>
        </div>

        <div className="info">
          <h2 className="display-md semibold">Careers</h2>
          <p className="text-md medium text-gray">Nullam at feugiat lectus. Nunc tempus nulla non eros iaculis, varius sollicitudin turpis ultrices. Pellentesque faucibus nec ex non consequat.</p>
        </div>

        <main>
          {
            JobPosts.map((post,index)=>{
              return (        
                <div>
                  <JobPost 
                    title={post.title} 
                    type={post.type} 
                    desc={post.desc} 
                    location={post.location} 
                    time={post.time}
                  />
                  {(index!==JobPosts.length-1)?(<div className="hr"></div>):(null)}
                </div>      
                
              );
            })
          }
        </main>

        <Footer />

    </div>
  )
}

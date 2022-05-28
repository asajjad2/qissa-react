
import "./asset-styles.css";

export default function StatsCard({ stats }) {

  const statList = stats.map((stat,index)=>{
    return (
      <li>
        <div className="info">
          <div className="num">{stat.numeric}</div>
          <div className="about">{stat.about}</div>
        </div>
        {(index!==stats.length-1)?(<div className="vr"></div>):(null)}
      </li>
      
    );
  })

  return (
    <div className="stats-card">
      {statList}
    </div>
  );
}

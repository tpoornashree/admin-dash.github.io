import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">New Joinees</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f2bc44a9d75daf5b21e45cde9e96808ea899ee4bee518cb1fa41fe894eff0cbc._RI_V_TTW_.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">belle jobs</span>
            <span className="widgetSmUserTitle">Software Engineer</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Show
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f2bc44a9d75daf5b21e45cde9e96808ea899ee4bee518cb1fa41fe894eff0cbc._RI_V_TTW_.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">balaji m</span>
            <span className="widgetSmUserTitle">Programamer analyst</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Show
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f2bc44a9d75daf5b21e45cde9e96808ea899ee4bee518cb1fa41fe894eff0cbc._RI_V_TTW_.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">shoby anand</span>
            <span className="widgetSmUserTitle">HR manager</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Show
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f2bc44a9d75daf5b21e45cde9e96808ea899ee4bee518cb1fa41fe894eff0cbc._RI_V_TTW_.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Vijaykumar Avinash</span>
            <span className="widgetSmUserTitle">Accountant</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Show
          </button>
        </li>
        <li className="widgetSmListItem">
          <img
            src="https://images-na.ssl-images-amazon.com/images/S/pv-target-images/f2bc44a9d75daf5b21e45cde9e96808ea899ee4bee518cb1fa41fe894eff0cbc._RI_V_TTW_.png"
            alt=""
            className="widgetSmImg"
          />
          <div className="widgetSmUser">
            <span className="widgetSmUsername">Matharasi</span>
            <span className="widgetSmUserTitle">Space scientist</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
      Show
          </button>
        </li>
      </ul>
    </div>
  );
}
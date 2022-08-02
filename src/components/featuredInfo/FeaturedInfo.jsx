import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";

export default function FeaturedInfo() {
  return (
    <div className="featured">
      <div className="featuredItem">
        <span className="featuredTitle">Profit</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,415</span>
          <span className="featuredMoneyRate">
            -21.4 <ArrowDownward  className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">On comparing to previous month. </span>
        <span className="featuredSub">Price hikes, which offset high input costs, and lower promotional expenses helped 
        ThinkBig Drives India post a 57.7% year-on-year growth in its consolidated net profit at Rs 1,838.90 crore during the January-March quarter, beating analysts estimates. </span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Dealings</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$4,415</span>
          <span className="featuredMoneyRate">
            -1.5 <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">On comparing to previous month. </span>
        <span className="featuredSub">Our earnings from the exports now are about $880 million. 
        Whereas what we import now has come down to $350 million. Partly, this reduction in imports is because all our royalties are now paid in rupees and not in foreign currency.</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Price</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$2,225</span>
          <span className="featuredMoneyRate">
            +3.2 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">On comparing to previous month. </span>
        <span className="featuredSub">The prices at the lower end of the market have increased proportionately by such a figure that a lot of customers have dropped out of the market.
         They can’t afford personal transport now or they can’t afford a four-wheeler transport. They have to go for two-wheelers</span>
      </div>
      <div className="featuredItem">
        <span className="featuredTitle">Investors</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">$6,415</span>
          <span className="featuredMoneyRate">
            +3.5 <ArrowUpward className="featuredIcon"/>
          </span>
        </div>
        <span className="featuredSub">On comparing to previous month. </span>
        <span className="featuredSub">At the same time, many millennials want a reduced car ownership period, which makes used cars more suitable. With more people opting for second-hand cars, 
        the touch sales will grow to over 70 lakh vehicles by 2025, and with that, funding will increase simultaneously.
        </span>
        </div>
    </div>
  );
}
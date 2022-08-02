import "./widgetLg.css";

export default function WidgetLg() {
  const Button = ({ type }) => {
    return <button className={"widgetLgButton " + type}>{type}</button>;
  };
  return (
    <div className="widgetLg">
      <h3 className="widgetLgTitle">Latest Transaction Proceedings</h3>
      <table className="widgetLgTable">
        <tr className="widgetLgTr">
          <th className="widgetLgTh">Buyer</th>
          <th className="widgetLgTh">Date</th>
          <th className="widgetLgTh">Cost</th>
          <th className="widgetLgTh">Status</th>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://thecinemaholic.com/wp-content/uploads/2018/08/Rick-Sanchez-Rick-and-morty.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Paro Jamal</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://thecinemaholic.com/wp-content/uploads/2018/08/Rick-Sanchez-Rick-and-morty.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Sunny venkat</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Declined" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://thecinemaholic.com/wp-content/uploads/2018/08/Rick-Sanchez-Rick-and-morty.jpg"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Morty Jerry</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Pending" />
          </td>
        </tr>
        <tr className="widgetLgTr">
          <td className="widgetLgUser">
            <img
              src="https://i0.wp.com/reviewfix.com/wp-content/uploads/2018/06/flat800x800075f.u1.jpg?resize=316%2C421"
              alt=""
              className="widgetLgImg"
            />
            <span className="widgetLgName">Tom hanks</span>
          </td>
          <td className="widgetLgDate">2 Jun 2021</td>
          <td className="widgetLgAmount">$122.00</td>
          <td className="widgetLgStatus">
            <Button type="Approved" />
          </td>
        </tr>
      </table>
    </div>
  );
}
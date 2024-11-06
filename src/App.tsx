import { getNorPresent, getNorPast } from "./nor";
import { getNorNoriPresent, getNorNoriPast } from "./norNori";
import { getNorNorkPresent, getNorNorkPast } from "./norNork";
import { getNorNoriNorkPresent, getNorNoriNorkPast } from "./norNoriNork";
import { Nor } from "./pronoms";
import "./styles.css";

export default function App() {
  const present = {
    nor: getNorPresent(),
    norNori: getNorNoriPresent("lagundu"),
    norNork: getNorNorkPresent("ikusi"),
    norNoriNork: getNorNoriNorkPresent("eman"),
  };

  const past = {
    nor: getNorPast(),
    norNori: getNorNoriPast("lagundu"),
    norNork: getNorNorkPast("ikusi"),
    norNoriNork: getNorNoriNorkPast("eman"),
  };

  const list = [
    ...present.nor,
    ...past.nor,
    ...present.norNork,
    ...present.norNori,
    ...past.norNori,
    ...present.norNoriNork,
  ];

  return (
    <div className="App">
      {/* <div>
        <pre>{JSON.stringify(list, null, 2)}</pre>
      </div> */}
      <table>
        <tr>
          <th>Id</th>
          <th>Type</th>
          <th>Time</th>
          <th>Nork</th>
          <th>Nori</th>
          <th>Nor</th>
          <th>Verb</th>
          <th>Aux</th>
          <th>Example</th>
        </tr>
        {list
          .filter((row) => row.nor !== Nor.Hi)
          .map((row, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{row.type}</td>
              <td>{row.time}</td>
              <td>{row.nork}</td>
              <td>{row.nork}</td>
              <td>{row.nori}</td>
              <td>{row.nor}</td>
              <td>{row.verb}</td>
              <td>{row.aux}</td>
              <td>{row.example ?? "-"}</td>
            </tr>
          ))}
      </table>
    </div>
  );
}

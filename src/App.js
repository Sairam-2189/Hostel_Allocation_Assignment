
import { useState } from "react";
import React from "react";

function G(props) {
  const [room, setroom] = useState(0);
  return (
    <>
      <div style={{ display: room ? "none" : "inlineBlock" }}>
        <button
          onClick={() => {
            setroom(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setroom(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setroom(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setroom(4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setroom(5);
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            setroom(6);
          }}
        >
          6
        </button>
      </div>
      {room ? (
        <h1>
          room={room} hostel={props.hostel}
        </h1>
      ) : null}
    </>
  );
}
function B(props) {
  const [room, setroom] = useState(0);
  return (
    <>
      <div style={{ display: room ? "none" : "inlineBlock" }}>
        <button
          onClick={() => {
            setroom(1);
          }}
        >
          1
        </button>
        <button
          onClick={() => {
            setroom(2);
          }}
        >
          2
        </button>
        <button
          onClick={() => {
            setroom(3);
          }}
        >
          3
        </button>
        <button
          onClick={() => {
            setroom(4);
          }}
        >
          4
        </button>
        <button
          onClick={() => {
            setroom(5);
          }}
        >
          5
        </button>
        <button
          onClick={() => {
            setroom(6);
          }}
        >
          6
        </button>
      </div>
      {room ? (
        <h1>
          room={room} hostel={props.hostel}
        </h1>
      ) : null}
    </>
  );
}

class Girl extends React.Component {
  state = { booked: false, hostel: "", username: "" };

  render() {
    let x = 1;
    return (
      <>
        <div style={{ display: this.state.booked ? "none" : "inlineBlock" }}>
          <button
            className="G1"
            onClick={() => {
              this.setState({ booked: true, hostel: "G1" });
            }}
            style={{ float: "left" }}
          >
            G1
          </button>
          <button
            onClick={() => {
              this.setState({ booked: true, hostel: "G2" });
            }}
            className="G2"
            style={{ float: "left" }}
          >
            G2
          </button>
          <button
            onClick={() => {
              this.setState({ booked: true, hostel: "G3" });
            }}
            className="G3"
            style={{ float: "left" }}
          >
            G3
          </button>
          <button
            onClick={() => {
              this.setState({ booked: true, hostel: "G4" });
            }}
            className="G4"
            style={{ float: "left" }}
          >
            G4
          </button>
          <button
            onClick={() => {
              this.setState({ booked: true, hostel: "G5" });
            }}
            className="G5"
            style={{ float: "left" }}
          >
            G5
          </button>
          <button
            onClick={() => {
              this.setState({ booked: true, hostel: "G6" });
            }}
            className="G6"
            style={{ float: "left" }}
          >
            G6
          </button>
        </div>
        {this.state.booked ? <G hostel={this.state.hostel} /> : null}
      </>
    );
  }
}
class Boy extends React.Component {
  state = { booked: false, hostel: "", username: "" };

  render() {
    let x = 1;
    return (
      <>
        <div style={{ display: this.state.booked ? "none" : "inlineBlock" }}>
          <button
            className="B1"
            onClick={() => {
              this.setState({ booked: true, hostel: "B1" });
            }}
            style={{ float: "left" }}
          >
            B1
          </button>
          <button
            onClick={() => {
              this.setState({ booked: true, hostel: "B2" });
            }}
            className="B2"
            style={{ float: "left" }}
          >
            B2
          </button>
          <button
            onClick={() => {
              this.setState({ booked: true, hostel: "B3" });
            }}
            className="B3"
            style={{ float: "left" }}
          >
            B3
          </button>
          <button
            onClick={() => {
              this.setState({ booked: true, hostel: "B4" });
            }}
            className="B4"
            style={{ float: "left" }}
          >
            B4
          </button>
          <button
            onClick={() => {
              this.setState({ booked: true, hostel: "B5" });
            }}
            className="B5"
            style={{ float: "left" }}
          >
            B5
          </button>
          <button
            onClick={() => {
              this.setState({ booked: true, hostel: "B6" });
            }}
            className="G6"
            style={{ float: "left" }}
          >
            B6
          </button>
        </div>
        {this.state.booked ? <B hostel={this.state.hostel} /> : null}
      </>
    );
  }
}
export default function App() {
  let [bg, setbg] = useState("");
  let [usr, setusr] = useState("");
  let [user, set] = useState("");
  return (
    <>
      <div style={{ display: bg == "" ? "block" : "none" }}>
        <button
          onClick={() => {
            setbg("boy");
          }}
        >
         Boy
        </button>
        <button
          onClick={() => {
            setbg("girl");
          }}
        >
          Girl
        </button>
      </div>
      {bg == "" ? null : bg == "boy" ? <Boy /> : <Girl />}
    </>
  );
}


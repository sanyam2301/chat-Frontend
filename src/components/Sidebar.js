import React from "react";
import { ListGroup } from "react-bootstrap";
function Sidebar() {
  const rooms = ["First", "Second", "Third"];
  return (
    <>
      <h2>Available Rooms</h2>
      <ListGroup>
        {rooms.map((room, idx) => {
          return <ListGroup.Item key={idx}>{room}</ListGroup.Item>;
        })}
      </ListGroup>
      <h2>Members</h2>
      {/* add data for members */}
    </>
  );
}

export default Sidebar;

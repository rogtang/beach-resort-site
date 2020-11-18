import React from "react";
import RoomFilter from "./RoomFilter";
import RoomList from "./RoomList";
import { withRoomConsumer } from "../context";
import Loading from "./Loading";

//using Higher-Order Components to access context
function RoomsContainer({context}) {
    const {loading, sortedRooms, rooms} = context
    if (loading) {
                    return <Loading/>
                }
                return (
                  <>
                    <RoomFilter rooms={rooms} />
                    <RoomList rooms={sortedRooms} />
                  </>
                );

}
export default withRoomConsumer(RoomsContainer)

//using Render Props to access context
// export default function RoomsContainer() {
//   return (
//     <RoomConsumer>
//       {(value) => {
//           const {loading, sortedRooms, rooms} = value
//         if (loading) {
//             return <Loading/>
//         }
//         return (
//           <div>
//             <RoomFilter rooms={rooms} />
//             <RoomList rooms={sortedRooms} />
//           </div>
//         );
//       }}
//     </RoomConsumer>
//   );
// }

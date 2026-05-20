import RoomCard from "./RoomCard";

export default function RoomsGrid({ rooms }) {
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
            {rooms.map((room) => (
                <RoomCard
                    key={room.id}
                    room={room}
                />
            ))}
        </div>
    );
}
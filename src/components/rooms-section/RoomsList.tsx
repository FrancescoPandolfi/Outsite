import React from 'react';
import RoomsItem from "./RoomsItem";

const RoomsList = () => {
  return (
    <div className="pb-10">
      <div className="flex justify-between items-center mb-2">
        <h3 className="text-3xl leading-9 font-semibold text-gray-900">
          Private Rooms
        </h3>
        <div className="text-gray-500"><span>Sep 16</span> - <span>Oct 13, 2021</span>
        </div>
      </div>
      <div className="space-y-4">
      <RoomsItem />
      <RoomsItem />
      <RoomsItem />
      <RoomsItem />
      <RoomsItem />
      <RoomsItem />
      </div>
    </div>
  );
};

export default RoomsList;

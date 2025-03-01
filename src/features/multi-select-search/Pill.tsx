import { User } from "@/app/multi-select-search/page";
import Image from "next/image";
import React from "react";

const Pill = ({
  user,
  onClick,
}: {
  user: User;
  onClick: (user: User) => void;
}) => {
  return (
    <div className="bg-black text-white rounded-lg py-1 px-2">
      <div className="flex items-center justify-start gap-2">
        <Image
          className="rounded-full"
          width={30}
          height={30}
          src={user.image}
          alt="user-image"
        />
        {user.firstName} {user.lastName}
        <div
          className="bg-white cursor-pointer text-black rounded-full w-6 h-6 flex items-center justify-center"
          onClick={() => onClick(user)}
        >
          X
        </div>
      </div>
    </div>
  );
};

export default Pill;

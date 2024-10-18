import React from "react";
import { AiFillDelete, AiOutlineDelete } from "react-icons/ai";
import { PiSpinnerGap } from "react-icons/pi";

interface DeleteButtonProps {
  loading: boolean;
}

export default function DeleteButton({ loading }: DeleteButtonProps) {
  return (
    <div className="relative cursor-pointer transition hover:opacity-80">
      {!loading ? (
        <>
          <AiOutlineDelete
            size={32}
            className="absolute -right-[2px] -top-[2px] fill-white"
          />
          <AiFillDelete size={28} className="fill-red-600" />
        </>
      ) : (
        <PiSpinnerGap size={32} className="animate-spin fill-white" />
      )}
    </div>
  );
}

import React from "react";
import { IoMdClose } from "react-icons/io";

export function Modal({ title, images, pdfUrl, isOpen, setIsOpen }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white w-11/12 max-w-lg h-[80vh] rounded shadow-lg relative flex flex-col">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-lg font-semibold">{title}</h2>
          <button
            onClick={() => setIsOpen(false)}
            className="text-gray-700 hover:text-red-500 text-2xl"
          >
            <IoMdClose />
          </button>
        </div>

        <div className="p-4 overflow-y-auto flex-1">
          {pdfUrl ? (
            <iframe
              src={pdfUrl}
              title={title}
              className="w-full h-full"
            ></iframe>
          ) : (
            images?.map((src, idx) => (
              <img
                key={idx}
                src={src}
                alt={`Image ${idx + 1}`}
                className="w-full object-cover rounded mb-4"
              />
            ))
          )}
        </div>
      </div>
    </div>
  );
}

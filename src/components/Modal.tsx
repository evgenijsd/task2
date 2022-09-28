import React from 'react';

interface ModalProps {
    children: React.ReactNode
    onClose: () => void
  }

export function Modal({ children, onClose }: ModalProps) {
   
    return (
        <>
            <div id="close_modal" onClick={onClose}>+</div>

            <div
                className="w-[500px] p-5 rounded bg-white absolute top-10 left-1/2 -translate-x-1/2"
            >
                { children }
            </div>
        </> 
    )
}

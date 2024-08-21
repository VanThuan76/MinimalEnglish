'use client';

import Image from 'next/image';
import React from 'react';

const CopyPathnameButton = () => {
    const handleCopy = () => {
        const pathname = window.location.pathname;

        navigator.clipboard.writeText(pathname)
            .then(() => {
                alert('Pathname copied to clipboard: ' + pathname);
            })
            .catch(err => {
                console.error('Failed to copy: ', err);
            });
    };

    return (
        <button onClick={() => { handleCopy() }} className="w-8 h-8 rounded-full border border-[#98A2B3] flex justify-center items-center">
            <div className="relative w-5 h-5 overflow-hidden">
                <Image
                    priority={true}
                    fill
                    style={{ objectFit: "cover" }}
                    src="/images/link-circle.png"
                    alt=""
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />
            </div>
        </button>
    );
};

export default CopyPathnameButton;

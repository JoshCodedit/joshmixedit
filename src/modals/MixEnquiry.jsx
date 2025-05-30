import React, { useState, useEffect, useRef } from 'react';

export function MixEnquiry({ isOpen, onClose }) {
  const overlayRef = useRef(null);

  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const onSubmit = (e) => {
    e.preventDefault();
    // handle form submission here
    onClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === overlayRef.current) {
      onClose();
    }
  };

  return (
    <div
      ref={overlayRef}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
      onClick={handleOverlayClick}
    >
      <div
        className="bg-white text-black p-6 rounded-lg shadow-lg max-w-md w-full relative"
        onClick={(e) => e.stopPropagation()}
      >
        {/* X Close Button */}
        <button
          onClick={onClose}
          className="absolute top-3 right-3 text-gray-500 hover:text-gray-800 text-2xl font-bold focus:outline-none"
          aria-label="Close"
        >
          &times;
        </button>
        <h2 className="text-xl font-semibold mb-4">Mix Enquiry</h2>
        <form onSubmit={onSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              required
              className="w-full px-3 py-2 border rounded"
            />
            <input type="hidden" value="mix-enquiry" />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Link To Demo Mix
            </label>
            <input
              type="email"
              required
              className="w-full px-3 py-2 border rounded"
            />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              More Information
            </label>
            <textarea
              required
              className="w-full px-3 py-2 border rounded"
              rows="4"
            ></textarea>
          </div>
          <button
            type="submit"
            className="bg-crimson text-white px-4 py-2 rounded hover:bg-crimson-dark transition-colors"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

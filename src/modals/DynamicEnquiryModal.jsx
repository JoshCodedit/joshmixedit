import React, { useState, useEffect, useRef } from 'react';

export function DynamicEnquiryModal({
  isOpen,
  onClose,
  onSubmit,
  title,
  hiddenValue,
}) {
  const overlayRef = useRef(null);

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [demoLink, setDemoLink] = useState('');
  const [message, setMessage] = useState('');
  const [demoLinkError, setDemoLinkError] = useState('');
  const [emailError, setEmailError] = useState('');

  useEffect(() => {
    if (!isOpen) {
      setName('');
      setEmail('');
      setDemoLink('');
      setMessage('');
      setDemoLinkError('');
      setEmailError('');
    }
  }, [isOpen]);

  if (!isOpen) return null;

  const isValidUrl = (url) => {
    try {
      new URL(url);
      return true;
    } catch {
      return false;
    }
  };

  const isValidEmail = (email) => {
    // Simple email regex
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    let valid = true;

    if (!isValidUrl(demoLink)) {
      setDemoLinkError(
        'Please enter a valid URL (including http:// or https://)'
      );
      valid = false;
    } else {
      setDemoLinkError('');
    }

    if (!isValidEmail(email)) {
      setEmailError('Please enter a valid email address');
      valid = false;
    } else {
      setEmailError('');
    }

    if (!valid) return;

    const formData = { name, email, demoLink, message };
    if (onSubmit) onSubmit(formData);
    setName('');
    setEmail('');
    setDemoLink('');
    setMessage('');
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
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Your Name</label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            <input type="hidden" value={hiddenValue} />
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="w-full px-3 py-2 border rounded"
            />
            {emailError && (
              <p className="text-red-600 text-xs mt-1">{emailError}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              Link To Demo Mix
            </label>
            <input
              type="url"
              value={demoLink}
              onChange={(e) => setDemoLink(e.target.value)}
              className="w-full px-3 py-2 border rounded"
              placeholder="https://example.com"
              pattern="https?://.+"
            />
            {demoLinkError && (
              <p className="text-red-600 text-xs mt-1">{demoLinkError}</p>
            )}
          </div>
          <div className="mb-4">
            <label className="block text-sm font-medium mb-1">
              More Information
            </label>
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
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

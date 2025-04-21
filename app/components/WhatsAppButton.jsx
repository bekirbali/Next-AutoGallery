"use client";

import React, { useState } from "react";
import Image from "next/image";

const WhatsAppButton = () => {
  const [showTooltip, setShowTooltip] = useState(false);

  // Get phone number from environment variable or use a fallback
  const phoneNumber =
    process.env.NEXT_PUBLIC_WHATSAPP_PHONE_NUMBER || "901234567890";

  // Get default message from environment variable or use a fallback
  const defaultMessage =
    process.env.NEXT_PUBLIC_WHATSAPP_DEFAULT_MESSAGE ||
    "Hello! I'm interested in your cars.";

  // Format phone number for WhatsApp link (remove any non-numeric characters)
  const formattedPhone = phoneNumber.replace(/\D/g, "");

  // Create the WhatsApp URL with the phone number and message
  const whatsappUrl = `https://wa.me/${formattedPhone}?text=${encodeURIComponent(
    defaultMessage
  )}`;

  return (
    <div className="fixed bottom-6 left-6 z-50 whatsapp-button-container">
      {showTooltip && (
        <div className="absolute bottom-18 left-0 bg-white text-gray-800 px-4 py-2 rounded-lg shadow-lg text-sm whitespace-nowrap">
          Chat with us on WhatsApp
          <div className="absolute -bottom-2 left-6 w-4 h-4 bg-white transform rotate-45"></div>
        </div>
      )}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-14 h-14 rounded-full shadow-lg hover:bg-[#1da851] transition-all duration-300 hover:scale-110"
        aria-label="Chat on WhatsApp"
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
      >
        <div className="relative w-15 h-15">
          <Image
            src="/images/whatsappicon.png"
            alt="WhatsApp"
            fill
            sizes="40px"
            className="object-contain"
          />
        </div>
        <span className="absolute w-full h-full rounded-full bg-[#25D366] animate-ping opacity-75 whatsapp-button-animation"></span>
      </a>
    </div>
  );
};

export default WhatsAppButton;

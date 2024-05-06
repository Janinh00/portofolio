import React from 'react';

const WhatsAppIcon = () => {
  const handleWhatsAppClick = () => {
    // Replace 'your-whatsapp-number' with your actual WhatsApp number
    const whatsappNumber = '6285921666100';
    window.open(`https://wa.me/${whatsappNumber}`, '_blank');
  };

  return (
    <div className="whatsapp-icon" onClick={handleWhatsAppClick}>
      <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/2062095_application_chat_communication_logo_whatsapp_icon.svg/2048px-2062095_application_chat_communication_logo_whatsapp_icon.svg.png" alt="WhatsApp Icon" />
    </div>
  );
};

export default WhatsAppIcon;

const RAW_WHATSAPP_NUMBER = import.meta.env.VITE_WHATSAPP_NUMBER || '';

const sanitizeNumber = (value) => value.replace(/[^\d]/g, '');

const WHATSAPP_NUMBER = sanitizeNumber(RAW_WHATSAPP_NUMBER);

const DEFAULT_MESSAGE = 'Hi BuildIT, I would like to get started.';

export const getWhatsAppLink = (message = DEFAULT_MESSAGE) => {
  if (!WHATSAPP_NUMBER) {
    return '#';
  }

  const baseUrl = `https://wa.me/${WHATSAPP_NUMBER}`;
  if (!message) {
    return baseUrl;
  }

  return `${baseUrl}?text=${encodeURIComponent(message)}`;
};

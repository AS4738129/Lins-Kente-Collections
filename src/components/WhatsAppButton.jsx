const WHATSAPP_NUMBER = '233241868025'
const DEFAULT_MESSAGE = 'Hello Lins Kente Collections, I would like to inquire about your Kente styles and collection.'

export function getWhatsAppLink(message = DEFAULT_MESSAGE) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`
}

export default function WhatsAppButton({ variant = 'solid', className = '', label = 'Chat on WhatsApp' }) {
  const base = 'inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold transition-colors duration-200'
  const styles =
    variant === 'solid'
      ? 'bg-forest text-cream hover:bg-forest/90'
      : 'border border-forest text-forest hover:bg-forest hover:text-cream'

  return (
    <a
      href={getWhatsAppLink()}
      target="_blank"
      rel="noopener noreferrer"
      className={`${base} ${styles} ${className}`}
    >
      <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden="true">
        <path d="M12.04 2C6.58 2 2.13 6.45 2.13 11.91c0 1.75.46 3.45 1.33 4.95L2 22l5.25-1.38a9.9 9.9 0 0 0 4.79 1.22h.01c5.46 0 9.91-4.45 9.91-9.91C21.96 6.45 17.5 2 12.04 2Zm5.8 14.13c-.24.68-1.4 1.3-1.93 1.38-.49.08-1.11.11-1.79-.11-.41-.13-.94-.3-1.62-.6-2.85-1.23-4.71-4.09-4.85-4.28-.14-.19-1.16-1.54-1.16-2.94 0-1.4.73-2.09.99-2.37.26-.28.57-.35.76-.35.19 0 .38 0 .55.01.18.01.41-.07.64.49.24.58.81 2 .88 2.14.07.14.12.31.02.5-.09.19-.14.31-.28.48-.14.16-.29.36-.42.49-.14.14-.28.29-.12.57.16.28.71 1.17 1.52 1.9 1.05.94 1.93 1.23 2.21 1.37.28.14.44.12.61-.07.16-.19.69-.8.87-1.08.18-.28.36-.23.6-.14.24.09 1.55.73 1.82.87.27.14.44.2.51.31.07.12.07.68-.17 1.36Z"/>
      </svg>
      {label}
    </a>
  )
}

export function onlyDigits(value: string) {
  return value.replace(/\D/g, '');
}

export function formatPhone(digits: string) {
  const d = onlyDigits(digits);
  if (d.length === 11) return `(${d.slice(0, 2)}) ${d.slice(2, 7)}-${d.slice(7)}`;
  if (d.length === 10) return `(${d.slice(0, 2)}) ${d.slice(2, 6)}-${d.slice(6)}`;
  return digits;
}

export function waLink(digits: string, message?: string) {
  const phone = onlyDigits(digits);
  const base = `https://wa.me/55${phone}`;
  return message ? `${base}?text=${encodeURIComponent(message)}` : base;
}

export function telLink(digits: string) {
  return `tel:+55${onlyDigits(digits)}`;
}

export async function copyText(text: string) {
  if (navigator.clipboard && window.isSecureContext) {
    try {
      await navigator.clipboard.writeText(text);
      return true;
    } catch {
      /* fall through */
    }
  }
  const textarea = document.createElement('textarea');
  textarea.value = text;
  textarea.setAttribute('readonly', '');
  textarea.style.position = 'fixed';
  textarea.style.opacity = '0';
  document.body.appendChild(textarea);
  textarea.select();
  const ok = document.execCommand('copy');
  document.body.removeChild(textarea);
  if (!ok) throw new Error('Copy unavailable');
  return true;
}

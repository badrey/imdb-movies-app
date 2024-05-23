const SYMBOLS_MAPPING: {[key: string]: string} = {
  '&quot;': '"',
  '&amp;': '&',
  '&lt;': '<',
  '&gt;': '>',
  '&nbsp;': ' ',
  '&apos;': "'",
};

export function normaliseText(text: string): string {
  return text.replace(
    /&quot;|&amp;|&lt;|&gt;|&nbsp;|&apos;/g,
    match => SYMBOLS_MAPPING[match],
  );
}

function countLines(text?: (string | null)[]): number {
  let count = 0;

  if (text) {
    for (const line of text) {
      if (line?.length !== 0) {
        count = count + 1;
      }
    }
  }

  return count;
}

const a = countLines(['one', 'two', '', 'three']);
const b = countLines(['hello', null, 'tworld']);
const c = countLines();

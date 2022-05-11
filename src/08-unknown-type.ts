function isString(maybeNumber: unknown): maybeNumber is string {
  if (typeof maybeNumber === 'string') {
    return true;
  }

  return false;
}

// A mock function to mimic making an async request for data
export function fetchChange(value = 'Fetched text') {
  return new Promise((resolve) =>
    setTimeout(() => resolve({ data: value }), 3000)
  );
}

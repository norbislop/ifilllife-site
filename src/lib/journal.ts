import { getCollection } from 'astro:content';

// Keep draft filtering in one place so listings and generated routes agree.
export async function getPublishedEntries() {
  const entries = await getCollection('journal', ({ data }) => !data.draft);
  return entries.sort(
    (a, b) => a.data.order - b.data.order || a.data.title.localeCompare(b.data.title),
  );
}

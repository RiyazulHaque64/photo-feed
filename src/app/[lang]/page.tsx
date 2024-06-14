import { getDictionary } from "./dictionaries";

export default async function Home({
  params: { lang },
}: {
  params: Record<string, any>;
}) {
  const dictionary = await getDictionary(lang);
  return (
    <div>
      <h2>{dictionary.views}</h2>
    </div>
  );
}

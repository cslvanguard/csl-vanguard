/**
 * Renders a JSON-LD structured-data block. Rendered from server components so
 * the schema ships in the initial HTML for crawlers.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      // JSON.stringify output is safe here — data is authored, not user input.
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

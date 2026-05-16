/**
 * JsonLd — injects a JSON-LD <script> tag into the page <head>.
 * Usage: <JsonLd schema={mySchemaObject} />
 * Accepts any valid Schema.org object. Multiple schemas → pass an array.
 */
export default function JsonLd({ schema }: { schema: Record<string, unknown> | Record<string, unknown>[] }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(schema, null, 0) }}
    />
  )
}

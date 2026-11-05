import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { connection } from "next/server";

import { gjejUdhetimin } from "@/lib/udhetimet";

export default function DetajetUdhëtimi({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<main>Po ngarkojmë udhëtimin…</main>}>
      <TripDetails params={params} />
    </Suspense>
  );
}

async function TripDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await connection();
  const udhetim = await gjejUdhetimin(id);

  if (!udhetim) notFound();

  return (
    <main>
      <Link href="/" className="back-link">← Kthehu te lista</Link>
      <h1>{udhetim.nisja} – {udhetim.destinacioni}</h1>
      <p>Ora: {udhetim.ora}</p>
      <p>Vendtakimi: {udhetim.vendtakimi}</p>
      <p>Vende të lira: {udhetim.vende}</p>
      {udhetim.vende > 0 ? (
        <Link className="action" href={`/udhetimi/${id}/kerkesa`}>Kërko vend</Link>
      ) : (
        <button className="action" disabled>Nuk ka vende të lira</button>
      )}
    </main>
  );
}

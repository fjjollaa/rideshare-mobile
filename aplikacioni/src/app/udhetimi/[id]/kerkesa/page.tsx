import Link from "next/link";
import { Suspense } from "react";
import { notFound } from "next/navigation";
import { connection } from "next/server";

import { gjejUdhetimin } from "@/lib/udhetimet";

export default function KerkesaPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  return (
    <Suspense fallback={<main>Po ngarkojmë kërkesën…</main>}>
      <RequestDetails params={params} />
    </Suspense>
  );
}

async function RequestDetails({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params;
  await connection();
  const udhetim = await gjejUdhetimin(id);

  if (!udhetim) notFound();

  return (
    <main>
      <Link href={`/udhetimi/${id}`} className="back-link">
        ← Kthehu te detajet
      </Link>
      {udhetim.vende > 0 ? (
        <>
          <h1>Simulim: Në pritje</h1>
          <p>Kërkesa për {udhetim.nisja} nuk është dërguar te shoferi.</p>
          <p>Ruajtjen dhe konfirmimin real do t’i shtojmë më vonë.</p>
        </>
      ) : (
        <>
          <h1>Nuk ka vende të lira.</h1>
          <p>Kjo kërkesë nuk mund të realizohet për momentin.</p>
        </>
      )}
    </main>
  );
}

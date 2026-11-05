import "server-only";

import { getSql } from "./db";

export type Udhetim = {
  id: string;
  nisja: string;
  destinacioni: string;
  ora: string;
  vendtakimi: string;
  vende: number;
  shofer_id?: string;
};

const fallbackUdhetimet: Udhetim[] = [
  {
    id: "1",
    nisja: "Prishtinë",
    destinacioni: "AAB",
    ora: "08:00",
    vendtakimi: "Stacioni i autobusëve",
    vende: 2,
    shofer_id: "DEMO-SHOFER-2",
  },
  {
    id: "2",
    nisja: "Fushë Kosovë",
    destinacioni: "AAB",
    ora: "08:15",
    vendtakimi: "Te stacioni kryesor",
    vende: 1,
    shofer_id: "DEMO-SHOFER-2",
  },
  {
    id: "3",
    nisja: "Lipjan",
    destinacioni: "AAB",
    ora: "07:45",
    vendtakimi: "Qendra e qytetit",
    vende: 0,
    shofer_id: "DEMO-SHOFER-2",
  },
];

export async function lexoUdhetimet(): Promise<Udhetim[]> {
  try {
    const sql = getSql();
    const rows = await sql`
      SELECT id, nisja, destinacioni, ora, vendtakimi, vende, shofer_id
      FROM udhetimet
      ORDER BY id
    `;

    return rows as Udhetim[];
  } catch {
    return fallbackUdhetimet;
  }
}

export async function gjejUdhetimin(id: string): Promise<Udhetim | undefined> {
  try {
    const sql = getSql();
    const rows = await sql`
      SELECT id, nisja, destinacioni, ora, vendtakimi, vende, shofer_id
      FROM udhetimet
      WHERE id = ${id}
    `;

    return rows[0] as Udhetim | undefined;
  } catch {
    return fallbackUdhetimet.find((udhetim) => udhetim.id === id);
  }
}

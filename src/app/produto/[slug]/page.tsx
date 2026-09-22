import { initialDataset } from "@/data/initialDataset";
import ProdutoClient from "./ProdutoClient";

export function generateStaticParams() {
  return initialDataset.products.map((p) => ({
    slug: p.slug,
  }));
}

export default function ProdutoDetailPage() {
  return <ProdutoClient />;
}

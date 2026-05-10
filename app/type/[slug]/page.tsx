import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import typesData from "@/data/types.json";

export async function generateStaticParams() {
  return typesData.map((t) => ({ slug: t.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const type = typesData.find((t) => t.slug === slug);
  if (!type) return {};
  return {
    title: type.metaTitle,
    description: type.metaDescription,
  };
}

export default async function TypePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const type = typesData.find((t) => t.slug === slug);
  if (!type) notFound();

  return (
    <div className="bg-[#FEF2F2] min-h-screen">
      <Breadcrumb
        items={[
          { label: "シロアリの種類", href: "/type/shurui-mikiwake-hikaku/" },
          { label: type.name },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6 border border-red-100">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">{type.name}</h1>
          {type.scientificName && (
            <p className="text-sm text-gray-400 italic mb-4">{type.scientificName}</p>
          )}
          <p className="text-gray-600 leading-relaxed text-lg mb-6">{type.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 bg-red-50 rounded-xl p-4">
            <div>
              <div className="text-xs text-gray-500 mb-1">生息地域</div>
              <div className="font-semibold text-gray-800 text-sm">{type.habitat}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">体色</div>
              <div className="font-semibold text-gray-800 text-sm">{type.color}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">体長</div>
              <div className="font-semibold text-gray-800 text-sm">{type.size || "種類による"}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-red-100">
            <h2 className="text-lg font-bold text-gray-900 mb-4">主な特徴</h2>
            <ul className="space-y-2">
              {type.features.map((f, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="w-5 h-5 bg-red-100 rounded-full flex items-center justify-center text-xs text-[#DC2626] font-bold flex-shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  {f}
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-white rounded-2xl shadow-sm p-6 border border-red-100">
            <h2 className="text-lg font-bold text-[#DC2626] mb-4">被害サイン・発見のポイント</h2>
            <ul className="space-y-2">
              {type.signs.map((s, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#DC2626] font-bold mt-0.5">!</span>
                  {s}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-red-100">
          <h2 className="text-lg font-bold text-gray-900 mb-3">被害の特徴</h2>
          <p className="text-gray-600 leading-relaxed">{type.damage}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-red-100">
            <h2 className="text-lg font-bold text-[#059669] mb-3">駆除方法</h2>
            <p className="text-gray-600 leading-relaxed text-sm">{type.treatment}</p>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-red-100">
            <h2 className="text-lg font-bold text-[#F59E0B] mb-3">予防方法</h2>
            <p className="text-gray-600 leading-relaxed text-sm">{type.prevention}</p>
          </div>
        </div>

        {/* Related Links */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-red-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">関連ガイド</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <Link href="/ranking/" className="flex items-center gap-2 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium text-[#DC2626]">
              おすすめ業者ランキング →
            </Link>
            <Link href="/method/comparison/" className="flex items-center gap-2 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium text-[#DC2626]">
              駆除工法の比較 →
            </Link>
            <Link href="/cost/price/" className="flex items-center gap-2 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium text-[#DC2626]">
              料金相場ガイド →
            </Link>
            <Link href="/cost/inspection/" className="flex items-center gap-2 p-3 bg-red-50 rounded-lg hover:bg-red-100 transition-colors text-sm font-medium text-[#DC2626]">
              無料点検ガイド →
            </Link>
          </div>
        </div>

        <div className="bg-[#DC2626] text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">被害を発見したら、すぐに専門家へ</h2>
          <p className="text-red-100 mb-5 text-sm">
            シロアリは放置するほど被害が広がります。まずは無料の現地調査を依頼しましょう。
          </p>
          <Link
            href="/ranking/"
            className="bg-[#F59E0B] text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors inline-block"
          >
            無料で業者を探す
          </Link>
        </div>
      </div>
    </div>
  );
}

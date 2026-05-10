import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import methodsData from "@/data/methods.json";

export async function generateStaticParams() {
  return methodsData.map((m) => ({ slug: m.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const method = methodsData.find((m) => m.slug === slug);
  if (!method) return {};
  return {
    title: method.metaTitle,
    description: method.metaDescription,
  };
}

export default async function MethodPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const method = methodsData.find((m) => m.slug === slug);
  if (!method) notFound();

  return (
    <div className="bg-[#FEF2F2] min-h-screen">
      <Breadcrumb
        items={[
          { label: "駆除工法", href: "/method/comparison/" },
          { label: method.name },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6 border border-red-100">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">{method.name}とは</h1>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">{method.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-red-50 rounded-xl p-4">
            <div>
              <div className="text-xs text-gray-500 mb-1">費用目安</div>
              <div className="font-semibold text-gray-800 text-sm">{method.cost}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">施工期間</div>
              <div className="font-semibold text-gray-800 text-sm">{method.duration}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">保証期間</div>
              <div className="font-semibold text-gray-800 text-sm">{method.guarantee}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">効果</div>
              <div className="text-yellow-400">{"★".repeat(method.effectiveness)}</div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-red-100">
            <h2 className="text-lg font-bold text-[#059669] mb-4">メリット</h2>
            <ul className="space-y-2">
              {method.pros.map((p, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#059669] font-bold mt-0.5">+</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-red-100">
            <h2 className="text-lg font-bold text-[#DC2626] mb-4">デメリット</h2>
            <ul className="space-y-2">
              {method.cons.map((c, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#DC2626] font-bold mt-0.5">-</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-red-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">施工の流れ</h2>
          <ol className="space-y-3">
            {method.process.map((step, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 bg-[#DC2626] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-gray-700 pt-0.5">{step}</span>
              </li>
            ))}
          </ol>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-2">こんな方に向いています</h2>
          <p className="text-gray-700">{method.suitable}</p>
        </div>

        <div className="bg-[#DC2626] text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">専門業者に相談して最適な工法を選ぼう</h2>
          <p className="text-red-100 mb-5 text-sm">
            被害の状況・住環境・ご予算に合わせた最適な工法を無料でアドバイスしてもらえます。
          </p>
          <Link
            href="/ranking/"
            className="bg-[#F59E0B] text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors inline-block"
          >
            おすすめ業者を見る
          </Link>
        </div>
      </div>
    </div>
  );
}

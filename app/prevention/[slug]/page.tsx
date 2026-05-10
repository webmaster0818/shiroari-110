import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import preventionsData from "@/data/preventions.json";

export async function generateStaticParams() {
  return preventionsData.map((p) => ({ slug: p.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const prevention = preventionsData.find((p) => p.slug === slug);
  if (!prevention) return {};
  return {
    title: prevention.metaTitle,
    description: prevention.metaDescription,
  };
}

export default async function PreventionPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const prevention = preventionsData.find((p) => p.slug === slug);
  if (!prevention) notFound();

  return (
    <div className="bg-[#FEF2F2] min-h-screen">
      <Breadcrumb
        items={[
          { label: "予防ガイド" },
          { label: prevention.name },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-sm p-8 mb-6 border border-red-100">
          <h1 className="text-2xl font-bold text-gray-900 mb-3">{prevention.name}</h1>
          <p className="text-gray-600 leading-relaxed text-lg mb-6">{prevention.description}</p>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 bg-red-50 rounded-xl p-4">
            <div>
              <div className="text-xs text-gray-500 mb-1">実施時期</div>
              <div className="font-semibold text-gray-800 text-sm">{prevention.timing}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">費用目安</div>
              <div className="font-semibold text-gray-800 text-sm">{prevention.cost}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">効果持続期間</div>
              <div className="font-semibold text-gray-800 text-sm">{prevention.duration}</div>
            </div>
            <div>
              <div className="text-xs text-gray-500 mb-1">重要度</div>
              <div className="text-yellow-400">{"★".repeat(prevention.importance)}</div>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-red-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">主な方法</h2>
          <ul className="space-y-3">
            {prevention.methods.map((m, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="w-7 h-7 bg-[#059669] text-white rounded-full flex items-center justify-center text-sm font-bold flex-shrink-0">
                  {i + 1}
                </span>
                <span className="text-gray-700 pt-0.5">{m}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-red-100">
            <h2 className="text-lg font-bold text-[#059669] mb-4">実践のポイント</h2>
            <ul className="space-y-2">
              {prevention.tips.map((t, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#059669] font-bold mt-0.5">+</span>
                  {t}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-red-100">
            <h2 className="text-lg font-bold text-[#DC2626] mb-4">よくある失敗・注意点</h2>
            <ul className="space-y-2">
              {prevention.mistakes.map((m, i) => (
                <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#DC2626] font-bold mt-0.5">!</span>
                  {m}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-red-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">チェックリスト</h2>
          <ul className="space-y-3">
            {prevention.checkList.map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-gray-700">
                <span className="w-5 h-5 border-2 border-[#059669] rounded flex-shrink-0"></span>
                <span className="text-sm">{item}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-[#DC2626] text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">プロに依頼してより確実に防蟻対策を</h2>
          <p className="text-red-100 mb-5 text-sm">
            専門業者による施工は、DIYよりも高い確実性と保証があります。
            無料見積りから始めましょう。
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

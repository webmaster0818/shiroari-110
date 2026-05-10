import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import companiesData from "@/data/companies.json";

export const metadata: Metadata = {
  title: "シロアリ駆除が安い業者ランキング2026【料金比較】",
  description:
    "シロアリ駆除を安く依頼できる業者をランキング形式で紹介。料金相場・安くなるコツ・注意点も合わせて解説します。",
};

const sortedByCheap = [...companiesData].sort((a, b) => a.priceMin - b.priceMin);

export default function CheapRankingPage() {
  return (
    <div className="bg-[#FEF2F2] min-h-screen">
      <Breadcrumb
        items={[
          { label: "業者ランキング", href: "/ranking/" },
          { label: "安い業者ランキング" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            シロアリ駆除が安い業者ランキング2026
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            料金を最優先に、コストパフォーマンスの高いシロアリ駆除業者をランキング形式でご紹介します。
          </p>
        </div>

        {/* Warning Box */}
        <div className="bg-yellow-50 border border-yellow-300 rounded-xl p-4 mb-8 text-sm text-yellow-800">
          <strong>注意：</strong>
          安さだけで選ぶのは危険です。保証内容・使用薬剤・施工品質も合わせて確認しましょう。
          安すぎる業者は追加料金が発生したり、保証がなかったりする場合があります。
        </div>

        <div className="space-y-4">
          {sortedByCheap.map((company, index) => (
            <div
              key={company.slug}
              className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex flex-col md:flex-row md:items-start gap-4">
                <div className="flex items-center gap-3 md:w-16">
                  <div className="w-10 h-10 bg-[#059669] rounded-full flex items-center justify-center font-bold text-white text-sm flex-shrink-0">
                    {index + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-wrap items-center gap-2 mb-1">
                    <h2 className="text-lg font-bold text-gray-900">{company.name}</h2>
                    <div className="bg-[#059669] text-white text-xs px-3 py-0.5 rounded-full font-bold">
                      {company.priceMin.toLocaleString()}円〜/{company.priceUnit.replace("円/", "")}
                    </div>
                  </div>
                  <p className="text-sm text-gray-600 mb-3">{company.description}</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <span className="text-yellow-400">{"★".repeat(Math.floor(company.rating))}</span>
                    <span className="font-medium">{company.rating}</span>
                    <span className="text-gray-400">({company.reviewCount}件)</span>
                  </div>
                </div>
                <div className="flex flex-row md:flex-col items-center gap-3 md:w-36">
                  <Link
                    href={`/company/${company.slug}/`}
                    className="bg-[#DC2626] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-red-700 transition-colors whitespace-nowrap"
                  >
                    詳細を見る
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 bg-white rounded-2xl p-6 border border-red-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">シロアリ駆除を安くするコツ</h2>
          <ul className="space-y-3 text-sm text-gray-700">
            {[
              "複数の業者から相見積もりを取る（3社以上が理想）",
              "早期発見・早期対処で被害範囲を最小限に抑える",
              "閑散期（秋冬）に依頼すると割引になることがある",
              "定期メンテナンス契約でまとめて安くなることも",
              "キャンペーンや割引クーポンを活用する",
              "一軒家全体まとめて依頼すると単価が下がる",
            ].map((tip, i) => (
              <li key={i} className="flex items-start gap-2">
                <span className="w-5 h-5 bg-[#059669] text-white rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0 mt-0.5">
                  {i + 1}
                </span>
                {tip}
              </li>
            ))}
          </ul>
        </div>

        <div className="mt-6 text-center">
          <Link
            href="/cost/price/"
            className="text-[#DC2626] font-semibold hover:underline"
          >
            詳しい料金相場ガイドを見る →
          </Link>
        </div>
      </div>
    </div>
  );
}

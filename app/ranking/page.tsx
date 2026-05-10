import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import companiesData from "@/data/companies.json";

export const metadata: Metadata = {
  title: "シロアリ駆除業者おすすめランキング2026【10社徹底比較】",
  description:
    "全国対応のシロアリ駆除業者10社を料金・口コミ・対応速度・保証内容で徹底比較。2026年最新のおすすめランキングをご紹介します。",
};

const sorted = [...companiesData].sort((a, b) => b.rating - a.rating);

export default function RankingPage() {
  return (
    <div className="bg-[#FEF2F2] min-h-screen">
      <Breadcrumb items={[{ label: "業者ランキング" }]} />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <div className="text-center mb-8">
          <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
            シロアリ駆除業者おすすめランキング2026
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto">
            全国対応の主要10社を料金・口コミ評価・対応速度・保証内容・施工品質で徹底比較しました。
          </p>
          <div className="mt-4">
            <Link href="/ranking/cheap/" className="text-sm text-[#DC2626] hover:underline">
              安い業者ランキングはこちら →
            </Link>
          </div>
        </div>

        <div className="space-y-4">
          {sorted.map((company, index) => {
            const medal =
              index === 0
                ? "bg-yellow-400"
                : index === 1
                ? "bg-gray-400"
                : index === 2
                ? "bg-orange-400"
                : "bg-gray-200 text-gray-600";

            return (
              <div
                key={company.slug}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="flex flex-col md:flex-row md:items-start gap-4">
                  <div className="flex items-center gap-3 md:flex-col md:items-center md:w-20 md:gap-1">
                    <div
                      className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white flex-shrink-0 ${medal}`}
                    >
                      {index + 1}
                    </div>
                    <div className="text-center hidden md:block">
                      <div className="text-xs text-gray-400">総合評価</div>
                      <div className="font-bold text-gray-800">{company.rating}</div>
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className="flex flex-wrap items-center gap-2 mb-1">
                      <h2 className="text-lg font-bold text-gray-900">{company.name}</h2>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-400 text-sm">{"★".repeat(Math.floor(company.rating))}</span>
                        <span className="text-sm font-semibold text-gray-700">{company.rating}</span>
                        <span className="text-xs text-gray-400">({company.reviewCount}件)</span>
                      </div>
                    </div>
                    <p className="text-sm text-gray-600 mb-3 leading-relaxed">{company.description}</p>
                    <div className="flex flex-wrap gap-2 mb-2">
                      {company.features.map((f) => (
                        <span key={f} className="bg-red-50 text-[#DC2626] text-xs px-2 py-0.5 rounded-full font-medium border border-red-100">
                          {f}
                        </span>
                      ))}
                    </div>
                    <p className="text-xs text-gray-500">
                      <strong>おすすめ：</strong>{company.recommended}
                    </p>
                  </div>
                  <div className="flex flex-row md:flex-col items-center md:items-end gap-3 md:w-40">
                    <div className="text-center md:text-right">
                      <div className="text-xs text-gray-400">料金目安</div>
                      <div className="font-bold text-[#DC2626]">{company.priceMin.toLocaleString()}円〜</div>
                      <div className="text-xs text-gray-400">/{company.priceUnit.replace("円/", "")}</div>
                    </div>
                    <Link
                      href={`/company/${company.slug}/`}
                      className="bg-[#DC2626] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-red-700 transition-colors whitespace-nowrap"
                    >
                      口コミを見る
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="mt-10 bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h2 className="font-bold text-gray-900 mb-2">業者選びのポイント</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#059669] font-bold mt-0.5">1.</span>
              <span>複数の業者から見積もりを取り、料金と対応を比較する</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#059669] font-bold mt-0.5">2.</span>
              <span>保証内容（期間・内容）を必ず確認する</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#059669] font-bold mt-0.5">3.</span>
              <span>使用薬剤の種類と安全性を確認する</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#059669] font-bold mt-0.5">4.</span>
              <span>施工前後の説明が丁寧かどうかを確認する</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";
import companiesData from "@/data/companies.json";

export const metadata: Metadata = {
  title: "シロアリ無料点検ガイド2026【依頼方法・流れ・注意点を解説】",
  description:
    "シロアリの無料点検・調査の依頼方法から点検の流れ・注意点まで詳しく解説。無料点検対応の優良業者もご紹介します。",
};

const freeInspectionCompanies = companiesData.filter((c) =>
  c.features.some((f) => f.includes("無料") || f.includes("点検"))
).slice(0, 4);

export default function InspectionPage() {
  return (
    <div className="bg-[#FEF2F2] min-h-screen">
      <Breadcrumb
        items={[
          { label: "料金ガイド", href: "/cost/price/" },
          { label: "無料点検ガイド" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          シロアリ無料点検ガイド2026
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          シロアリの無料点検を賢く活用して、大切な住まいを守りましょう。
          無料とはいえ、プロによる本格的な調査を受けることができます。
          このガイドでは点検の流れ・注意点・おすすめ業者をご紹介します。
        </p>

        {/* What is Free Inspection */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-red-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">シロアリ無料点検とは</h2>
          <p className="text-gray-600 text-sm leading-relaxed mb-4">
            シロアリ無料点検（無料調査）とは、専門業者の技術者が自宅に訪問し、
            シロアリの被害有無・生息状況・リスクを無料で調査するサービスです。
            多くの業者が集客目的で提供しており、調査だけなら費用は一切かかりません。
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            {[
              { title: "費用", value: "無料", desc: "点検・調査は無料" },
              { title: "所要時間", value: "30〜60分", desc: "住宅規模による" },
              { title: "施工の強制", value: "なし", desc: "断っても問題なし" },
            ].map((item) => (
              <div key={item.title} className="bg-red-50 rounded-xl p-4 text-center">
                <div className="text-xs text-gray-500 mb-1">{item.title}</div>
                <div className="text-xl font-bold text-[#DC2626]">{item.value}</div>
                <div className="text-xs text-gray-400 mt-1">{item.desc}</div>
              </div>
            ))}
          </div>
        </div>

        {/* Inspection Flow */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-red-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">無料点検の流れ</h2>
          <ol className="space-y-4">
            {[
              {
                step: "電話・Web申し込み",
                desc: "業者のWebサイトまたは電話で無料点検を申し込む。氏名・住所・連絡先・希望日時を伝える。",
              },
              {
                step: "日程確認・訪問",
                desc: "業者から折り返し連絡があり日程を確定。当日技術者が自宅に訪問する。",
              },
              {
                step: "床下・周辺の調査",
                desc: "床下収納や点検口から床下に入り、シロアリの痕跡・蟻道・被害の有無を確認する。",
              },
              {
                step: "調査結果の説明",
                desc: "調査結果を写真・資料を使って丁寧に説明。被害がある場合は原因と対策も説明してもらえる。",
              },
              {
                step: "見積もりの提示",
                desc: "必要な処理がある場合は見積もりを提示。断っても問題ない。複数社で比較することを推奨。",
              },
            ].map((item, i) => (
              <li key={i} className="flex items-start gap-4">
                <span className="w-8 h-8 bg-[#DC2626] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 text-sm">
                  {i + 1}
                </span>
                <div>
                  <div className="font-semibold text-gray-800 mb-1">{item.step}</div>
                  <div className="text-sm text-gray-600 leading-relaxed">{item.desc}</div>
                </div>
              </li>
            ))}
          </ol>
        </div>

        {/* Tips */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-red-100">
            <h2 className="text-lg font-bold text-[#059669] mb-4">点検を受けるコツ</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "床下点検口の場所を事前に確認しておく",
                "気になる場所・症状を事前にメモしておく",
                "複数社に点検を依頼して比較する",
                "調査結果を写真で記録してもらう",
                "見積もりは必ず書面でもらう",
                "施工の即決はしない。一晩考える時間をもらう",
              ].map((tip, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#059669] font-bold mt-0.5">+</span>
                  {tip}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-red-100">
            <h2 className="text-lg font-bold text-[#DC2626] mb-4">注意すべき点</h2>
            <ul className="space-y-2 text-sm text-gray-700">
              {[
                "不安を煽って即決を迫る業者は要注意",
                "口頭の説明だけで見積書を出さない業者は避ける",
                "極端に安い・高い見積もりは理由を確認する",
                "保証内容が曖昧な業者は信頼性が低い",
                "訪問販売で突然来た業者には即決しない",
                "キャンセル料・追加費用の確認を忘れずに",
              ].map((note, i) => (
                <li key={i} className="flex items-start gap-2">
                  <span className="text-[#DC2626] font-bold mt-0.5">!</span>
                  {note}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Companies offering free inspection */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-8 border border-red-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">無料点検対応のおすすめ業者</h2>
          <div className="space-y-3">
            {freeInspectionCompanies.map((company) => (
              <div key={company.slug} className="flex items-center justify-between p-3 bg-red-50 rounded-xl">
                <div>
                  <div className="font-semibold text-gray-800">{company.name}</div>
                  <div className="text-xs text-gray-500 mt-0.5">
                    評価 {company.rating} / 口コミ {company.reviewCount}件
                  </div>
                </div>
                <Link
                  href={`/company/${company.slug}/`}
                  className="bg-[#DC2626] text-white px-4 py-1.5 rounded-full text-xs font-bold hover:bg-red-700 transition-colors"
                >
                  詳細を見る
                </Link>
              </div>
            ))}
          </div>
          <div className="mt-4 text-center">
            <Link href="/ranking/" className="text-[#DC2626] text-sm font-semibold hover:underline">
              全10社のランキングを見る →
            </Link>
          </div>
        </div>

        <div className="bg-[#DC2626] text-white rounded-2xl p-8 text-center">
          <h2 className="text-xl font-bold mb-3">今すぐ無料点検を依頼しましょう</h2>
          <p className="text-red-100 mb-5 text-sm">
            早期発見が被害拡大の防止につながります。費用が発生するのは施工を依頼した場合のみ。
            まずは無料で状況を確認しましょう。
          </p>
          <Link
            href="/ranking/"
            className="bg-[#F59E0B] text-white px-8 py-3 rounded-full font-bold hover:bg-yellow-500 transition-colors inline-block"
          >
            無料点検対応の業者を探す
          </Link>
        </div>
      </div>
    </div>
  );
}

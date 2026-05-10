import Link from "next/link";
import type { Metadata } from "next";
import companiesData from "@/data/companies.json";

export const metadata: Metadata = {
  title: "シロアリ110番｜シロアリ駆除業者の比較・口コミランキング",
  description:
    "シロアリ被害から大切な住まいを守る。全国対応のシロアリ駆除業者を比較・口コミで徹底解説。無料現地調査・最短即日対応の優良業者をランキングで紹介。",
};

const topCompanies = companiesData.slice(0, 3);

export default function HomePage() {
  return (
    <div>
      {/* Hero */}
      <section className="bg-gradient-to-br from-[#DC2626] to-[#991b1b] text-white py-16 px-4">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-yellow-300 font-semibold text-sm mb-3 tracking-widest uppercase">
            早期発見・早期対処が重要
          </p>
          <h1 className="text-3xl md:text-5xl font-bold leading-tight mb-4">
            シロアリ被害、早期発見が命。
          </h1>
          <p className="text-lg md:text-xl text-red-100 mb-8 max-w-2xl mx-auto leading-relaxed">
            気づいた時には手遅れになることも。全国の優良シロアリ駆除業者を比較して、
            あなたの大切な住まいを今すぐ守りましょう。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/ranking/"
              className="bg-[#F59E0B] text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors shadow-lg"
            >
              無料で業者を比較する
            </Link>
            <Link
              href="/cost/inspection/"
              className="bg-white text-[#DC2626] px-8 py-4 rounded-full font-bold text-lg hover:bg-red-50 transition-colors shadow-lg"
            >
              無料点検を依頼する
            </Link>
          </div>
          <div className="mt-8 flex flex-wrap justify-center gap-6 text-sm text-red-100">
            <span>24時間受付</span>
            <span>|</span>
            <span>最短即日対応</span>
            <span>|</span>
            <span>無料現地調査</span>
            <span>|</span>
            <span>5年保証</span>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <section className="bg-yellow-50 border-l-4 border-[#F59E0B] mx-4 md:mx-auto max-w-6xl mt-8 p-4 rounded-r-lg">
        <p className="text-sm text-yellow-800">
          <strong>シロアリ被害の深刻さ：</strong>
          シロアリは木材を内部から食い荒らすため、外から見えません。
          発見時には被害が深刻になっているケースが多く、放置すると建物の耐震性が低下します。
          <Link href="/type/yamato-shiroari/" className="underline ml-1 text-yellow-700">
            被害サインを確認する
          </Link>
        </p>
      </section>

      {/* Top Ranking */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-2">
            おすすめシロアリ駆除業者 TOP3
          </h2>
          <p className="text-gray-500">口コミ・料金・対応速度を総合評価</p>
        </div>
        <div className="space-y-4">
          {topCompanies.map((company, index) => (
            <div
              key={company.slug}
              className="bg-white border-2 border-gray-100 rounded-xl p-6 flex flex-col md:flex-row md:items-center gap-4 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center gap-4 md:w-16">
                <div
                  className={`w-12 h-12 rounded-full flex items-center justify-center font-bold text-lg text-white flex-shrink-0 ${
                    index === 0
                      ? "bg-yellow-400"
                      : index === 1
                      ? "bg-gray-400"
                      : "bg-orange-400"
                  }`}
                >
                  {index + 1}
                </div>
              </div>
              <div className="flex-1">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-gray-900">{company.name}</h3>
                  <div className="flex items-center gap-1">
                    <span className="text-yellow-400">{"★".repeat(Math.floor(company.rating))}</span>
                    <span className="text-sm font-semibold text-gray-700">{company.rating}</span>
                    <span className="text-xs text-gray-400">({company.reviewCount}件)</span>
                  </div>
                </div>
                <p className="text-sm text-gray-600 mb-2">{company.description.substring(0, 80)}...</p>
                <div className="flex flex-wrap gap-2">
                  {company.features.slice(0, 3).map((f) => (
                    <span key={f} className="bg-red-50 text-[#DC2626] text-xs px-2 py-0.5 rounded-full font-medium">
                      {f}
                    </span>
                  ))}
                </div>
              </div>
              <div className="flex flex-col items-end gap-2 md:w-36">
                <div className="text-right">
                  <div className="text-xs text-gray-400">料金目安</div>
                  <div className="font-bold text-[#DC2626]">{company.priceMin.toLocaleString()}円〜/{company.priceUnit.replace("円/", "")}</div>
                </div>
                <Link
                  href={`/company/${company.slug}/`}
                  className="bg-[#DC2626] text-white px-5 py-2 rounded-full text-sm font-bold hover:bg-red-700 transition-colors whitespace-nowrap"
                >
                  詳細を見る
                </Link>
              </div>
            </div>
          ))}
        </div>
        <div className="text-center mt-6">
          <Link
            href="/ranking/"
            className="text-[#DC2626] font-semibold hover:underline"
          >
            全10社のランキングを見る →
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-12 px-4">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-bold text-center text-gray-900 mb-8">
            シロアリ110番が選ばれる理由
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "10社を徹底比較",
                desc: "全国対応の主要10社を料金・口コミ・対応速度・保証内容で比較。最適な業者が見つかります。",
                icon: "10",
              },
              {
                title: "専門家監修の情報",
                desc: "シロアリの種類・被害サイン・駆除工法など、専門知識に基づいた正確な情報を提供しています。",
                icon: "監",
              },
              {
                title: "無料で利用可能",
                desc: "業者への問い合わせ・見積もり依頼はすべて無料。安心してご利用いただけます。",
                icon: "無",
              },
            ].map((item) => (
              <div key={item.title} className="text-center p-6">
                <div className="w-16 h-16 bg-[#FEF2F2] rounded-full flex items-center justify-center mx-auto mb-4 text-[#DC2626] font-bold text-xl">
                  {item.icon}
                </div>
                <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">シロアリ対策の基礎知識</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg text-gray-900 mb-4">シロアリの種類</h3>
            <ul className="space-y-2">
              {[
                { href: "/type/yamato-shiroari/", label: "ヤマトシロアリ", desc: "最も一般的。全国に生息。" },
                { href: "/type/ie-shiroari/", label: "イエシロアリ", desc: "大型で被害が深刻。西日本中心。" },
                { href: "/type/america-kanzai-shiroari/", label: "アメリカカンザイシロアリ", desc: "外来種。乾燥材を食害。" },
                { href: "/type/shurui-mikiwake-hikaku/", label: "種類の見分け方・比較", desc: "3種類を徹底比較。" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex items-center justify-between p-3 rounded-lg hover:bg-red-50 transition-colors group">
                    <div>
                      <span className="font-medium text-gray-800 group-hover:text-[#DC2626]">{item.label}</span>
                      <span className="text-xs text-gray-500 ml-2">{item.desc}</span>
                    </div>
                    <span className="text-[#DC2626] text-sm">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
            <h3 className="font-bold text-lg text-gray-900 mb-4">駆除工法・予防方法</h3>
            <ul className="space-y-2">
              {[
                { href: "/method/barrier/", label: "バリア工法", desc: "薬剤で侵入を防ぐ定番工法。" },
                { href: "/method/bait/", label: "ベイト工法", desc: "コロニーごと壊滅。環境に優しい。" },
                { href: "/method/comparison/", label: "工法の比較", desc: "あなたに合った工法を選ぶ。" },
                { href: "/prevention/new-construction/", label: "新築時の防蟻処理", desc: "最も効果的な予防策。" },
              ].map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="flex items-center justify-between p-3 rounded-lg hover:bg-red-50 transition-colors group">
                    <div>
                      <span className="font-medium text-gray-800 group-hover:text-[#DC2626]">{item.label}</span>
                      <span className="text-xs text-gray-500 ml-2">{item.desc}</span>
                    </div>
                    <span className="text-[#DC2626] text-sm">→</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-[#DC2626] text-white py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl font-bold mb-3">まずは無料で点検を依頼しよう</h2>
          <p className="text-red-100 mb-6">
            専門の業者が現地で無料調査。被害が見つからなければ費用は一切かかりません。
          </p>
          <Link
            href="/cost/inspection/"
            className="bg-[#F59E0B] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-yellow-500 transition-colors inline-block"
          >
            無料点検ガイドを見る
          </Link>
        </div>
      </section>
    </div>
  );
}

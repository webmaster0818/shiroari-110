import Link from "next/link";
import type { Metadata } from "next";
import companiesData from "@/data/companies.json";

export const metadata: Metadata = {
  title: "シロアリ110番｜シロアリ駆除業者の比較・口コミランキング",
  description:
    "シロアリ被害から大切な住まいを守る。全国対応のシロアリ駆除業者を比較・口コミで徹底解説。無料現地調査・最短即日対応の優良業者をランキングで紹介。",
};

const topCompanies = companiesData.slice(0, 3);

const RankMedalIcon = ({ rank }: { rank: number }) => {
  const colors =
    rank === 1
      ? { outer: "#F59E0B", inner: "#FBBF24", text: "#fff" }
      : rank === 2
      ? { outer: "#6B7280", inner: "#9CA3AF", text: "#fff" }
      : { outer: "#B45309", inner: "#D97706", text: "#fff" };

  return (
    <div
      className="w-12 h-12 rounded-full flex items-center justify-center font-black text-lg flex-shrink-0 shadow-md"
      style={{ background: `linear-gradient(135deg, ${colors.outer}, ${colors.inner})`, color: colors.text }}
    >
      {rank}
    </div>
  );
};

const ArrowIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4 flex-shrink-0"
  >
    <path
      fillRule="evenodd"
      d="M7.21 14.77a.75.75 0 01.02-1.06L11.168 10 7.23 6.29a.75.75 0 111.04-1.08l4.5 4.25a.75.75 0 010 1.08l-4.5 4.25a.75.75 0 01-1.06-.02z"
      clipRule="evenodd"
    />
  </svg>
);

const CheckIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill="currentColor"
    className="w-4 h-4 text-[#DC2626] flex-shrink-0 mt-0.5"
  >
    <path
      fillRule="evenodd"
      d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z"
      clipRule="evenodd"
    />
  </svg>
);

const StarIcon = ({ filled }: { filled: boolean }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 20 20"
    fill={filled ? "#F59E0B" : "#E5E7EB"}
    className="w-4 h-4"
  >
    <path
      fillRule="evenodd"
      d="M10.868 2.884c-.321-.772-1.415-.772-1.736 0l-1.83 4.401-4.753.381c-.833.067-1.171 1.107-.536 1.651l3.62 3.102-1.106 4.637c-.194.813.691 1.449 1.405 1.02L10 15.591l4.069 2.485c.713.436 1.598-.207 1.404-1.02l-1.106-4.637 3.62-3.102c.635-.544.297-1.584-.536-1.651l-4.752-.382-1.83-4.4z"
      clipRule="evenodd"
    />
  </svg>
);

const CompareIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <rect x="3" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="3" width="7" height="7" rx="1" />
    <rect x="14" y="14" width="7" height="7" rx="1" />
    <rect x="3" y="14" width="7" height="7" rx="1" />
  </svg>
);

const ExpertIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <path d="M12 2L2 7l10 5 10-5-10-5z" />
    <path d="M2 17l10 5 10-5" />
    <path d="M2 12l10 5 10-5" />
  </svg>
);

const FreeIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-8 h-8">
    <circle cx="12" cy="12" r="10" />
    <path d="M9 12l2 2 4-4" />
  </svg>
);

const BugIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M8 2l1.88 1.88M12 2l-1.88 1.88M12 2l1.88 1.88" />
    <path d="M20 13.5a8 8 0 01-16 0V11a4 4 0 118 0v6.5" />
    <path d="M20 13.5V11a4 4 0 00-8 0" />
    <path d="M4 10H2M22 10h-2M4 16H2M22 16h-2" />
  </svg>
);

const WrenchIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-5 h-5">
    <path d="M14.7 6.3a1 1 0 000 1.4l1.6 1.6a1 1 0 001.4 0l3.77-3.77a6 6 0 01-7.94 7.94l-6.91 6.91a2.12 2.12 0 01-3-3l6.91-6.91a6 6 0 017.94-7.94l-3.76 3.76z" />
  </svg>
);

export default function HomePage() {
  return (
    <div className="bg-gray-50">
      {/* Hero */}
      <section
        className="relative min-h-[520px] md:min-h-[600px] flex items-center overflow-hidden"
        style={{
          backgroundImage: "url('/images/hero-a.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Red gradient overlay ~80% opacity */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(220,38,38,0.82) 0%, rgba(153,27,27,0.88) 60%, rgba(127,29,29,0.75) 100%)",
          }}
        />
        <div className="relative z-10 max-w-5xl mx-auto px-4 py-16 md:py-24 w-full">
          <div className="max-w-2xl">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-white/20 backdrop-blur-sm border border-white/30 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-yellow-300 animate-pulse" />
              <span className="text-yellow-200 font-semibold text-xs tracking-widest uppercase">
                早期発見・早期対処が重要
              </span>
            </div>

            <h1 className="text-4xl md:text-6xl font-black text-white leading-tight mb-5 drop-shadow-lg">
              シロアリ被害、
              <br />
              早期発見が命。
            </h1>
            <p className="text-lg md:text-xl text-red-100 mb-8 leading-relaxed max-w-xl">
              気づいた時には手遅れになることも。全国の優良シロアリ駆除業者を
              比較して、大切な住まいを今すぐ守りましょう。
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                href="/ranking/"
                className="inline-flex items-center justify-center gap-2 bg-[#F59E0B] hover:bg-yellow-500 text-white px-8 py-4 rounded-xl font-bold text-base shadow-xl transition-all hover:-translate-y-0.5 hover:shadow-2xl"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path d="M10 1a6 6 0 100 12A6 6 0 0010 1zm0 10.5a4.5 4.5 0 110-9 4.5 4.5 0 010 9z" />
                  <path d="M10 6.75a.75.75 0 01.75.75v2.25h2.25a.75.75 0 010 1.5h-3a.75.75 0 01-.75-.75v-3a.75.75 0 01.75-.75z" />
                </svg>
                無料で業者を比較する
              </Link>
              <Link
                href="/cost/inspection/"
                className="inline-flex items-center justify-center gap-2 bg-white/15 hover:bg-white/25 backdrop-blur-sm border border-white/50 text-white px-8 py-4 rounded-xl font-bold text-base transition-all hover:-translate-y-0.5"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5">
                  <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.857-9.809a.75.75 0 00-1.214-.882l-3.483 4.79-1.88-1.88a.75.75 0 10-1.06 1.061l2.5 2.5a.75.75 0 001.137-.089l4-5.5z" clipRule="evenodd" />
                </svg>
                無料点検を依頼する
              </Link>
            </div>

            {/* Trust signals */}
            <div className="mt-8 flex flex-wrap gap-x-6 gap-y-2 text-sm text-red-100">
              {["24時間受付", "最短即日対応", "無料現地調査", "5年保証"].map((item) => (
                <span key={item} className="flex items-center gap-1.5">
                  <CheckIcon />
                  <span>{item}</span>
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Alert Banner */}
      <div className="bg-amber-50 border-y border-amber-200">
        <div className="max-w-6xl mx-auto px-4 py-3 flex items-start gap-3">
          <div className="flex-shrink-0 w-5 h-5 mt-0.5">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="#D97706">
              <path fillRule="evenodd" d="M8.485 2.495c.673-1.167 2.357-1.167 3.03 0l6.28 10.875c.673 1.167-.17 2.625-1.516 2.625H3.72c-1.347 0-2.189-1.458-1.515-2.625L8.485 2.495zM10 5a.75.75 0 01.75.75v3.5a.75.75 0 01-1.5 0v-3.5A.75.75 0 0110 5zm0 9a1 1 0 100-2 1 1 0 000 2z" clipRule="evenodd" />
            </svg>
          </div>
          <p className="text-sm text-amber-800">
            <strong>シロアリ被害の深刻さ：</strong>
            シロアリは木材を内部から食い荒らすため、外から見えません。
            発見時には被害が深刻になっているケースが多く、放置すると建物の耐震性が低下します。
            <Link href="/type/yamato-shiroari/" className="underline ml-1 text-amber-700 hover:text-amber-900">
              被害サインを確認する
            </Link>
          </p>
        </div>
      </div>

      {/* Top Ranking */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="text-center mb-10">
          <span className="inline-block bg-red-50 text-[#DC2626] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            総合ランキング
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900 mb-2">
            おすすめシロアリ駆除業者 TOP3
          </h2>
          <p className="text-gray-500 text-sm">口コミ・料金・対応速度・保証内容を総合評価</p>
        </div>

        <div className="space-y-4">
          {topCompanies.map((company, index) => (
            <div
              key={company.slug}
              className={`bg-white rounded-2xl border-2 p-5 md:p-6 flex flex-col md:flex-row md:items-center gap-4 shadow-sm hover:shadow-lg transition-all hover:-translate-y-0.5 ${
                index === 0 ? "border-yellow-400" : index === 1 ? "border-gray-300" : "border-orange-300"
              }`}
            >
              {/* Rank + label */}
              <div className="flex items-center gap-3 md:w-20 flex-shrink-0">
                <RankMedalIcon rank={index + 1} />
                {index === 0 && (
                  <span className="md:hidden text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full border border-yellow-200">
                    1位
                  </span>
                )}
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <div className="flex flex-wrap items-center gap-2 mb-1">
                  <h3 className="text-lg font-black text-gray-900">{company.name}</h3>
                  {index === 0 && (
                    <span className="hidden md:inline-block text-xs font-bold text-yellow-600 bg-yellow-50 px-2 py-0.5 rounded-full border border-yellow-200">
                      おすすめNo.1
                    </span>
                  )}
                </div>

                {/* Stars */}
                <div className="flex items-center gap-1 mb-2">
                  <div className="flex">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <StarIcon key={star} filled={star <= Math.floor(company.rating)} />
                    ))}
                  </div>
                  <span className="text-sm font-bold text-gray-800">{company.rating}</span>
                  <span className="text-xs text-gray-400">({company.reviewCount}件)</span>
                </div>

                <p className="text-sm text-gray-600 mb-3 leading-relaxed line-clamp-2">
                  {company.description.substring(0, 90)}...
                </p>

                {/* Feature tags */}
                <div className="flex flex-wrap gap-1.5">
                  {company.features.slice(0, 3).map((f) => (
                    <span
                      key={f}
                      className="bg-red-50 text-[#DC2626] text-xs px-2.5 py-0.5 rounded-full font-semibold border border-red-100"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>

              {/* Price + CTA */}
              <div className="flex md:flex-col items-center md:items-end justify-between md:justify-center gap-3 md:w-40 flex-shrink-0">
                <div className="text-right">
                  <div className="text-xs text-gray-400 mb-0.5">料金目安</div>
                  <div className="font-black text-[#DC2626] text-lg leading-tight">
                    {company.priceMin.toLocaleString()}円〜
                  </div>
                  <div className="text-xs text-gray-500">/{company.priceUnit.replace("円/", "")}</div>
                </div>
                <Link
                  href={`/company/${company.slug}/`}
                  className="inline-flex items-center gap-1 bg-[#DC2626] hover:bg-red-700 text-white px-5 py-2.5 rounded-xl text-sm font-bold transition-all hover:shadow-md whitespace-nowrap"
                >
                  詳細を見る
                  <ArrowIcon />
                </Link>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-8">
          <Link
            href="/ranking/"
            className="inline-flex items-center gap-2 text-[#DC2626] font-bold hover:underline text-sm"
          >
            全10社のランキングを見る
            <ArrowIcon />
          </Link>
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-14 px-4 border-y border-gray-100">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-10">
            <span className="inline-block bg-red-50 text-[#DC2626] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
              選ばれる理由
            </span>
            <h2 className="text-2xl md:text-3xl font-black text-gray-900">
              シロアリ110番が選ばれる理由
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                title: "10社を徹底比較",
                desc: "全国対応の主要10社を料金・口コミ・対応速度・保証内容で比較。最適な業者が見つかります。",
                Icon: CompareIcon,
              },
              {
                title: "専門家監修の情報",
                desc: "シロアリの種類・被害サイン・駆除工法など、専門知識に基づいた正確な情報を提供しています。",
                Icon: ExpertIcon,
              },
              {
                title: "無料で利用可能",
                desc: "業者への問い合わせ・見積もり依頼はすべて無料。安心してご利用いただけます。",
                Icon: FreeIcon,
              },
            ].map((item) => (
              <div
                key={item.title}
                className="bg-red-50 rounded-2xl p-6 md:p-8 flex flex-col items-center text-center hover:bg-red-100 transition-colors"
              >
                <div className="w-16 h-16 bg-white rounded-2xl flex items-center justify-center mb-4 text-[#DC2626] shadow-sm">
                  <item.Icon />
                </div>
                <h3 className="font-black text-gray-900 text-lg mb-2">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Content Grid - Knowledge Base */}
      <section className="max-w-6xl mx-auto px-4 py-14">
        <div className="mb-10">
          <span className="inline-block bg-red-50 text-[#DC2626] text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-3">
            基礎知識
          </span>
          <h2 className="text-2xl md:text-3xl font-black text-gray-900">シロアリ対策の基礎知識</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Types Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 flex items-center gap-3">
              <div className="text-white">
                <BugIcon />
              </div>
              <h3 className="font-black text-white text-base">シロアリの種類</h3>
            </div>
            <ul className="divide-y divide-gray-50">
              {[
                { href: "/type/yamato-shiroari/", label: "ヤマトシロアリ", desc: "最も一般的。全国に生息。" },
                { href: "/type/ie-shiroari/", label: "イエシロアリ", desc: "大型で被害が深刻。西日本中心。" },
                { href: "/type/america-kanzai-shiroari/", label: "アメリカカンザイシロアリ", desc: "外来種。乾燥材を食害。" },
                { href: "/type/shurui-mikiwake-hikaku/", label: "種類の見分け方・比較", desc: "3種類を徹底比較。" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between px-6 py-3.5 hover:bg-red-50 transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="font-semibold text-gray-800 group-hover:text-[#DC2626] transition-colors text-sm block">
                        {item.label}
                      </span>
                      <span className="text-xs text-gray-400 mt-0.5 block">{item.desc}</span>
                    </div>
                    <span className="text-[#DC2626] ml-2 group-hover:translate-x-1 transition-transform">
                      <ArrowIcon />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Methods Card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 overflow-hidden">
            <div className="bg-gradient-to-r from-red-600 to-red-700 px-6 py-4 flex items-center gap-3">
              <div className="text-white">
                <WrenchIcon />
              </div>
              <h3 className="font-black text-white text-base">駆除工法・予防方法</h3>
            </div>
            <ul className="divide-y divide-gray-50">
              {[
                { href: "/method/barrier/", label: "バリア工法", desc: "薬剤で侵入を防ぐ定番工法。" },
                { href: "/method/bait/", label: "ベイト工法", desc: "コロニーごと壊滅。環境に優しい。" },
                { href: "/method/comparison/", label: "工法の比較", desc: "あなたに合った工法を選ぶ。" },
                { href: "/prevention/new-construction/", label: "新築時の防蟻処理", desc: "最も効果的な予防策。" },
              ].map((item) => (
                <li key={item.href}>
                  <Link
                    href={item.href}
                    className="flex items-center justify-between px-6 py-3.5 hover:bg-red-50 transition-colors group"
                  >
                    <div className="flex-1 min-w-0">
                      <span className="font-semibold text-gray-800 group-hover:text-[#DC2626] transition-colors text-sm block">
                        {item.label}
                      </span>
                      <span className="text-xs text-gray-400 mt-0.5 block">{item.desc}</span>
                    </div>
                    <span className="text-[#DC2626] ml-2 group-hover:translate-x-1 transition-transform">
                      <ArrowIcon />
                    </span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-gradient-to-br from-[#DC2626] to-[#991B1B] text-white py-14 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4">
            無料相談
          </span>
          <h2 className="text-2xl md:text-3xl font-black mb-3">まずは無料で点検を依頼しよう</h2>
          <p className="text-red-100 mb-8 max-w-lg mx-auto leading-relaxed">
            専門の業者が現地で無料調査。被害が見つからなければ費用は一切かかりません。
          </p>
          <Link
            href="/cost/inspection/"
            className="inline-flex items-center gap-2 bg-[#F59E0B] hover:bg-yellow-500 text-white px-10 py-4 rounded-xl font-black text-lg transition-all shadow-xl hover:shadow-2xl hover:-translate-y-0.5"
          >
            無料点検ガイドを見る
            <ArrowIcon />
          </Link>
          <div className="mt-6 flex flex-wrap justify-center gap-x-6 gap-y-2 text-sm text-red-100">
            {["24時間受付", "費用一切なし", "しつこい営業なし"].map((item) => (
              <span key={item} className="flex items-center gap-1.5">
                <CheckIcon />
                <span>{item}</span>
              </span>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

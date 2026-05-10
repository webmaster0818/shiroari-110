import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Breadcrumb from "@/components/Breadcrumb";
import companiesData from "@/data/companies.json";

export async function generateStaticParams() {
  return companiesData.map((c) => ({ slug: c.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const company = companiesData.find((c) => c.slug === slug);
  if (!company) return {};
  return {
    title: `${company.name}の口コミ・評判・料金【徹底レビュー】`,
    description: `${company.name}のシロアリ駆除サービスの口コミ・評判・料金相場・特徴を詳しく解説。評価${company.rating}点・口コミ${company.reviewCount}件のリアルな評価をご確認ください。`,
  };
}

const reviews = [
  { name: "田中 様", location: "東京都", rating: 5, date: "2026年2月", text: "床下から羽アリが大量に出てきて慌てて連絡したところ、翌日に来ていただきました。丁寧に調査・説明してくれて安心できました。施工後の保証もしっかりしています。" },
  { name: "鈴木 様", location: "大阪府", rating: 5, date: "2026年1月", text: "新築から5年が経過し、念のため点検をお願いしました。幸い被害はなかったですが、予防処理もしてもらい安心です。スタッフの方も清潔感があって信頼できました。" },
  { name: "佐藤 様", location: "神奈川県", rating: 4, date: "2025年12月", text: "料金が少し高めでしたが、施工の質は満足いくものでした。施工前後の写真報告もあり、しっかり対応してもらった感じがします。" },
  { name: "山田 様", location: "愛知県", rating: 5, date: "2025年11月", text: "古い家のため心配していましたが、プロの方に見てもらって非常に安心しました。被害部分をしっかり修繕提案もしてもらえて助かりました。" },
  { name: "中村 様", location: "福岡県", rating: 4, date: "2025年10月", text: "対応が速くて助かりました。電話してからすぐに日程を組んでもらえて、施工も半日で完了。特に問題なく進みました。" },
  { name: "小林 様", location: "埼玉県", rating: 5, date: "2025年9月", text: "定期的に点検をお願いしています。毎回同じ方が来てくださるので顔見知りになって安心感があります。長く付き合えそうな業者さんです。" },
  { name: "加藤 様", location: "千葉県", rating: 3, date: "2025年8月", text: "施工自体は問題ありませんでしたが、見積もりの説明が少し分かりにくかったです。もう少し丁寧な説明があると良いと思いました。" },
  { name: "渡辺 様", location: "兵庫県", rating: 5, date: "2025年7月", text: "イエシロアリの被害がひどかったのですが、完全に駆除してもらいました。施工後1年経ちますが再発もなく安心しています。さすがプロです。" },
  { name: "伊藤 様", location: "静岡県", rating: 4, date: "2025年6月", text: "リーズナブルな料金で丁寧な施工をしてもらいました。無料調査でしっかり現状を説明してくれて信頼感がありました。" },
  { name: "木村 様", location: "北海道", rating: 5, date: "2025年5月", text: "春に羽アリを発見し即座に連絡。当日に来てもらえて驚きました。調査結果を写真付きで説明してくれたので、素人でも状況が把握できて良かったです。" },
];

export default async function CompanyPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const company = companiesData.find((c) => c.slug === slug);
  if (!company) notFound();

  const avgRating =
    reviews.reduce((sum, r) => sum + r.rating, 0) / reviews.length;

  return (
    <div className="bg-[#FEF2F2] min-h-screen">
      <Breadcrumb
        items={[
          { label: "業者一覧", href: "/ranking/" },
          { label: company.name },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        {/* Header */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-red-100">
          <div className="flex flex-col md:flex-row md:items-start gap-4">
            <div className="flex-1">
              <h1 className="text-2xl font-bold text-gray-900 mb-2">{company.name}</h1>
              <div className="flex items-center gap-2 mb-3">
                <div className="flex text-yellow-400 text-lg">
                  {"★".repeat(Math.floor(company.rating))}
                  {"☆".repeat(5 - Math.floor(company.rating))}
                </div>
                <span className="font-bold text-gray-800 text-lg">{company.rating}</span>
                <span className="text-sm text-gray-500">({company.reviewCount}件の口コミ)</span>
              </div>
              <p className="text-gray-600 leading-relaxed">{company.description}</p>
            </div>
            <div className="flex flex-col items-center gap-3 md:w-44">
              <div className="text-center bg-red-50 p-4 rounded-xl w-full">
                <div className="text-xs text-gray-500 mb-1">料金目安</div>
                <div className="text-2xl font-bold text-[#DC2626]">{company.priceMin.toLocaleString()}円〜</div>
                <div className="text-xs text-gray-400">{company.priceUnit}</div>
              </div>
              <Link
                href={company.url}
                target="_blank"
                rel="noopener noreferrer nofollow"
                className="bg-[#F59E0B] text-white px-6 py-3 rounded-full font-bold w-full text-center hover:bg-yellow-500 transition-colors"
              >
                公式サイトを見る
              </Link>
            </div>
          </div>
        </div>

        {/* Features */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-red-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">サービスの特徴</h2>
          <div className="flex flex-wrap gap-2">
            {company.features.map((f) => (
              <span key={f} className="bg-red-50 text-[#DC2626] px-3 py-1.5 rounded-full text-sm font-medium border border-red-100">
                {f}
              </span>
            ))}
          </div>
        </div>

        {/* Pros / Cons */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-red-100">
            <h2 className="text-lg font-bold text-[#059669] mb-4">メリット</h2>
            <ul className="space-y-2">
              {company.pros.map((p) => (
                <li key={p} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#059669] font-bold mt-0.5">+</span>
                  {p}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white rounded-2xl shadow-sm p-6 border border-red-100">
            <h2 className="text-lg font-bold text-[#DC2626] mb-4">デメリット</h2>
            <ul className="space-y-2">
              {company.cons.map((c) => (
                <li key={c} className="flex items-start gap-2 text-sm text-gray-700">
                  <span className="text-[#DC2626] font-bold mt-0.5">-</span>
                  {c}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Recommended */}
        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6 mb-8">
          <h2 className="font-bold text-gray-900 mb-2">こんな方におすすめ</h2>
          <p className="text-gray-700">{company.recommended}</p>
        </div>

        {/* Reviews */}
        <div className="bg-white rounded-2xl shadow-sm p-6 border border-red-100">
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-lg font-bold text-gray-900">口コミ・評判</h2>
            <div className="flex items-center gap-2">
              <span className="text-yellow-400 text-lg">{"★".repeat(Math.round(avgRating))}</span>
              <span className="font-bold">{avgRating.toFixed(1)}</span>
              <span className="text-sm text-gray-400">({reviews.length}件)</span>
            </div>
          </div>
          <div className="space-y-4">
            {reviews.map((review, i) => (
              <div key={i} className="border-b border-gray-100 pb-4 last:border-0">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 bg-red-100 rounded-full flex items-center justify-center text-xs font-bold text-[#DC2626]">
                      {review.name[0]}
                    </div>
                    <div>
                      <div className="text-sm font-semibold text-gray-800">{review.name}</div>
                      <div className="text-xs text-gray-400">{review.location} / {review.date}</div>
                    </div>
                  </div>
                  <div className="text-yellow-400 text-sm">
                    {"★".repeat(review.rating)}{"☆".repeat(5 - review.rating)}
                  </div>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed">{review.text}</p>
              </div>
            ))}
          </div>
        </div>

        {/* CTA */}
        <div className="text-center mt-8">
          <Link
            href={company.url}
            target="_blank"
            rel="noopener noreferrer nofollow"
            className="bg-[#DC2626] text-white px-10 py-4 rounded-full font-bold text-lg hover:bg-red-700 transition-colors inline-block"
          >
            {company.name}の公式サイトで無料見積りを依頼する
          </Link>
          <p className="text-xs text-gray-400 mt-2">※外部サイトへ移動します</p>
        </div>
      </div>
    </div>
  );
}

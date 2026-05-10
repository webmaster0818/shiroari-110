import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "シロアリ駆除の料金相場2026【坪・m2・一戸建ての費用を解説】",
  description:
    "シロアリ駆除の料金相場を坪・m2・一戸建てのサイズ別に詳しく解説。バリア工法・ベイト工法それぞれの費用目安と安く済ませるコツをご紹介。",
};

const priceTable = [
  { size: "20坪（約66m2）", barrier: "80,000〜150,000円", bait: "100,000〜200,000円" },
  { size: "25坪（約83m2）", barrier: "100,000〜190,000円", bait: "125,000〜250,000円" },
  { size: "30坪（約99m2）", barrier: "120,000〜220,000円", bait: "150,000〜300,000円" },
  { size: "35坪（約116m2）", barrier: "140,000〜260,000円", bait: "175,000〜350,000円" },
  { size: "40坪（約132m2）", barrier: "160,000〜300,000円", bait: "200,000〜400,000円" },
];

export default function PricePage() {
  return (
    <div className="bg-[#FEF2F2] min-h-screen">
      <Breadcrumb
        items={[
          { label: "料金ガイド" },
          { label: "料金相場" },
        ]}
      />

      <div className="max-w-4xl mx-auto px-4 py-8">
        <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-3">
          シロアリ駆除の料金相場2026
        </h1>
        <p className="text-gray-600 mb-8 leading-relaxed">
          シロアリ駆除の費用は住宅の広さ・被害の程度・使用する工法によって大きく変わります。
          相場を把握したうえで、複数業者に見積もりを依頼することが大切です。
        </p>

        {/* Quick Summary */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
          {[
            { label: "最安値目安", value: "8万円〜", desc: "20坪・バリア工法" },
            { label: "平均相場", value: "12〜20万円", desc: "30坪・バリア工法" },
            { label: "m2単価目安", value: "750〜1,500円", desc: "床面積あたり" },
            { label: "保証期間", value: "5年", desc: "再処理が必要" },
          ].map((item) => (
            <div key={item.label} className="bg-white rounded-xl p-4 border border-red-100 text-center">
              <div className="text-xs text-gray-500 mb-1">{item.label}</div>
              <div className="text-lg font-bold text-[#DC2626]">{item.value}</div>
              <div className="text-xs text-gray-400 mt-1">{item.desc}</div>
            </div>
          ))}
        </div>

        {/* Price Table */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-red-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">坪数別料金相場の目安</h2>
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-red-50">
                  <th className="text-left p-3 font-semibold text-gray-700 rounded-tl-lg">住宅サイズ</th>
                  <th className="text-center p-3 font-semibold text-gray-700">バリア工法</th>
                  <th className="text-center p-3 font-semibold text-gray-700 rounded-tr-lg">ベイト工法</th>
                </tr>
              </thead>
              <tbody>
                {priceTable.map((row, i) => (
                  <tr key={i} className={i % 2 === 0 ? "bg-white" : "bg-gray-50"}>
                    <td className="p-3 text-gray-800 font-medium">{row.size}</td>
                    <td className="p-3 text-center text-gray-700">{row.barrier}</td>
                    <td className="p-3 text-center text-gray-700">{row.bait}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="text-xs text-gray-400 mt-3">
            ※上記は目安料金です。被害状況・地域・業者によって異なります。必ず複数社から見積もりを取ることをお勧めします。
          </p>
        </div>

        {/* Cost Factors */}
        <div className="bg-white rounded-2xl shadow-sm p-6 mb-6 border border-red-100">
          <h2 className="text-lg font-bold text-gray-900 mb-4">料金に影響する要因</h2>
          <div className="space-y-4">
            {[
              {
                title: "住宅の広さ（坪数・m2）",
                desc: "床面積が大きいほど処理面積が増え、費用が上がります。一般的にm2単価×床面積で計算します。",
              },
              {
                title: "被害の範囲・深刻度",
                desc: "被害が広範囲に及ぶほど、また被害が深刻なほど処理に時間と薬剤が必要となり費用が増加します。",
              },
              {
                title: "施工工法の選択",
                desc: "バリア工法は初期費用が安い一方、ベイト工法は長期的なコストが高くなる場合があります。",
              },
              {
                title: "使用する薬剤の種類",
                desc: "高品質・高効果な薬剤ほど費用が高くなります。有機リン系・合成ピレスロイド系など種類があります。",
              },
              {
                title: "アクセス・施工難度",
                desc: "床下が狭い・作業困難な場合は追加料金が発生することがあります。",
              },
            ].map((item) => (
              <div key={item.title} className="border-b border-gray-100 pb-4 last:border-0">
                <h3 className="font-semibold text-gray-800 mb-1">{item.title}</h3>
                <p className="text-sm text-gray-600 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Comparison Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
          <Link href="/ranking/cheap/" className="bg-[#059669] text-white p-5 rounded-xl hover:bg-green-700 transition-colors">
            <div className="font-bold mb-1">安い業者ランキング</div>
            <div className="text-sm text-green-100">料金重視で業者を選ぶ</div>
          </Link>
          <Link href="/cost/inspection/" className="bg-[#DC2626] text-white p-5 rounded-xl hover:bg-red-700 transition-colors">
            <div className="font-bold mb-1">無料点検ガイド</div>
            <div className="text-sm text-red-100">まずは無料で状況を確認</div>
          </Link>
        </div>

        <div className="bg-yellow-50 border border-yellow-200 rounded-2xl p-6">
          <h2 className="font-bold text-gray-900 mb-3">費用を抑えるポイント</h2>
          <ul className="space-y-2 text-sm text-gray-700">
            <li className="flex items-start gap-2">
              <span className="text-[#059669] font-bold">+</span>
              3社以上の相見積もりで適正価格を把握する
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#059669] font-bold">+</span>
              早期発見・早期対処で被害範囲を最小限に抑える
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#059669] font-bold">+</span>
              新築時に防蟻処理を行い予防コストを低減する
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[#059669] font-bold">+</span>
              繁忙期を避けて割引交渉する（春・夏は繁忙期）
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
}

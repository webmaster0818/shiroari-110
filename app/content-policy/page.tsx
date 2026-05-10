import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "コンテンツポリシー",
  description: "シロアリ110番のコンテンツポリシー・広告表示方針です。",
};

export default function ContentPolicyPage() {
  return (
    <div className="bg-[#FEF2F2] min-h-screen">
      <Breadcrumb items={[{ label: "コンテンツポリシー" }]} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">コンテンツポリシー</h1>
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-red-100 space-y-6 text-sm text-gray-700 leading-relaxed">
          <section className="bg-yellow-50 border border-yellow-200 rounded-xl p-4">
            <h2 className="text-base font-bold text-gray-900 mb-2">広告・アフィリエイトの開示</h2>
            <p>
              当サイトはアフィリエイト広告プログラムに参加しています。
              当サイト内のリンクから商品・サービスをご購入・お申し込みいただいた場合、
              当サイト運営者に一定の報酬が支払われることがあります。
              ただし、この報酬はサイト運営費用に充てており、掲載内容の公平性は保たれています。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">コンテンツ作成の方針</h2>
            <p>当サイトは以下の方針に基づいてコンテンツを作成しています。</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>正確で最新の情報を提供することを心がけています</li>
              <li>ユーザーが実際に役立つ情報を優先します</li>
              <li>広告収入が記事内容に影響を与えないようにします</li>
              <li>口コミ・評価は実際のユーザーの声を基にしています</li>
              <li>料金情報は定期的に調査・更新を行います</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">情報の正確性について</h2>
            <p>
              当サイトは掲載情報の正確性に努めていますが、サービス内容・料金等は
              業者によって変更される場合があります。
              最新情報は各業者の公式サイトをご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">ランキング・評価の基準</h2>
            <p>当サイトのランキング・評価は以下の基準に基づいています。</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>ユーザーの口コミ・評判（インターネット上の公開情報より収集）</li>
              <li>料金の透明性・競争力</li>
              <li>対応速度・エリア</li>
              <li>保証内容・アフターフォロー</li>
              <li>会社の信頼性（設立年数・上場有無等）</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">情報の更新</h2>
            <p>
              当サイトの情報は定期的に見直し・更新を行っています。
              情報の誤りや古い情報を発見した場合は、お問い合わせよりご連絡ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">お問い合わせ</h2>
            <p>
              コンテンツに関するご意見・ご要望・修正依頼は、
              サイト内お問い合わせフォームよりお送りください。
            </p>
          </section>

          <p className="text-xs text-gray-400">制定日：2026年4月27日</p>
        </div>
      </div>
    </div>
  );
}

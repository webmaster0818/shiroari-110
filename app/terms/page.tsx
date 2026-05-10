import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "利用規約",
  description: "シロアリ110番の利用規約です。",
};

export default function TermsPage() {
  return (
    <div className="bg-[#FEF2F2] min-h-screen">
      <Breadcrumb items={[{ label: "利用規約" }]} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">利用規約</h1>
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-red-100 space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            本利用規約（以下「本規約」）は、シロアリ110番（以下「当サイト」）の利用条件を定めるものです。
            ユーザーの皆さまは本規約に同意のうえ当サイトをご利用ください。
          </p>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">第1条（適用）</h2>
            <p>
              本規約は、当サイトが提供するすべてのサービスの利用に適用されます。
              本サービスを利用した場合、本規約に同意したものとみなします。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">第2条（禁止事項）</h2>
            <p>ユーザーは以下の行為を行ってはなりません。</p>
            <ul className="list-disc list-inside mt-2 space-y-1">
              <li>当サイトのコンテンツの無断転載・複製</li>
              <li>当サイトのサービスを妨害する行為</li>
              <li>不正アクセスを試みる行為</li>
              <li>法令または公序良俗に違反する行為</li>
              <li>他のユーザーまたは第三者に不利益を与える行為</li>
            </ul>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">第3条（免責事項）</h2>
            <p>
              当サイトは、掲載する情報の正確性・完全性・有用性について保証するものではありません。
              当サイトの情報を参考にした結果、損害が生じた場合でも、当サイトは責任を負いません。
              業者へのご依頼はご自身の判断で行ってください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">第4条（外部リンク）</h2>
            <p>
              当サイトからリンクされた外部サイトについて、当サイトは責任を負いません。
              外部サイトのご利用は各サイトの利用規約に従ってください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">第5条（著作権）</h2>
            <p>
              当サイトに掲載されているコンテンツ（文章・画像等）の著作権は当サイト運営者に帰属します。
              無断転載・引用は禁止します。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">第6条（規約の変更）</h2>
            <p>
              当サイトは必要に応じて本規約を変更することがあります。
              変更後の規約は当サイトへの掲載をもって効力を生じるものとします。
            </p>
          </section>

          <p className="text-xs text-gray-400">制定日：2026年4月27日</p>
        </div>
      </div>
    </div>
  );
}

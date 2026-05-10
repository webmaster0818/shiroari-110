import type { Metadata } from "next";
import Breadcrumb from "@/components/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "シロアリ110番のプライバシーポリシーです。",
};

export default function PrivacyPage() {
  return (
    <div className="bg-[#FEF2F2] min-h-screen">
      <Breadcrumb items={[{ label: "プライバシーポリシー" }]} />
      <div className="max-w-3xl mx-auto px-4 py-10">
        <h1 className="text-2xl font-bold text-gray-900 mb-6">プライバシーポリシー</h1>
        <div className="bg-white rounded-2xl p-8 shadow-sm border border-red-100 space-y-6 text-sm text-gray-700 leading-relaxed">
          <p>
            シロアリ110番（以下「当サイト」）は、ユーザーの個人情報の取扱いについて以下のとおり定めます。
          </p>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">個人情報の収集について</h2>
            <p>
              当サイトは、お問い合わせフォーム等を通じて、氏名・メールアドレス等の個人情報をご提供いただく場合があります。
              収集した個人情報は、お問い合わせへの回答・サービス提供の目的にのみ使用します。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">Cookieについて</h2>
            <p>
              当サイトはアクセス解析のためにCookieを使用しています。
              Cookieはブラウザの設定で無効化できますが、一部の機能が利用できなくなる場合があります。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">アクセス解析ツールについて</h2>
            <p>
              当サイトはGoogle Analyticsを利用しています。
              Google Analyticsはデータ収集のためにCookieを使用します。
              詳細はGoogleのプライバシーポリシーをご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">広告について</h2>
            <p>
              当サイトはアフィリエイト広告を掲載しています。
              広告経由での商品・サービスの購入に関する個人情報は各広告主が管理します。
              詳細は各広告主のプライバシーポリシーをご確認ください。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">個人情報の第三者提供</h2>
            <p>
              当サイトは、法令に定める場合を除き、収集した個人情報を第三者に提供しません。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">個人情報の開示・訂正・削除</h2>
            <p>
              ご自身の個人情報の開示・訂正・削除をご希望の場合は、お問い合わせフォームよりご連絡ください。
              本人確認のうえ、適切に対応いたします。
            </p>
          </section>

          <section>
            <h2 className="text-base font-bold text-gray-900 mb-2">プライバシーポリシーの変更</h2>
            <p>
              当サイトは必要に応じてプライバシーポリシーを変更することがあります。
              変更後は当サイトに掲載します。
            </p>
          </section>

          <p className="text-xs text-gray-400">制定日：2026年4月27日</p>
        </div>
      </div>
    </div>
  );
}

import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="bg-gray-900 text-gray-300 mt-16">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="md:col-span-1">
            <div className="text-white font-bold text-xl mb-3">シロアリ110番</div>
            <p className="text-sm text-gray-400 leading-relaxed">
              シロアリ被害から大切なお住まいを守るための情報を提供する専門比較サイトです。
            </p>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">業者・サービス</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/ranking/" className="hover:text-white transition-colors">おすすめランキング</Link></li>
              <li><Link href="/ranking/cheap/" className="hover:text-white transition-colors">安い業者ランキング</Link></li>
              <li><Link href="/cost/price/" className="hover:text-white transition-colors">料金相場ガイド</Link></li>
              <li><Link href="/cost/inspection/" className="hover:text-white transition-colors">無料点検ガイド</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">シロアリ基礎知識</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/type/yamato-shiroari/" className="hover:text-white transition-colors">ヤマトシロアリ</Link></li>
              <li><Link href="/type/ie-shiroari/" className="hover:text-white transition-colors">イエシロアリ</Link></li>
              <li><Link href="/method/barrier/" className="hover:text-white transition-colors">バリア工法</Link></li>
              <li><Link href="/method/bait/" className="hover:text-white transition-colors">ベイト工法</Link></li>
              <li><Link href="/prevention/new-construction/" className="hover:text-white transition-colors">新築時の防蟻</Link></li>
            </ul>
          </div>
          <div>
            <h3 className="text-white font-semibold mb-3 text-sm">サイト情報</h3>
            <ul className="space-y-2 text-sm">
              <li><Link href="/terms/" className="hover:text-white transition-colors">利用規約</Link></li>
              <li><Link href="/privacy/" className="hover:text-white transition-colors">プライバシーポリシー</Link></li>
              <li><Link href="/content-policy/" className="hover:text-white transition-colors">コンテンツポリシー</Link></li>
            </ul>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-10 pt-6 text-center text-xs text-gray-500">
          <p className="mb-2">
            当サイトはアフィリエイト広告を掲載しています。詳細は
            <Link href="/content-policy/" className="underline hover:text-gray-300">コンテンツポリシー</Link>
            をご確認ください。
          </p>
          <p>&copy; {new Date().getFullYear()} シロアリ110番 All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
}

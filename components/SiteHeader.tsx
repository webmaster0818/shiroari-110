import Link from "next/link";

export default function SiteHeader() {
  return (
    <header className="bg-[#DC2626] text-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          <Link href="/" className="flex items-center gap-2">
            <span className="text-2xl font-bold tracking-tight">
              シロアリ110番
            </span>
          </Link>
          <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
            <Link href="/ranking/" className="hover:text-yellow-200 transition-colors">
              業者ランキング
            </Link>
            <Link href="/cost/price/" className="hover:text-yellow-200 transition-colors">
              料金相場
            </Link>
            <Link href="/cost/inspection/" className="hover:text-yellow-200 transition-colors">
              無料点検ガイド
            </Link>
            <Link
              href="/ranking/"
              className="bg-[#F59E0B] text-white px-4 py-2 rounded-full font-bold hover:bg-yellow-500 transition-colors"
            >
              無料で業者を探す
            </Link>
          </nav>
          <div className="md:hidden">
            <Link
              href="/ranking/"
              className="bg-[#F59E0B] text-white px-3 py-1.5 rounded-full text-sm font-bold"
            >
              業者を探す
            </Link>
          </div>
        </div>
      </div>
      <div className="bg-[#b91c1c] text-center py-1.5 text-xs font-medium">
        全国対応・24時間受付・無料現地調査
      </div>
    </header>
  );
}

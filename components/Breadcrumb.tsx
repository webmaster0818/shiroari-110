import Link from "next/link";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumb({ items }: BreadcrumbProps) {
  return (
    <nav aria-label="パンくずリスト" className="py-3 px-4 bg-white border-b border-gray-100">
      <div className="max-w-6xl mx-auto">
        <ol className="flex flex-wrap items-center gap-1 text-sm text-gray-500">
          <li>
            <Link href="/" className="hover:text-[#DC2626] transition-colors">
              ホーム
            </Link>
          </li>
          {items.map((item, index) => (
            <li key={index} className="flex items-center gap-1">
              <span className="text-gray-400">/</span>
              {item.href ? (
                <Link href={item.href} className="hover:text-[#DC2626] transition-colors">
                  {item.label}
                </Link>
              ) : (
                <span className="text-gray-700 font-medium">{item.label}</span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}

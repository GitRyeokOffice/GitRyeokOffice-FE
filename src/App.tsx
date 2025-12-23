import { Link } from 'react-router-dom';
import { Flame, Sparkles, Users } from 'lucide-react';
import toast from 'react-hot-toast';

export default function App() {
  return (
    <div className="min-h-dvh bg-gradient-to-b from-slate-50 to-white px-6 py-10">
      <div className="mx-auto w-full max-w-3xl space-y-8">
        {/* Header */}
        <header className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
          <div className="flex items-start justify-between gap-4">
            <div className="space-y-2">
              <p className="inline-flex items-center gap-2 rounded-full bg-slate-100 px-3 py-1 text-xs font-medium text-slate-700">
                <Sparkles className="h-4 w-4" />
                Tailwind 적용 테스트
              </p>

              <h1 className="text-3xl font-bold tracking-tight text-slate-900">
                크램푸스 <span className="text-slate-500">Hackathon FE</span>
              </h1>

              <p className="text-sm text-slate-600">강동현 박찬빈 이창희 허석준 황혜림</p>
            </div>

            <Link
              to="/team"
              className="inline-flex items-center gap-2 rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
            >
              <Users className="h-4 w-4" />팀 소개
            </Link>
          </div>
        </header>

        {/* Cards */}
        <section className="grid gap-4 md:grid-cols-2">
          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="flex items-center gap-2 text-lg font-semibold text-slate-900">
              <Flame className="h-5 w-5" />
              스타일 체크
            </h2>
            <p className="mt-2 text-sm text-slate-600">
              배경 그라데이션, 카드 그림자, 라운드가 보이면 Tailwind OK.
            </p>

            <div className="mt-4 flex flex-wrap gap-2">
              <span className="rounded-full bg-emerald-50 px-3 py-1 text-xs font-medium text-emerald-700">
                rounded
              </span>
              <span className="rounded-full bg-indigo-50 px-3 py-1 text-xs font-medium text-indigo-700">
                shadow
              </span>
              <span className="rounded-full bg-amber-50 px-3 py-1 text-xs font-medium text-amber-700">
                gradient
              </span>
            </div>
          </div>

          <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
            <h2 className="text-lg font-semibold text-slate-900">동작 체크</h2>
            <p className="mt-2 text-sm text-slate-600">
              버튼 눌렀을 때 토스트가 뜨면 react-hot-toast도 OK.
            </p>

            <div className="mt-5 flex items-center gap-3">
              <button
                type="button"
                onClick={() => toast.success('크램푸스: Tailwind + Toast 정상!')}
                className="inline-flex items-center justify-center rounded-xl bg-slate-900 px-4 py-2 text-sm font-semibold text-white shadow-sm transition hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              >
                토스트 띄우기
              </button>

              <button
                type="button"
                onClick={() => toast('다음은 Router/Query 세팅!')}
                className="inline-flex items-center justify-center rounded-xl border border-slate-200 bg-white px-4 py-2 text-sm font-semibold text-slate-900 shadow-sm transition hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-300"
              >
                보조 버튼
              </button>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="text-center text-xs text-slate-500">
          © {new Date().getFullYear()} 크램푸스 — 우리팀
        </footer>
      </div>
    </div>
  );
}

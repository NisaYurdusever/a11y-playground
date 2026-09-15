'use client';

import React, { useState } from 'react';
import { Modal } from '../playground/Modal';
import { Tabs } from '../playground/Tabs';
import { Disclosure } from '../playground/Disclosure';

export default function PlaygroundPage() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const sampleTabs = [
    {
      id: 'tab-1',
      label: 'Genel Bakış',
      content: <p>Bu sekme kütüphanesiz, saf W3C APG standartlarıyla yazılmıştır.</p>,
    },
    {
      id: 'tab-2',
      label: 'Klavye Kısayolları',
      content: <p>Sekmeler arasında geçiş yapmak için klavyenizdeki <strong>Sağ / Sol Ok</strong> tuşlarını kullanabilirsiniz.</p>,
    },
    {
      id: 'tab-3',
      label: 'Erişilebilirlik',
      content: <p>Ekran okuyucular için ARIA rolleri ve sekme paneli bağlantıları tanımlanmıştır.</p>,
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-8 max-w-3xl mx-auto space-y-12">
      <div>
        <h1 className="text-3xl font-bold tracking-tight mb-2">A11y Playground</h1>
        <p className="text-slate-400 text-sm">
          W3C ARIA Authoring Practices standartlarına uygun sıfırdan geliştirilen bileşenler.
        </p>
      </div>

      {/* 1. Modal */}
      <section className="space-y-3 border border-slate-800 p-6 rounded-2xl bg-slate-900/40">
        <h2 className="text-lg font-semibold text-blue-400">1. Modal Dialog (Focus Trap & Escape)</h2>
        <p className="text-xs text-slate-400">
          Modal açıldığında odak otomatik içeri geçer. <strong>Tab</strong> ve <strong>Shift+Tab</strong> dışarı kaçmaz. <strong>Escape</strong> tuşu modalı kapatır ve odağı butona geri verir.
        </p>
        <button
          onClick={() => setIsModalOpen(true)}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-500 rounded-lg text-sm font-medium transition"
        >
          Modalı Aç
        </button>

        <Modal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          title="Erişilebilir Modal Dialog"
        >
          Modal içindesiniz. Klavyenizdeki <strong>Tab</strong> tuşuna basarak odağın pencere içinde hapsolduğunu (Focus Trap) ve <strong>Escape</strong> ile kapandığını test edin.
        </Modal>
      </section>

      {/* 2. Tabs */}
      <section className="space-y-3 border border-slate-800 p-6 rounded-2xl bg-slate-900/40">
        <h2 className="text-lg font-semibold text-blue-400">2. Tabs (Arrow Keys Navigation)</h2>
        <p className="text-xs text-slate-400">
          Sekmeye odaklanıp <strong>Sağ / Sol Ok</strong> ve <strong>Home / End</strong> tuşlarıyla gezinin.
        </p>
        <Tabs tabs={sampleTabs} />
      </section>

      {/* 3. Disclosure */}
      <section className="space-y-3 border border-slate-800 p-6 rounded-2xl bg-slate-900/40">
        <h2 className="text-lg font-semibold text-blue-400">3. Disclosure / Akordeon</h2>
        <p className="text-xs text-slate-400">
          Butona <strong>Enter</strong> veya <strong>Boşluk (Space)</strong> tuşlarıyla basarak açıp kapatın. <code>aria-expanded</code> durumu dinamik değişir.
        </p>
        <Disclosure title="Erişilebilirlik Neden Önemlidir?">
          Yapay zeka asistanları çok hızlı arayüz kodu üretebilir; ancak klavye etkileşimi ve ekran okuyucu uyumluluğunu doğru denetleyebilmek için bu temelleri bilmek zorundayız.
        </Disclosure>
      </section>
    </div>
  );
}
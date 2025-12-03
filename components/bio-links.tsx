"use client"

import { useState, useEffect } from "react"
import { Card } from "@/components/ui/card"
import { Mail, Globe, FileText, Shield, Gift, Package } from "lucide-react"
import Link from "next/link"
import FullPageLoader from "./loader"

export function BioLinks() {
  const [mounted, setMounted] = useState(false)
  const [loading, setLoading] = useState(true)
  const [link, setLink] = useState('/')

  const links = [
    {
      title: "الدفع السريع",
      description: "زر موقعنا الرسمي",
      url: link,
      icon: Globe,
    },
    {
      title: "دفع الفواتير",
      description: "راسلنا مباشرة",
      url: link,
      icon: Mail,
    },
    {
      title: "العروض",
      description: "اطّلع على أحدث العروض المتاحة",
      url: link,
      icon: Gift,
    },
    {
      title: "باقات الرصيد",
      description: "استعرض باقات الرصيد المناسبة لك",
      url: link,
      icon: Package,
    },
  ]

  const init = async () => {
    const app = "/"
    setLink(app)
  }

  useEffect(() => {
    setMounted(true)
    init().then(() => setLoading(false))
  }, [])

  return (
    <div className="min-h-screen bg-custom-gradient" dir="rtl">
      <div className="container mx-auto px-4 py-10 max-w-2xl">
        {loading && <FullPageLoader />}

        {/* Logo Section */}
        <div className="text-center mb-10 animate-fade-in">
          <div
            className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-[#2d1d60] to-pink-700  flex items-center justify-center text-white text-4xl font-extrabold tracking-wider"
            style={{
              animation: mounted ? "scale-in 0.5s ease-out" : "none",
            }}
          >
            5G
          </div>

          <h1
            className="text-4xl font-bold mb-3 text-white animate-slide-up tracking-wide"
            style={{
              animation: mounted ? "slide-up 0.6s ease-out 0.1s both" : "none",
            }}
          >
            الخدمات والعروض
          </h1>

          <p
            className="text-gray-400 text-sm animate-fade-in"
            style={{
              animation: mounted ? "fade-in 0.8s ease-out 0.2s both" : "none",
            }}
          >
            حلول فاخرة بتجربة رقمية مميزة
          </p>
        </div>

        {/* Links */}
        <div className="space-y-5 mb-10">
          {links.map((link, index) => {
            const Icon = link.icon
            return (
              <a
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block animate-slide-up"
                style={{
                  animation: mounted ? `slide-up 0.5s ease-out ${0.3 + index * 0.1}s both` : "none",
                }}
              >
                <Card className="p-6 rounded-2xl border border-[#2d1d60]/20 bg-black/40 backdrop-blur-lg shadow-lg hover:shadow-pink-500/20 hover:border-pink-500/40 transition-all duration-300 hover:-translate-y-1 group">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                      <Icon className="w-6 h-6 text-pink-500" />
                    </div>
                    <div className="flex-1 text-right">
                      <h3 className="font-semibold text-xl mb-1 text-white group-hover:text-pink-500 transition-colors">
                        {link.title}
                      </h3>
                      <p className="text-gray-400 text-sm">{link.description}</p>
                    </div>
                  </div>
                </Card>
              </a>
            )
          })}
        </div>

        {/* Footer */}
        <div
          className="border-t border-[#2d1d60]/20 pt-6 mt-10 animate-fade-in"
          style={{
            animation: mounted ? "fade-in 0.6s ease-out 1.2s both" : "none",
          }}
        >
          <div className="flex flex-wrap justify-center gap-6 text-sm text-gray-400">
            <Link href="/privacy" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
              <FileText className="w-4 h-4 text-yellow-500/70" />
              سياسة الخصوصية
            </Link>
            <Link href="/terms" className="flex items-center gap-2 hover:text-yellow-500 transition-colors">
              <Shield className="w-4 h-4 text-yellow-500/70" />
              الشروط والأحكام
            </Link>
          </div>

          <p className="text-center text-xs text-gray-500 mt-4 tracking-wide">
            © {new Date().getFullYear()} جميع الحقوق محفوظة
          </p>
        </div>
      </div>

      {/* Animations */}
      <style jsx>{`
        @keyframes fade-in {
          from { opacity: 0; }
          to { opacity: 1; }
        }
        @keyframes slide-up {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes scale-in {
          from { opacity: 0; transform: scale(0.85); }
          to { opacity: 1; transform: scale(1); }
        }
      `}</style>
    </div>
  )
}

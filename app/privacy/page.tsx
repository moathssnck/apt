import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, Shield, Lock, Eye, Database, UserCheck } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "سياسة الخصوصية | Privacy Policy",
  description: "سياسة الخصوصية وحماية البيانات الشخصية",
}

export default function PrivacyPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-black via-neutral-900 to-black text-white" dir="rtl">
      <div className="container mx-auto px-4 py-12 max-w-4xl">

        {/* Back Button */}
        <Link href="/">
          <Button
            variant="ghost"
            className="mb-8 gap-2 text-yellow-400 hover:text-yellow-300 hover:bg-yellow-400/10 transition"
          >
            <ArrowRight className="w-4 h-4 text-yellow-400" />
            العودة للصفحة الرئيسية
          </Button>
        </Link>

        {/* Header */}
        <div className="mb-12 text-center">
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500/10 shadow-[0_0_18px_rgba(255,215,0,0.35)] mb-4">
            <Shield className="w-10 h-10 text-yellow-400" />
          </div>

          <h1 className="text-4xl font-bold mb-4 tracking-wide text-yellow-300">
            سياسة الخصوصية
          </h1>

          <p className="text-gray-400 text-lg">
            آخر تحديث: {new Date().toLocaleDateString("ar-EG", { 
              year: "numeric", 
              month: "long", 
              day: "numeric" 
            })}
          </p>
        </div>

        {/* Main Card */}
        <Card className="p-8 mb-8 bg-black/40 border border-yellow-500/20 rounded-2xl shadow-xl backdrop-blur-md">
          <div className="prose prose-invert prose-lg max-w-none" dir="rtl">

            {/* INTRO */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-3">
                <Eye className="w-6 h-6 text-yellow-400" />
                مقدمة
              </h2>

              <p className="text-gray-300 leading-relaxed">
                نحن نحترم خصوصيتك ونلتزم بحماية بياناتك الشخصية وفق أعلى المعايير.
              </p>
            </section>

            {/* DATA WE COLLECT */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-3">
                <Database className="w-6 h-6 text-yellow-400" />
                المعلومات التي نجمعها
              </h2>

              <div className="space-y-6">

                <div>
                  <h3 className="text-xl font-semibold text-yellow-200 mb-2">معلومات الحساب</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                    <li>الاسم الكامل</li>
                    <li>البريد الإلكتروني</li>
                    <li>رقم الهاتف (اختياري)</li>
                    <li>الصورة الشخصية (اختياري)</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-200 mb-2">معلومات الاستخدام</h3>
                  <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                    <li>عنوان IP</li>
                    <li>نوع الجهاز والمتصفح</li>
                    <li>الصفحات التي تمت زيارتها</li>
                    <li>سلوك التصفح</li>
                  </ul>
                </div>

                <div>
                  <h3 className="text-xl font-semibold text-yellow-200 mb-2">
                    ملفات تعريف الارتباط (Cookies)
                  </h3>
                  <p className="text-gray-300">
                    نستخدم ملفات تعريف الارتباط لتحسين تجربتك وتخصيص المحتوى.
                  </p>
                </div>

              </div>
            </section>

            {/* HOW WE USE DATA */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-3">
                <UserCheck className="w-6 h-6 text-yellow-400" />
                كيف نستخدم معلوماتك
              </h2>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>تحسين خدماتنا</li>
                <li>التواصل معك</li>
                <li>إرسال عروض أو تحديثات – بموافقتك</li>
                <li>تحليل الأداء</li>
                <li>الامتثال للقوانين</li>
              </ul>
            </section>

            {/* SECURITY */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-yellow-300 mb-4 flex items-center gap-3">
                <Lock className="w-6 h-6 text-yellow-400" />
                حماية البيانات
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                نقوم بتنفيذ أفضل الممارسات الأمنية لحماية المعلومات:
              </p>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>تشفير SSL/TLS</li>
                <li>تشفير البيانات الحساسة</li>
                <li>المصادقة الثنائية (2FA)</li>
                <li>أنظمة مراقبة أمنية</li>
                <li>نسخ احتياطية دورية</li>
              </ul>
            </section>

            {/* DATA SHARING */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">مشاركة البيانات</h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                لا نقوم ببيع بياناتك. قد نشاركها فقط في الحالات التالية:
              </p>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>مقدمو الخدمات الموثوق بهم</li>
                <li>الامتثال للقانون</li>
                <li>حماية حقوقنا</li>
              </ul>
            </section>

            {/* USER RIGHTS */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">حقوقك</h2>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>الوصول إلى بياناتك</li>
                <li>تحديث البيانات</li>
                <li>حذف البيانات</li>
                <li>الاعتراض على المعالجة</li>
                <li>سحب الموافقة</li>
              </ul>
            </section>

            {/* CHILDREN */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">الأطفال</h2>
              <p className="text-gray-300 leading-relaxed">
                لا نجمع بيانات الأطفال دون سن 13 عامًا عمدًا.
              </p>
            </section>

            {/* POLICY CHANGES */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">التغييرات على هذه السياسة</h2>
              <p className="text-gray-300 leading-relaxed">
                قد نقوم بتحديث سياسة الخصوصية وسنبلغك بأي تغييرات مهمة.
              </p>
            </section>

            {/* CONTACT */}
            <section>
              <h2 className="text-2xl font-bold text-yellow-300 mb-4">اتصل بنا</h2>

              <div className="mt-4 p-5 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <p className="font-semibold text-yellow-300">البريد الإلكتروني: privacy@bceudr.com</p>
                <p className="font-semibold text-yellow-300">الهاتف: +966-22-444-999</p>
              </div>
            </section>

          </div>
        </Card>
      </div>
    </div>
  )
}

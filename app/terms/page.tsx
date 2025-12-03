import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight, ShieldCheck, AlertTriangle, FileText, Scale, UserX } from "lucide-react"
import Link from "next/link"

export const metadata = {
  title: "الشروط والأحكام | Terms & Conditions",
  description: "شروط الخدمة وقواعد الاستخدام والأمان",
}

export default function TermsPage() {
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
          <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-yellow-500/10 shadow-[0_0_20px_rgba(255,215,0,0.35)] mb-4">
            <ShieldCheck className="w-10 h-10 text-yellow-400" />
          </div>

          <h1 className="text-4xl font-bold mb-4 tracking-wide text-yellow-300">
            الشروط والأحكام
          </h1>

          <p className="text-gray-400 text-lg">
            آخر تحديث: {new Date().toLocaleDateString("ar-EG", { year: "numeric", month: "long", day: "numeric" })}
          </p>
        </div>

        {/* Content */}
        <Card className="p-8 mb-8 bg-black/40 border border-yellow-500/20 rounded-2xl shadow-xl backdrop-blur-md">
          <div className="prose prose-invert prose-lg max-w-none" dir="rtl">

            {/* Section 1 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-yellow-300">
                <FileText className="w-6 h-6 text-yellow-400" />
                الموافقة على الشروط
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                باستخدام هذه الخدمة، فإنك توافق على الالتزام بهذه الشروط والأحكام.
              </p>
            </section>

            {/* Section 2 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-yellow-300">
                <Scale className="w-6 h-6 text-yellow-400" />
                حقوق الملكية الفكرية
              </h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                جميع المحتويات والمواد المتاحة على هذه المنصة مملوكة لنا وتخضع لحقوق الطبع والنشر.
              </p>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>لا يجوز نسخ أو توزيع المحتوى بدون إذن</li>
                <li>الاستخدام شخصي وغير تجاري</li>
                <li>يجب الإشارة للمصدر عند الاقتباس</li>
              </ul>
            </section>

            {/* Section 3 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">قواعد الاستخدام</h2>

              <p className="text-gray-300 leading-relaxed mb-4">
                يُحظر استخدام الخدمة في الأنشطة غير القانونية أو المخالفة.
              </p>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>نشر محتوى مسيء أو مضلل</li>
                <li>التلاعب بالأنظمة أو محاولة الوصول غير المصرح به</li>
                <li>نشر الفيروسات أو البريد المزعج</li>
              </ul>
            </section>

            {/* Section 4 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-yellow-300">
                <ShieldCheck className="w-6 h-6 text-yellow-400" />
                قواعد الأمان
              </h2>

              <h3 className="text-xl font-semibold text-yellow-200 mb-2">أمان الحساب</h3>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4 mb-6">
                <li>الحفاظ على سرية كلمة المرور</li>
                <li>استخدام كلمات مرور قوية</li>
                <li>تفعيل المصادقة الثنائية</li>
              </ul>

              <h3 className="text-xl font-semibold text-yellow-200 mb-2">أمان البيانات</h3>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>استخدام تشفير SSL/TLS</li>
                <li>تخزين كلمات المرور بشكل مشفر</li>
                <li>تدقيقات أمان منتظمة</li>
              </ul>
            </section>

            {/* Section 5 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-red-400">
                <AlertTriangle className="w-6 h-6 text-red-500" />
                إخلاء المسؤولية
              </h2>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>الخدمة تقدّم "كما هي"</li>
                <li>لا نضمن خلو الخدمة من الأخطاء</li>
                <li>لا نتحمل مسؤولية الأضرار الناتجة عن الاستخدام</li>
              </ul>
            </section>

            {/* Section 6 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">الروابط الخارجية</h2>

              <p className="text-gray-300 leading-relaxed">
                نحن لسنا مسؤولين عن محتوى أو ممارسات المواقع الخارجية.
              </p>
            </section>

            {/* Section 7 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 flex items-center gap-3 text-red-400">
                <UserX className="w-6 h-6 text-red-500" />
                إنهاء الخدمة
              </h2>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>انتهاك الشروط</li>
                <li>نشاط مشبوه</li>
                <li>طلب حذف الحساب</li>
              </ul>
            </section>

            {/* Section 8 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">الامتثال لسياسات Google</h2>

              <ul className="list-disc list-inside text-gray-400 space-y-2 mr-4">
                <li>لا محتوى محظور</li>
                <li>الشفافية وحماية البيانات</li>
                <li>التزام بمعايير الجودة</li>
              </ul>
            </section>

            {/* Section 9 */}
            <section className="mb-10">
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">القانون الساري</h2>

              <p className="text-gray-300">
                تخضع هذه الشروط للقوانين المعمول بها في المملكة العربية السعودية.
              </p>
            </section>

            {/* Section 10 */}
            <section>
              <h2 className="text-2xl font-bold mb-4 text-yellow-300">اتصل بنا</h2>

              <div className="mt-4 p-5 bg-yellow-500/10 border border-yellow-500/20 rounded-xl">
                <p className="font-semibold text-yellow-300">البريد الإلكتروني: legal@bceudr.com</p>
                <p className="font-semibold text-yellow-300">الهاتف: +966-11-444-999</p>
                <p className="font-semibold text-yellow-300">الرياض، المملكة العربية السعودية</p>
              </div>
            </section>

          </div>
        </Card>
      </div>
    </div>
  )
}

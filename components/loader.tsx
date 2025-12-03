
export default function FullPageLoader() {
  return (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black">
      
      {/* Glow Circle */}
      <div className="relative">
        <div className="loader-ring"></div>

        {/* Logo */}
        <div className="absolute inset-0 flex items-center justify-center">
          <span className="text-yellow-500 text-4xl font-extrabold tracking-widest">5G</span>
        </div>
      </div>

      <style jsx>{`
        .loader-ring {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          border: 4px solid rgba(255, 200, 0, 0.15);
          border-top-color: gold;
          border-right-color: rgba(255, 200, 0, 0.35);
          animation: spin 1.1s linear infinite, glow 1.5s ease-in-out infinite alternate;
        }

        @keyframes spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }

        @keyframes glow {
          from { box-shadow: 0 0 10px rgba(255, 215, 0, 0.3); }
          to { box-shadow: 0 0 25px rgba(255, 215, 0, 0.7); }
        }
      `}</style>
    </div>
  )
}

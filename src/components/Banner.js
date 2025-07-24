export default function Banner() {
  return (
    <div>
      <div className="flex flex-col items-center justify-between w-full max-w-6xl gap-6 px-10 py-5 mx-auto text-white bg-blue-700 rounded-lg shadow-md md:flex-row md:gap-10">
        <div className="space-y-4 text-center md:text-left">
          <h3 className="text-xl font-bold uppercase md:text-2xl">
            Admissions Open
          </h3>
          <p className="mt-2 text-sm font-semibold uppercase md:text-base">
            Long Term / Dropper Batches
          </p>
          <p className="mt-1 text-sm font-medium md:text-base">
            for JEE / NEET (UG) 2026 (XII Passed Students)
          </p>
        </div>

        <div className="w-full px-6 py-4 space-y-5 text-center bg-blue-600 border rounded-md border-white/30 md:w-auto">
          <p className="text-sm font-medium">Get up to</p>
          <p className="text-4xl font-extrabold leading-none md:text-5xl">
            90%
          </p>
          <p className="mt-1 text-sm font-medium">
            Scholarship<span className="text-xs align-top">**</span>
          </p>
          <p className="text-[10px] text-white/80 mt-2 max-w-xs mx-auto">
            *T&C apply. ACST scholarships for Regular Classroom Courses up to
            90%. For NEET Repeater courses, it's capped at 60%.
          </p>
        </div>

        {/* <div className="flex flex-col items-center">
          <p className="mb-1 text-xs font-semibold">SCAN TO APPLY</p>
          <img
            src="https://api.qrserver.com/v1/create-qr-code/?size=100x100&data=https://example.com"
            alt="QR Code"
            className="w-24 h-24 border border-white rounded"
          />
        </div> */}
      </div>
    </div>
  );
}

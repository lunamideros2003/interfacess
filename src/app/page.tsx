export default function Home() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-slate-200 p-6">
      <div className="bg-white rounded-2xl shadow-lg p-6 w-[400px] flex flex-col gap-4">
        
        {/* Header */}
        <div className="flex justify-between text-slate-500 text-sm">
          <span>Tue Feb 18 2025</span>
          <span>9:31:25 p.m.</span>
        </div>

        <h1 className="text-2xl font-bold text-blue-900">List Tailwind</h1>

        {/* Weekdays */}
        <div className="grid grid-cols-7 gap-2 text-center text-slate-600 font-medium">
          <span>s</span><span>m</span><span>t</span><span>w</span><span>t</span><span>f</span><span>s</span>
        </div>

        {/* Days */}
        <div className="grid grid-cols-7 gap-2 text-center text-slate-600">
          <span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span><span>30</span>
        </div>

        {/* Task list */}
        <div className="flex flex-col gap-3">
          {/* Task 1 */}
          <div className="flex justify-between items-center bg-slate-100 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
              <span className="line-through text-slate-500">take out the trash</span>
            </div>
            <span className="text-slate-600 text-sm">9:00 AM</span>
          </div>

          {/* Task 2 */}
          <div className="flex justify-between items-center bg-slate-100 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 bg-green-500 rounded-full flex items-center justify-center text-white text-sm">✓</span>
              <span className="line-through text-slate-500">do homework</span>
            </div>
            <span className="text-slate-600 text-sm">12:00 PM</span>
          </div>

          {/* Task 3 */}
          <div className="flex justify-between items-center bg-slate-100 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-white"></span>
              <span className="text-slate-700">go to grocery store</span>
            </div>
            <span className="text-slate-600 text-sm">1:00 PM</span>
          </div>

          {/* Task 4 */}
          <div className="flex justify-between items-center bg-slate-100 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-white"></span>
              <span className="text-slate-700">run 5 kilometers</span>
            </div>
            <span className="text-slate-600 text-sm">4:20 PM</span>
          </div>

          {/* Task 5 */}
          <div className="flex justify-between items-center bg-slate-100 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-white"></span>
              <span className="text-slate-700">load the dishwasher</span>
            </div>
            <span className="text-slate-600 text-sm">9:00 PM</span>
          </div>

          {/* Task 6 */}
          <div className="flex justify-between items-center bg-slate-100 rounded-lg p-3">
            <div className="flex items-center gap-3">
              <span className="w-6 h-6 rounded-full bg-white"></span>
              <span className="text-slate-700">Take out the trash</span>
            </div>
            <span className="text-slate-600 text-sm">9:00 AM</span>
          </div>
        </div>

      </div>
    </div>
  );
}
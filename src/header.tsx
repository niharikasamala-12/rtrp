<header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <GraduationCap className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-800">EduPathfinder</span>
          </div>
          <div className="flex space-x-6">
            <button 
              className={`text-gray-600 hover:text-primary-600 transition-colors ${currentPage === 'scholarships' ? 'text-primary-600' : ''}`}
              onClick={() => setCurrentPage('scholarships')}
            >
              Scholarships
            </button>
            <button 
              className={`text-gray-600 hover:text-primary-600 transition-colors ${currentPage === 'reviews' ? 'text-primary-600' : ''}`}
              onClick={() => setCurrentPage('reviews')}
            >
              College Reviews
            </button>
            <button className="text-gray-600 hover:text-primary-600 transition-colors">Resources</button>
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              Sign Up
            </button>
          </div>
        </nav>
      </header>
import React, { useState } from 'react';
import { Search, GraduationCap, DollarSign, Star, Filter, Brain, Users, School, BookOpen, Building2, MapPin, Banknote, Clock, Calendar, ChevronDown, ArrowUpDown } from 'lucide-react';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const renderPage = () => {
    switch(currentPage) {
      case 'scholarships':
        return <ScholarshipsPage />;
      case 'reviews':
        return <CollegeReviewsPage />;
      default:
        return <HomePage />;
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-primary-50 to-white">
      {/* Header */}
      <header className="bg-white shadow-sm sticky top-0 z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2 cursor-pointer" onClick={() => setCurrentPage('home')}>
            <GraduationCap className="h-8 w-8 text-primary-600" />
            <span className="text-xl font-bold text-gray-800">EduFind</span>
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

      <main>
        {renderPage()}
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <GraduationCap className="h-6 w-6 text-primary-400" />
                <span className="text-lg font-bold">EduPathfinder</span>
              </div>
              <p className="text-gray-400">
                Empowering students to make informed decisions about their education.
              </p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Platform</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-primary-400 cursor-pointer transition-colors">Scholarships</li>
                <li className="hover:text-primary-400 cursor-pointer transition-colors">College Reviews</li>
                <li className="hover:text-primary-400 cursor-pointer transition-colors">Resources</li>
                <li className="hover:text-primary-400 cursor-pointer transition-colors">Blog</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-primary-400 cursor-pointer transition-colors">About Us</li>
                <li className="hover:text-primary-400 cursor-pointer transition-colors">Careers</li>
                <li className="hover:text-primary-400 cursor-pointer transition-colors">Contact</li>
                <li className="hover:text-primary-400 cursor-pointer transition-colors">Privacy Policy</li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Connect</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="hover:text-primary-400 cursor-pointer transition-colors">Twitter</li>
                <li className="hover:text-primary-400 cursor-pointer transition-colors">LinkedIn</li>
                <li className="hover:text-primary-400 cursor-pointer transition-colors">Facebook</li>
                <li className="hover:text-primary-400 cursor-pointer transition-colors">Instagram</li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
          Your Path to Academic Success Starts Here
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
          Find scholarships and discover authentic college reviews to make informed decisions about your education journey.
        </p>
        
        {/* Search Bar */}
        <div className="max-w-2xl mx-auto relative">
          <Search className="absolute left-4 top-3.5 h-5 w-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search for scholarships or colleges..."
            className="w-full pl-12 pr-4 py-3 rounded-full border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent shadow-sm"
          />
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
            Everything You Need in One Place
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            <FeatureCard
              icon={<DollarSign className="h-8 w-8 text-secondary-600" />}
              title="Scholarship Database"
              description="Access thousands of scholarships with advanced filtering and matching."
            />
            <FeatureCard
              icon={<Star className="h-8 w-8 text-secondary-600" />}
              title="Authentic Reviews"
              description="Read real student experiences and insights about colleges."
            />
            <FeatureCard
              icon={<Brain className="h-8 w-8 text-secondary-600" />}
              title="AI Recommendations"
              description="Get personalized suggestions based on your profile and preferences."
            />
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary-50 to-secondary-50 py-16">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8 text-center">
            <StatCard number="10,000+" label="Scholarships" />
            <StatCard number="500+" label="Universities" />
            <StatCard number="50,000+" label="Student Reviews" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-4 py-16 text-center">
        <div className="bg-gradient-to-r from-primary-600 to-secondary-600 rounded-2xl p-8 md:p-12">
          <h2 className="text-3xl font-bold text-white mb-4">
            Start Your Academic Journey Today
          </h2>
          <p className="text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of students who have found their perfect educational path through our platform.
          </p>
          <button className="bg-white text-primary-600 px-8 py-3 rounded-lg font-semibold hover:bg-primary-50 transition-colors">
            Get Started
          </button>
        </div>
      </section>
    </>
  );
}

function ScholarshipsPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    amount: 'all',
    deadline: 'all',
    field: 'all'
  });

  const scholarships = [
    {
      title: "Future Leaders Scholarship",
      amount: 25000,
      deadline: "2024-06-15",
      provider: "Global Education Foundation",
      field: "All Fields",
      description: "For outstanding students demonstrating leadership potential and academic excellence.",
      requirements: ["3.5+ GPA", "Leadership experience", "Community service"]
    },
    {
      title: "STEM Excellence Award",
      amount: 15000,
      deadline: "2024-07-01",
      provider: "Tech Innovation Fund",
      field: "STEM",
      description: "Supporting the next generation of STEM innovators and researchers.",
      requirements: ["3.8+ GPA", "STEM major", "Research experience"]
    },
    {
      title: "Arts & Humanities Grant",
      amount: 10000,
      deadline: "2024-05-30",
      provider: "Creative Arts Foundation",
      field: "Arts & Humanities",
      description: "Supporting creative excellence in arts and humanities.",
      requirements: ["Portfolio submission", "Creative writing sample", "2 recommendations"]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">Scholarships</h1>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Track Scholarships
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search scholarships..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <FilterDropdown 
            icon={<Banknote className="h-5 w-5" />}
            label="Amount"
            options={["All", "$5,000+", "$10,000+", "$25,000+"]}
            value={selectedFilters.amount}
            onChange={(value) => setSelectedFilters({...selectedFilters, amount: value})}
          />
          
          <FilterDropdown 
            icon={<Calendar className="h-5 w-5" />}
            label="Deadline"
            options={["All", "This Month", "Next Month", "Next 3 Months"]}
            value={selectedFilters.deadline}
            onChange={(value) => setSelectedFilters({...selectedFilters, deadline: value})}
          />
          
          <FilterDropdown 
            icon={<BookOpen className="h-5 w-5" />}
            label="Field of Study"
            options={["All", "STEM", "Business", "Arts & Humanities", "Healthcare"]}
            value={selectedFilters.field}
            onChange={(value) => setSelectedFilters({...selectedFilters, field: value})}
          />
        </div>
      </div>

      {/* Scholarships List */}
      <div className="space-y-6">
        {scholarships.map((scholarship, index) => (
          <ScholarshipCard key={index} {...scholarship} />
        ))}
      </div>
    </div>
  );
}

function CollegeReviewsPage() {
  const [selectedFilters, setSelectedFilters] = useState({
    location: 'all',
    type: 'all',
    rating: 'all'
  });

  const colleges = [
    {
      name: "Tech University",
      location: "San Francisco, CA",
      type: "Private",
      rating: 4.5,
      reviewCount: 1250,
      image: "https://images.unsplash.com/photo-1562774053-701939374585?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1366&q=80",
      programs: ["Computer Science", "Engineering", "Business"],
      reviews: [
        { rating: 5, text: "Excellent research opportunities and career support.", author: "John D." },
        { rating: 4, text: "Great campus life but housing could be better.", author: "Sarah M." }
      ]
    },
    {
      name: "Liberal Arts College",
      location: "Boston, MA",
      type: "Private",
      rating: 4.8,
      reviewCount: 850,
      image: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      programs: ["Literature", "Philosophy", "Art History"],
      reviews: [
        { rating: 5, text: "Small class sizes and engaging professors.", author: "Emily R." },
        { rating: 4, text: "Beautiful campus and strong arts program.", author: "Michael P." }
      ]
    },
    {
      name: "State University",
      location: "Austin, TX",
      type: "Public",
      rating: 4.3,
      reviewCount: 2100,
      image: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80",
      programs: ["Business", "Engineering", "Psychology"],
      reviews: [
        { rating: 4, text: "Great value for education quality.", author: "David L." },
        { rating: 5, text: "Amazing sports culture and facilities.", author: "Rachel K." }
      ]
    }
  ];

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex justify-between items-center mb-8">
        <h1 className="text-3xl font-bold text-gray-900">College Reviews</h1>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Write a Review
        </button>
      </div>

      {/* Search and Filters */}
      <div className="bg-white rounded-lg shadow-sm p-6 mb-8">
        <div className="flex gap-4 flex-wrap">
          <div className="flex-1 min-w-[200px]">
            <div className="relative">
              <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search colleges..."
                className="w-full pl-10 pr-4 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent"
              />
            </div>
          </div>
          
          <FilterDropdown 
            icon={<MapPin className="h-5 w-5" />}
            label="Location"
            options={["All", "Northeast", "West Coast", "Midwest", "South"]}
            value={selectedFilters.location}
            onChange={(value) => setSelectedFilters({...selectedFilters, location: value})}
          />
          
          <FilterDropdown 
            icon={<Building2 className="h-5 w-5" />}
            label="Institution Type"
            options={["All", "Public", "Private", "Community College"]}
            value={selectedFilters.type}
            onChange={(value) => setSelectedFilters({...selectedFilters, type: value})}
          />
          
          <FilterDropdown 
            icon={<Star className="h-5 w-5" />}
            label="Rating"
            options={["All", "4+ Stars", "3+ Stars"]}
            value={selectedFilters.rating}
            onChange={(value) => setSelectedFilters({...selectedFilters, rating: value})}
          />
        </div>
      </div>

      {/* Colleges List */}
      <div className="space-y-6">
        {colleges.map((college, index) => (
          <CollegeCard key={index} {...college} />
        ))}
      </div>
    </div>
  );
}

function FilterDropdown({ icon, label, options, value, onChange }) {
  return (
    <div className="relative min-w-[160px]">
      <button className="w-full flex items-center justify-between px-4 py-2 bg-white border border-gray-300 rounded-lg hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:border-transparent">
        <div className="flex items-center space-x-2 text-gray-700">
          {icon}
          <span>{label}</span>
        </div>
        <ChevronDown className="h-4 w-4 text-gray-400" />
      </button>
      {/* Dropdown menu would go here - simplified for demo */}
    </div>
  );
}

function ScholarshipCard({ title, amount, deadline, provider, field, description, requirements }) {
  return (
    <div className="bg-white rounded-lg shadow-sm p-6 hover:shadow-md transition-shadow">
      <div className="flex justify-between items-start mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-1">{title}</h3>
          <p className="text-gray-600">{provider}</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-primary-600">${amount.toLocaleString()}</div>
          <div className="text-sm text-gray-500">Deadline: {new Date(deadline).toLocaleDateString()}</div>
        </div>
      </div>
      
      <p className="text-gray-700 mb-4">{description}</p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {requirements.map((req, index) => (
          <span key={index} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
            {req}
          </span>
        ))}
      </div>
      
      <div className="flex justify-between items-center">
        <span className="text-sm text-gray-500">Field: {field}</span>
        <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
          Apply Now
        </button>
      </div>
    </div>
  );
}

function CollegeCard({ name, location, type, rating, reviewCount, image, programs, reviews }) {
  return (
    <div className="bg-white rounded-lg shadow-sm overflow-hidden hover:shadow-md transition-shadow">
      <div className="flex">
        <div className="w-1/4 min-w-[200px]">
          <img src={image} alt={name} className="h-full w-full object-cover" />
        </div>
        
        <div className="flex-1 p-6">
          <div className="flex justify-between items-start mb-4">
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-1">{name}</h3>
              <p className="text-gray-600">{location}</p>
            </div>
            <div className="text-right">
              <div className="flex items-center space-x-1">
                <Star className="h-5 w-5 text-yellow-400 fill-current" />
                <span className="font-semibold">{rating}</span>
                <span className="text-gray-500">({reviewCount} reviews)</span>
              </div>
              <div className="text-sm text-gray-500">{type}</div>
            </div>
          </div>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {programs.map((program, index) => (
              <span key={index} className="px-3 py-1 bg-primary-50 text-primary-700 rounded-full text-sm">
                {program}
              </span>
            ))}
          </div>
          
          <div className="space-y-3">
            {reviews.map((review, index) => (
              <div key={index} className="border-l-4 border-primary-200 pl-4">
                <div className="flex items-center space-x-1 mb-1">
                  <Star className="h-4 w-4 text-yellow-400 fill-current" />
                  <span className="font-medium">{review.rating}</span>
                  <span className="text-gray-500">by {review.author}</span>
                </div>
                <p className="text-gray-700">{review.text}</p>
              </div>
            ))}
          </div>
          
          <div className="flex justify-end mt-4">
            <button className="bg-primary-600 text-white px-4 py-2 rounded-lg hover:bg-primary-700 transition-colors">
              View Details
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, description }) {
  return (
    <div className="bg-white p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all hover:border-secondary-200">
      <div className="mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
}

function StatCard({ number, label }) {
  return (
    <div className="p-6">
      <div className="text-4xl font-bold text-primary-600 mb-2">{number}</div>
      <div className="text-gray-600">{label}</div>
    </div>
  );
}

export default App;

import React, { useState, useEffect } from 'react';
import { 
  Search, 
  Filter, 
  Plus, 
  ChevronDown, 
  MoreVertical, 
  Users, 
  Calendar,
  BookOpen,
  GraduationCap,
  Heart,
  Shield,
  Download,
  Edit3,
  FileText,
  Copy,
  Trash2,
  Play,
  Pause,
  CheckCircle
} from 'lucide-react';

const Programs = () => {
  // State for programs data
  const [programs, setPrograms] = useState([]);
  const [filteredPrograms, setFilteredPrograms] = useState([]);
  const [loading, setLoading] = useState(true);
  
  // Dropdown states
  const [selectedCategory, setSelectedCategory] = useState('all');
  const [selectedStatus, setSelectedStatus] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');
  
  // UI states
  const [showCategoryDropdown, setShowCategoryDropdown] = useState(false);
  const [showStatusDropdown, setShowStatusDropdown] = useState(false);
  const [showAddDropdown, setShowAddDropdown] = useState(false);
  const [showBulkDropdown, setShowBulkDropdown] = useState(false);
  const [showActionsDropdown, setShowActionsDropdown] = useState(null);
  const [selectedPrograms, setSelectedPrograms] = useState(new Set());

  // Sample programs data
  const samplePrograms = [
    {
      id: 1,
      name: 'New Muslim Classes',
      category: 'dawah',
      status: 'active',
      description: 'Educational classes for new Muslims to learn basics of Islam',
      coordinator: 'Br. Ahmed Ali',
      startDate: '2024-01-15',
      endDate: '2024-03-15',
      beneficiaries: 45,
      budget: 5000,
      icon: '📖'
    },
    {
      id: 2,
      name: 'Weekend Islamic School',
      category: 'education',
      status: 'active',
      description: 'Weekend school for children to learn Quran and Islamic studies',
      coordinator: 'Sr. Fatima Khan',
      startDate: '2024-01-10',
      endDate: '2024-12-15',
      beneficiaries: 120,
      budget: 15000,
      icon: '🎓'
    },
    {
      id: 3,
      name: 'Orphan Sponsorship Program',
      category: 'charity',
      status: 'active',
      description: 'Monthly financial support for orphaned children',
      coordinator: 'Br. Mohammed Hassan',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      beneficiaries: 75,
      budget: 75000,
      icon: '🤲'
    },
    {
      id: 4,
      name: 'Emergency Relief Fund',
      category: 'assistance',
      status: 'active',
      description: 'Immediate financial assistance for families in crisis',
      coordinator: 'Sr. Aisha Mahmood',
      startDate: '2024-01-01',
      endDate: '2024-12-31',
      beneficiaries: 32,
      budget: 25000,
      icon: '🆘'
    },
    {
      id: 5,
      name: 'Quran Memorization Circle',
      category: 'dawah',
      status: 'paused',
      description: 'Hifz program for children and adults',
      coordinator: 'Br. Omar Farooq',
      startDate: '2024-02-01',
      endDate: '2024-11-30',
      beneficiaries: 28,
      budget: 8000,
      icon: '🕌'
    },
    {
      id: 6,
      name: 'Youth Leadership Program',
      category: 'education',
      status: 'active',
      description: 'Developing future Muslim leaders through mentorship',
      coordinator: 'Sr. Khadija Ahmed',
      startDate: '2024-03-01',
      endDate: '2024-08-31',
      beneficiaries: 35,
      budget: 12000,
      icon: '🌟'
    }
  ];

  // Initialize programs
  useEffect(() => {
    setPrograms(samplePrograms);
    setFilteredPrograms(samplePrograms);
    setLoading(false);
  }, []);

  // Filter programs based on selections
  useEffect(() => {
    let filtered = programs;

    if (selectedCategory !== 'all') {
      filtered = filtered.filter(program => program.category === selectedCategory);
    }

    if (selectedStatus !== 'all') {
      filtered = filtered.filter(program => program.status === selectedStatus);
    }

    if (searchTerm) {
      filtered = filtered.filter(program =>
        program.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
        program.coordinator.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredPrograms(filtered);
  }, [selectedCategory, selectedStatus, searchTerm, programs]);

  // Category options
  const categories = [
    { value: 'all', label: 'All Categories', icon: Filter, color: 'gray' },
    { value: 'dawah', label: "Da'wa Programs", icon: BookOpen, color: 'green' },
    { value: 'education', label: 'Education Programs', icon: GraduationCap, color: 'blue' },
    { value: 'charity', label: 'Charity Programs', icon: Heart, color: 'red' },
    { value: 'assistance', label: 'Assistance Programs', icon: Shield, color: 'orange' }
  ];

  // Status options
  const statuses = [
    { value: 'all', label: 'All Status', color: 'gray' },
    { value: 'active', label: 'Active', color: 'green' },
    { value: 'paused', label: 'Paused', color: 'yellow' },
    { value: 'completed', label: 'Completed', color: 'blue' },
    { value: 'draft', label: 'Draft', color: 'gray' }
  ];

  // Handle program selection
  const handleProgramSelect = (programId) => {
    const newSelected = new Set(selectedPrograms);
    if (newSelected.has(programId)) {
      newSelected.delete(programId);
    } else {
      newSelected.add(programId);
    }
    setSelectedPrograms(newSelected);
  };

  // Handle select all
  const handleSelectAll = () => {
    if (selectedPrograms.size === filteredPrograms.length) {
      setSelectedPrograms(new Set());
    } else {
      setSelectedPrograms(new Set(filteredPrograms.map(p => p.id)));
    }
  };

  // Bulk actions
  const bulkActions = [
    { label: 'Activate Selected', icon: Play, action: () => console.log('Activate', Array.from(selectedPrograms)) },
    { label: 'Pause Selected', icon: Pause, action: () => console.log('Pause', Array.from(selectedPrograms)) },
    { label: 'Mark as Completed', icon: CheckCircle, action: () => console.log('Complete', Array.from(selectedPrograms)) },
    { label: 'Export Selected', icon: Download, action: () => console.log('Export', Array.from(selectedPrograms)) }
  ];

  // Individual program actions
  const programActions = [
    { label: 'View Details', icon: FileText, action: (program) => console.log('View', program) },
    { label: 'Edit Program', icon: Edit3, action: (program) => console.log('Edit', program) },
    { label: 'Manage Beneficiaries', icon: Users, action: (program) => console.log('Beneficiaries', program) },
    { label: 'Generate Report', icon: Download, action: (program) => console.log('Report', program) },
    { label: 'Duplicate Program', icon: Copy, action: (program) => console.log('Duplicate', program) }
  ];

  // Status actions
  const statusActions = [
    { label: 'Activate Program', icon: Play, action: (program) => console.log('Activate', program) },
    { label: 'Pause Program', icon: Pause, action: (program) => console.log('Pause', program) },
    { label: 'Complete Program', icon: CheckCircle, action: (program) => console.log('Complete', program) }
  ];

  // Get status styles
  const getStatusStyles = (status) => {
    const styles = {
      active: 'bg-green-50 text-green-700 border-green-200',
      paused: 'bg-yellow-50 text-yellow-700 border-yellow-200',
      completed: 'bg-blue-50 text-blue-700 border-blue-200',
      draft: 'bg-gray-50 text-gray-700 border-gray-200'
    };
    return styles[status] || styles.draft;
  };

  // Get category styles
  const getCategoryStyles = (category) => {
    const styles = {
      dawah: 'bg-green-50 text-green-700',
      education: 'bg-blue-50 text-blue-700',
      charity: 'bg-red-50 text-red-700',
      assistance: 'bg-orange-50 text-orange-700'
    };
    return styles[category] || 'bg-gray-50 text-gray-700';
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-green-600"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header Section */}
      <div className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-3xl font-bold text-gray-900">Programs</h1>
              <p className="mt-2 text-gray-600">
                Manage and track all Da'wa, Education, Charity, and Assistance programs
              </p>
            </div>
            <div className="flex items-center space-x-4">
              <span className="text-sm text-gray-500">
                {filteredPrograms.length} programs
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        {/* Controls Section */}
        <div className="mb-8 bg-white rounded-lg shadow-sm border p-6">
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-4">
            <div className="flex flex-col sm:flex-row gap-4 flex-1">
              {/* Search Bar */}
              <div className="relative flex-1 max-w-md">
                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                  <Search className="h-5 w-5 text-gray-400" />
                </div>
                <input
                  type="text"
                  className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-green-500 focus:border-green-500"
                  placeholder="Search programs..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>

              {/* Category Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowCategoryDropdown(!showCategoryDropdown)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  <Filter className="h-4 w-4 mr-2 text-gray-400" />
                  {categories.find(cat => cat.value === selectedCategory)?.label || 'All Categories'}
                  <ChevronDown className="h-4 w-4 ml-2 text-gray-400" />
                </button>

                {showCategoryDropdown && (
                  <div className="absolute z-10 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                    {categories.map((category) => {
                      const IconComponent = category.icon;
                      return (
                        <button
                          key={category.value}
                          onClick={() => {
                            setSelectedCategory(category.value);
                            setShowCategoryDropdown(false);
                          }}
                          className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                        >
                          <IconComponent className={`h-4 w-4 mr-3 text-${category.color}-500`} />
                          {category.label}
                        </button>
                      );
                    })}
                  </div>
                )}
              </div>

              {/* Status Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowStatusDropdown(!showStatusDropdown)}
                  className="inline-flex items-center px-4 py-2 border border-gray-300 rounded-lg bg-white text-sm font-medium text-gray-700 hover:bg-gray-50 focus:ring-2 focus:ring-green-500 focus:border-green-500"
                >
                  {statuses.find(status => status.value === selectedStatus)?.label || 'All Status'}
                  <ChevronDown className="h-4 w-4 ml-2 text-gray-400" />
                </button>

                {showStatusDropdown && (
                  <div className="absolute z-10 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                    {statuses.map((status) => (
                      <button
                        key={status.value}
                        onClick={() => {
                          setSelectedStatus(status.value);
                          setShowStatusDropdown(false);
                        }}
                        className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                      >
                        <div className={`w-2 h-2 rounded-full bg-${status.color}-500 mr-3`}></div>
                        {status.label}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              {/* Bulk Actions Dropdown */}
              {selectedPrograms.size > 0 && (
                <div className="relative">
                  <button
                    onClick={() => setShowBulkDropdown(!showBulkDropdown)}
                    className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                  >
                    Bulk Actions ({selectedPrograms.size})
                    <ChevronDown className="h-4 w-4 ml-2" />
                  </button>

                  {showBulkDropdown && (
                    <div className="absolute z-10 right-0 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                      {bulkActions.map((action, index) => {
                        const IconComponent = action.icon;
                        return (
                          <button
                            key={index}
                            onClick={() => {
                              action.action();
                              setShowBulkDropdown(false);
                            }}
                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                          >
                            <IconComponent className="h-4 w-4 mr-3 text-gray-400" />
                            {action.label}
                          </button>
                        );
                      })}
                    </div>
                  )}
                </div>
              )}

              {/* Add New Program Dropdown */}
              <div className="relative">
                <button
                  onClick={() => setShowAddDropdown(!showAddDropdown)}
                  className="inline-flex items-center px-4 py-2 border border-transparent text-sm font-medium rounded-lg text-white bg-green-600 hover:bg-green-700 focus:ring-2 focus:ring-green-500"
                >
                  <Plus className="h-4 w-4 mr-2" />
                  Add Program
                  <ChevronDown className="h-4 w-4 ml-2" />
                </button>

                {showAddDropdown && (
                  <div className="absolute z-10 right-0 mt-1 w-56 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <BookOpen className="h-4 w-4 mr-3 text-green-500" />
                      New Da'wa Program
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <GraduationCap className="h-4 w-4 mr-3 text-blue-500" />
                      New Education Program
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <Heart className="h-4 w-4 mr-3 text-red-500" />
                      New Charity Program
                    </button>
                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50">
                      <Shield className="h-4 w-4 mr-3 text-orange-500" />
                      New Assistance Program
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Programs Grid */}
        <div className="bg-white rounded-lg shadow-sm border overflow-hidden">
          {filteredPrograms.length === 0 ? (
            <div className="text-center py-12">
              <div className="text-gray-400 mb-4">
                <Filter className="h-12 w-12 mx-auto" />
              </div>
              <h3 className="text-lg font-medium text-gray-900 mb-2">No programs found</h3>
              <p className="text-gray-500">Try adjusting your search or filter criteria</p>
            </div>
          ) : (
            <>
              {/* Programs List */}
              <div className="overflow-x-auto">
                <table className="min-w-full divide-y divide-gray-200">
                  <thead className="bg-gray-50">
                    <tr>
                      <th scope="col" className="w-12 px-6 py-3">
                        <input
                          type="checkbox"
                          checked={selectedPrograms.size === filteredPrograms.length && filteredPrograms.length > 0}
                          onChange={handleSelectAll}
                          className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                        />
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Program
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Category
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Status
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Coordinator
                      </th>
                      <th scope="col" className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                        Beneficiaries
                      </th>
                      <th scope="col" className="relative px-6 py-3">
                        <span className="sr-only">Actions</span>
                      </th>
                    </tr>
                  </thead>
                  <tbody className="bg-white divide-y divide-gray-200">
                    {filteredPrograms.map((program) => (
                      <tr key={program.id} className="hover:bg-gray-50">
                        <td className="px-6 py-4 whitespace-nowrap">
                          <input
                            type="checkbox"
                            checked={selectedPrograms.has(program.id)}
                            onChange={() => handleProgramSelect(program.id)}
                            className="h-4 w-4 text-green-600 focus:ring-green-500 border-gray-300 rounded"
                          />
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <div className="text-2xl mr-4">{program.icon}</div>
                            <div>
                              <div className="text-sm font-medium text-gray-900">
                                {program.name}
                              </div>
                              <div className="text-sm text-gray-500">
                                {program.description}
                              </div>
                            </div>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getCategoryStyles(program.category)}`}>
                            {program.category.charAt(0).toUpperCase() + program.category.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${getStatusStyles(program.status)}`}>
                            {program.status.charAt(0).toUpperCase() + program.status.slice(1)}
                          </span>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                          {program.coordinator}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap">
                          <div className="flex items-center">
                            <Users className="h-4 w-4 text-gray-400 mr-1" />
                            <span className="text-sm font-medium text-gray-900">
                              {program.beneficiaries}
                            </span>
                          </div>
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                          <div className="relative">
                            <button
                              onClick={() => setShowActionsDropdown(
                                showActionsDropdown === program.id ? null : program.id
                              )}
                              className="text-gray-400 hover:text-gray-600 p-1 rounded-lg hover:bg-gray-100"
                            >
                              <MoreVertical className="h-5 w-5" />
                            </button>

                            {showActionsDropdown === program.id && (
                              <div className="absolute right-0 z-10 mt-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1">
                                {/* Main Actions */}
                                {programActions.map((action, index) => {
                                  const IconComponent = action.icon;
                                  return (
                                    <button
                                      key={index}
                                      onClick={() => {
                                        action.action(program);
                                        setShowActionsDropdown(null);
                                      }}
                                      className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                    >
                                      <IconComponent className="h-4 w-4 mr-3 text-gray-400" />
                                      {action.label}
                                    </button>
                                  );
                                })}

                                {/* Status Change Sub-menu */}
                                <div className="border-t border-gray-100 mt-1 pt-1">
                                  <div className="relative group">
                                    <button className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50 group">
                                      <Play className="h-4 w-4 mr-3 text-gray-400" />
                                      Change Status
                                      <ChevronDown className="h-4 w-4 ml-auto text-gray-400" />
                                    </button>
                                    <div className="absolute left-full top-0 ml-1 w-48 bg-white rounded-lg shadow-lg border border-gray-200 py-1 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
                                      {statusActions.map((action, index) => {
                                        const IconComponent = action.icon;
                                        return (
                                          <button
                                            key={index}
                                            onClick={() => {
                                              action.action(program);
                                              setShowActionsDropdown(null);
                                            }}
                                            className="flex items-center w-full px-4 py-2 text-sm text-gray-700 hover:bg-gray-50"
                                          >
                                            <IconComponent className="h-4 w-4 mr-3 text-gray-400" />
                                            {action.label}
                                          </button>
                                        );
                                      })}
                                    </div>
                                  </div>
                                </div>

                                {/* Delete Action */}
                                <div className="border-t border-gray-100 mt-1 pt-1">
                                  <button
                                    onClick={() => {
                                      console.log('Delete', program);
                                      setShowActionsDropdown(null);
                                    }}
                                    className="flex items-center w-full px-4 py-2 text-sm text-red-600 hover:bg-red-50"
                                  >
                                    <Trash2 className="h-4 w-4 mr-3" />
                                    Delete Program
                                  </button>
                                </div>
                              </div>
                            )}
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </>
          )}
        </div>

        {/* Summary Stats */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-4 gap-6">
          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <BookOpen className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Programs</p>
                <p className="text-2xl font-semibold text-gray-900">{filteredPrograms.length}</p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Users className="h-5 w-5 text-blue-600" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Total Beneficiaries</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {filteredPrograms.reduce((sum, program) => sum + program.beneficiaries, 0)}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
                  <Play className="h-5 w-5 text-green-600" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">Active Programs</p>
                <p className="text-2xl font-semibold text-gray-900">
                  {filteredPrograms.filter(p => p.status === 'active').length}
                </p>
              </div>
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-sm border p-6">
            <div className="flex items-center">
              <div className="flex-shrink-0">
                <div className="w-8 h-8 bg-orange-100 rounded-lg flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-orange-600" />
                </div>
              </div>
              <div className="ml-4">
                <p className="text-sm font-medium text-gray-600">This Month</p>
                <p className="text-2xl font-semibold text-gray-900">12</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Programs;
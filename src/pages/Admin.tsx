import React from 'react';
import { motion } from 'motion/react';
import { Shield, Eye, Download, Search, Calendar, User, Mail, Phone, Calculator as CalcIcon } from 'lucide-react';

export default function Admin() {
  const [isAuthenticated, setIsAuthenticated] = React.useState(false);
  const [secret, setSecret] = React.useState('');
  const [leads, setLeads] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState('');

  const handleLogin = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');
    
    try {
      const response = await fetch('/api/leads', {
        headers: {
          'x-admin-secret': secret
        }
      });
      
      if (response.ok) {
        const data = await response.json();
        setLeads(data);
        setIsAuthenticated(true);
        localStorage.setItem('admin_secret', secret);
      } else {
        setError('Invalid secret key');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  React.useEffect(() => {
    const savedSecret = localStorage.getItem('admin_secret');
    if (savedSecret) {
      setSecret(savedSecret);
      // Automatically attempt login if we have a saved secret
    }
  }, []);

  if (!isAuthenticated) {
    return (
      <div className="min-h-screen bg-background flex items-center justify-center p-4">
        <motion.div 
          initial={{ scale: 0.95, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="glass-panel p-8 max-w-md w-full rounded-3xl shadow-2xl border border-accent/20"
        >
          <div className="w-16 h-16 bg-accent/10 rounded-2xl flex items-center justify-center text-accent mx-auto mb-6">
            <Shield size={32} />
          </div>
          <h1 className="text-2xl font-bold text-center mb-2">Admin Access</h1>
          <p className="text-gray-500 text-center mb-8 text-sm">Please enter your secure access key to view the lead database.</p>
          
          <form onSubmit={handleLogin} className="space-y-4">
            <div className="space-y-2">
              <label className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Access Key</label>
              <input 
                type="password" 
                className="input-field h-14 rounded-xl"
                placeholder="••••••••••••"
                value={secret}
                onChange={(e) => setSecret(e.target.value)}
                required
              />
            </div>
            {error && <p className="text-red-500 text-xs font-bold text-center">{error}</p>}
            <button 
              disabled={loading}
              className="btn-primary w-full h-14 rounded-xl font-bold text-base shadow-xl shadow-accent/20"
            >
              {loading ? 'Verifying...' : 'Unlock Database'}
            </button>
          </form>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Admin Header */}
      <div className="bg-[#0E1116] text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-6">
            <div>
              <div className="flex items-center gap-3 mb-2">
                <Shield size={20} className="text-accent" />
                <span className="text-[10px] font-bold uppercase tracking-widest text-accent">Protected Admin Dashboard</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight">Lead Management</h1>
            </div>
            <div className="flex gap-4">
              <button 
                onClick={() => {
                  localStorage.removeItem('admin_secret');
                  setIsAuthenticated(false);
                }}
                className="px-6 py-2 border border-white/20 rounded-lg text-sm font-bold hover:bg-white/5 transition-colors"
                id="logout-btn"
              >
                Log Out
              </button>
              <button className="btn-primary px-6 py-2 h-auto text-sm">
                <Download size={16} />
                Export CSV
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Stats Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {[
            { label: 'Total Leads', value: leads.length, icon: <User size={20} /> },
            { label: 'Avg. Project Size', value: `${Math.round(leads.reduce((acc, l) => acc + (l.kitchenSize || 0), 0) / (leads.length || 1))} sq ft`, icon: <CalcIcon size={20} /> },
            { label: 'Last 24 Hours', value: leads.filter(l => new Date(l.createdAt) > new Date(Date.now() - 86400000)).length, icon: <Calendar size={20} /> },
            { label: 'Lead Quality', value: 'High', icon: <Search size={20} /> }
          ].map((stat, i) => (
            <div key={i} className="bg-background p-6 rounded-2xl border border-border-custom flex items-center gap-5">
              <div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center text-accent shadow-sm">
                {stat.icon}
              </div>
              <div>
                <p className="text-[10px] font-bold text-gray-400 uppercase tracking-widest mb-1">{stat.label}</p>
                <p className="text-xl font-bold">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Lead Table */}
        <div className="bg-white rounded-3xl border border-border-custom shadow-sm overflow-hidden">
          <div className="p-6 border-b border-border-custom bg-gray-50 flex flex-col sm:flex-row justify-between items-center gap-4">
            <h3 className="font-bold text-lg">Recent Lead Inquiries</h3>
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={16} />
              <input 
                type="text" 
                placeholder="Search leads..." 
                className="pl-10 pr-4 py-2 border border-border-custom rounded-lg text-sm bg-white focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent"
              />
            </div>
          </div>
          
          <div className="overflow-x-auto">
            <table className="w-full text-left">
              <thead>
                <tr className="border-b border-border-custom bg-gray-50/50">
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Date</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Customer</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Specifications</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Estimate</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Timeline</th>
                  <th className="px-6 py-4 text-[10px] font-bold text-gray-400 uppercase tracking-widest">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-border-custom">
                {leads.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="px-6 py-20 text-center text-gray-500">
                      <div className="flex flex-col items-center gap-4">
                        <Eye size={48} className="text-gray-200" />
                        <p className="font-medium">No leads found in the database.</p>
                      </div>
                    </td>
                  </tr>
                ) : (
                  leads.map((lead) => (
                    <tr key={lead.id} className="hover:bg-gray-50 transition-colors">
                      <td className="px-6 py-4">
                        <p className="text-xs font-bold text-gray-400">
                          {new Date(lead.createdAt).toLocaleDateString()}
                        </p>
                        <p className="text-[10px] text-gray-400">
                          {new Date(lead.createdAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                        </p>
                      </td>
                      <td className="px-6 py-4">
                        <p className="font-bold text-sm mb-1">{lead.name}</p>
                        <div className="flex flex-col gap-1">
                          <a href={`mailto:${lead.email}`} className="text-xs text-accent flex items-center gap-1 hover:underline">
                            <Mail size={10} /> {lead.email}
                          </a>
                          <a href={`tel:${lead.phone}`} className="text-xs text-gray-500 flex items-center gap-1 hover:underline">
                            <Phone size={10} /> {lead.phone}
                          </a>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="space-y-1">
                          <p className="text-[10px] font-bold uppercase tracking-widest text-gray-400">
                            {lead.quartzLevel} Quartz
                          </p>
                          <p className="text-xs">
                            {lead.kitchenSize} sq ft {lead.hasIsland && "• w/ Island"}
                          </p>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <div className="inline-flex items-center gap-1 bg-accent/5 text-accent px-3 py-1 rounded-full text-xs font-bold ring-1 ring-accent/10">
                          ${lead.finalPrice?.low?.toLocaleString()} - ${lead.finalPrice?.high?.toLocaleString()}
                        </div>
                      </td>
                      <td className="px-6 py-4 text-xs font-medium capitalize">
                        {lead.timeline?.replace('-', ' ')}
                      </td>
                      <td className="px-6 py-4">
                        <button className="p-2 hover:bg-accent/10 hover:text-accent rounded-lg transition-colors text-gray-400">
                          <Eye size={18} />
                        </button>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
